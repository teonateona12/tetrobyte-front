"use client";
import { deleteStudent, fetchStudents, updateStudent } from "@/services/api";
import { useState, useEffect } from "react";
import { Button, Form, Table } from "antd";
import { Student } from "../types/student";
import studentColumns from "../utils/column";
import StudentDetailModal from "../components/StudentDetailModal";
import EditStudentModal from "../components/EditStudentModal";
import AddStudentModal from "../components/AddStudentModal";
import DeleteStudentModal from "../components/DeleteStudentModal";

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false);
  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [popoverVisible, setPopoverVisible] = useState<Record<string, boolean>>(
    {}
  );
  const [form] = Form.useForm();

  useEffect(() => {
    const getStudents = async () => {
      try {
        const data = await fetchStudents();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    getStudents();
  }, []);

  const handleAddStudent = () => {
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleDetailModalCancel = () => {
    setDetailModalVisible(false);
  };

  const handleEditModalCancel = () => {
    setEditModalVisible(false);
  };

  const handleModalSuccess = () => {
    setModalVisible(false);
    fetchStudents().then((data) => setStudents(data));
  };

  const handleView = (student: Student) => {
    setSelectedStudent(student);
    setDetailModalVisible(true);
    setPopoverVisible((prev) => ({ ...prev, [student._id]: false }));
  };

  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setEditModalVisible(true);
    setPopoverVisible((prev) => ({ ...prev, [student._id]: false }));
  };

  const handleDelete = async (student: Student) => {
    setSelectedStudent(student);
    setDeleteModalVisible(true);
    setPopoverVisible((prev) => ({ ...prev, [student._id]: false }));
  };

  const handleEditSuccess = async (updatedStudent: Student) => {
    try {
      await updateStudent(updatedStudent, selectedStudent?._id);
      fetchStudents().then((data) => setStudents(data));
    } catch (error) {
      console.error("Error updating student:", error);
    } finally {
      setEditModalVisible(false);
    }
  };

  const handleDeleteSuccess = async () => {
    if (selectedStudent && selectedStudent._id) {
      try {
        await deleteStudent(selectedStudent._id);
        fetchStudents().then((data) => setStudents(data));
      } catch (error) {
        console.error("Error deleting student:", error);
      } finally {
        setDeleteModalVisible(false);
      }
    }
  };

  const columns = studentColumns({
    onView: handleView,
    onEdit: handleEdit,
    onDelete: handleDelete,
    popoverVisible,
    setPopoverVisible,
  });

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const showDeleteModal = (student: Student) => {
    setSelectedStudent(student);
    setDeleteModalVisible(true);
  };

  const handleDeleteModalCancel = () => {
    setDeleteModalVisible(false);
    setSelectedStudent(null);
  };

  return (
    <div style={{ padding: "24px", overflowX: "auto" }}>
      <h1>სტუდენტები</h1>
      <Button
        type="primary"
        onClick={handleAddStudent}
        style={{ marginBottom: "16px" }}
      >
        ახლის დამატება
      </Button>
      <Table
        dataSource={students}
        columns={columns}
        rowKey="_id"
        loading={loading}
        scroll={{ x: "max-content" }}
      />
      <AddStudentModal
        open={modalVisible}
        onCancel={handleModalCancel}
        onSuccess={handleModalSuccess}
        form={form}
      />
      <StudentDetailModal
        open={detailModalVisible}
        onCancel={handleDetailModalCancel}
        student={selectedStudent}
      />
      <EditStudentModal
        open={editModalVisible}
        onCancel={handleEditModalCancel}
        onSuccess={handleEditSuccess}
        student={selectedStudent}
      />
      <DeleteStudentModal
        open={deleteModalVisible}
        onCancel={handleDeleteModalCancel}
        onSuccess={handleDeleteSuccess}
        student={selectedStudent}
      />
    </div>
  );
}

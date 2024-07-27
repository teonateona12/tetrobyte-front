"use client";

import { fetchStudents } from "@/services/api";
import { useState, useEffect } from "react";
import { Button, Form, Table } from "antd";
import { Student } from "../types/student";
import studentColumns from "../utils/column";
import StudentDetailModal from "../components/StudentDetailModal";
import AddStudentModal from "../components/AddStudentModal";

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false);
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

  const handleModalSuccess = () => {
    setModalVisible(false);
    fetchStudents().then((data) => setStudents(data));
  };

  const handleView = (student: Student) => {
    setSelectedStudent(student);
    setDetailModalVisible(true);
    setPopoverVisible((prev) => ({ ...prev, [student.idNumber]: false }));
  };

  const handleEdit = (student: Student) => {
    console.log("Edit:", student);
    setPopoverVisible((prev) => ({ ...prev, [student.idNumber]: false }));
  };

  const handleDelete = (student: Student) => {
    console.log("Delete:", student);
    setPopoverVisible((prev) => ({ ...prev, [student.idNumber]: false }));
  };

  const columns = studentColumns({
    onView: handleView,
    onEdit: handleEdit,
    onDelete: handleDelete,
    popoverVisible,
    setPopoverVisible,
  });

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
        rowKey="idNumber"
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
    </div>
  );
}

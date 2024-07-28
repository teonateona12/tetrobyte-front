"use client";

import { useState, useEffect } from "react";
import { Button, Table, Form } from "antd";
import { deleteStudent, fetchStudents, updateStudent } from "@/services/api";
import { Student } from "../types/student";
import studentColumns, { toGeorgianUppercase } from "../utils/column";
import StudentDetailModal from "../components/StudentDetailModal";
import EditStudentModal from "../components/EditStudentModal";
import AddStudentModal from "../components/AddStudentModal";
import DeleteStudentModal from "../components/DeleteStudentModal";
import Header from "@/components/Header";
import { unparse } from "papaparse";

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false);
  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [popoverVisible, setPopoverVisible] = useState<Record<string, boolean>>(
    {}
  );
  const [form] = Form.useForm();

  useEffect(() => {
    const loadStudents = async () => {
      try {
        const data = await fetchStudents();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    loadStudents();
  }, []);

  const handleModalVisibility = (modalType: string, visible: boolean) => {
    switch (modalType) {
      case "add":
        setModalVisible(visible);
        break;
      case "detail":
        setDetailModalVisible(visible);
        break;
      case "edit":
        setEditModalVisible(visible);
        break;
      case "delete":
        setDeleteModalVisible(visible);
        break;
    }
  };

  const handleSuccess = async (
    type: string,
    action: (student: Student) => Promise<void>
  ) => {
    try {
      if (selectedStudent) {
        await action(selectedStudent);
        const updatedStudents = await fetchStudents();
        setStudents(updatedStudents);
      }
    } catch (error) {
      console.error(`Error ${type} student:`, error);
    } finally {
      handleModalVisibility(type, false);
    }
  };

  const columns = studentColumns({
    onView: (student) => {
      setSelectedStudent(student);
      handleModalVisibility("detail", true);
      setPopoverVisible((prev) => ({ ...prev, [student._id]: false }));
    },
    onEdit: (student) => {
      setSelectedStudent(student);
      handleModalVisibility("edit", true);
      setPopoverVisible((prev) => ({ ...prev, [student._id]: false }));
    },
    onDelete: (student) => {
      setSelectedStudent(student);
      handleModalVisibility("delete", true);
      setPopoverVisible((prev) => ({ ...prev, [student._id]: false }));
    },
    popoverVisible,
    setPopoverVisible,
  });

  const handleExport = () => {
    const csv = unparse(students);
    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "students.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      <Header />
      <div style={{ overflowX: "auto", padding: "20px 0 20px 100px" }}>
        <div className="button-div">
          <div>
            <button></button>
            <button>yvela studenti</button>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button className="export" onClick={handleExport}>
              ექსპორტი
            </button>
            <Button
              type="primary"
              onClick={() => handleModalVisibility("add", true)}
            >
              {toGeorgianUppercase("ახლის დამატება")}
            </Button>
          </div>
        </div>

        <h1
          style={{ fontSize: "24px", lineHeight: "32px" }}
          className="modal-title"
        >
          {toGeorgianUppercase("სტუდენტები")}
        </h1>
        <Table
          dataSource={students}
          columns={columns}
          rowKey="_id"
          loading={loading}
          scroll={{ x: "max-content" }}
          pagination={false}
        />
        <AddStudentModal
          open={modalVisible}
          onCancel={() => handleModalVisibility("add", false)}
          onSuccess={() => handleSuccess("add", () => Promise.resolve())}
          form={form}
        />
        <StudentDetailModal
          open={detailModalVisible}
          onCancel={() => handleModalVisibility("detail", false)}
          student={selectedStudent}
        />
        <EditStudentModal
          open={editModalVisible}
          onCancel={() => handleModalVisibility("edit", false)}
          onSuccess={(updatedStudent) =>
            handleSuccess("edit", (student) =>
              updateStudent(updatedStudent, student._id)
            )
          }
          student={selectedStudent}
        />
        <DeleteStudentModal
          open={deleteModalVisible}
          onCancel={() => handleModalVisibility("delete", false)}
          onSuccess={() =>
            handleSuccess("delete", (student) => deleteStudent(student._id))
          }
        />
      </div>
    </div>
  );
}

"use client";

import { fetchStudents } from "@/services/api";
import { useState, useEffect } from "react";
import { Button, Form, Table } from "antd";
import { Student } from "../types/student"; // Adjust the import path as needed
import studentColumns from "../utils/columns"; // Adjust the import path as needed
import AddStudentModal from "../components/AddStudentModal";

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
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

  const handleModalSuccess = () => {
    setModalVisible(false);
    fetchStudents().then((data) => setStudents(data));
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form values:", values);
        handleModalSuccess();
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
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
        columns={studentColumns}
        rowKey="idNumber"
        loading={loading}
        scroll={{ x: "max-content" }}
      />
      <AddStudentModal
        visible={modalVisible}
        onCancel={handleModalCancel}
        onSuccess={handleModalSuccess}
        handleOk={handleOk}
        form={form}
      />
    </div>
  );
}

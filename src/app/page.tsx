"use client";
import { Student } from "@/types/student";
import studentColumns from "@/utils/columns";
import { Table } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  console.log(students);
  return (
    <div style={{ padding: "24px", overflowX: "auto" }}>
      <h1>სტუდენტები</h1>
      <Table
        dataSource={students}
        columns={studentColumns}
        rowKey="idNumber"
        loading={loading}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
}

"use client";
import { Student } from "@/types/student";
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
    </div>
  );
}

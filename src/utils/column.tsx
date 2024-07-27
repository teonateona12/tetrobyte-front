import React from "react";
import { ColumnsType } from "antd/es/table";
import { Student } from "../types/student";
import { Button, Dropdown, Menu, Popover } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import "./column.css";

const studentColumns: ColumnsType<Student> = [
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <Popover
        content={
          <Menu className="popover-menu">
            <Menu.Item onClick={() => handleView(record)}>
              დეტალურად ნახვა
            </Menu.Item>
            <Menu.Item onClick={() => handleDelete(record)}>წაშლა</Menu.Item>
            <Menu.Item onClick={() => handleEdit(record)}>
              რედაქტირება
            </Menu.Item>
          </Menu>
        }
        trigger="click"
        placement="rightTop"
        overlayClassName="popover-overlay"
      >
        <Button
          icon={<EllipsisOutlined />}
          type="text"
          className="horizontal-dots"
        />
      </Popover>
    ),
  },
  { title: "პირადი N", dataIndex: "idNumber", key: "idNumber" },
  { title: "კოდი", dataIndex: "code", key: "code" },
  { title: "სახელი", dataIndex: "name", key: "name" },
  { title: "გვარი", dataIndex: "lastName", key: "lastName" },
  {
    title: "ჩაბ. წელი",
    dataIndex: "yearOfSubmission",
    key: "yearOfSubmission",
  },
  { title: "დამთ. წელი", dataIndex: "graduationYear", key: "graduationYear" },
  { title: "სტატუსი", dataIndex: "status", key: "status" },
  { title: "სკოლა", dataIndex: "school", key: "school" },
  { title: "პროგრამა", dataIndex: "program", key: "program" },
  { title: "ელფოსტა", dataIndex: "email", key: "email" },
  { title: "ვაუჩერი", dataIndex: "voucher", key: "voucher" },
  { title: "გრანტი", dataIndex: "grant", key: "grant" },
  { title: "მოქალაქეობა", dataIndex: "citizenship", key: "citizenship" },
  { title: "დაბადების თარიღი", dataIndex: "dateOfBirth", key: "dateOfBirth" },
  { title: "დაბადების ქალაქი", dataIndex: "cityOfBirth", key: "cityOfBirth" },
  { title: "სწავლების ენა", dataIndex: "language", key: "language" },
  { title: "Freshman / Transfer", dataIndex: "course", key: "course" },
  { title: "მობილობის სემ კურსი", dataIndex: "mobility", key: "mobility" },
  { title: "აგენტი", dataIndex: "agent", key: "agent" },
];

const handleEdit = (record: Student) => {
  console.log("Edit:", record);
};

const handleView = (record: Student) => {
  console.log("See details:", record);
};

const handleDelete = (record: Student) => {
  console.log("Delete:", record);
};

export default studentColumns;

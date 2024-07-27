import { ColumnsType } from "antd/es/table";
import { Student } from "../types/student";

const studentColumns: ColumnsType<Student> = [
  { title: "პირადი N", dataIndex: "idNumber", key: "idNumber" },
  { title: "კოდი", dataIndex: "code", key: "code" },
  { title: "სახელი", dataIndex: "name", key: "name" },
  { title: "გვარი", dataIndex: "lastName", key: "lastName" },
  {
    title: "ჩაბ. წელი",
    dataIndex: "yearOfSubmission",
    key: "yearOfSubmission",
  },
  {
    title: "დამთ. წელი",
    dataIndex: "graduationYear",
    key: "graduationYear",
  },
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

export default studentColumns;

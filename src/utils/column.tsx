import { ColumnsType } from "antd/es/table";
import { Student } from "../types/student";
import { Button, Menu, Popover } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { Dispatch, SetStateAction } from "react";
import moment from "moment";
import "./column.css";

interface StudentColumnsProps {
  onView: (record: Student) => void;
  onEdit: (record: Student) => void;
  onDelete: (record: Student) => void;
  popoverVisible: Record<string, boolean>;
  setPopoverVisible: Dispatch<SetStateAction<Record<string, boolean>>>;
}
export const toGeorgianUppercase = (text: string | undefined): string => {
  if (!text || text === "") {
    return "";
  }
  return text.toLocaleUpperCase("ka-GE");
};

const studentColumns = ({
  onView,
  onEdit,
  onDelete,
  popoverVisible,
  setPopoverVisible,
}: StudentColumnsProps): ColumnsType<Student> => [
  {
    key: "actions",
    render: (_, record) => {
      const handlePopoverVisibleChange = (visible: boolean) => {
        setPopoverVisible((prev) => ({ ...prev, [record._id]: visible }));
      };

      return (
        <Popover
          content={
            <Menu>
              <Menu.Item className="menu" onClick={() => onView(record)}>
                {toGeorgianUppercase("დეტალურად ნახვა")}
              </Menu.Item>
              <Menu.Item className="menu" onClick={() => onEdit(record)}>
                {toGeorgianUppercase("რედაქტირება")}
              </Menu.Item>
              <Menu.Item className="menu" onClick={() => onDelete(record)}>
                {toGeorgianUppercase("წაშლა")}
              </Menu.Item>
            </Menu>
          }
          trigger="click"
          placement="rightTop"
          open={popoverVisible[record._id] ?? false}
          onOpenChange={handlePopoverVisibleChange}
        >
          <Button
            icon={<EllipsisOutlined />}
            type="text"
            className="horizontal-dots"
          />
        </Popover>
      );
    },
    className: "custom-table-cell",
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("პირადი N.")}
      </span>
    ),
    dataIndex: "idNumber",
    key: "idNumber",
    className: "custom-table-cell",
  },
  {
    title: (
      <span className="custom-table-header">{toGeorgianUppercase("კოდი")}</span>
    ),
    dataIndex: "code",
    key: "code",
    className: "custom-table-cell",
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("სახელი")}
      </span>
    ),
    dataIndex: "name",
    key: "name",
    className: "custom-table-cell",
    render: (text: string) => <span>{toGeorgianUppercase(text)}</span>,
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("გვარი")}
      </span>
    ),
    dataIndex: "lastName",
    key: "lastName",
    className: "custom-table-cell",
    render: (text: string) => <span>{toGeorgianUppercase(text)}</span>,
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("ჩაბ. წელი")}
      </span>
    ),
    dataIndex: "yearOfSubmission",
    key: "yearOfSubmission",
    render: (text: string) => moment(text).format("YYYY"),
    className: "custom-table-cell",
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("დამთ. წელი")}
      </span>
    ),
    dataIndex: "graduationYear",
    key: "graduationYear",
    render: (text: string) => moment(text).format("YYYY"),
    className: "custom-table-cell",
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("სტატუსი")}
      </span>
    ),
    dataIndex: "status",
    key: "status",
    className: "custom-table-cell",
    render: (text: string) => <span>{toGeorgianUppercase(text)}</span>,
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("სკოლა")}
      </span>
    ),
    dataIndex: "school",
    key: "school",
    className: "custom-table-cell",
    render: (text: string) => <span>{toGeorgianUppercase(text)}</span>,
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("პროგრამა")}
      </span>
    ),
    dataIndex: "program",
    key: "program",
    className: "custom-table-cell",
    render: (text: string) => <span>{toGeorgianUppercase(text)}</span>,
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("ელფოსტა")}
      </span>
    ),
    dataIndex: "email",
    key: "email",
    className: "custom-table-cell",
    render: (text: string) => <span>{toGeorgianUppercase(text)}</span>,
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("ვაუჩერი")}
      </span>
    ),
    dataIndex: "voucher",
    key: "voucher",
    className: "custom-table-cell",
    render: (text: string) => <span>{toGeorgianUppercase(text)}</span>,
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("გრანტი")}
      </span>
    ),
    dataIndex: "grant",
    key: "grant",
    className: "custom-table-cell",
    render: (text: string) => <span>{toGeorgianUppercase(text)}</span>,
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("მოქალაქეობა")}
      </span>
    ),
    dataIndex: "citizenship",
    key: "citizenship",
    className: "custom-table-cell",
    render: (text: string) => <span>{toGeorgianUppercase(text)}</span>,
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("დაბადების თარიღი")}
      </span>
    ),
    dataIndex: "dateOfBirth",
    key: "dateOfBirth",
    render: (text: string) => moment(text).format("YYYY-MM-DD"),
    className: "custom-table-cell",
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("დაბადების ქალაქი")}
      </span>
    ),
    dataIndex: "cityOfBirth",
    key: "cityOfBirth",
    className: "custom-table-cell",
    render: (text: string) => <span>{toGeorgianUppercase(text)}</span>,
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("სწავლების ენა")}
      </span>
    ),
    dataIndex: "language",
    key: "language",
    className: "custom-table-cell",
    render: (text: string) => <span>{toGeorgianUppercase(text)}</span>,
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("Freshman / Transfer")}
      </span>
    ),
    dataIndex: "course",
    key: "course",
    className: "custom-table-cell",
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("მობილობის სემ კურსი")}
      </span>
    ),
    dataIndex: "mobility",
    key: "mobility",
    render: (text: number) => text,
    className: "custom-table-cell",
  },
  {
    title: (
      <span className="custom-table-header">
        {toGeorgianUppercase("აგენტი")}
      </span>
    ),
    dataIndex: "agent",
    key: "agent",
    className: "custom-table-cell",
    render: (text: string) => <span>{toGeorgianUppercase(text)}</span>,
  },
];

export default studentColumns;

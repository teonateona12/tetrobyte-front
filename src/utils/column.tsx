import { ColumnsType } from "antd/es/table";
import { Student } from "../types/student";
import { Button, Menu, Popover } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import "./column.css";
interface StudentColumnsProps {
  onView: (record: Student) => void;
  onEdit: (record: Student) => void;
  onDelete: (record: Student) => void;
  popoverVisible: Record<string, boolean>;
  setPopoverVisible: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
}

const studentColumns = ({
  onView,
  onEdit,
  onDelete,
  popoverVisible,
  setPopoverVisible,
}: StudentColumnsProps): ColumnsType<Student> => [
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => {
      const handlePopoverVisibleChange = (visible: boolean) => {
        setPopoverVisible((prev) => ({ ...prev, [record._id]: visible }));
      };

      return (
        <Popover
          content={
            <Menu className="popover-menu">
              <Menu.Item onClick={() => onView(record)}>
                დეტალურად ნახვა
              </Menu.Item>
              <Menu.Item onClick={() => onEdit(record)}>რედაქტირება</Menu.Item>
              <Menu.Item onClick={() => onDelete(record)}>წაშლა</Menu.Item>
            </Menu>
          }
          trigger="click"
          placement="rightTop"
          overlayClassName="popover-overlay"
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

export default studentColumns;

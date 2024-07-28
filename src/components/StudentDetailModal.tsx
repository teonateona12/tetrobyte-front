import { Modal, Form, Input, Row, Col, DatePicker, Radio } from "antd";
import React from "react";
import { Student } from "../types/student";
import { toGeorgianUppercase } from "@/utils/column";

interface StudentDetailModalProps {
  open: boolean;
  onCancel: () => void;
  student: Student | null;
}

const StudentDetailModal: React.FC<StudentDetailModalProps> = ({
  open,
  onCancel,
  student,
}) => {
  return (
    <Modal
      title={toGeorgianUppercase("დეტალურად ნახვა")}
      open={open}
      onCancel={onCancel}
      footer={null}
      key={student?._id}
    >
      <Form layout="vertical" initialValues={student || {}}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="idNumber" label={toGeorgianUppercase("პირადი N")}>
              <Input disabled />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="code" label={toGeorgianUppercase("კოდი")}>
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="name" label={toGeorgianUppercase("სახელი")}>
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="lastName" label={toGeorgianUppercase("გვარი")}>
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="yearOfSubmission"
              label={toGeorgianUppercase("ჩაბ. წელი")}
            >
              <DatePicker picker="year" format="YYYY" disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="graduationYear"
              label={toGeorgianUppercase("დამთ. წელი")}
            >
              <DatePicker picker="year" format="YYYY" disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="status" label={toGeorgianUppercase("სტატუსი")}>
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="school" label={toGeorgianUppercase("სკოლა")}>
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="program" label={toGeorgianUppercase("პროგრამა")}>
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="email" label={toGeorgianUppercase("ელფოსტა")}>
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="voucher" label={toGeorgianUppercase("ვაუჩერი")}>
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="grant" label={toGeorgianUppercase("გრანტი")}>
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="citizenship"
              label={toGeorgianUppercase("მოქალაქეობა")}
            >
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="dateOfBirth"
              label={toGeorgianUppercase("დაბადების თარიღი")}
            >
              <DatePicker format="YYYY-MM-DD" disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="cityOfBirth"
              label={toGeorgianUppercase("დაბადების ქალაქი")}
            >
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="language"
              label={toGeorgianUppercase("სწავლების ენა")}
            >
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="course"
              label={toGeorgianUppercase("Freshman / Transfer")}
            >
              <Radio.Group disabled>
                <div style={{ display: "flex" }}>
                  <Radio value="FRESHMAN" className="course-radio">
                    <span className="circle-indicator" aria-disabled /> FRESHMAN
                  </Radio>
                  <Radio value="TRANSFER" className="course-radio">
                    <span className="circle-indicator" /> TRANSFER
                  </Radio>
                </div>
              </Radio.Group>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="mobility"
              label={toGeorgianUppercase("მობილობის სემ კურსი")}
            >
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="agent" label={toGeorgianUppercase("აგენტი")}>
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default StudentDetailModal;

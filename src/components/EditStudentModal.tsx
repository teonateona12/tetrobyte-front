import React, { useEffect } from "react";
import { Modal, Form, Input, Row, Col, Button, Radio, Select } from "antd";
import moment from "moment";
import { Student } from "../types/student";
import { toGeorgianUppercase } from "@/utils/column";
import {
  yearOfSubmissionOptions,
  graduationYearOptions,
  citizenshipOptions,
  dateOfBirthOptions,
  cityOfBirthOptions,
  schoolOptions,
  programOptions,
  agentOptions,
  mobilityOptions,
  grantyOptions,
} from "../utils/dropdownData";

interface EditStudentModalProps {
  open: boolean;
  onCancel: () => void;
  onSuccess: (updatedStudent: Student) => void;
  student: Student | null;
}

const EditStudentModal: React.FC<EditStudentModalProps> = ({
  open,
  onCancel,
  onSuccess,
  student,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (student) {
      form.setFieldsValue(student);
    }
  }, [student, form]);

  return (
    <Modal
      title={
        <span className="modal-title">
          {toGeorgianUppercase("რედაქტირება")}
        </span>
      }
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
    >
      <Form form={form} layout="vertical" onFinish={onSuccess}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="idNumber"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("პირადი N")}
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "გთხოვთ შეიყვანოთ პირადი ნომერი!",
                },
                {
                  type: "number",
                  transform: (value) => Number(value),
                  message: "პირადი ნომერი უნდა იყოს რიცხვი!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="code"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("კოდი")}
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "გთხოვთ შეიყვანოთ კოდი!",
                },
                {
                  type: "number",
                  transform: (value) => Number(value),
                  message: "კოდი უნდა იყოს რიცხვი!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("სახელი")}
                </span>
              }
              rules={[{ required: true, message: "გთხოვთ შეიყვანოთ სახელი!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastName"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("გვარი")}
                </span>
              }
              rules={[{ required: true, message: "გთხოვთ შეიყვანოთ გვარი!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="yearOfSubmission"
              rules={[
                {
                  required: true,
                  message: "გთხოვთ შეიყვანოთ ჩაბარების წელი!",
                },
              ]}
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("ჩაბ. წელი")}
                </span>
              }
            >
              <Select className="formItemLabel">
                {yearOfSubmissionOptions.map((year) => (
                  <Select.Option key={year} value={year}>
                    {year}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="graduationYear"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("დამთ. წელი")}
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "გთხოვთ შეიყვანოთ დამთავრების წელი!",
                },
              ]}
            >
              <Select>
                {graduationYearOptions.map((year) => (
                  <Select.Option key={year} value={year}>
                    {year}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="status"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("სტატუსი")}
                </span>
              }
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="school"
              rules={[{ required: true, message: "გთხოვთ შეიყვანოთ სკოლა!" }]}
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("სკოლა")}
                </span>
              }
            >
              <Select>
                {schoolOptions.map((school) => (
                  <Select.Option key={school} value={school}>
                    {school}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="program"
              rules={[
                { required: true, message: "გთხოვთ შეიყვანოთ პროგრამა!" },
              ]}
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("პროგრამა")}
                </span>
              }
            >
              <Select>
                {programOptions.map((program) => (
                  <Select.Option key={program} value={program}>
                    {program}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("ელფოსტა")}
                </span>
              }
              rules={[{ required: true, message: "გთხოვთ შეიყვანოთ ელფოსტა!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="voucher"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("ვაუჩერი")}
                </span>
              }
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="grant"
              rules={[{ required: true, message: "გთხოვთ შეიყვანოთ გრანტი!" }]}
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("გრანტი")}
                </span>
              }
            >
              <Select>
                {grantyOptions.map((grant) => (
                  <Select.Option key={grant} value={grant}>
                    {grant}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="citizenship"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("მოქალაქეობა")}
                </span>
              }
              rules={[
                { required: true, message: "გთხოვთ შეიყვანოთ მოქალაქეობა!" },
              ]}
            >
              <Select>
                {citizenshipOptions.map((citizenship) => (
                  <Select.Option key={citizenship} value={citizenship}>
                    {citizenship}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="dateOfBirth"
              rules={[
                {
                  required: true,
                  message: "გთხოვთ შეიყვანოთ დაბადების თარიღი!",
                },
              ]}
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("დაბადების თარიღი")}
                </span>
              }
            >
              <Select>
                {dateOfBirthOptions.map((date) => (
                  <Select.Option key={date} value={date}>
                    {date}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="cityOfBirth"
              rules={[
                {
                  required: true,
                  message: "გთხოვთ შეიყვანოთ დაბადების ქალაქი!",
                },
              ]}
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("დაბადების ქალაქი")}
                </span>
              }
            >
              <Select>
                {cityOfBirthOptions.map((city) => (
                  <Select.Option key={city} value={city}>
                    {city}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="language"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("სწავლების ენა")}
                </span>
              }
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="course"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("Freshman / Transfer")}
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "გთხოვთ აირჩიოთ!",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <Radio
                    value="FRESHMAN"
                    className="course-radio formItemRadio"
                  >
                    <span className="circle-indicator" /> FRESHMAN
                  </Radio>
                  <Radio
                    value="TRANSFER"
                    className="course-radio formItemRadio"
                  >
                    <span className="circle-indicator" /> TRANSFER
                  </Radio>
                </div>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="mobility"
              rules={[
                {
                  required: true,
                  message: "გთხოვთ შეიყვანოთ მობილობის სემ კურსი!",
                },
              ]}
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("მობილობის სემ კურსი")}
                </span>
              }
            >
              <Select>
                {mobilityOptions.map((mobitity) => (
                  <Select.Option key={mobitity} value={mobitity}>
                    {mobitity}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="agent"
              rules={[{ required: true, message: "გთხოვთ შეიყვანოთ აგენტი!" }]}
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("აგენტი")}
                </span>
              }
            >
              <Select>
                {agentOptions.map((agent) => (
                  <Select.Option key={agent} value={agent}>
                    {agent}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button className="editBtn" type="primary" htmlType="submit">
            {toGeorgianUppercase("შენახვა")}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditStudentModal;

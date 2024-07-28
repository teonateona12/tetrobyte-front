import { Modal, Form, Input, Row, Col, Button, Radio, Select } from "antd";
import { FormInstance } from "antd/es/form";
import { addStudent } from "@/services/api";
import React from "react";
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

interface AddStudentModalProps {
  open: boolean;
  onCancel: () => void;
  onSuccess: () => void;
  form: FormInstance;
}

const AddStudentModal: React.FC<AddStudentModalProps> = ({
  open,
  onCancel,
  form,
  onSuccess,
}) => {
  const handleFormSubmit = async () => {
    try {
      const values = await form.validateFields();
      await addStudent(values);
      form.resetFields();
      onSuccess();
    } catch (error) {
      if (error instanceof Error) {
        console.error("Failed to submit form:", error.message);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <Modal
      title={
        <span className="modal-title">
          {toGeorgianUppercase("ახლის დამატება")}
        </span>
      }
      open={open}
      onCancel={onCancel}
      onOk={handleFormSubmit}
      okText={toGeorgianUppercase("დამატება")}
      footer={
        <div style={{ width: "100%" }}>
          <Button key="submit" type="primary" onClick={handleFormSubmit}>
            {toGeorgianUppercase("დამატება")}
          </Button>
        </div>
      }
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          yearOfSubmission: undefined,
          graduationYear: undefined,
          dateOfBirth: undefined,
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="idNumber"
              rules={[
                {
                  required: true,
                  message: toGeorgianUppercase(
                    "გთხოვთ შეიყვანოთ პირადი ნომერი!"
                  ),
                },
                {
                  type: "number",
                  transform: (value) => Number(value),
                  message: toGeorgianUppercase(
                    "პირადი ნომერი უნდა იყოს რიცხვი!"
                  ),
                },
              ]}
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("პირადი N")}
                </span>
              }
            >
              <Input placeholder="პირადი N" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="code"
              rules={[
                {
                  required: true,
                  message: toGeorgianUppercase("გთხოვთ შეიყვანოთ კოდი!"),
                },
                {
                  type: "number",
                  transform: (value) => Number(value),
                  message: toGeorgianUppercase("კოდი უნდა იყოს რიცხვი!"),
                },
              ]}
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("კოდი")}
                </span>
              }
            >
              <Input placeholder="კოდი" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: toGeorgianUppercase("გთხოვთ შეიყვანოთ სახელი!"),
                },
              ]}
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("სახელი")}
                </span>
              }
            >
              <Input placeholder="სახელი" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastName"
              rules={[
                {
                  required: true,
                  message: toGeorgianUppercase("გთხოვთ შეიყვანოთ გვარი!"),
                },
              ]}
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("გვარი")}
                </span>
              }
            >
              <Input placeholder="გვარი" />
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
              rules={[
                {
                  required: true,
                  message: "გთხოვთ შეიყვანოთ დამთავრების წელი!",
                },
              ]}
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("დამთ. წელი")}
                </span>
              }
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
              <Input placeholder="სტატუსი" />
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
              rules={[
                {
                  required: true,
                  message: toGeorgianUppercase("გთხოვთ შეიყვანოთ ელფოსტა!"),
                },
              ]}
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("ელფოსტა")}
                </span>
              }
            >
              <Input placeholder="ელფოსტა" />
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
              <Input placeholder="ვაუჩერი" />
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
              rules={[
                { required: true, message: "გთხოვთ შეიყვანოთ მოქალაქეობა!" },
              ]}
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("მოქალაქეობა")}
                </span>
              }
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
              <Input placeholder="სწავლების ენა" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="course"
              rules={[
                {
                  required: true,
                  message: toGeorgianUppercase("გთხოვთ აირჩიოთ!"),
                },
              ]}
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("Freshman / Transfer")}
                </span>
              }
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <Radio
                    value="FRESHMAN"
                    className="course-radio formItemRadio"
                  >
                    <span className="circle-indicator " />
                    {toGeorgianUppercase("FRESHMAN")}
                  </Radio>
                  <Radio
                    value="TRANSFER"
                    className="course-radio formItemRadio"
                  >
                    <span className="circle-indicator " />
                    {toGeorgianUppercase("TRANSFER")}
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
      </Form>
    </Modal>
  );
};

export default AddStudentModal;

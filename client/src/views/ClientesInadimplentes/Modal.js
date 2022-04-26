import * as React from 'react';
import { Modal, Row, Col, Form, Input, InputNumber, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { clientCreateRequest } from '../../store/modules/client/action';
const required = [
  {
    required: true,
    message: 'Campo obrigatório.',
  },
];
const NewClientModal = ({ open, setOpen, loading, filters }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const cancel = () => {
    setOpen(false);
  };

  const submit = values => {
    dispatch(clientCreateRequest(values, filters));
  };

  return (
    <Modal
      visible={open}
      onCancel={cancel}
      onOk={form.submit}
      title="Adicionar inadimplência"
      okButtonProps={{ loading }}
      width={600}
    >
      <Form form={form} onFinish={submit} layout="vertical">
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="Nome" name="name" rules={required}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Data" name="debtDate" rules={required}>
              <DatePicker format={'DD/MM/YYYY'} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Valor" name="debt" rules={required}>
              <InputNumber min={0} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default NewClientModal;

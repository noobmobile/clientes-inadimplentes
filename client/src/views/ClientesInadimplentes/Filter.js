import * as React from 'react';
import { Table, Row, Col, Input, Button, Form, Collapse } from 'antd';

const ClientFilter = ({ filters, setFilters }) => {
  const [form] = Form.useForm();

  const submit = values => {
    setFilters({
      ...filters,
      ...values,
    });
  };

  return (
    <Collapse defaultActiveKey={['1']} expandIconPosition={'right'}>
      <Collapse.Panel header="Filtro" key="1">
        <Form form={form} onFinish={submit} layout="vertical">
          <Row gutter={24}>
            <Col span={6}>
              <Form.Item label="Nome" name="name">
                <Input placeholder="Digite um nome." />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Button type="primary" onClick={submit} style={{ marginTop: 29 }}>
                Pesquisar
              </Button>
            </Col>
          </Row>
        </Form>
      </Collapse.Panel>
    </Collapse>
  );
};

export default ClientFilter;

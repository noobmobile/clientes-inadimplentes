import * as React from 'react';
import { useState, useEffect } from 'react';
import { Table, Row, Col, Spin, Button } from 'antd';
import ClientesTable from './Table';
import { useDispatch, useSelector } from 'react-redux';
import { clientListRequest } from '../../store/modules/client/action';
import NewClientModal from './Modal';
import { PlusOutlined } from '@ant-design/icons';
import ClientFilter from './Filter';

const ClientesInadimplentesList = () => {
  const dispatch = useDispatch();
  const { data = [], total = 0 } = useSelector(store => store.clients.list);
  const { loading } = useSelector(store => store.loading);
  const [filters, setFilters] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(clientListRequest(filters));
  }, [filters]);

  return (
    <Spin spinning={loading}>
      <Row gutter={24}>
        <Col span={24}>
          <ClientFilter filters={filters} setFilters={setFilters} />
        </Col>
      </Row>
      <br />
      <Row gutter={24}>
        <Col span={24}>
          <ClientesTable
            data={data}
            filters={filters}
            setFilters={setFilters}
            total={total}
          />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={24}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{ float: 'right' }}
            onClick={() => setModalOpen(true)}
          />
        </Col>
      </Row>
      <NewClientModal
        open={modalOpen}
        setOpen={setModalOpen}
        loading={loading}
        filters={filters}
      />
    </Spin>
  );
};

export default ClientesInadimplentesList;

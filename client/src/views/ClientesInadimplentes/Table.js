import * as React from 'react';
import { Table, Button, Empty, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { clientDeleteRequest } from '../../store/modules/client/action';
import moment from 'moment';

const ClientesTable = ({ data, filters, setFilters, total }) => {
  const dispatch = useDispatch();

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
    },
    {
      title: 'Valor',
      dataIndex: 'debt',
      key: 'debt',
      sorter: true,
      render: value =>
        new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(value),
    },
    {
      title: 'Desde de',
      dataIndex: 'debtDate',
      key: 'debtDate',
      sorter: true,
      render: value => moment(value).format('DD/MM/YYYY'),
    },
    {
      title: 'Ações',
      key: 'action',
      render: (text, record) => (
        <Popconfirm
          title="Tem certeza que deseja deletar este cliente?"
          onConfirm={() => deleteClient(record)}
          okText="Sim"
          cancelText="Não"
        >
          <Button type="danger" icon={<DeleteOutlined />} />
        </Popconfirm>
      ),
    },
  ];

  function deleteClient(record) {
    dispatch(clientDeleteRequest(record._id, filters));
  }

  function onChange(pagination, filters, sorter, extra) {
    setFilters({
      ...filters,
      page: pagination.current,
      pageSize: pagination.pageSize,
      sort: sorter.field,
      order: sorter.order === 'ascend' ? 'asc' : 'desc',
    });
  }

  return (
    <Table
      dataSource={data}
      columns={columns}
      onChange={onChange}
      pagination={{
        total,
        showSizeChanger: true,
        pageSizeOptions: [5, 10, 15],
        defaultPageSize: 5,
      }}
      locale={{
        emptyText: (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={'Nada encontrado'}
          />
        ),
      }}
    />
  );
};

export default ClientesTable;

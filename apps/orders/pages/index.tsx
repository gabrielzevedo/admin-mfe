import dynamic from 'next/dynamic'
import { Icon, Table } from "@loja-integrada/admin-components";

const Index = () => {
  return (
    <>
      <Table
        columns={[
          {
            id: 'Name',
            label: 'Name',
          },
          {
            id: 'Address',
            label: 'Address',
          },
          {
            id: 'Price',
            label: <small>KA</small>,
            size: 'w-1/6',
            textAlign: 'center',
          },
          {
            id: 'Count',
            label: 'Count',
            size: 'w-1/6',
          },
          {
            id: 'Active',
            label: 'Active',
            size: 'w-1/6',
            textAlign: 'center',
          },
          {
            id: 'Actions',
            label: 'Actions',
            size: 'w-16',
            textAlign: 'center',
          },
        ]}
        id="tableTest"
        onChange={() => alert()}
        rows={[
          {
            Actions: <div className="blue" />,
            Active: <Icon icon="trash" />,
            Address: 'Street of Test',
            Count: 245,
            Name: 'Example Test',
            Price: (
              <div>
                <span className="navy-60 strike">$ 2399.00</span>
                <br />
                <span className="navy-60">$ 2299.00</span>
              </div>
            ),
            cellWrapperProps: {
              page: 'admin/settings/view',
              params: {
                file_name: 1,
              },
            },
            id: 1,
          },
          {
            Actions: <div className="blue" />,
            Active: <Icon icon="cog" />,
            Address:
              'LongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLong Text',
            Name: 'Last Test',
            Price: (
              <span className="yellow">
                24 <div className="ml1 v-top" />
              </span>
            ),
            bgColor: 'danger-light',
            cellWrapperProps: {
              page: 'admin/settings/view',
              params: {
                file_name: 2,
              },
            },
            id: 2,
          },
          {
            Actions: <div className="blue" />,
            Active: <Icon icon="copy" />,
            Address: 'Street of Test',
            Count: 245,
            Name: 'Example Test',
            Price: (
              <div>
                <span className="navy-60 strike">$ 2399.00</span>
              </div>
            ),
            cellWrapperProps: {
              page: 'admin/settings/view',
              params: {
                file_name: 3,
              },
            },
            id: 3,
          },
          {
            Actions: <div className="blue" />,
            Active: <Icon icon="edit" />,
            Address: 'Just a big street',
            Name: 'Last Test',
            Price: (
              <span className="yellow">
                24 <div className="ml1 v-top" />
              </span>
            ),
            bgColor: 'success-light',
            cellWrapperProps: {
              page: 'admin/settings/view',
              params: {
                file_name: 4,
              },
            },
            id: 4,
          },
        ]}
      />
    </>
  );
}

export default dynamic(() => Promise.resolve(Index), {
  ssr: false
})

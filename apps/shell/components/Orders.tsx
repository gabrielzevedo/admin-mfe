import dynamic from 'next/dynamic';

const RemoteApp = dynamic(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Cannot find module
  () => import('orders/ordersIndex'),
  { ssr: false }
);

const Orders = () => <RemoteApp />;

export default Orders;

import dynamic from 'next/dynamic';
import { Button, Box } from '@loja-integrada/admin-components';
import { useState } from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Container from '../components/Container';

const DetailsButton = dynamic<{ children: string }>(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Cannot find module
  async () => import('orders/details-button'),
  {
    ssr: false,
  }
);

export function Index() {
  const [showOrders, setShowOrders] = useState(false);

  return (
    <>
      <Topbar />
      <Sidebar />
      <Container>
        <Box>
          <Box.Content>
            <Button onClick={() => setShowOrders(true)}>Ver pedidos</Button>
            {showOrders && <DetailsButton>Detalhes</DetailsButton>}
          </Box.Content>
        </Box>
      </Container>
    </>
  );
}

export default Index;

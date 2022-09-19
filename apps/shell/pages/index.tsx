import dynamic from 'next/dynamic';
import { Button } from '@loja-integrada/admin-components';

const DetailsButton = dynamic<{ children: string }>(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Cannot find module
  async () => import('orders/details-button'),
  {
    ssr: false,
  }
);

export function Index() {
  return (
    <>
      <h1 className="mt-6 rounded border border-card-stroke mb-6 text-center mx-auto w-[200px] p-4 bg-primary-light">
        Bem-vindo!
      </h1>
      <DetailsButton>Detalhes</DetailsButton>
      <Button>Teste</Button>
    </>
  );
}

export default Index;

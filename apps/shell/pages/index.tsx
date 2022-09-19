import dynamic from 'next/dynamic';

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
      teste
      <DetailsButton>Detalhes</DetailsButton>
    </>
  );
}

export default Index;

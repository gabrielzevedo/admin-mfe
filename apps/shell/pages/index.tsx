import dynamic from 'next/dynamic';

const DetailsButton = dynamic(
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
  )
}

export default Index;

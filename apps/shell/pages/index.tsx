import dynamic from 'next/dynamic';
import React from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Container from '../components/Container';
import { useRouter } from '../context/router';

const Empty = () => {
  return <></>
}

const DynamicApp = (route: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Cannot find module
  return dynamic(() => import(`../components/${route}`), {
    ssr: false,
  });
}

export function Index() {
  const { route } = useRouter();
  const AppComponent = route ? DynamicApp(route) : Empty

  return (
    <>
      <Topbar />
      <Sidebar />
      <Container>
        <AppComponent />
      </Container>
    </>
  );
}

export default dynamic(() => Promise.resolve(Index), {
  ssr: false,
});

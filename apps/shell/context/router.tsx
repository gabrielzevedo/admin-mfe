import { createContext, ReactNode, useContext, useState } from 'react';

interface IRouterContext {
  handleRoute: (arg0: string) => void;
  route: string;
}

const RouterContext = createContext<IRouterContext | undefined>(undefined);

export function useRouter(): IRouterContext {
  const context = useContext(RouterContext);
  if (context === undefined) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

type Props = {
  children: ReactNode;
};

export function RouterProvider({ children }: Props): JSX.Element {
  const [route, setRoute] = useState<string>();
  const handleRoute = (route: string) => {
    setRoute(route);
  };

  const value = {
    handleRoute,
    route,
  };

  return (
    <>
      <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
    </>
  );
}

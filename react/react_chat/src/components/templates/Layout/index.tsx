import React, { FunctionComponent, ReactNode } from 'react';
import { Header } from '../../organisms/Header';


type Props = {
  children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout;
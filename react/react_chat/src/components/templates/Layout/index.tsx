import React, { FunctionComponent, ReactNode } from 'react';
import styles from './index.module.scss';
import { Header } from '../../organisms/Header';
import { Sidebar } from '../../organisms/Sidebar';

type Props = {
  children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles.Layout__body}>
        <div className={styles.Layout__sideBar}>
          <Sidebar />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Layout;
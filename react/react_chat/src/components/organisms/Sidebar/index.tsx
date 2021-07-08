import React, { FunctionComponent, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export const Sidebar: FunctionComponent = (): ReactElement => {
  return (
    <div className={styles.Sidebar}>
      <ul className={styles.Sidebar__linkList}>
        <li className={styles.Sidebar__linkItem}>
          <Link to="/">トップページ ＞</Link>
        </li>
        <li className={styles.Sidebar__linkItem}>
        <Link to="/chat">チャット ＞</Link>
        </li>
      </ul>
    </div>
  )
}

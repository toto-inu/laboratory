import React, { FunctionComponent, ReactElement } from 'react';
import styles from './index.module.scss';

export const Header: FunctionComponent = (): ReactElement => {
  return (
    <div className={styles.Header}>
      ヘッダーだよ！
    </div>
  )
}

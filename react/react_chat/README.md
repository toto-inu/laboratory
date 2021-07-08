# react 学習

## 初期構築手順

### 1. create-react-appで初期環境を作成

本アプリは、今後PWAに対応したチャットアプリにするため、以下のテンプレートを使用。

https://www.npmjs.com/package/cra-template-pwa-typescript

`npx create-react-app chat-app --template pwa-typescript`

reduxも導入するが、reduxには2種類のツールがあり、今回は「redux-toolkit」の方を利用するため  
テンプレートからは導入しない。

https://dev.classmethod.jp/articles/react-typescript-redux-toolkit/

### 2. sassを使えるようにする

`yarn add -D sass`

終わり

### 3. ルーティングできるようにする

typescriptと併用する場合には、以下の4つのモジュールが必要なので、全てyarn addする。

- @type/react-router
- @type/react-router-dom
- react-router
- react-router-dom


https://www.hypertextcandy.com/react-router-for-vuejs-developer#%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB
こちらの記事がとってもわかりやすそうでした！

ルートファイルは、`src/index.tsx`なのでそこに諸々設定しています。
詳しくは、先の記事を見ればわかるはず！

ついでに、reset.scssも追加

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './styles/reset.scss';
import Top from './pages/Top';
import Chat from './pages/Chat';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
```


#### ちなみに、認証が必要な場合...

isidでいい感じの記述を発見

```jsx
return (
  <BrowserRouter>
    <Switch>
      <Route path="/login">
        {isAuthenticated ? <Redirect to="dashboard" /> : <Login />}
      </Route>
      {isAuthenticated ? (
        <>
          <FetchRdb />
          <Header />
          {modal.isDisplay && <Modal content={modal.content} />}
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/daily" component={Daily} />
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </Switch>
  </BrowserRouter>
);
```

## typescript

https://typescript-jp.gitbook.io/deep-dive/tsx/react


### 引数にとるコンポーネントの型

```jsx
import React, { FunctionComponent, ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <h1>ヘッダーだよ</h1>
      {children}
    </>
  )
}

export default Layout;
```


https://gist.github.com/abedzantout/3c1ad394bdb97ab5f73bde0ae3c99b4a

またこちらの記事は、Fragmentについても触れている。

```js
<Fragment></Fragment>
// のショートハンドは、
<></>
```

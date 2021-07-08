# react 学習


## react-router

導入するモジュールは、typescript専用のrouter

@type/react-router
@type/react-router-dom
react-router
react-router-dom

の4つが必要。

https://www.hypertextcandy.com/react-router-for-vuejs-developer#%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB
こちらの記事がとってもわかりやすそうでした！

### 認証が必要な場合...

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

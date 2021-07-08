# Eject とはなにか？

https://qiita.com/naohikowatanabe/items/71a8bf477216ef56a5b7
こちらの記事を参考に理解していこうと思う。

## yarn eject 失敗した

$ react-scripts eject
NOTE: Create React App 2+ supports TypeScript, Sass, CSS Modules and more without ejecting: https://reactjs.org/blog/2018/10/01/create-react-app-v2.html

√ Are you sure you want to eject? This action is permanent. ... yes
This git repository has untracked files or uncommitted changes:

create_react_app/
react_eject/

Remove untracked files, stash or commit any changes, and try again.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

git push したら解決したよ！

## yarn eject で起こったこと

1. webpack や環境変数など隠されていたファイルが表示されるようになった

もともと、yarn start や yarn build は
scripts にて、

"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},

と定義されていました。

この react-scripts が色々と裏でやってくれているのです。

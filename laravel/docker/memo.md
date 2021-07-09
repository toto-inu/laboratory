# Docker で Laravel 環境を構築するよー！

https://qiita.com/ucan-lab/items/56c9dc3cf2e6762672f4

nginx の laravel 設定はこれを参照せよ
https://readouble.com/laravel/8.x/ja/deployment.html

## Docker の構成ファイルについて知る

- docker-compose.yml
- Dockerfile

これらはどう違う？

docker-compose.yml ファイルは、

- コンテナの定義
- ネットワーク的な定義
- ローカルとコンテナで共通フォルダとする箇所
- ベースイメージ

Dockerfile は？

- ベースイメージ
- 実行するコマンド！

# 今後の進め方

1. Laravel のチュートリアル
2. Laravel の認証系について把握
3. Laravel に GraphQL を導入する
4. デプロイしてみる
5. ECS でデプロイしてみる

# Laravel のチュートリアル

// https://awesome-linus.com/2019/05/28/laravel-tutorial-environment-windows/
https://www.hypertextcandy.com/laravel-tutorial-introduction

```
Illuminate\Encryption\MissingAppKeyException
No application encryption key has been specified.
```

## エラー発生

artisan serve したら、
こんなエラーが発生した。

https://qiita.com/ponsuke0531/items/197c76fcb9300d7c5f36

`php artisan key:generate`

## Docker で Laravel 環境を構築するよー！

https://qiita.com/ucan-lab/items/56c9dc3cf2e6762672f4

# CDK Lint set up tool

Lint をセットアップするツールです。
こちらのツールを使用すると、下記までセットアップされます。

- eslint の install
- prettier の install
- .eslintrc の作成
- .prettierrc の作成

## How to use

pacakge.json が存在するパスで、下記コマンドを叩いてもらえれば、設定されます。  
`npx github:noguchi-cover/cdk-lint`

install 後  
`npx eslint --cache --fix --ext .ts . && npx prettier --write ./**/*.ts`  
コマンドで ts ファイルのフォーマットが行われます。  
よしなに、こちらのコマンドをプロジェクトの pacakge.json の scripts に追記することをお勧めします。

## Editor

各種 Editor 用の設定ファイルも[こちら](./editor/)に配置しておきますので、参考にしていただければと思います。

# 環境準備

1. Node.jsのインストール
  - nodebrew(mac/linux) or nodist(windows)

1. create-react-appのインストール
  - npm install -g create-react-app

1. ※必要に応じて以下を入れる
  - npm install react-router-dom (※URLのパスとComponentを紐づけるツール)

1. プロジェクトの作成
  - create-react-app hello-world
  ※TypeScriptでひな形を作成
    - create-react-app hello-world-typescript --typescript

1. 実行する
  - cd hello-world
  - npm start

1. テストコードの実行
  - npm test

1. 本番用のファイルを作成
  - npm run build

1. 本番用のファイルをローカルで確認
  - npm install -g serve
  - serve -s build
  - localhost:5000にアクセス


# reactプロジェクトのフォルダ構成について

■actions、components、containers…etcといった、ファイルタイプ別で分ける構成

〇：コーポレートサイトのような比較的小さいWebサイト / 小さい規模のアプリケーション  
✕：サービスが成長して大きくなってドメインの数が増えてくるとファイルが散らばりメンテナンス性が落ちる  

```
/src
  /actions
    /notifications.js
      
	/components 
    /Header
    /Footer
    /Notifications
      /index.js
  /containers
    /Home
    /Login
    /Notifications
      /index.js
  /reducers 
    /login.js
    /notifications.js
```

■機能別 or ルート別

〇：扱うドメインの数が大きいアプリケーションの場合はこっち  
↓ の例ではTodosを１つのモジュールととらえてTodoに関連する機能はここに集約する  

```
/components
    /Buttons
        /PrimaryButton
        /SecondaryButton
    /index.js
/Todos
    /actions
    /pages
    /components
        /__tests__
            /index.js
        /TodoList
        /TodoListItem
        /TodoForm
        /TodoTitleField
        /TodoDescriptionField
        /TodoStatusIcon
        /TodoDialog
        /TodoDialogHeader
        /TodoDialogActionButtons
    /reducers
    /index.js
```

↓components直下に使用するコンポーネントを平置きしていくと、その数が増えてくれば、コンポーネント同士の関連性がわかりづらくなってくる。

平置きをするのではなく、依存関係があるcomponentはまとめて関連性を明確にする。

```
/components
    /__tests__
        /index.js
    /commom
    /TodoList
        index.js
        /src
            /TodoListItem
            /TodoStatusIcon
    /TodoForm
        /src
            /TodoTitleField
            /TodoDescriptionField
    /TodoDialog
        /src
            /TodoDialogHeader
            /TodoDialogActionButtons
```


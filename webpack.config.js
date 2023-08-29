// どこに何をバンドルしていくのかを決めるためのファイル

module.exports = {
    // エントリーポイント（どこの何をコンパイルするのかを決める）
    entry: {
        // バンドルするファイルを指定する
        bundle: "./src/index.js",
    },
    // エンドポイント（何をどこに出力するのか）
    output: {
        // __dirname(root_pathのことを指している)
        path: `${__dirname}/dist`,
        filename: "bundle.js",
    },
    // 開発者モード設定
    mode: "development",
    resolved: {
        // 自動的に拡張子を設定してもらうための記述
        extensions: [".ts", ".js"],
    },
    devServer: {
        // サーバー起動時は以下のディレクトリを参照し、自動で開いてくださいという記述
        static: {
            directory: `${__dirname}/dist`,
        },
        open: true,
    },
    modeul: {
        // ルールを指定
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
            },
        ],
    },
};
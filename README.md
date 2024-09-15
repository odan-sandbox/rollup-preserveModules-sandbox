# rollup-preserveModules-sandbox

bundle される前提のライブラリは、ライブラリ側で bundle されるよりも、元のソースコードの状態が保たれている方が嬉しい

理由は node_modules の中に console.log を仕込んでデバッグしたいから

rollup では preserveModules を使うとこれが実現できる

ライブラリの build は rollup or vite or unbuild が良さそうな気がする。

## メモ

### rollup

preserveModules で実現可能

### esbuild

未対応っぽい？

https://github.com/evanw/esbuild/issues/708

### vite

rollupOptions 経由で preserveModules を指定可能

ファイル名を維持するために build.lib.fileName の指定も必要

.d.ts の生成のために別途 tsc を実行している

ref: https://github.com/vitejs/vite/issues/2049

### tsdown

未対応っぽい？

config に rollup のオプションを渡す口が見つからなかった(調査不足かも)

rolldown をインストールしたらエラーで動かなくなっちゃった

```
[tsdown] [tsdown]  FATAL  build$1.close is not a function
[tsdown]
[tsdown]   at build (node_modules/tsdown/dist/index.js:236:17)
[tsdown]   at async CAC.<anonymous> (node_modules/tsdown/dist/run.js:19:3)
[tsdown]   at async runCLI (node_modules/tsdown/dist/run.js:25:3)
```

### unbuild

rollup 経由で preserveModules を指定可能

### rolldown

なんかうまく動かない
dist-rolldown/index.js しか生成されない

モジュール解決に失敗している？拡張子の省略や変換が未実装なのかも

```
[UNRESOLVED_IMPORT] Warning: "./sum.js" is imported by "src/index.ts", but could not be resolved – treating it as an external dependency.

[UNRESOLVED_IMPORT] Warning: "./math/add.js" is imported by "src/index.ts", but could not be resolved – treating it as an external dependency.
```

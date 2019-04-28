# npm-install-global

一键安装全局npm模块

## 简介

当我们使用`nvm`管理`node`，切换`node`版本时，安装在全局的`npm`包无法共用之前`node`版本中的`npm`包，需要重新下载所有的全局模块，这很蛋疼。也许你可能这么做：

- 添加`npm`配置，设置共用的`prefix`（执行`npm config set prefix "***"`）

但是，这样是行不通的，会提示nvm与npm配置`prefix`不兼容，

```
nvm is not compatible with the npm config "prefix" option...
```

让执行`nvm use --delete-prefix ***` or `npm config delete prefix`才可以，这两句的意思是删掉你设置的`npm`配置。

> Q：难道没有其他办法了吗？ 
> A：是的，就连`nvm`官方都没有办法解决。

## 使用

查看全局安装了哪些模块
`
npm list --depth=0 -g
`

将需要全局安装的模块名写到`data.json`中，切换`node`版本后执行以下命令，一键安装所有的模块
```
node init
```

安装一个新的全局模块时，例如安装`pm2`，可执行：
```
node install pm2 # 相当于执行 npm i -g pm2，并将pm2模块写入data.json文件中
```

## 存在的问题

- 重新安装所有模块至最新版本
- 安装过的模块会重新安装
- 升级后的模块可能存在兼容性问题

## TODO

- [x] 每次全局安装一个模块时，可以同步到`data.json`中  
- [x] 实现一次性安装多个模块
- [ ] 可以注册一个全局使用的命令，实现上一个任务

## 最后

如果你有更好的想法欢迎 [issues](https://github.com/W-FE/npm-install-global/issues)
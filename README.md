<h1 align="center">Chrome Extension Weather</h1>
<p align="center"><img src="docs/logo.png"/></p>

## 安装
[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-v3.0.9-brightgreen.svg)](https://chrome.google.com/webstore/detail/weather/ibieofighcnndjcjchdahdiacjpmkhgf)

## 项目开发和本地安装
1. 编译插件
```bash
# 指定 node 版本
npm install -g n
sudo n 9.0.0
# 安装依赖环境
npm install
# 运行
npm start
```
2. 如果安装, 启用 Chrome 开发模式，加载 dist 目录即可。
3. 打包插件(需编译后)
```bash
./scripts/build.sh
```

## 更新日志
- [更新日志](CHANGELOG.md)

## 演示 :)
<img src="docs/s2.gif" width="300"/>
<img src="docs/s.gif" width="300"/>

## Q&A
[反馈或建议](https://github.com/hocgin/WeatherForChrome/issues/new)

## LICENSE
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](/LICENSE)

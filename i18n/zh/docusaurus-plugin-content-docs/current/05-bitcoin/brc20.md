---
title: BRC20 Token
sidebar_label: BRC20
sidebar_position: 2
keywords:
  - 什么是brc20
  - BRC20钱包
---

# 什么是 BRC20
BRC20 是比特币网络上发行同质化Token 的实验性格式标准，由 [@domodata](https://twitter.com/domodata) 于2023 年3 月8 日基于 [Ordinal 协议](./ordinals) 创建。 类似于以太坊的 ERC20 标准，它规定了以太坊上发行 Token 的名称、发行量、转账等功能。  

BRC-20 利用JSON格式的 Ordinals 铭文来部署代币合约、铸造代币和转账代币，比特币网络仅作为数据层，共识由外部的Indexer来保证。  

```
{ 
  "p": "brc-20",
  "op": "deploy",
  "tick": "ordi",
  "max": "21000000",
  "lim": "1000"
}
```

## 使用指南
FoxWallet 已经全面支持 BRC20 代币，你可以直接使用 FoxWallet 内的比特币收款地址来接收你的 BRC20，并且发送也非常简单方便。  

* 在资产页面的“BRC20”标签下，你可以查看所拥有的BRC20代币。  
<img src="/img/docs/brc20-view.webp" width="320" />

* 点击列表，可以进入详情页。BRC20的余额分为 `Available` 和 `Transferable` 两种状态，默认转账所收到的就是`Transferable` 状态的，需要进行 `inscribe` 操作转换为 `Available` 才可以对外转账。  
<img src="/img/docs/brc20-detail.webp" width="320" />

* 点击 `Inscribe` 进行转换，此操作需要发送交易到比特币的网络上，请耐心等待交易确认
<img src="/img/docs/brc20-inscribe.webp" width="320" />

* 转账的时候需要选择 `Available` 的BRC20
<img src="/img/docs/brc20-transfer.webp" width="320" />
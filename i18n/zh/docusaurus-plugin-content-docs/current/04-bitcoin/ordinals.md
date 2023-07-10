---
title: Ordinals NFT
sidebar_label: Ordinals
keywords:
  - Ordinals 钱包
  - 什么是ordinals
  - ORD钱包
---

# 什么是Ordinals
Ordinals 由开发者 Casey Rodarmor 于2023年1月20日在比特币主网上推出的在比特币上创建 NFT的最新方式。  

Ordinals协议的核心是序号，每个比特币都是通过“挖矿”产生的，根据其出生的先后顺序可以给他们打上序号，同时在转账的过程中，根据“先进先出”的原则对这些序号进行追踪，这就保证了每一个比特币的最小单位“聪”都有其唯一的编号，且不会因为转账等操作而发生改变。  

把NFT的信息和比特币的序号进行关联绑定的操作称之为“铭刻”(inscribe)，这个过程是利用 `Taproot` 的脚本附加数据来实现的。这份上链的数据就 mint 在此交易的第一个输出的第一个聪上（在此称为`关键聪`）。  

后续拥有`关键聪`的的用户，就拥有了相对应的NFT，对`关键聪`的转账也就相当于对NFT进行了所有权的转移。

## 使用指南
FoxWallet 已全面支持 Ordinals，你可以直接使用 FoxWallet 内的比特币收款地址来接受你的NFT，并且使用发送功能转移给别的地址。  

同时，在进行普通的比特币转账时，FoxWallet 会自动排除已经绑定 Ordinals 的UTXO，确保不会误发。  

<img src="/img/blog/btc-nft-view.webp" width="320" /> <img src="/img/blog/btc-nft-send.webp" width="320" />
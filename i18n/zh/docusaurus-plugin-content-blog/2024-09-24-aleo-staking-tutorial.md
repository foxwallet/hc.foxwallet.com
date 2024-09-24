---
slug: aleo-staking-tutorial
title: Aleo 质押教程
tags: [tutorial]
---

在 FoxWallet 内享受最佳的 ALEO 质押体验 !
<!--truncate-->

## 1. 质押
- 打开 FoxWallet App
- 在资产列表种找到并点击 `ALEO`, 进入资产详情页
- 点击“质押”按钮, 进入质押页面
- 确认 `stALEO` 和 `ALEO` 之间的汇率, 并点击 “质押” 按钮
- 输入要质押的数量后点击“发送”

<img src="/img/blog/aleo-staking-tutorial/1.webp" width="960" />

### 注意
- 质押没有最小数额的限制
- 质押时钱包并不会收取手续费, 仅仅是交易上链的矿工费
- 成功质押 `ALEO` 后将获得 `stALEO` 代币作为质押凭证, 但[他们之间的汇率并不是1:1的](https://hc.foxwallet.com/zh/docs/aleo/beta-staking#staleoaleo-%E6%B1%87%E7%8E%87%E5%A6%82%E4%BD%95%E7%A1%AE%E5%AE%9A)
- 收益每天更新, 但不会自动发放到地址余额, 而是体现在你用 `stALEO` 能赎回的 `ALEO` 变多了
- 质押的年化收益是动态的，和全网的质押量有关

## 2. 解押与赎回
- 进入 Aleo 质押页面
- 点击页面上的 “取消质押” 按钮
- 首先需要发起赎回请求, 此过程需要销毁相应数量的 `stALEO`，并根据当前 stALEO:ALEO 汇率计算赎回金额
- 等一段时间后切换至“领取”栏, 一旦代币解锁完成，页面将显示"可领取金额"
- 点击“领取” 立即从智能合约中取回 `ALEO`

<img src="/img/blog/aleo-staking-tutorial/2.webp" width="960" />

### 注意
- 本金和收益可以随时赎回, 没有锁定期
- 发起请求后,需要等待约10分钟才可以领取
- FoxWallet 将在近期发布新版本, 直接在此页面查看总收益 和 每日明细

## 3. 其他
了解更多关于 FoxWallet 内 Aleo Staking 的细节, 请查阅 [参考文档](https://hc.foxwallet.com/zh/docs/aleo/beta-staking).
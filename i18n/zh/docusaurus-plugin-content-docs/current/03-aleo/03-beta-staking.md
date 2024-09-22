---
title: BetaStaking 质押
sidebar_label: BetaStaking
---

FoxWallet 内置的 Aleo 质押服务由我们的合作伙伴 [Beta Staking](https://betastaking.com/) 提供支持, 目前仅在 FoxWallet App 内可用。

## 什么是 Beta Staking？
[Beta Staking](https://betastaking.com/) 是一个去中心化协议，用户可以在 Aleo 区块链网络上质押 ALEO 并赚取 Beta 奖励。质押过程非常简单，用户可以通过该协议轻松赚取奖励。Beta Staking 还会向用户发放 stALEO 作为质押凭证，用户可以随时使用该凭证从协议中解锁和提取所质押的 ALEO 本金及收益。

## Beta Staking 如何运作？
在使用 Beta Staking 协议质押 ALEO 时，协议会将代币进行批处理并存入官方的 Aleo 质押节点。这使得用户能够参与 Aleo 网络的运作，并从官方节点获取 PoS 奖励。此外，用户会根据当前汇率按比例收到 stALEO 代币，并能通过燃烧相应数量的 stALEO 发起 Aleo 网络上的解质押流程，从而取回质押的 ALEO 本金和收益。

## 有最小质押金额限制吗?
没有。

## 质押的本金和收益可以随时赎回吗?
是的。

## Beta Staking 的优点是什么？
1. 相比直接质押 ALEO，Beta Staking 通过持续监控和考虑节点安全性、规模和收益等因素，动态选择最优质的质押节点，为用户资产提供安全性和收益保障。
2. 通过使用 Beta Staking，用户可以获得 stALEO 代币，这不仅能提供质押奖励，还满足流动性需求，并具有在各种 DeFi 场景中的可组合性。
3. 未来，Beta Staking 将为质押者提供更多福利，如平台治理权利，决定平台参数或奖励分配的方式、获取平台积分以享有更多特权等。

## 奖励如何分配？
在 Beta Staking 中，用户质押的 ALEO 记录在统一的池中，每个用户在池中占有一定比例的份额。每天，Beta Staking 会将收到的 PoS 奖励代币注入池中，所有质押者将根据其份额比例分享这些奖励。

## 质押及赎回规则是什么？
为最大化质押者的收益并考虑网络燃料成本，Beta Staking不会立即将每笔质押的 ALEO 存入官方 PoS 节点，而是累积到一定数量的 ALEO 或等待特定时间间隔（如每12小时或累积1000 ALEO）后再进行批量存入。这确保了用户资金的最大化利用。
当用户请求赎回时，如果池中其他用户存入但尚未质押的 ALEO 存在，Beta Staking会优先赎回这些 ALEO 给用户，而不影响已质押的 ALEO 生成奖励。

## APR 如何计算？
年百分比收益率（APR）是根据前一天从官方节点获得的质押奖励和通过 Beta Staking 质押的 ALEO 总量计算的。APR 每天 UTC 08:00 更新。计算方法是：将“前一天 UTC 08:00 至当天 UTC 08:00 期间发放的 PoS 奖励总值”乘以365天，再除以当天产品中的 ALEO 平均质押量。虽然 APR 反映了预期收益，但不保证未来的实际收益。

## stALEO:ALEO 汇率如何确定？
stALEO 和 ALEO 的汇率在每日奖励发放时更新。最初，质押 1 个 ALEO 可获得 1 个 stALEO。然而，随着质押奖励的产生，每天的 ALEO 奖励会在所有 stALEO 持有者之间平均分配。因此，stALEO:ALEO 汇率会随时间增加, 相同数量的 stALEO 可以赎回更多的 ALEO，从而获得更高的质押奖励。用户可以在信息页面检查当前 stALEO:ALEO 汇率及其历史变化。

## 如何赎回 ALEO 代币？
持有 stALEO 代币的用户可以随时从 Beta Staking 赎回, 首先需要发起赎回请求, 此过程需要燃烧相应数量的 stALEO，并根据当前 stALEO:ALEO 汇率计算赎回金额。 

但请注意，由于 Aleo 官方质押的限制，ALEO 解锁需要大约360个区块或者约10分钟的等待时间。

一旦代币解锁完成，页面将显示"可领取金额"，即可点击“领取”从智能合约中取回 ALEO。  

<img src="/img/docs/betastaking/unstake-zh.webp" width="240" /> <img src="/img/docs/betastaking/unstake-req-zh.webp" width="240" /> <img src="/img/docs/betastaking/unstake-claim-zh.webp" width="240" />

## Beta Staking 协议费用是多少？
在 Beta Staking 的初始阶段，不收取任何协议费用, 通过 PoS 获得的所有 ALEO 奖励将均匀分配给质押者。  

未来，一旦 Beta Staking 协议运行稳定，Beta Staking 计划对质押奖励引入10%的协议费用, 具体细节请关注 Beta Staking 的官方通知和说明。
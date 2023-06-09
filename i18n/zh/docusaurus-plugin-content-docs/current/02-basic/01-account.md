---
sidebar_position: 2
description: FoxWallet 是市面上少数能支持多组助记词、多链、多账户的钱包，在保障安全性的同时提供了最大的便利性。
---

# 账户体系

[FoxWallet](https://foxwallet.com) 是市面上少数能支持**多组助记词、多链、多账户**的钱包，在保障安全性的同时提供了最大的便利性。

## 一组助记词可用于多条链
在 [FoxWallet](https://foxwallet.com) 内，只需要创建或导入一次助记词，就可以应用于钱包支持的所有链，不需要每条链都操作一次。

## 一组助记词可派生多个账户
在 [FoxWallet](https://foxwallet.com) 内，一组助记词可派生多个账户，这些账户拥有不同的私钥，互相隔离，保护隐私，降低安全风险。

同时，派生规则是根据固定的顺序实现的，**只要备份好助记词，所有账户都能恢复出来，无需备份每个账户的私钥**。

账户派生规则遵循标准[BIP44协议](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki), 即使 FoxWallet 无法使用，也能通过其他钱包和工具恢复。

## 支持多组助记词
[FoxWallet](https://foxwallet.com) 支持创建或导入多组助记词，24位长度的助记词也可以导入，在 "设置" -> "切换钱包" 页面可轻松切换多个钱包。

## 支持导入导出私钥
在其他钱包生成的私钥也可以导入 [FoxWallet](https://foxwallet.com)，但私钥钱包无法享受多链 多账户功能。
同时，在 [FoxWallet](https://foxwallet.com) 内生成的账户，也可以导出私钥供其他钱包使用。


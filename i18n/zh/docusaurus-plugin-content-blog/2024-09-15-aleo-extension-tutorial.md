---
slug: aleo-extension-tutorial
title: Aleo 插件操作指南
tags: [tutorial]
---

FoxWallet - 最安全好用的Aleo钱包插件.
<!--truncate-->

## 1. 安装或更新

### 安装 FoxWallet 插件
访问 https://chromewebstore.google.com/detail/foxwallet-aleo-wallet/pmmnimefaichbcnbndcfpaagbepnjaig 并安装.

### 更新 FoxWallet 插件到最新版本
- 点击浏览器工具栏上的垂直省略号图标
- 选择“更多工具” -> “扩展程序”
- 点击右上角的开发者模式按钮
- 然后，您会看到“更新”按钮出现

<img src="/img/blog/aleo-extension-tutorial/1.webp" width="960" />

## 2. 转账

### 接收 ALEO
点击“接收”按钮获取 Aleo 地址和二维码。

<img src="/img/blog/aleo-extension-tutorial/2.webp" width="960" />

### 发送 ALEO
FoxWallet 支持 4 种Aleo转账方式:
- **隐私**：实现发送者和接收者完全隐私的转账交易。从隐私账户扣除，发送至对方隐私账户。隐私余额支出，新增至对方隐私余额。
- **公开**：完全公开透明的交易。从公开账户扣除，发送至对方公开账户。余额从公开余额支出，新增至对方公开余额。
- **隐私记录转公开余额**：实现隐私发送者给公开接收者转账功能。从隐私账户扣除，发送至对方公开账户。余额从隐私余额支出，新增至对方公开余额。
- **公开余额转隐私记录**：实现公开的发送者到隐私接收者转账功能。从公开账户扣除，发送至对方隐私账户。余额从公开余额支出，新增至对方隐私余额。  

<img src="/img/blog/aleo-extension-tutorial/3.webp" width="960" />  

注意: 如果要将您的公开余额转换为私密记录，可以使用发送地址作为 "接收地址"。

## 3. 添加和切换钱包
你可以导入已有的助记词或者Aleo私钥到FoxWallet中, 并轻松切换.

<img src="/img/blog/aleo-extension-tutorial/4.webp" width="960" />  

## 4. 常见问题
- 转账一般需要多久？  
    通常在一分钟内。如果未收到，请先检查钱包余额是否减少。如果没有，且已超过 10 分钟，可以认为交易失败，然后重新发起交易。

- 为什么转账有时会失败?  
    Aleo 转账成功率与节点同步状态密切相关。节点数较少时，会有短时间的同步滞后，导致转账失败。稍等片刻再重新发起交易。

- 接收 ALEO 有最低金额限制吗？   
    FoxWallet 没有最低接收金额限制。

- 在哪里可以查看转账记录？
    目前在右上角的消息盒子中查看, 下一版本将支持在 “资产详情” 页查看。

- 我通过私密转账发送了 ALEO，但对方账户未显示余额，为什么？
    FoxWallet App 默认只显示公开余额。点击 "同步" 以显示私密余额。

- 为什么创建钱包时不能用私钥导入钱包？
    先创建新钱包或通过助记词导入。然后前往 "我的" -> "设置" -> "切换钱包" -> "添加钱包" 以通过私钥导入钱包。       
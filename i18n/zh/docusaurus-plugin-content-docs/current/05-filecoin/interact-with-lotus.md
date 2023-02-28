---
sidebar_position: 5
keywords:
  - lotus
  - 钱包
  - 导入
  - 导出
---

# 和 lotus 的交互

## 从 lotus 导入
### 1. 从 lotus 导出私钥

使用命令: `lotus wallet export [address]`

### 2. 导入私钥到 FoxWallet

点击 “我” Tab 里的 “管理钱包” 按钮。

![](../img/add-wallet-2.webp)

点击 ”添加钱包“ —> 选择“导入私钥” —> 设置钱包名称 并选择 “Lotus 类型私钥” —> 输入从 lotus 导出的私钥 —> 确定。

![](../img/import-lotus.webp)

## 导出到 lotus
### 1. 从 FoxWallet 导出私钥

进入“管理钱包”页, 选择对应的钱包进入“钱包详情”页。

![](../img/add-wallet-2.webp)

点击对应账户卡片上的 "..." 按钮。  

![](../img/export-1.webp)

在弹窗中选择 “导出私钥”。

![](../img/export-2.webp)

私钥成功导出，复制下来。  

![](../img/export-3.webp)

### 2. 导入私钥到 lotus  

使用命令: `echo [private key] | lotus wallet import`
---
sidebar_position: 6
keywords:
  - filecoin evm
  - fevm
  - f1
  - 0x
  - transfer
---

# 在 0x 和 f1 地址间转账
FoxWallet 是一款去中心化、多链钱包，全面支持 Filecoin。它与 Filecoin 以太坊虚拟机 (FEVM) 集成，让用户无需手动设置即可轻松将 FIL 转入或转出 `f4(0x)` 地址。本指南介绍如何使用 FoxWallet 转移 FIL。

FoxWallet 使用 Filecoin 内置的 [FilFowarder](https://docs.filecoin.io/smart-contracts/wallets/filforwader/)，这是一个智能合约，让用户可以将 FIL 从基于以太坊的 `f4` 地址转移到不同类型的 Filecoin 地址。

## 准备工作
1. [下载 FoxWallet](https://foxwallet.com/download).
2. 打开 FoxWallet App.
3. 选择 **创建钱包** 来创建新的助记词或者 **导入钱包** 来恢复已有的助记词.
4. **设置密码**
5. 备份助记词, 按照顺序把助记词抄写在安全的纸上.
6. 点击"收款", 选择网络, 你会发现 `Filecoin` 使用 `f1` 地址, 而 `Filecoin EVM` 使用 `0x` 地址.

## 转账 
1. 进入“钱包”页面，切换网络到 `Filecoin` 网络。
2. 点击“接收”获取你的 `f1` 地址。FIL 可以通过交易所提现，或者其他支持`f1` 地址的工具转入此地址。
3. 切换到`Filecoin EVM` 网络, 点击“接收”获取你的以太坊风格的`0x` 地址，复制。
4. 返回 FoxWallet 中的`Filecoin` 网络, 点击“发送”，将你的以太坊风格的`0x` 地址粘贴到空白处。
5. 输入你要转账的 FIL 数量，点击“确认”，稍后查看你的账户。
6. 如果你想将 FIL 从`0x(f4)` 转移到`f1`，请反向执行步骤 2、3、4。

### 实际上，你可以直接在 FoxWallet 中使用任何类型的地址进行转账
* 从 `f1` 到 `f0`
* 从 `f1` 到 `f1`
* 从 `f1` 到 `f3`
* 从 `f1` 到 `f4`
* 从 `f1` 到 `0x`

* 从 `0x` 到 `f0`
* 从 `0x` 到 `f1`
* 从 `0x` 到 `f3`
* 从 `0x` 到 `f4`
* 从 `0x` 到 `0x`


---
title: Aleo在FoxWallet内的工作机制
sidebar_label: 工作机制
---

# Aleo 在 FoxWallet 内的工作机制
1. 在 FoxWallet App 内创建或导入私钥。
2. **上传 `view key` 到 FoxWallet 后端。**
3. 在 FoxWallet 后端扫描并尝试解密所有交易记录，录入数据库。
4. 用户在 FoxWallet App 可通过后端服务查询到自己的余额和交易记录。
5. 发送交易:
    * 在 FoxWallet App 内创建交易.
    * 在 FoxWallet App 对交易进行签名 和 完成零知识证明
    * 发送签名和加密后的交易到 FoxWallet 后端，广播交易

## 注意事项
* 您的私钥不会上传到FoxWallet后台，**您的资金是安全的**
* FoxWallet会妥善保管您的`view key`，**没有其他人可以获得您的`view key`**
* 余额和交易历史API受到良好保护，**您的隐私仍然存在**
* `view key` 只能用于解密交易，无法进行转账。
* 将`view key`上传到后端的目的是为了让用户更快地获取交易记录和余额，否则用户需要在本地同步所有区块并解密交易，这将消耗巨大的计算和网络传输。 FoxWallet的设计可以给用户带来更好的体验。 同时请您放心，我们会安全保管您的 `view key`，不会泄露给任何第三方。

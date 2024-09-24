---
title: How Aleo Works in FoxWallet
sidebar_label: How it works
---

# How Aleo Works in FoxWallet Mobile App
1. Generate/import keys on FoxWallet App.
2. **Upload `view key` to FoxWallet backend.**
    * Your `private key` will not upload to FoxWallet backend, **your funds are safe**
    * FoxWallet will take good care of your `view key`, **no one else can get your `view key`**
3. Decrypt transactions on FoxWallet backend.
    * Balance and transaction history api are well protected, **your privacy remains**
4. Get account info from FoxWallet backend.
5. Send transaction:
    * Create raw tx on FoxWallet App.
    * Sign tx and complete zero-knowledge-proof on FoxWallet App.
    * Post signed tx to FoxWallet backend and then broadcast it.

## Note
* The purpose of uploading the `view key` to the backend is to allow users to obtain transaction records and balances faster, otherwise users need to synchronize all blocks and decrypt transactions locally, which will consume huge calculations and network transmission. The design of FoxWallet can bring users a better experience. At the same time, please rest assured that we will keep your view key safely and will not leak it to any third party.
* **FoxWallet Extension** is full [open-source](https://github.com/foxwallet/foxwallet-extension), and syncs data locally with **NO** `view key` uploaded.

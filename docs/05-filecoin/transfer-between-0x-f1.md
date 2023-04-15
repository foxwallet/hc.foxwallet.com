---
sidebar_position: 6
keywords:
  - filecoin evm
  - fevm
  - f1
  - 0x
  - transfer
---

FoxWallet is a decentralized, multi-chain wallet with full support for Filecoin. It integrates with the Filecoin Ethereum Virtual Machine (FEVM), allowing users to easily transfer FIL to and from `f4` address without manual setup. This guide explains how to transfer FIL using Foxwallet.

FoxWallet uses Filecoin's built-in [FilFowarder](https://docs.filecoin.io/smart-contracts/wallets/filforwader/), a smart contract that lets users transfer FIL from an Ethereum-based `f4` address to a Filecoin address of a different type.  To use FoxWallet, you must set up and configure FoxWallet before beginning the transfer process, described below.

## Setup and configuration
1. [Download FoxWallet](https://foxwallet.com/download).
2. Open the FoxWallet application.
3. For the purpose of this tutorial, select **Create wallet** to create a new wallet. Alternatively, select **Import wallet** to import an existing wallet.
4. Accept the FoxWallet service agreement.
5. Enter a **Wallet name** and **Set password**. You can also enable or disable biometric authentication, and enter an invite code.
6. Click **Confirm**.
7. Taking note of the security warning, click **View seed phrase**.
8. In the generated seed phrase, note the terms and the order in which they appear.
9. Copy and store the backup seed phrase in a safe place. You will need it later in the setup process.
10. Click **Confirm backup**.
11. In the text box, enter the seed phrase by clicking each term in the order you noted in the previous step.
12. Click `Next`.
13. In "Me" — "Networks", you can find `Filecoin` and `Filecoin EVM` out there. The `Filecoin` network uses the `f-style` address, while `Filecoin EVM` uses the Ethereum-style `0x` address.

## Transfer 
1. Go to the "Wallet" page. Choose `Filecoin` network.
2. Click "Receive" to get your `f-style` address. FIL can be transferred to this address via exchange withdrawals, or other tools that support `f1` address. 
3. Switch to the `Filecoin EVM` network. Click "Receive" to get your Ethereum-style `0x` address, copy it.
4. Back to the `Filecoin` network in FoxWallet. Click "Send" and paste your Ethereum-style `0x` address in the blank. The corresponding `f4` address will be displayed in FoxWallet.
5. Input the amount of FIL you’d like to transfer and then click "Confirm", check out your account later.
6. Reverse the steps 2,3,4 if you would like to transfer FIL from `0x(f4)` to `f1`. 

### In fact, you can transfer with any type of address in FoxWallet directly
* from `f1` to `f1`
* from `f1` to `f3`
* from `f1` to `f4`
* from `f1` to `0x`
* from `0x` to `0x`
* from `0x` to `f1`
* from `0x` to `f3`
* from `0x` to `f4`


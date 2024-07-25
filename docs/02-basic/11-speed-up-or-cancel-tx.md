---
description: How can I speed up my pending transaction in mempool
keywords:
  - speed up
  - cancel
  - pending
  - transaction
  - stuck
  - mempool
---

# Handle Pending Transactions

A "pending" transaction is a transaction that has not yet been included in the blockchain and is included in the mempool where it stays until it receives the first confirmation. 

If your transaction is not being mined, it means there are enough other transactions on the network willing to pay a higher fee to the miners to get processed.

FoxWallet provides a series of very useful tools to help your pending transaction get mined.

## Speed Up Transaction
Go to the "Transaction Detail" page, and click "Speed up" to re-broadcast your tx, FoxWallet will create a new transaction with higher gas.

If you have more than one transactions get stucked, you need speed up the earliest one first. Only when the earliest get confirmed, the following transaction can be processed.

## Cancel Transaction
If you send a transaction by mistake, and luckily the transaction is not confirmed, you can go to the "Transaction Detail" page, and click "Cancel" to re-broadcast your tx, [FoxWallet](https://foxwallet.com) will create a new transaction sending funds to your self with higher gas.

## Transaction Canceller
Sometimes, transactions that get stuck do not appear in the transaction history list, and therefore cannot be accelerated or cancelled using the above method.   

To solve this problem, FoxWallet has introduced a transaction canceller tool.  

To access the tool, click on the "More" button in the tools section under the "Wallet" tab, and then click on the "Canceller" option.

On the canceller page, users only need to fill in the nonce of the transaction. FoxWallet will then create a transfer from itself to itself to override the stuck transaction.   

If you do not know what nonce to fill in, FoxWallet automatically fill in the nonce of the earliest stuck transaction in the memory pool.

## Import to FoxWallet
If your have stuck transactions in other wallet, you can import it to FoxWallet. The mnemonic is common across most wallets, private keys are supported too.

Mnemonic and private keys can be imported via "Me" => "Settings" => "Switch Wallet" => "Add Wallet".





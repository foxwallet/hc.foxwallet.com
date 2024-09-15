---
slug: aleo-app-tutorial
title: Aleo Tutorial for App
tags: [tutorial]
---

FoxWallet - Your Best Aleo Wallet !
<!--truncate-->

## 1. Download or Update

### Download FoxWallet 
Vist the official FoxWallet website: https://foxwallet.com/, and select your platform.  

<img src="/img/blog/aleo-app-tutorial/1.webp" width="960" />

### Update FoxWallet to the latest version
Navigate to "Me" -> "Settings" -> "About" -> "Upgrade"  

<img src="/img/blog/aleo-app-tutorial/2.webp" width="960" />

## 2. Transfer

### Receive ALEO
Click the "Receive" button to get Aleo address and QR code.  

<img src="/img/blog/aleo-app-tutorial/3.webp" width="960" />

Note: For private transfers, click "Sync" after the first receipt to scan your private records.  

<img src="/img/blog/aleo-app-tutorial/4.webp" width="320" />

### Send ALEO
FoxWallet supportes 4 transfer methods for Aleo:
- **Private Transfer**: from Private record to Private record.
- **Public Transfer**: from Public balance to Public balance.
- **Private record to public balance**: transfer ALEO from a private sender to a public recipient. 
- **Public balance to Private record**: transfer ALEO from a public sender to a private recipient. If you want to transfer the public balance of one address to the private record, you can choose this method. The payee address is the same as the sending address.  

<img src="/img/blog/aleo-app-tutorial/5.webp" width="960" />  

Note: To convert your public balance to a private record, use the sender address as the "to address".

## 3. Add and Switch Wallet
Import your existing seed phrase or Aleo private key into FoxWallet and easily switch between them.  

<img src="/img/blog/aleo-app-tutorial/6.webp" width="960" />  

## 4. FAQs
- How long does it take for a transfer to arrive？  
    Generally within one minute. If it fails to arrive, check if the balance in your wallet has decreased. If not, and the transaction has taken more than 10 minutes, assume the transaction has failed and re-initiate it.

-  Why do transfers sometimes fail？  
    The success rate of Aleo transfers is strongly correlated with the synchronization status of the nodes. The current number of nodes is limited, causing occasional synchronization delays and transfer failures. Wait for a short while and then re-initiate the transaction.

- Is there a minimum amount limit for ALEO transfers?  
    There is no minimum amount to receive on FoxWallet.

- Where can I find the transfer records?  
    Transfer records are currently in the message box at the top right corner. The next version will support viewing them on the "Asset Details" page.

- Why "Sync" is require on mobile App?      
    Due to the performance limitations of mobile devices, the process of scanning private transactions is handled by FoxWallet servers. The plugin, running on a computer, has enough performance for local synchronization.

- I transferred ALEO to someone using private transfer, but his/her account does not show the balance. Why?  
    FoxWallet App only shows the public balance by default. Click "Sync" to display the private balance.

- Why can't I import a wallet with private keys when initially creating a wallet?  
    First, create a new wallet or import one using a seed phrase. Then, go to "Me" -> "Settings" -> "Switch Wallet" -> "Add Wallet" to import a wallet with private keys.
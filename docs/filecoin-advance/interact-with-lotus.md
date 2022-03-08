---
sidebar_position: 5
keywords:
  - lotus
  - mobile
  - wallet
---

# Interact with lotus

## Import from lotus
### 1. Export private key from lotus  

Use command: `lotus wallet export [address]`

### 2. Import private key to FoxWallet  

Click “Wallets” button in “Settings” page.

![](../img/add-wallet-2.png)

And then you will enter the “Wallets” page.

Click "Add wallet" —> Import private key —> set your wallet name and choose “Lotus private key” —> input your private key —> Submit.

![](../img/import-lotus.png)

## Export to lotus
### 1. Export private key from FoxWallet  

Go to “Wallets” page, click your wallet to the "Wallet's detail" page.

![](../img/add-wallet-2.png)

Click the "..." button in your account card.

![](../img/export-1.png)

Choose "Export private key".

![](../img/export-2.png)

Copy your private key.

![](../img/export-3.png)

### 2. Import private key to lotus  

Use command: `echo [private key] | lotus wallet import`
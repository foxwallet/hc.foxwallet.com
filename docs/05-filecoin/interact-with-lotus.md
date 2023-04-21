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

Click “Switch Wallet” button in “Settings” page.

![](../img/add-wallet-2.webp)

And then you will enter the “Wallets” page.

Click "Add wallet" —> Import private key —> set your wallet name and choose “Lotus private key” —> input your private key —> Submit.

![](../img/import-lotus.webp)

## Export to lotus
### 1. Export private key from FoxWallet  

Go to “Wallets” page, click your wallet to the "Wallet's detail" page.

![](../img/add-wallet-2.webp)

Click the "..." button in your account card.

<img src="/img/docs/export-1.webp" width="320" />

Choose "Export private key".

<img src="/img/docs/export-2.webp" width="320" />

Copy your private key.

<img src="/img/docs/export-3.webp" width="320" />


### 2. Import private key to lotus  

Use command: `echo [private key] | lotus wallet import`
---
sidebar_position: 26
title: How to Interact on Taiko via FoxWallet
sidebar_label: Taiko
keywords:
  - Taiko guide
  - Taiko airdrop
---

```mdx-code-block
<img src={require('@site/docs/static/img/taiko.webp').default} width={"80px"} height={"80px"} alt={"Taiko"} />
<span> </span>
<img src={require('@site/docs/static/img/foxwallet.webp').default} width={"80px"} height={"80px"} alt={"FoxWallet"} />
```

[Taiko](https://taiko.xyz/) is a Type 1 (Ethereum-equivalent) ZK-EVM aims for maximum compatibility. Taiko has fully decentralized and permissionless nodes, proposers, and provers.

## Enable Taiko on FoxWallet
* Open FoxWallet app
* Go to `Me` tab
* Click `Networks` and scroll down
* Find `Taiko Alpha-2 Testnet` and select to enable it

    <img src="/img/docs/me-networks.webp" width="320" /><img src="/img/docs/taiko-alpha2.webp" width="320" />

## Get test ETH on Sepolia 
To interact with Taiko Testnet, you need some test ETH on `Sepolia` first. 
You can read our [Sepolia testent guide](./sepolia.md) to get some `Sepolia` ETH.

## Bridge from Sepolia to Taiko
* Go to `Wallet` tab
* Click the switch button on the top-right corner
* Switch network to `Sepolia Testnet`
* Go to `Discover` tab 
* Input bridge link: https://bridge.a2.taiko.xyz/
    <img src="/img/docs/discover-input.webp" width="320" />

* Click `Connect Wallet` and choose `MetaMask` to connect FoxWallet
    <img src="/img/docs/taiko-bridge-connect.webp" width="320" />

* Specify an amount less than your balance to send.
* Click `Bridge` to transfer.
    <img src="/img/docs/taiko-bridge-send.webp" width="320" />

* After transaction confirmed, click `Transactions` to view the bridge transaction
* Click `Claim`
    <img src="/img/docs/taiko-bridge-claim.webp" width="320" />

## Transfer Sepolia ETH using FoxWallet
* Go to `Wallet` tab
* Click the `Send` button on Wallet page
* Type the address that you want to transfer funds to, or select `Transfer between my accounts` if the account belongs to your wallet.
* Type the amount to transfer.
* Click `Confirm` to send the transaction.

## Swap on Sepolia
* Go to `Discover` tab
* Input url: https://swap.a2.taiko.xyz
    <img src="/img/docs/discover-input.webp" width="320" />

* Click `Connect Wallet` and choose `MetaMask` to connect FoxWallet
* Select the `Swap` tab.
* Enter the tokens that you want to swap.
* Enter the amount you want to swap.
* Select `Swap` and check the details.
* Confirm the swap by selecting `Confirm Swap`.

## Add liquidity
* Go to `Discover` tab
* Input url: https://swap.a2.taiko.xyz
* Connect your wallet to the app, by clicking `Connect wallet` and selecting MetaMask. Your wallet address will appear in the top-right corner.
* Select the `Pool` tab.
* Select the pair of tokens you want to add liquidity for.
* Enter the amount you want to use for each token.
* Click `Supply` and check the details.
* Click the `Confirm Supply` to confirm and approve the transaction.

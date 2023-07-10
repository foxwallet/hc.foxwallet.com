---
sidebar_position: 24
title: How to interact on Scroll Alpha Testnet via FoxWallet
sidebar_label: Scroll
keywords:
  - Scroll Alpha Testnet
  - Scroll Airdrop
---

```mdx-code-block
<img src={require('@site/docs/static/img/scroll.webp').default} width={"80px"} height={"80px"} alt={"Scroll"} />
<span> </span>
<img src={require('@site/docs/static/img/foxwallet.webp').default} width={"80px"} height={"80px"} alt={"FoxWallet"} />
```

[Scroll](https://scroll.io/) is a zkEVM-based zkRollup on Ethereum that enables native compatibility for existing Ethereum applications and tools.

FoxWallet has supported Scroll Alpha Testnet, here we prepared this tutorial to present you how to interact on Scroll via FoxWallet. 

## Get some Goerli ETH
To interact with Scroll testnet, you need test ETH on Goerli first. 
You can read our [Goerli testent guide](./goerli.md) to get some Goerli ETH.

## Enable Scroll On FoxWallet
* Open FoxWallet App
* Go to `Me` tab
* Click `Networks` and scroll down
* Find `Scroll Alpha Testnet` and select it

    <img src="/img/docs/me-networks.webp" width="320" /><img src="/img/docs/scroll-test.webp" width="320" />

## Bridge test ETH from Goerli to Scroll
* Go to `Wallet` tab
* Click the switch button on the top-right corner
* Switch network to `Goerli`
* Go to `Discover` tab
* Input link: https://scroll.io/alpha/bridge
    <img src="/img/docs/discover-input.webp" width="320" />

* Click `Connect Wallet` and choose `MetaMask` to connect FoxWallet
    <img src="/img/docs/scroll-bridge-connect.webp" width="320" />

* In the top dropdown menu, select `Goerli`, and in the bottom dropdown menu, select `Scroll`
* Input an amount less than your balance
* Click `Send ETH to Scroll Alpha Testent` to send
    <img src="/img/docs/scroll-bridge-send.webp" width="320" />

## Transfer on Scroll
* Go to `Wallet` tab
* [Switch network](../basic/manage-funds#switch-networks) to `Scroll Alpha Testnet`
* Click the `Send` button
* Enter `address` that you want to transfer funds to
* Input the amount of ETH to transfer
* Click `Confirm` to send out the transaction

## Swap on Scroll
* Go to `Discover` tab
* Input link: https://uniswap-v3.scroll.io/#/swap 
    <img src="/img/docs/discover-input.webp" width="320" />

* Click `Connect Wallet` and choose `MetaMask` to connect FoxWallet
* Enter the tokens that you want to swap
* Enter the amount of ETH you want to swap
* Click `Swap` and check the details.
* Click `Confirm Swap`

## Add liquidity
* Go to `Discover` tab
* Input link: https://uniswap-v3.scroll.io/#/pool 
* Click `Connect Wallet` and choose `MetaMask` to connect FoxWallet
* Select the `Pool` tab.
* Select the pair of tokens you want to add liquidity for.
* Enter the amount you want to use for each token.
* Click `Supply` and check the details.
* Click the `Confirm Supply` to confirm and approve the transaction.


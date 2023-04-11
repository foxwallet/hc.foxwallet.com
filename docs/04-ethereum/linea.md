---
sidebar_position: 19
title: How to interact on Linea Testnet via FoxWallet
sidebar_label: Linea
keywords:
  - Linea Testnet
  - Linea Airdrop
---

```mdx-code-block
<img src={require('@site/docs/static/img/linea.webp').default} width={"80px"} height={"80px"} alt={"Linea"} />
<span> </span>
<img src={require('@site/docs/static/img/foxwallet.webp').default} width={"80px"} height={"80px"} alt={"FoxWallet"} />
```

Ethereum software firm [ConsenSys](https://consensys.net/) has released a public testnet of its zero-knowledge Ethereum Virtual Machine (zkEVM) on 3.28, and has given it the name "Linea".

[Linea](https://linea.build/) is a Type 2 zero knowledge Ethereum Virtual Machine that replicates an Ethereum environment by leveraging rollups.

FoxWallet has supported Linea Testnet, here we prepared this tutorial to present you how to interact on Linea via FoxWallet.

## Enable Linea On FoxWallet
* Open FoxWallet app
* Go to `Me` tab
* Click `Networks` and scroll down
* Find `Linea Testnet` and select to enable it

    <img src="/img/docs/me-networks.webp" width="320" /><img src="/img/docs/linea.webp" width="320" />

## Get test ETH on Goerli 
To interact with Linea Testnet, you need some test ETH on Goerli first. 
You can read our [Goerli testent guide](./goerli.md) to get some Goerli ETH.

## Bridge from Goerli to Linea
* Go to `Wallet` tab
* Click the switch button on the top-right corner
* Switch network to `Linea Testnet`
* Click the `Bridge` button  
    <img src="/img/docs/linea-bridge.webp" width="320" />

* Choose the `Hop` bridge, [the bridge website](https://goerli.hop.exchange/#/send?token=ETH&destNetwork=linea&sourceNetwork=ethereum) will be opened
* Click `Connect Wallet` and choose `MetaMask` to connect FoxWallet
    <img src="/img/docs/hop-connect.webp" width="320" />
    
* In the top dropdown menu, select `Goerli`, and in the bottom dropdown menu, select `Linea`.
* Specify an amount less than your balance to send.
* Click `Send`, your fund will take a few minutes to arrive on your `Linea` address.
    <img src="/img/docs/hop-send.webp" width="320" />

## Transfer Linea ETH using FoxWallet
* Go to `Wallet` tab
* Click the `Send` button
* Type the address that you want to transfer funds to, or select `Transfer between my accounts` if the account belongs to your wallet.
* Type the amount to transfer.
* Click `Confirm` to send the transaction.

## Swap on Linea
* Go to `Discover` tab  
* Input url: https://swap.goerli.linea.build/
    <img src="/img/docs/discover-input.webp" width="320" />

* Connect your wallet to the app, by clicking `Connect wallet` and selecting MetaMask. Your wallet address will appear in the top-right corner.
* Select the `Swap` tab.
* Enter the tokens that you want to swap.
* Enter the amount you want to swap.
* Select `Swap` and check the details.
* Confirm the swap by selecting `Confirm Swap`.

## Add liquidity
* Go to `discover` tab
* Input url: https://swap.goerli.linea.build/
* Connect your wallet to the app, by clicking `Connect wallet` and selecting MetaMask. Your wallet address will appear in the top-right corner.
* Select the `Pool` tab.
* Select the pair of tokens you want to add liquidity for.
* Enter the amount you want to use for each token.
* Click `Supply` and check the details.
* Click the `Confirm Supply` to confirm and approve the transaction.
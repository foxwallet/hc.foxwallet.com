---
title: BRC20 Token
sidebar_label: BRC20
sidebar_position: 2
keywords:
  - what is brc20
  - BRC20 wallet
---

# What is BRC20
BRC20 is an experimental format standard for issuing homogeneous Tokens on the Bitcoin network. It was published by [@domodata](https://twitter.com/domodata) on March 8, 2023 based on the [Ordinal Protocol](./ordinals) created. Similar to the ERC20 standard of Ethereum, it stipulates the name, circulation, transfer and other functions of Token issued on Ethereum.  

BRC-20 leverages the Ordinals inscription in JSON format to deploy token contracts, mint tokens, and transfer tokens.The Bitcoin network is only used as a data layer, and the consensus is guaranteed by an external Indexer.   

```
{ 
  "p": "brc-20",
  "op": "deploy",
  "tick": "ordi",
  "max": "21000000",
  "lim": "1000"
}
```

## Usage
FoxWallet already fully supports BRC20 tokens, you can directly use the Bitcoin receiving address in FoxWallet to receive your BRC20, and sending is also very simple and convenient.

* Under the "BRC20" tab on the asset page, you can view the BRC20 tokens you own. 
<img src="/img/docs/brc20-view.webp" width="320" />

* Click on the list to enter the details page. The balance of BRC20 is divided into two states `Available` and `Transferable`. The default transfer received is the state of `Transferable`, which needs to be converted to `Available` through the `inscribe` operation before external transfers can be made.
<img src="/img/docs/brc20-detail.webp" width="320" />

* Click `Inscribe` to convert, this operation needs to send the transaction to the Bitcoin network, please wait patiently for the transaction confirmation
<img src="/img/docs/brc20-inscribe.webp" width="320" />

* When transferring money, you need to select `Available` BRC20
<img src="/img/docs/brc20-transfer.webp" width="320" />
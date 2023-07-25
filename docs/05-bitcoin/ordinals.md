---
title: Ordinals NFT
sidebar_label: Ordinals
sidebar_position: 1
keywords:
  - what is ordinals
  - Ordinals wallet
  - ORD wallet
---

# What is Ordinals
Ordinals is the newest way to create NFTs on Bitcoin, launched by developer Casey Rodarmor on the Bitcoin mainnet on January 20, 2023.

The core of the Ordinals protocol is the serial number. Each bitcoin is generated through "mining". According to the order in which they were born, they can be given a serial number. The serial number is tracked, which ensures that the smallest unit of each bitcoin, "Satoshi", has its unique number and will not change due to operations such as transfers.

The operation of associating and binding the NFT information and the Bitcoin serial number is called `inscribe`. This process is realized by using the additional data of `Taproot` script. This on-chain data is mint on the first satoshi of the first output of this transaction (herein called `key satoshi`).

Subsequent users who own `Key Satoshi` will own the corresponding NFT, and the transfer of `Key Satoshi` is equivalent to the transfer of ownership of the NFT.

## Usage
FoxWallet has fully supported Ordinals, you can directly use the Bitcoin receiving address in FoxWallet to accept your NFT.  

* You can receive and view your Ordinals NFTs under the "NFT" tab.
<img src="/img/blog/btc-nft-view.webp" width="320" />

* Transfer to others by simply clicking the send button.
<img src="/img/blog/btc-nft-send.webp" width="320" />

**When you make a normal transfer, FoxWallet will exclude the UTXO of Ordinals, so you don’t have to worry about making mistakes.**












---
sidebar_position: 2
description: FoxWallet is one of the few wallets on the market that supports multi-chain, multi-wallet and multi-seed. This feature provides maximum convenience while ensuring the safety of your assets.
---

# Account System

FoxWallet is one of the few wallets on the market that supports **multi-chain, multi-wallet and multi-seed**.
This feature provides maximum convenience while ensuring the safety of your assets.

## One Seed for Multiple chains

Once the seed phrase is generated or imported, it can be applied in all chains FoxWallet supports. Users don't need to repeat the same process for every single chain.
## One Seed Derives Multiple accounts

One seed phrase can derive multiple isolated accounts in FoxWallet. These accounts have different private keys, which help improve asset security and reduce risks.

The derivation rule is based on a fixed order, therefore **all accounts can be recovered as long as the seed phase is backed up**. Users do not need to back up the private key of each account

Account derivation rules follow the standard [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki). Even if FoxWallet is unavailable, your accounts can still be recovered with other wallets and tools that follow the same standard.

## Multiple Seeds Supported
FoxWallet supports creating or importing multiple sets of seed phrases. Importing a 24-word seed phrase is also acceptable. Users can easily switch between different wallets on the "Wallets" page.

## Importing/Exporting Private Keys
Private keys generated in other wallets can also be imported into FoxWallet. However, these accounts cannot enjoy the features of multi-chain and multi-accounts.

Users can also export the private keys of accounts generated in FoxWallet, and use them elsewhere.
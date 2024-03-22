---
slug: whats-new-in-5-0-0
title: FoxWallet 5.0.0 - Rebranding
tags: [changelog]
---

We are pleased to announce the release of FoxWallet 5.0.0 update. Please find below the details of this update.
<!--truncate-->

### Rebranding
<img src="/img/blog/rebranding-v5/FoxWallet-logo.png" width="80" />   
<br/>
<img src="/img/blog/rebranding-v5/wallet.webp" width="320" />

Our new logo features a sleek black and green color scheme that exudes a strong sense of technology. Furthermore, we have rebuilt all pages of the app to offer a smoother, more intuitive user experience. 

### New Networks

#### Blast Mainnet
[Blast L2](https://blast.io/), an Ethereum Layer 2 solution, provides native yields, offering 4% interest for ETH deposits and 5% for stablecoins. It distinguishes itself by enabling automatic yield through ETH staking and real-world asset (RWA) protocols, thus creating new business models for Dapps. Features like auto-rebasing for ETH and USDB, L1 staking, T-Bill yield for stablecoins, and gas revenue sharing with Dapps position it uniquely within the Ethereum ecosystem.  

- Open [FoxWallet](https://foxwallet.com/download)
- Go to "Me" -> "Networks" -> find and enable `Blast`
- Go to "Wallet" -> [Switch network](https://hc.foxwallet.com/docs/basic/manage-funds#switch-networks) to `Blast`

#### zkLink Nova
The [zkLink Nova Mainnet](https://zklink.io/) is the first Layer 3 zkEVM network that aggregates Ethereum and its Layer 2 rollups for any use case, offering unparalleled composability, interoperability, scalability, and security through zero-knowledge proofs.  

- Open [FoxWallet](https://foxwallet.com/download)
- Go to "Me" -> "Networks" -> find and enable `zkLink Nova`
- Go to "Wallet" -> [Switch network](https://hc.foxwallet.com/docs/basic/manage-funds#switch-networks) to `zkLink Nova`

#### inEVM
inEVM represents the first-ever Ethereum Virtual Machine (EVM) capable of achieving true composability across Injective and Ethereum, developed in collaboration between Injective and Caldera. It adds significant value to cross-chain dApps by allowing for true composability across multiple networks. All dApps are welcome to participate in this innovative network.  

- Open [FoxWallet](https://foxwallet.com/download)
- Go to "Me" -> "Networks" -> find and enable `inEVM`
- Go to "Wallet" -> [Switch network](https://hc.foxwallet.com/docs/basic/manage-funds#switch-networks) to `inEVM`

#### BOB Testnet
BOB (Build on Bitcoin) is the first Bitcoin Layer 2 with full EVM compatibility and native Bitcoin support, empowering everyone to build and innovate on the Bitcoin platform.

- Open [FoxWallet](https://foxwallet.com/download)
- Go to "Me" -> "Networks" -> find and enable `BOB Testnet`
- Go to "Wallet" -> [Switch network](https://hc.foxwallet.com/docs/basic/manage-funds#switch-networks) to `BOB Testnet`

#### Mint Testnet
Mint is an L2 blockchain focused on the NFT industry, constructed on OP Stack with Celestia as the Data Availability layer, aimed at fostering innovation in NFT standards and exploring real-world applications for NFT assets.

- Open [FoxWallet](https://foxwallet.com/download)
- Go to "Me" -> "Networks" -> find and enable `Mint Testnet`
- Go to "Wallet" -> [Switch network](https://hc.foxwallet.com/docs/basic/manage-funds#switch-networks) to `Mint Testnet`

### New Features

#### Bitcoin Multiple Address Format Support
<img src="/img/blog/rebranding-v5/bitcoin-switch-formats.webp" width="320" />

With a simple click on the switch button on the page, users can now switch between multiple bitcoin address formats, including Legacy, Nested Segwit, Native Segwit, and Taproot, enhancing flexibility.

#### Support for Coreum Smart Tokens
<img src="/img/blog/rebranding-v5/coreum-smart-tokens.webp" width="320" />

We now support the management of Coreum Smart Tokens, which are designed to perform specific, contract-like functions independently while stored on the blockchain.

#### Support for Tokens on Aleo
We adopt the AlphaSwap Token standard for managing tokens on Aleo. Unlike the traditional credits.aleo/ARC20 programs, AlphaSwap introduces a multi-token program that can manage tokens created through AlphaSwap, with each token identified and operated on via a unique token_id.


### Bug fixes and improved user experience
- Fixed a bug where the BRC20 detail page would blank under certain conditions.
- Corrected the incorrect transaction statuses for IronFish.
- Fixed incorrect transaction status display for Spacemesh.
- Refined the logic for determining whether a transaction could be accelerated to avoid misleading users.
- Resolved a bitcoin provider data format issue, enhancing the accuracy of data processing.
- Fixed an issue preventing QRC20 Tokens from being transferred, increasing the reliability of asset management.
- Added format checking when adding tokens from a webpage, preventing the addition of incorrect tokens.
- Improved the interaction of WebView error messages, enhancing the user experience.
- Completed an upgrade of the OneInch API, improving the efficiency and safety of transactions.


### 
We are committed to providing you with a better product and user experience. Thank you for your support of FoxWallet! If you encounter any issues or have any feedback, please feel free to contact us at any time.
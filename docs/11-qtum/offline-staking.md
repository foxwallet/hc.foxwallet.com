---
title: Qtum Offline Staking
sidebar_label: Offline Staking
sidebar_position: 2
---

# Qtum Offline Staking

### What is QTUM ？
Qtum is a Proof-of-Stake (PoS) based decentralized network. This allows nodes to either lock up their QTUM tokens in the network directly or delegate them to others to stake new blocks successfully.  

Staking in Qtum can be one of the following:
- Online staking using a superstaker or solo staker
- Offline staking

### What is QTUM offline staking ？
FoxWallet only provides QTUM offline staking function.  

On Block 680,000 — mined at 3:11 PM (EST) on Friday, August 28, 2020 — Qtum successfully activated offline staking on its mainnet. Offline staking allows all holders to delegate their non-staking wallet address to a superstaker without giving up control over their tokens and privileges. Consequently, users with limited time or resources to do online staking can still participate in network consensus.

### How does the delegation work ?
Address delegation is set up when the delegator's wallet sends a smart contract transaction, which identifies the following:
- Delegator's address
- Superstaker's address
- Fee the delegator agrees to pay to superstaker

Once superstakers accept the fee, they will start staking the delegator's address UTXOs.

### How to delegate with FoxWallet ?
- Switch to QTUM Chain, click QTUM offline staking under tools
- Set offline staking order
    <img src="/img/docs/qtum-stake-1.webp" width="320" />

- Choose FoxWallet as superstaker, or enter the supertaker address by yourself
- Add the fee you agree to pay to superstaker
- Delegate to superstaker
- If you want to change the fee, click edit to change it
    <img src="/img/docs/qtum-stake-2.webp" width="320" />
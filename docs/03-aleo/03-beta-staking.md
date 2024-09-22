---
title: BetaStaking FAQ
sidebar_label: BetaStaking
---

FoxWallet's built-in Aleo staking service is powered by our partner [Beta Staking](https://betastaking.com/) and is currently only available within the FoxWallet App.

## What is Beta Staking?
[Beta Staking](https://betastaking.com/) is a decentralized protocol that enables users to stake Aleo Credits on the Aleo blockchain network and earn Beta rewards. The staking process is simple and users can easily earn rewards by staking Aleo Credits using the protocol. Beta Staking will also issue stALEO as proof of the user's staking. Users can use this proof to unlock and withdraw the staked Aleo Credits principal and earnings from the protocol at any time.

## How does Beta Staking work?
When using the Beta Staking protocol to stake ALEO Credits, the protocol batches the tokens and deposits them into official Aleo staking nodes. This allows users to participate in the operation of the Aleo network and receive PoS rewards from the official nodes. Additionally, users receive stALEO tokens based on the current exchange rate, in proportion to the amount of Aleo Credits they stake. When users decide to withdraw, they need to burn the corresponding amount of stALEO, which triggers the withdrawal process on the Aleo network. This process retrieves the staked Aleo Credits principal and rewards.

## Is there a minimum pledge amount limit?
No.

## Can the pledged principal and income be redeemed at any time?
Yes.

## What are the advantages of Beta Staking?
1. Compared to users staking Aleo Credits directly with Aleo official nodes, Beta Staking continuously monitors and considers factors such as node security, scale, and yield to dynamically select the optimal staking nodes, providing security and yield guarantees for users' assets.
2. By using Beta Staking, users can receive stALEO tokens, which provide staking rewards, fulfill users' liquidity needs, and have composability in various DeFi scenarios.
3. In the future, Beta Staking will provide additional benefits to stakers, such as platform governance rights to decide platform parameters or the distribution of a portion of the rewards, acquiring platform credits for more privileges, and more.

## How are rewards distributed?
In Beta Staking, users can stake Aleo Credits, which are recorded in a unified pool. Each user holds a certain proportion of shares in the pool. Every day, the received PoS reward tokens are injected into the pool by Beta Staking. The rewards are then shared among all the stakers based on their proportionate shares.

## What are the staking and redemption rules?
To maximize the stakers' earnings and consider network gas costs, Beta Staking does not immediately deposit each staked Aleo Credits into the official PoS nodes. Instead, Beta Staking accumulates a certain amount of Aleo Credits or wait for a specific interval (e.g., every 12 hours or when 1000 Aleo Credits are accumulated) before executing a batch deposit. This ensures the maximum utilization of users' funds.
When users request redemption, if other users deposit Aleo Credit in the pool but still need to be staked, Beta Staking prioritizes redeeming those Aleo Credits to the user without affecting the staked Aleo Credits generating rewards.

## How is the APR calculated?
The Annual Percentage Rate (APR) is determined by taking into account the staking rewards earned from the official nodes on the previous day and the total amount of Aleo Credits staked through Beta Staking. The APR is updated every day at 8:00 UTC. It is calculated by multiplying "the total value of Aleo Credits earned from PoS rewards distributed between yesterday 8:00 UTC and today 8:00 UTC" by 365 days, and then dividing it by the average amount of Aleo Credits staked in the product on that day. While the APR reflects the expected returns, it does not guarantee future earnings.

## How is the stALEO:ALEO exchange rate determined?
The exchange rate between stALEO and Aleo Credits is updated on a daily basis when token rewards are distributed. Initially, you will receive 1 stALEO for staking 1 Aleo Credit. However, as you earn staking rewards, the daily Aleo Credits rewards will be evenly distributed among all stALEO holders. As a result, the stALEO:ALEO exchange rate will increase over time. You can check the current stALEO:ALEO exchange rate and its historical changes on the information page.

## How can I redeem my ALEO tokens?
If you own stALEO tokens, you can redeem them from Beta Staking at any point. First, they need to initiate a redemption request, which requires burning the corresponding number of stALEO and calculating the redemption amount based on the current stALEO:ALEO exchange rate. 

However, please note that due to the limitations of Aleo's official staking, there is a waiting period for Aleo Credits to become unlocked, which takes approximately 360 blocks or around 10 minutes.  

Once the token is unlocked, the page will show the amount "available to claim", and you can click "Claim" to retrieve ALEO from the smart contract.

<img src="/img/docs/betastaking/unstake.webp" width="240" /> <img src="/img/docs/betastaking/unstake-req.webp" width="240" /> <img src="/img/docs/betastaking/unstake-claim.webp" width="240" />

## What is the cost of the Beta Staking protocol fee?
No protocol fees will be charged during the initial stages of Beta Staking. All Aleo Credits rewards obtained through PoS will be evenly distributed among the stakers.  

In the future, once the Beta Staking protocol is running smoothly, Beta Staking plans to introduce a 10% protocol fee on staking rewards. For specific details, please pay attention to the official announcement and instructions of Beta Staking.
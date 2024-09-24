---
slug: aleo-staking-tutorial
title: Aleo Staking Tutorial
tags: [tutorial]
---

Let's stake `ALEO` in FoxWallet !
<!--truncate-->

## 1. Staking
- Open the FoxWallet app.
- Find and click on `ALEO` in the asset list to enter the asset detail page.
- Click the "Stake" button to access the staking page.
- Confirm the exchange rate between `stALEO` and `ALEO`, then click the "Stake" button.
- Enter the amount you wish to stake and click "Send."

<img src="/img/blog/aleo-staking-tutorial/1.webp" width="960" />

### Note
- There is no minimum pledge amount limit.
- Staking does not incur any wallet fees, only the on-chain transaction gas fee.
- After successfully staking `ALEO`, you will receive `stALEO` tokens, but [the exchange rate is not 1:1](https://hc.foxwallet.com/docs/aleo/beta-staking#how-is-the-staleoaleo-exchange-rate-determined).
- Rewards are updated daily but are not automatically distributed to your address balance. Instead, they are reflected in the increased amount of `ALEO` you can redeem with `stALEO`.
- The annual staking yield is dynamic and depends on the total amount staked across the network.

## 2. Unstaking and Redeeming
- Go to the Aleo staking page.
- Click the "Unstake" button on the page.
- Initiate a redemption request, which requires burning the corresponding amount of `stALEO` and calculating the redemption amount based on the current stALEO:ALEO exchange rate.
- After some time, switch to the "Claim" tab. Once the tokens are unlocked, the page will display the amount of "available to claim". 
- Click "Claim" to immediately retrieve your `ALEO` from the smart contract.

<img src="/img/blog/aleo-staking-tutorial/2.webp" width="960" />

### Note
- Both your principal and rewards can be redeemed at any time without a lock-up period.
- After initiating the request, you need to wait approximately 10 minutes before claiming.
- FoxWallet will soon release an updated version that allows you to directly view your total earnings and daily details on this page.

## 3. Additional Information
For more details about Aleo Staking within FoxWallet, please refer to the [Reference Documentation](https://hc.foxwallet.com/docs/aleo/beta-staking).
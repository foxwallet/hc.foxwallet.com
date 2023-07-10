---
title: How Iron Fish Works in FoxWallet
sidebar_label: How it works
---

# How Iron Fish Works in FoxWallet
1. Generate/import keys on FoxWallet app.
2. Upload view keys to FoxWallet backend.
3. Decrypt transactions on FoxWallet backend.
4. Get account info from FoxWallet backend.
5. Send transaction:
    * Create raw tx on FoxWallet app.
    * Sign tx on FoxWallet app.
    * Post signed tx to FoxWallet backed and then broadcast it

## Note
* Your spending key will not upload to FoxWallet backend, **your funds are safe**
* FoxWallet will take good care of your view keys, **no one else can get your view keys**
* Balance and transaction history api are well protected, **your privacy remains**
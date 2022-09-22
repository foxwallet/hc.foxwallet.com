# FAQs

### Is FoxWallet decentralized ?
Yes, FoxWallet will never upload the user's private key and mnemonic, nor the user's password.

### Is FoxWallet secure ?
Yes, FoxWallet is trustable, the code is audited by certik (audit report link: https://www.certik.org/projects/fox-wallet). The seed phrase and private key are encrypted and stored in Keychain / Keystore which is the most safe place in iOS and Android. 

FoxWallet is decentralized, even if the FoxWallet team disappeared or all the backend services we build are offline, users can manage their assets as normal.

FoxWallet will never upload your seed phrase and private key, users have full control of their assets.

The security principal of FoxWallet is "Never trust the backend API", we do the verification check instead, like SPV and multiple RPC cross validation.

### What is the relationship between wallet and account ?
FoxWallet follows [the BIP44 standard](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki). 

Each wallet corresponds to a set of mnemonics. The mnemonics can derive multiple addresses (i.e., "Accounts" in FoxWallet), and each address corresponds to a unique private key. 

Users only need to back up a set of mnemonics, meanwhile, the multi-account mechanism can effectively prevent users from risks. 

### If I change my phone, is it possible to restore the various derived addresses?
Of course you can. Import your back-up mnemonics into your new phone and click “Add Account” in the “Wallet” or “Settings” page, then your addresses can be restored in order.

### Why each address(account) can derive a different private key ?
The private key for each address is different, and the address derivation principle is: mnemonics => depriving different private keys based on the chain and account number => depriving different public keys and addresses based on the different private keys.

### When importing the mnemonics from Filfox web wallet(https://wallet.filfox.info/) to FoxWallet App, there will appear different addresses. Why?
When developing the web wallet, the BIP44 coin number of Filecoin has not been determined yet. However, the development of FoxWallet follows BIP44 Protocol strictly, and thus there is an incompatibility between these two wallets.

You can deprive "Lotus type private key" through the wallet settings page on the web, and select "Import Private Key" to import them into the FoxWallet App.

### What does the “pending” value in the transaction record mean?
It represents the number of blocks confirmed for your transactions. With more block confirmation, it is harder for your transactions to be reversed.

### How to delete a wallet ?
The user cannot delete the wallet if it's the only one in FoxWallet. If there are several ones, the user can delete one or more through “Settings-> Wallets” to the detailed wallet page and click the “trash bin” icon button in the upper right. 






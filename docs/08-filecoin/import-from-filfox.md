---
sidebar_position: 4
keywords:
  - filfox
  - mnemonic
  - import
---

# Import Wallet From Filfox
Due to some historical reasons, the mnemonic of the Filfox web wallet(https://wallet.filfox.info) is not compatible with other wallets.  
If the mnemonic of the Filfox web wallet is directly imported into other wallets, different addresses will be obtained.  
This article introduces a method to import the address from the Filfox web wallet into FoxWallet through the private key.

## 1. Export private key
[Filfox Web Wallet is no longer maintained](https://x.com/Filfox_info/status/1808393425286582440), we made a tool to help you export private keys.  

- Download this tool from https://github.com/foxwallet/filfox-key-exporter/releases
  - filfox-key-exporter_darwin_arm64 for arm mac
  - filfox-key-exporter_win64.exe for windows
- Double-click the executable file to run it
- Input your seed phrase, then you get the private key

## 2. Import to FoxWallet
- Click “Switch Wallet” button in "Settings" tab, you will enter the “Wallets” page
- Click "Add wallet" —> Import private key —> Choose “Filecoin private key” —> input your private key —> Submit.  
- Congratulations! You have imported your FILFox Web Wallet to FoxWallet successfully! And now, just enjoy surfing in FoxWallet！

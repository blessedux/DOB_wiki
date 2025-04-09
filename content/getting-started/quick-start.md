---
title: Quick Start
description: Get up and running with DOB Protocol in minutes
---

# Quick Start Guide

This quick start guide will help you get started with DOB Protocol in just a few minutes. If you're looking for more detailed information, please refer to the [Installation](/getting-started/installation) guide.

## Prerequisites

Before you begin, ensure you have:

- A compatible DePIN device
- A web3 wallet (MetaMask, WalletConnect, etc.)
- Some test ETH for transactions on testnet

## 5-Minute Setup

Follow these steps to quickly get up and running with DOB Protocol:

### 1. Connect Your Wallet

Visit the [DOB Portal](https://portal.dobprotocol.io) and connect your wallet by clicking the "Connect Wallet" button in the top right corner.

### 2. Register Your Device

From your dashboard:

1. Click on "Register Device"
2. Enter your device information
3. Complete the registration transaction

### 3. Install the DOB Agent

Choose the appropriate installation method for your device:

```bash
# Quick installation for most Linux-based devices
curl -sSL https://get.dobprotocol.io | sudo bash
```

### 4. Generate API Keys

1. Navigate to the "API Keys" section in your dashboard
2. Click "Create New Key"
3. Copy your API key and store it securely

### 5. Configure Your Device

Set up your device with the generated API key:

```bash
# Configure DOB Agent
dob-agent --configure --api-key=YOUR_API_KEY
```

## Verify Your Setup

Run a quick test to ensure everything is working correctly:

```bash
dob-agent --test
```

You should see a success message indicating your device is properly connected to the DOB Protocol network.

## Next Steps

Now that you have the basics set up, you can:

- Explore the [documentation](/getting-started/introduction) to learn more about DOB Protocol
- Set up [revenue tokenization](/components/tokenization) for your device
- Configure [advanced settings](/guides/device-integration) for optimal performance

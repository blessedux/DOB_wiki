---
title: Getting Started with DOB Protocol
description: A step-by-step guide to start using DOB Protocol for your DePIN devices
---

# Getting Started with DOB Protocol

This guide will walk you through the basic steps to start using DOB Protocol for your DePIN devices.

## Prerequisites

Before getting started, make sure you have:

- A compatible DePIN device (see [Supported Devices](/technology/supported-devices))
- A web3 wallet with some ETH for gas fees
- Basic understanding of blockchain technology

## Step 1: Create an Account

1. Visit the [DOB Protocol Portal](https://portal.dobprotocol.io)
2. Click on "Connect Wallet" in the top right corner
3. Select your wallet provider and authorize the connection
4. Complete your profile by providing basic information about your organization

## Step 2: Register Your DePIN Device

1. From your dashboard, click on "Add Device"
2. Select your device type from the dropdown menu
3. Provide the required device information:
   - Device identifier
   - Location (optional)
   - Technical specifications
   - Expected revenue projections
4. Click "Submit" to register your device

## Step 3: Install the DOB Agent

To enable your device to interact with the DOB Protocol, you need to install the DOB Agent:

```bash
# For Linux-based devices
curl -sSL https://get.dobprotocol.io | sudo bash

# For containerized deployments
docker pull dobprotocol/agent:latest
docker run -d \
  --name dob-agent \
  -e DEVICE_ID=your-device-id \
  -e API_KEY=your-api-key \
  dobprotocol/agent:latest
```

## Step 4: Configure and Test the Agent

1. Navigate to the device details page
2. Find your device API key and copy it
3. Set the API key in your DOB Agent configuration
4. Run the test command to verify connectivity:

```bash
dob-agent --test-connection
```

If successful, you'll see a confirmation message indicating your device is now connected to the DOB Protocol network.

## Step 5: Tokenize Device Revenue

Once your device is registered and connected:

1. Go to "Revenue Tokenization" in your dashboard
2. Select the device you want to tokenize
3. Set parameters for the tokenization:
   - Percentage of revenue to tokenize
   - Token distribution schedule
   - Minimum investment threshold
4. Review the terms and click "Create Token"

## Next Steps

Now that you've set up your device with DOB Protocol, you can:

- [Optimize your device performance](/guides/performance-optimization)
- [Access financing for expansion](/guides/depin-financing)
- [Monitor revenue distribution](/guides/monitoring-revenue)

For more detailed information, check out our [API Documentation](/technology/api-reference).

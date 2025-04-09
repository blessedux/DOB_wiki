---
title: Installation
description: Comprehensive guide for installing DOB Protocol components
---

# Installation Guide

This guide provides detailed instructions for installing and configuring the DOB Protocol components on various platforms. For a quicker setup, see the [Quick Start](/getting-started/quick-start) guide.

## System Requirements

### Minimum Requirements

- CPU: 2 cores
- RAM: 4 GB
- Storage: 20 GB SSD
- Network: Stable internet connection
- Operating System: Ubuntu 20.04 LTS or newer

### Recommended Requirements

- CPU: 4+ cores
- RAM: 8+ GB
- Storage: 50+ GB SSD
- Network: High-speed internet connection
- Operating System: Ubuntu 22.04 LTS or newer

## Installation Methods

DOB Protocol offers multiple installation methods depending on your infrastructure and preferences.

### Method 1: Docker Installation (Recommended)

Using Docker is the easiest way to get started with DOB Protocol:

```bash
# Pull the latest DOB Agent image
docker pull dobprotocol/agent:latest

# Run the container with required environment variables
docker run -d \
  --name dob-agent \
  --restart unless-stopped \
  -v /path/to/config:/etc/dob \
  -e DOB_API_KEY=your_api_key \
  -e DOB_DEVICE_ID=your_device_id \
  dobprotocol/agent:latest
```

### Method 2: Native Installation

For a native installation without containers:

```bash
# Install required dependencies
sudo apt update
sudo apt install -y curl jq build-essential

# Download and run the installation script
curl -sSL https://get.dobprotocol.io | sudo bash

# Configure the agent
sudo dob-agent --configure
```

### Method 3: Manual Installation from Source

For advanced users who want to build from source:

```bash
# Clone the repository
git clone https://github.com/DOBProtocol/dob-agent.git
cd dob-agent

# Build the agent
make build

# Install the agent
sudo make install

# Configure the agent
sudo dob-agent --configure
```

## Configuration

After installation, you need to configure the DOB Agent with your device details and API credentials.

### Configuration File

Create a configuration file at `/etc/dob/config.yaml`:

```yaml
api:
  key: "your_api_key"
  endpoint: "https://api.dobprotocol.io/v1"

device:
  id: "your_device_id"
  type: "compute_node"

monitoring:
  interval: 60 # seconds

logging:
  level: "info"
```

### Environment Variables

Alternatively, you can configure the agent using environment variables:

- `DOB_API_KEY`: Your API key
- `DOB_API_ENDPOINT`: API endpoint (default: https://api.dobprotocol.io/v1)
- `DOB_DEVICE_ID`: Your device ID
- `DOB_DEVICE_TYPE`: Device type (compute_node, energy_node, etc.)
- `DOB_MONITORING_INTERVAL`: Monitoring interval in seconds
- `DOB_LOG_LEVEL`: Logging level (debug, info, warn, error)

## Verification

Verify your installation by running:

```bash
dob-agent --version
dob-agent --test-connection
```

## Troubleshooting

### Common Issues

#### Connection Problems

If you're experiencing connection issues, check your network configuration:

```bash
dob-agent --diagnose-network
```

#### Authentication Failures

For authentication issues, verify your API key:

```bash
dob-agent --verify-credentials
```

## Next Steps

After successful installation, you can:

- Learn about [device registration](/guides/device-integration)
- Configure [revenue tokenization](/components/tokenization)
- Set up [monitoring and alerts](/guides/monitoring)

For more information, refer to the [Technical Guides](/guides/getting-started) section.

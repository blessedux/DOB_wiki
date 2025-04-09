---
title: Device Integration
description: Step-by-step guide for integrating DePIN devices with DOB Protocol
---

# Device Integration Guide

This guide provides detailed instructions for integrating your DePIN devices with DOB Protocol. By following these steps, you'll enable your devices to report revenue data, receive tokenization, and participate in the DOB ecosystem.

## Overview

Device integration with DOB Protocol involves several key steps:

1. Device registration
2. DOB Agent installation
3. Configuration
4. Testing and validation
5. Monitoring and maintenance

## Prerequisites

Before beginning the integration process, ensure you have:

- A functional DePIN device generating revenue
- Admin access to the device
- A DOB Protocol account
- Device specifications and operating details

## Device Registration

### 1. Create a Device Profile

Log in to the [DOB Portal](https://portal.dobprotocol.io) and create a new device profile:

1. Navigate to "Devices" > "Add New Device"
2. Fill out the device information form:
   - Device Name
   - Device Type (Compute, Network, Energy, etc.)
   - Hardware Specifications
   - Location (optional)
   - Expected Revenue Range

### 2. Generate Device Credentials

Once your device profile is created:

1. Go to the device details page
2. Click "Generate Credentials"
3. Save your Device ID and API Key securely

## DOB Agent Installation

The DOB Agent is the software that enables your device to communicate with the DOB Protocol.

### Option 1: Docker Installation

```bash
# Pull the DOB Agent Docker image
docker pull dobprotocol/agent:latest

# Run the container with your device credentials
docker run -d \
  --name dob-agent \
  --restart unless-stopped \
  -e DOB_DEVICE_ID=your_device_id \
  -e DOB_API_KEY=your_api_key \
  dobprotocol/agent:latest
```

### Option 2: Native Installation

```bash
# Download the installation script
curl -sSL https://get.dobprotocol.io > install.sh

# Review the script for security
less install.sh

# Run the installation script
chmod +x install.sh
sudo ./install.sh

# Configure the agent
sudo dob-agent --configure
```

## Configuration

### Basic Configuration

Create a configuration file at `/etc/dob/config.yaml`:

```yaml
device:
  id: "your_device_id"
  name: "My DePIN Device"
  type: "compute_node" # Or network_node, energy_node, etc.

api:
  key: "your_api_key"
  endpoint: "https://api.dobprotocol.io/v1"

monitoring:
  interval: 300 # Check every 5 minutes
  metrics:
    - cpu_usage
    - memory_usage
    - network_bandwidth
    - revenue_generated
    - storage_usage

reporting:
  revenue:
    enabled: true
    interval: 3600 # Report revenue hourly
```

### Advanced Configuration

For more complex setups, additional configuration options are available:

```yaml
# Add to your config.yaml
advanced:
  metrics_storage:
    local_retention_days: 7

  failover:
    enabled: true
    retry_interval: 60
    max_retries: 5

  proxy:
    enabled: false
    url: "http://proxy.example.com:8080"

  custom_revenue_sources:
    - name: "mining_pool"
      endpoint: "https://pool.example.com/api/stats"
      authentication:
        type: "bearer"
        token: "your_pool_api_token"
      mapping:
        revenue_field: "confirmed_rewards"
        timestamp_field: "last_updated"
```

## Testing and Validation

After installation and configuration, verify your integration:

### Test Connection

```bash
dob-agent --test-connection
```

### Verify Metrics Collection

```bash
dob-agent --test-metrics
```

### Simulate Revenue Reporting

```bash
dob-agent --simulate-revenue 10.5
```

### Check Logs

```bash
journalctl -u dob-agent
# or
docker logs dob-agent
```

## Monitoring and Maintenance

### Health Checks

The DOB Agent includes built-in health monitoring:

```bash
dob-agent --health-check
```

### Updating the Agent

To update the DOB Agent to the latest version:

```bash
# For Docker installations
docker pull dobprotocol/agent:latest
docker stop dob-agent
docker rm dob-agent
# Then re-create with the same run command

# For native installations
sudo dob-agent --update
```

### Troubleshooting

Common issues and solutions:

#### Connection Problems

If the agent cannot connect to the DOB API:

```bash
dob-agent --diagnose-network
```

#### Authentication Failures

For API key issues:

```bash
dob-agent --verify-credentials
```

#### Revenue Reporting Failures

If revenue data isn't being reported:

```bash
dob-agent --test-revenue-reporting
```

## Integration with Device Software

### REST API Integration

If your device has its own software that needs to interact with the DOB Agent:

```bash
# Example API call to report custom revenue
curl -X POST "http://localhost:8585/revenue" \
  -H "Content-Type: application/json" \
  -d '{"amount": 25.75, "currency": "USDC", "timestamp": "2023-04-01T12:00:00Z"}'
```

### SDK Integration

DOB Protocol provides SDKs for various programming languages:

```python
# Python example
from dob_sdk import DOBClient

client = DOBClient(device_id="your_device_id", api_key="your_api_key")
client.report_revenue(amount=25.75, currency="USDC")
```

## Next Steps

After successful integration, you can:

- [Tokenize your device revenue](/components/tokenization)
- [Set up monitoring and alerts](/guides/monitoring)
- [Configure advanced features](/guides/advanced-configuration)

For any assistance with device integration, contact DOB Protocol support at support@dobprotocol.io.

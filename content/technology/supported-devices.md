---
title: Supported Devices
description: Overview of device types supported by DOB Protocol
---

# Supported DePIN Devices

DOB Protocol supports a wide range of Decentralized Physical Infrastructure Network (DePIN) devices. This guide outlines the current device categories, compatibility requirements, and integration details.

## Device Categories

DOB Protocol currently supports the following device categories:

### Compute Infrastructure

Devices that provide computational resources to decentralized networks:

- **Mining Hardware**
  - ASIC miners
  - GPU mining rigs
  - CPU mining setups
- **Validation Nodes**
  - Blockchain validators
  - Consensus participants
  - Staking nodes
- **Compute Providers**
  - Distributed computing nodes
  - AI processing units
  - Rendering farms

### Network Infrastructure

Devices that provide connectivity and network services:

- **Wireless Networks**
  - 5G/LTE microcells
  - WiFi hotspots
  - LoRaWAN gateways
- **Bandwidth Providers**
  - VPN nodes
  - CDN edge nodes
  - Bandwidth sharing devices
- **Network Validators**
  - Decentralized DNS nodes
  - Network monitoring devices
  - Packet verification systems

### Energy Infrastructure

Devices that generate, distribute, or manage energy:

- **Renewable Generators**
  - Solar panels
  - Wind turbines
  - Hydroelectric generators
- **Energy Distribution**
  - Smart grid nodes
  - Energy trading devices
  - Microgrid controllers
- **Energy Data Validators**
  - Production verification nodes
  - Consumption monitoring devices
  - Grid stability monitors

### Data Storage Infrastructure

Devices that provide decentralized storage:

- **Storage Nodes**
  - Hard drive farms
  - SSD arrays
  - Tape backup systems
- **Archival Systems**
  - Cold storage providers
  - Long-term data preservation
  - Redundant storage networks
- **Content Delivery**
  - Decentralized content hosts
  - Media storage nodes
  - File sharing nodes

### Sensing & IoT Infrastructure

Devices that collect and process real-world data:

- **Environmental Sensors**
  - Weather stations
  - Air quality monitors
  - Water quality sensors
- **Urban Infrastructure**
  - Traffic monitors
  - Smart city sensors
  - Public infrastructure monitors
- **Industrial Sensors**
  - Production monitoring
  - Supply chain tracking
  - Equipment performance sensors

## Hardware Requirements

### Minimum Specifications

For a device to be compatible with DOB Protocol, it must meet these minimum requirements:

| Requirement      | Minimum Specification                                    |
| ---------------- | -------------------------------------------------------- |
| CPU              | Single-core 1GHz+ processor                              |
| RAM              | 512MB                                                    |
| Storage          | 1GB available for DOB Agent                              |
| Network          | Stable internet connection                               |
| Operating System | Linux (Ubuntu 18.04+, Debian 10+), macOS, or Windows 10+ |
| Reliability      | 95%+ uptime                                              |

### Recommended Specifications

For optimal performance, these specifications are recommended:

| Requirement      | Recommended Specification             |
| ---------------- | ------------------------------------- |
| CPU              | Dual-core 2GHz+ processor             |
| RAM              | 2GB+                                  |
| Storage          | 5GB+ available for DOB Agent and data |
| Network          | High-speed, low-latency connection    |
| Operating System | Ubuntu 20.04+ or Debian 11+           |
| Reliability      | 99%+ uptime                           |

## Software Compatibility

### Operating Systems

DOB Agent is compatible with:

- **Linux Distributions**:
  - Ubuntu 18.04, 20.04, 22.04 LTS
  - Debian 10, 11
  - CentOS 8+
  - Fedora 33+
  - Arch Linux
- **Other Operating Systems**:
  - macOS 11+ (Big Sur and newer)
  - Windows 10, 11
  - FreeBSD 13+

### Containerization

DOB Agent can be deployed using:

- Docker
- Kubernetes
- Podman
- LXC/LXD

### Virtualization

DOB Agent can run in virtualized environments:

- VMware
- VirtualBox
- KVM
- Xen
- Hyper-V

## Integration Models

DOB Protocol offers several integration approaches:

### Native Integration

Direct installation of DOB Agent on the device:

```bash
curl -sSL https://get.dobprotocol.io | sudo bash
```

### Container Deployment

Deployment via Docker container:

```bash
docker pull dobprotocol/agent:latest
docker run -d \
  --name dob-agent \
  --restart unless-stopped \
  -e DOB_DEVICE_ID=your_device_id \
  -e DOB_API_KEY=your_api_key \
  dobprotocol/agent:latest
```

### API Integration

For devices with existing software, integration via API:

```python
# Python example
from dob_sdk import DOBClient

client = DOBClient(device_id="your_device_id", api_key="your_api_key")
client.report_metrics(cpu=35.2, memory=42.8, storage=78.1)
client.report_revenue(amount=0.25, currency="USDC")
```

## Device Certification

DOB Protocol offers a certification process for device manufacturers and operators:

### Certification Levels

1. **Basic Compatibility**: Device can run DOB Agent
2. **Performance Certified**: Device meets performance benchmarks
3. **Security Certified**: Device includes TEE or other security features
4. **Enterprise Ready**: Device meets enterprise reliability standards

### Certification Process

To certify a device type:

1. Submit device specifications through the [DOB Portal](https://portal.dobprotocol.io)
2. Complete the technical compatibility checklist
3. Run the certification test suite on sample devices
4. Submit results for verification
5. Receive certification badge and documentation

## Adding New Device Types

DOB Protocol regularly expands support for new device types. To request support for a new device category:

1. Submit a device proposal through the [GitHub repository](https://github.com/DOBProtocol/device-proposals)
2. Provide technical specifications and integration requirements
3. Contribute to the integration development (optional)
4. Participate in testing and validation

## Device Integration Roadmap

Upcoming device support:

| Device Type                | Expected Support Date | Status         |
| -------------------------- | --------------------- | -------------- |
| AI Inference Nodes         | Q4 2024               | In Development |
| Smart City Sensors         | Q1 2025               | Planned        |
| EV Charging Infrastructure | Q1 2025               | Planned        |
| Decentralized CDN Nodes    | Q2 2025               | Planned        |
| Satellite Base Stations    | Q3 2025               | Research Phase |

For specific questions about device compatibility, please contact our support team at [devices@dobprotocol.io](mailto:devices@dobprotocol.io).

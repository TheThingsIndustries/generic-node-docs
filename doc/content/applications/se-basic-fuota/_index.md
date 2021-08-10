---
title: "Sensor Edition: basic_fuota"
description: ""
weight: 5
distributions: null
---

This [application](https://github.com/TheThingsIndustries/generic-node-se/tree/develop/Software/app/basic_fuota) provides a basic example of LoRaWAN FUOTA (Firmware Update Over The Air) functionality.

<!--more-->

The applications is based on:

- [LoRaWAN Remote Multicast Setup Specification v1.0.0.](https://lora-alliance.org/resource_hub/lorawan-remote-multicast-setup-specification-v1-0-0/)
- [LoRaWAN Fragmented Data Block Transport Specification v1.0.0.](https://lora-alliance.org/resource_hub/lorawan-fragmented-data-block-transport-specification-v1-0-0/)
- [LoRaWAN Application Layer Clock Synchronization Specification v1.0.0.](https://lora-alliance.org/resource_hub/lorawan-application-layer-clock-synchronization-specification-v1-0-0/)

`basic_fuota` provides an example on how to:

- Synchronize the device clock via `AppTimeReq & Ans`
- Setup a multicast group via `McGroupSetupReq & Ans`
- Setup a class C session via `McClassCsessionReq & Ans`
- Setup a fragmentation session via `FragSessionSetupReq & Ans`
- Transfer fragmented data and do CRC32 check to confirm data correctness

---
title: "Tracker Edition Firmware"
description: ""
weight: -1
distributions: null
---

The {{% gnte %}} [firmware](https://github.com/TheThingsIndustries/generic-node-te) allows for building multiple applications using the [Semtech LR1110](https://www.semtech.com/products/wireless-rf/lora-edge/lr1110) modem.

The STM32L073 host MCU communicates with the LR1110 modem over SPI bus, and it is able to perform functions such as Wi-Fi and GNSS scanning, and transmit the information using LoRaWAN.

A simple Tracker example app joins the LoRaWAN network and performs a clock sync, and then periodically performs a Wi-Fi and GNSS scans and streams the scanned results to the network.

The application server solves the streamed data location coordinates and provides an accurate location.

See how to get started with [visualizing the geolocation information using LoRa Cloud™ and The Things Stack application server](https://www.thethingsindustries.com/docs/integrations/lora-edge-geolocation/).

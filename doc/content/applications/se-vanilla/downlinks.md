---
title: "downlinks"
description: ""
weight: 2
---

The vanilla app can be configured using downlinks to control the device functionality and effectively unlock new features.

Each device component is controlled on a separate FPort, but please remember that LoRaWAN class A devices can only receive a downlink when they transmit and uplink.

So make sure you trigger an uplink via the button or wait for a periodic uplink message in order for the device to receive your downlink.

## Heartbeat

- Disable periodic heartbeat uplink:

| FPort | Command (first byte) |
|-------|-----------------------------|
| 0x01    | 0x00                        |

- Enable periodic heartbeat uplink every 10 minutes:

| FPort | Command (first byte) |
|-------|-----------------------------|
| 0x01    | 0x0A                        |

The periodicity can range from 0x01 (every 1 minute) to 0xC8 (every 200 minutes).


## Temperature and Humidity

- Disable periodic temperature and humidity uplink:

| FPort | Command (first byte) |
|-------|-----------------------------|
| 0x02    | 0x00                        |

- Enable periodic temperature and humidity uplink every 25 minutes:

| FPort | Command (first byte) |
|-------|-----------------------------|
| 0x02    | 0x19                        |

The periodicity can range from 0x01 (every 1 minute) to 0xC8 (every 200 minutes).

## Accelerometer

- Disable accelerometer events:

| FPort | Command (first byte) |
|-------|-----------------------------|
| 0x03    | 0x00                        |

- Enable accelerometer shake event detection:

| FPort | Command (first byte) |
|-------|-----------------------------|
| 0x03    | 0x01                        |

- Enable accelerometer free-fall event detection:

| FPort | Command (first byte) |
|-------|-----------------------------|
| 0x03    | 0x02                        |

## Button

- Disable button events:

| FPort | Command (first byte) |
|-------|-----------------------------|
| 0x04    | 0x00                        |

- Enable button events:

| FPort | Command (first byte) |
|-------|-----------------------------|
| 0x04    | 0x01                        |

## Buzzer

- Briefly ring buzzer with warning tone:

| FPort | Command (first byte) |
|-------|-----------------------------|
| 0x05    | 0x01                        |

- Briefly ring buzzer with danger tone:

| FPort | Command (first byte) |
|-------|-----------------------------|
| 0x05    | 0x02                        |


## Blue LED

- Disable the blue LED:

| FPort | Command (first byte) |
|-------|-----------------------------|
| 0x06    | 0x00                        |

- Turn on the blue LED:

| FPort | Command (first byte) |
|-------|-----------------------------|
| 0x06    | 0x01                        |

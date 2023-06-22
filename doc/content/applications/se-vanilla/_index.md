---
title: "Sensor Edition: vanilla application"
description: ""
weight: -2
distributions: null
---

{{% gnse %}} comes pre-programmed with a vanilla application that showcases some of the device functionality and capabilities.

The application leverages a combination of the on-board components such as LEDs, button, secure element, temperature and humidity sensor.

<!--more-->

Check out the [Quick Start guide]({{< ref "/getting-started/platform-guide" >}}) and learn how to claim your device, power it up and register it on {{% tts %}} network.

## Default uplinks and events

After a successful join, the device will periodically transmit two types of messages.

1. A heartbeat message on FPort 1 every 25 seconds
2. A Temperature and Humidity reading on FPort 2 every 1 minute

You can also press the button to transmit an uplink with the heartbeat message.

The device will blink the green LED with each successful uplink.

## Heartbeat

The heartbeat uplink message sent by the device on FPort 1 contains the device battery voltage and the firmware version.

## Temperature and Humidity

The temperature and humidity uplink message sent on FPort 2 contains the temperature in Celsius and the humidity in percentage.

## Accelerometer

The accelerometer is disabled by default and can be enabled via a downlink on FPort 3 to detect shake and free-fall events.
When an accelerometer event occurs (shake or free-fall), the device will transmit an uplink with the temperature and humidity readings.

{{< note "The accelerometer should be disabled when it's not used to conserve energy" />}}

## Button

The button is enabled by default and can be disabled or enabled via a downlink on FPort 4.
When the button is enabled, pressing the button will send a heartbeat uplink message.

## Buzzer

The buzzer is disabled by default can be enabled via a downlink on FPort 5.
The buzzer can ring briefly in two tones, warning and danger.

## Blue LED

The blue LED is disabled by default and can be enabled via a downlink on FPort 6.
This feature can be used to indicate that the device requires attention (battery change, reset, re-positioning, etc)

## Adjusting the device behavior

The vanilla application attempts to be as generic as possible to facilitate exploring the device functionality.

Use the [uplinks guide]({{< ref "/applications/se-vanilla/uplinks" >}}) to decode the uplink messages.

Follow the [downlinks guide]({{< ref "/applications/se-vanilla/downlinks" >}}) to adjust the device functionality according to your needs.

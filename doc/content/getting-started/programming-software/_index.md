---
title: "Programming Software"
description: ""
weight: 5
distributions: null
---

Become familiar with programming your executables to your {{% gnse %}} with the ST-LINK programmer.

<!--more-->

## ST-LINK

The [ST-LINK debugger and programmer](http://www.emcu.eu/st-link/) is required to program the {{% gnse %}}. There are multiple versions of this probe, but most of them have a similar pin-out and functionality. In this guide, we will be using the [ST-LINK/V3SET](https://www.st.com/en/development-tools/stlink-v3set.html) probe. Commonly used ST-LINK probes feature blinking LEDs to indicate the programming process.

## Wiring your ST-LINK to the {{% gnse %}}

The wiring from the ST-LINK/V3 programmer &rarr; {{% gnse %}} is as follows:

1. VCC &rarr; VCC
2. GND &rarr; GND
3. CLK &rarr; CLK
4. DIO &rarr; SWD
5. NRST &rarr; NRST

Optionally you can connect RX and TX pins to work with UART (either for sending and receiving messages or programming).

6. RX &rarr; TX
7. TX &rarr; RX

{{< warning >}} Be careful not to mix VCC with VIN pin on the {{% gnse %}}. VIN should still be powered separately, either with the pin or the battery connector, as it powers the {{% gnse %}}. VCC is used as target voltage indicator. {{</ warning >}}

{{< figure src="GNSE_v1.1_pinout.png" alt="GNSE pinout" >}}

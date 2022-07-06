---
title: "Sensor Edition Board"
description: ""
weight: -1
distributions: null
---

The {{% gnse %}} contains multiple on-board components and peripherals.

The front of the {{% gnse %}} board:
{{< figure src="gnse_front_annotated.png" alt="The Front of the board" >}}

- **STM32WL55CCU6 Dual-core M4/M0 + SoC** - this is a dual-core SoC (System-on-Chip) that integrates a low-power microcontroller and a sub-gigahertz long-range radio. The microcontroller has two cores - Cortex-M4 and Cortex-M0. The chip provides 256-kilo bytes of flash memory and 64-kilo bytes of SRAM. Apart from that, it provides security features like secure key management services, secure boot, and a crypto library. The radio supports a full set of modulations which are LoRa, (G)FSK, (G)MSK, and BPSK. It provides a wide range of linear frequencies (150MHz - 960MHz) for LoRa which allows using Generic Node in multiple regions (Europe and the US) and provides the full flexibility to reach each country’s regulation requirement. The transmit power output of the radio can be adjustable up to 22dBm.
- **Onboard antenna** - aka VirtualAntenna™ from [Ignion](https://ignion.io/virtual-antenna/). It can be electronically tuned to any frequency, for example, 868MHz or 915MHz.
- **External u.FL connector** - this tiny connector allows connecting an external antenna, for example, a rubber duck antenna.
- **QWIIC I2C Connector** - this 4-pin JST connector allows Generic Node to seamlessly interface with [SparkFun's Qwiic Connect System](https://www.sparkfun.com/qwiic).
- **ULP Buck-boost converter** - takes input voltage usually from batteries and regulates to an output voltage which can be used by Generic Node.
- **Universal power input** - This is a 2-pin JST connector that usually takes power from 2AA batteries (input voltage range: 2.2V - 5.5V).
- **Piezo speaker** - provides audible feedback.
- **Programming / debug pins** - there are 7 pins.
  - **NRST** - reset
  - **SWD / PA13** - programming/debug pin (bi-directional data pin)
  - **CLK / PA14** - programming/debug pin (clock signal)
  - **TxD / PA2** - serial pin (serial communication transmit data)
  - **RxD / PA3** - serial pin (serial communication receive data)
  - **GND** - ground
  - **VCC** - voltage out, 2.8 V

- **User GPIO pins** - there are 7 pins.
  - **PB3** - SWO / RTS / internally connected to the user button
  - **PA15** - internally connected to the piezo speaker
  - **PA12** - I2C, SCL
  - **PA11** - I2C, SDA
  - **VCC** - voltage out, 2.8 V
  - **GND** - ground
  - **VIN** - voltage in

The back of the {{% gnse %}} board:
{{< figure src="gnse_back_annotated.png" alt="The back of the board" >}}

- **User button** - is a pushbutton internally connected to the pin PB3. Useful for getting user inputs.
- **RGB User LED** - provides visual feedback.
- **Temperature and humidity sensor** - [SHTC3](https://www.sensirion.com/en/environmental-sensors/humidity-sensors/digital-humidity-sensor-shtc3-our-new-standard-for-consumer-electronics/) measures relative humidity with an accuracy of ±2 %RH and temperature with an accuracy of ±0.2 °C.
- **16 Mbit Flash Memory** - [MX25R1635](https://www.macronix.com/en-us/products/NOR-Flash/Serial-NOR-Flash/Pages/default.aspx) provides 16Mb SPI NOR Flash for FUOTA and data logging.
- **Secure Element** - [ATECC608A-TNGLORA](https://www.microchip.com/wwwproducts/en/ATECC608A-TNGLORA) is a pre-provisioned LoRaWAN secure element that is used to store root keys.
- **ULP 3-axis accelerometer** - [LIS2DH12](https://www.st.com/en/mems-and-sensors/lis2dh12.html) is an ultra-low-power high-performance three-axis linear accelerometer that measures the acceleration of motion or vibration.


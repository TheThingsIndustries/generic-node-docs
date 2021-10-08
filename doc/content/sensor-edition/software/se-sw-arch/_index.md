---
title: "Sensor Edition Software Architecture"
description: ""
weight: -1
distributions: null
---

The {{% gnse %}} software contains multiple applications, libraries and drivers.

The {{% gnse %}} software architecture observed below depicts three main layers:
1. Target
2. Library
3. Application

{{< figure src="gnse_sw_arch.png" alt="Software Architecture" >}}

### Target

The target layer contains everything related to the used microcontroller, system in package (SIP) or system on chip (SOC).

In the case of {{% gnse %}}, the STM32WL SOC hardware abstraction layer (HAL) drivers can be enabled and configured in the target layer via `stm32wlxx_hal_conf.h`.

The target layer also contains the system startup code, linker scripts, system memory map and system calls.

Any changes to the system target files should be carefully considered as they can have a major impact on the system behavior and performance.

All layers above the target layer such as Library and Application will be affected by any change to the target layer.

### Library

The library (lib) layer contains functions and APIs that abstract the hardware and target layers, thus allowing users to build applications that are independent of the used hardware components.

Most of the libraries are built by third-parties such as the hardware manufacturer, and all of them are integrated within the {{% gnse %}} platform to ensure a better experience when building applications.

Different applications use different libraries depending on the application desired functionality.

For example, an application that samples sensors and sends the data using LoRaWAN will utilize the Sensors, GNSE APIs, bare-metal scheduler and LoRaWAN libraries.

If the developer needs to build an application that uses the external flash memory or the secure element, they can rely on the Storage or Security libraries.

## Application

The application layer contains sample boilerplate applications that can be used as a starting point.

The example applications are developed to be as energy efficient as possible and can be used for production testing and deployments.

Examples in the application layer should invoke the library layer functions/APIs and should not directly invoke target layer functionalities unless that is the only way to achieve the desired functionality.

---
title: "Configuration"
description: ""
weight: -1
---

Below are key configurations:

### Fragmentation

This application performs the FUOTA interoperability test, and the number of fragmented bytes can be modified from the default values of 995 bytes in `FragDecoder.h`

```c
#define FRAG_MAX_NB                                 21

#define FRAG_MAX_SIZE                               50
```

### App activity

The application behavior can be adjusted by modifying `conf/app_conf.h`.

- `GNSE_ADVANCED_TRACER_ENABLE` enables UART (115200/8-N-1) logging of application activity

```c
#define GNSE_ADVANCED_TRACER_ENABLE 1
```

- `DEBUGGER_ON` enables the use of a debugger in low power mode

```c
#define DEBUGGER_ON       1
```

> **Note:** Please keep in mind that it is best to disable the tracer and debugger functionalities to reduce power consumption.

- `APPEUI`, `DEVEUI` and `APPKEY` allow the device to join the LoRaWAN network via OTAA.

```c
#define APPEUI                 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00

#define DEVEUI                 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00

#define APPKEY                 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
```

> **Note:** The default `0x00` is a place holder and you are required to change these values in order to achieve a successful activation. For testing purposes, these values can be random.

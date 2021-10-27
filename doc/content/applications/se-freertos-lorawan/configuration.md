---
title: "Configuration"
description: ""
weight: -1
---

Key configurations are stated below:

### FreeRTOS

FreeRTOS configurations can be adjusted by modifying `conf/FreeRTOSConfig.h`.

```c
#define configMINIMAL_STACK_SIZE                 ((uint16_t)128)

#define configTOTAL_HEAP_SIZE                    ((size_t)8120)
```

### App activity

The application behavior can be adjusted by modifying `conf/app_conf.h`.

`GNSE_TINY_TRACER_ENABLE` enables UART (115200/8-N-1) logging of application activity:

```c
#define GNSE_TINY_TRACER_ENABLE 1
```

`APPEUI`, `DEVEUI` and `APPKEY` allow the device to join the LoRaWAN network via OTAA:

```c
#define APPEUI                 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00

#define DEVEUI                 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00

#define APPKEY                 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
```

{{< note >}} The default `0x00` is a place holder and you are required to change these values in order to achieve a successful activation. For testing purposes, these values can be random. {{</ note >}}

`LORAWAN_APPLICATION_TX_INTERVAL_SEC` in seconds defines the transmission interval of the application:

```c
#define LORAWAN_APPLICATION_TX_INTERVAL_SEC    ( 10U )
```

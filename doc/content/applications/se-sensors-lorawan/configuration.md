---
title: "Configuration"
description: ""
weight: -1
---

The application behavior can be adjusted by modifying `conf/app_conf.h`.

`GNSE_ADVANCED_TRACER_ENABLE` enables UART (115200/8-N-1) logging of application activity:

```c
#define GNSE_ADVANCED_TRACER_ENABLE 1
```

`DEBUGGER_ON` enables the use of a debugger in low power mode:

```c
#define DEBUGGER_ON       1
```

{{< note >}} Please keep in mind that it is best to disable the tracer and debugger functionalities to reduce power consumption. {{</ note >}}

`APPEUI`, `DEVEUI` and `APPKEY` allow the device to join the LoRaWAN network via OTAA:

```c
#define APPEUI                 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00

#define DEVEUI                 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00

#define APPKEY                 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
```

{{< note >}} The default `0x00` is a place holder and you are required to change these values in order to achieve a successful activation. For testing purposes, these values can be random. {{</ note >}}

`SENSORS_PAYLOAD_APP_PORT` defines LoRaWAN application port where sensors information can be retrieved by the application server:

```c
#define SENSORS_PAYLOAD_APP_PORT        2
```

`SENSORS_TX_DUTYCYCLE` in millisecond defines the application data transmission interval:

```c
#define SENSORS_TX_DUTYCYCLE                            10000
```

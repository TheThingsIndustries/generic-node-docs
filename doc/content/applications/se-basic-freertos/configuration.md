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

- `GNSE_TINY_TRACER_ENABLE` enables UART (115200/8-N-1) logging of application activity

```c
#define GNSE_TINY_TRACER_ENABLE 1
```

- `TX_DELAY` in milliseconds defines the message passing rate from thread 1 to thread 2.

```c
#define TX_DELAY                 (5000)
```

---
title: "Configuration"
description: ""
weight: -1
---

`basic_bootloader` key configurations:

### Memory map

The internal flash (ROM) memory map can be configured to accommodate a bootloader and an application by adjusting the parameters defined in `memory_map.ld`.

```
BOOTROM  (rx)  : ORIGIN = 0x08000000, LENGTH = 0x00000B000   /* Flash memory dedicated to bootloader */
APPROM   (rx)  : ORIGIN = 0x0800B000, LENGTH = 0x000035000   /* Flash memory dedicated to application */
```

### App activity

The application behavior can be adjusted by modifying `conf/app_conf.h`.

`GNSE_TINY_TRACER_ENABLE` enables UART (115200/8-N-1) logging of application activity:

```c
#define GNSE_TINY_TRACER_ENABLE 1
```

> Please note that it is considered as a best practice to disable logging when building bootloaders to reduce the binary size.

---
title: "Configuration"
description: ""
weight: -1
---

The application behavior can be adjusted by modifying `conf/app_conf.h`.

Key configurations are stated below:

### Azure RTOS

`MEM_BYTE_POOL_SIZE`,`THREAD_STACK_SIZE`,`QUEUE_SIZE` in bytes defines Azure RTOS memory pool, threads and queue sizes:

```c
#define MEM_BYTE_POOL_SIZE 9120

#define THREAD_STACK_SIZE 1024

#define QUEUE_SIZE 100
```

### App activity

`GNSE_TINY_TRACER_ENABLE` enables UART (115200/8-N-1) logging of application activity:

```c
#define GNSE_TINY_TRACER_ENABLE 1
```

`TX_DELAY` in milliseconds defines the message passing rate from thread 1 to thread 2:

```c
#define TX_DELAY                 (5000)

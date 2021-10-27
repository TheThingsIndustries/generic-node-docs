---
title: "Sensor Edition: basic_azurertos"
description: ""
weight: 2
distributions: null
---

The [basic_azurertos application](https://github.com/TheThingsIndustries/generic-node-se/tree/develop/Software/app/basic_azurertos) provides a basic example of [Microsoft Azure RTOS](https://azure.microsoft.com/en-us/services/rtos/) functionality.

<!--more-->

The application creates two threads and a message queue. Thread 1 attempts to pass a message to thread 2 via the queue and then sleeps for `TX_DELAY`. Thread 2 blinks the LED when the sent message is successfully received.

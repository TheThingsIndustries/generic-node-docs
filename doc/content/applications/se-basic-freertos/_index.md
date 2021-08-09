---
title: "Sensor Edition: basic_freertos"
description: ""
weight: 4
distributions: null
---

This [application](https://github.com/TheThingsIndustries/generic-node-se/tree/develop/Software/app/basic_freertos) provides a basic example of [Amazon FreeRTOS](https://docs.aws.amazon.com/freertos/index.html) functionality.

The application creates two threads and a message queue. Thread 1 attempts to pass a message to thread 2 via the queue and then sleeps for `TX_DELAY`. Thread 2 blinks the LED when the sent message is successfully received.

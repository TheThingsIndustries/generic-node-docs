---
title: "Sensor Edition: freefall_lorawan"
description: ""
weight: 7
distributions: null
---

This [application](https://github.com/TheThingsIndustries/generic-node-se/tree/develop/Software/app/freefall_lorawan) is used to detect free fall events and also serves as a template for acceleration detection handling.

<!--more-->

 Each time a free fall event is detected by the accelerometer, a message containing a counter in the payload is sent. The transmitted value is incremented each time the event occurs. Additionally, if a downlink is received over the correct port, which can be configured by the user, the buzzer will beep periodically to notify locally that the GNSE should be picked up. The buzzer can be turned off by pressing the user button.

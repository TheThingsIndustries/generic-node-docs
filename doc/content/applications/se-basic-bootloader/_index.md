---
title: "Sensor Edition: basic_bootloader"
description: ""
weight: 3
distributions: null
---

The [basic_bootloader application](https://github.com/TheThingsIndustries/generic-node-se/tree/develop/Software/app/basic_bootloader) provides a basic bootloader that can be combined with other applications to perform a specific functionality at boot time.

<!--more-->

> If you want to learn more about the purpose of a bootloader, we recommend reading this great [blog post](https://interrupt.memfault.com/blog/how-to-write-a-bootloader-from-scratch).

`basic_bootloader` performs one of two functionalities based on the GNSE button:

1. If the button is not pressed &#8594; boots the user flashed application
2. If the button is pressed long enough &#8594; boots the ST internal bootloader

---
title: "Sensor Edition Hardware Setup"
description: ""
weight: 1
distributions: null
---

This section shows how to set up the necessary tools to explore and customize the hardware design.

<!--more-->

## Get familiar with the {{% gnse %}} Board

Before going deep into {{% gnse %}} and customizing its hardware design, it is a good idea to learn about its on-board components and peripherals. See the [Sensor Edition Hardware]({{< ref "/sensor-edition/hardware" >}}) section.

## Clone the {{% gnse %}} repository

Check out the [Generic Node Sensor Edition Github repository](https://github.com/TheThingsIndustries/generic-node-se) to get familiar with the available hardware design files.

Clone the repository to get its local copy on your machine by running the following command:

```bash
$ git clone --branch develop \
--recurse-submodules \
https://github.com/TheThingsIndustries/generic-node-se.git
```

{{< note >}} If you are not too familiar with Git, visit the official [GitHub documentation](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository) to learn how to clone a repository. {{</ note >}}

## Set up hardware design tools

Follow the [Sensor Edition Hardware Design Tools]({{< ref "/getting-started/se-hw/se-hw-design" >}}) section to setup hardware design tools in order to further explore {{% gnse %}} schematics and PCB layouts.

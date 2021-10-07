---
title: "Sensor Edition Hardware Setup"
description: ""
weight: 1
distributions: null
---

Get started by becoming familiar with the {{% gnse %}} on-board peripherals and setting up the necessary tools to explore and customize the hardware design.

<!--more-->

## Working with the Generic Node Sensor Edition Repository

It is always a good idea to get familiar with the available HW design files. Check out the [Generic Node Sensor Edition Github repository](https://github.com/TheThingsIndustries/generic-node-se) to get familiar with the repository structure.

Next, clone the repository to get its local copy on your machine by running the following command:

```bash
$ git clone --branch develop \
--recurse-submodules \
https://github.com/TheThingsIndustries/generic-node-se.git
```

If you are not too familiar with Git, visit the official [GitHub documentation](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository) to learn how to clone a repository.

## Becoming familiar with the Generic Node Sensor Edition Board

It is a good idea to become familiar with the {{% gnse %}} on-board components and peripherals, see the [Sensor Edition Board]({{< ref "/sensor-edition/hardware/se-board" >}}) guide.

Next, follow the [Sensor Edition Hardware Design Tools]({{< ref "/getting-started/se-hw/se-hw-design" >}}) section to setup the hardware design tools in order to further explore the schematics and PCB layouts

---
title: "OpenOCD"
description: ""
weight: 3
distributions: null
---

[OpenOCD](http://openocd.org/) is commonly used for on-chip debugging, but can also be used to easily program executables via CLI.

<!--more-->

## Steps to reproduce

To program a binary executable, run the following command in your terminal:

```bash
openocd -f interface/stlink.cfg -f target/stm32wlx.cfg -c "program <binary-file-location> verify reset exit 0x08000000"
```
Some parts of the command above are optional:
- `verify` is used to verify the loaded firmware after programming;
- `reset` will start the programmed executable without having to power cycle the device;
- `exit` quits OpenOCD as it will otherwise keep running to debug the chip.

`0x08000000` signifies the starting address of the user program. If you do not wish to input this, you can also opt to program the **elf** file (with the **.elf** filename extension) using the following command:

```bash
openocd -f interface/stlink.cfg -f target/stm32wlx.cfg -c "program <elf-file-location> verify reset exit"
```
The binary file is extracted from this file during compilation of the Generic Node firmware, so it should not make a difference which file you use.

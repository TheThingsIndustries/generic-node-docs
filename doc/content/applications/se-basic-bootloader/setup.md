---
title: "Setup"
description: ""
weight: 1
---

To build a `basic_bootloader` that can be combined with another application in the same memory, you need to use a linker script that supports the new memory map.

### Building with CMake

If you are building using CMake, then update `CMakeLists.txt` `LINKER_SCRIPT` flag to `bootloader.ld` when compiling a `basic_bootloader` binary.

```
set(LINKER_SCRIPT ${MCU_DIR}/bootloader.ld)
```

Also, make sure to update `LINKER_SCRIPT` flag to `app.ld` when compiling an application binary that will be combined with the bootloader binary.

```
set(LINKER_SCRIPT ${MCU_DIR}/app.ld)
```

### Building with STM32CubeIDE

If you are building using STM32CubeIDE, then there is no need to change the linker script when building a `basic_bootloader` binary as can be seen below.

{{< figure src="../stm32cubeide_linker_bootloader.png" alt="bootloader STM32CubeIDE linker config" >}}

But, make sure to change the application linker script from `../../../target/stm32wl55xx_flash.ld` to `../../../target/app.ld`.

{{< figure src="../stm32cubeide_linker_app.png" alt="basic_lorawan STM32CubeIDE linker config" >}}

### Combining applications

You can combine two binaries such as the `basic_bootloader` and `basic_lorawan` by using the `bootloader_app_merge` python script .

For example:

```sh
python bootloader_app_merge.py \
-b ./build/debug/app/basic_bootloader/main.bin \
-a ./build/debug/app/basic_lorawan/main.bin \
-s 1 \
-d 0xB000 \
-c 0xB008 \
-o ./build/debug/app/basic_lorawan/boot_basic_lorawan.bin
```

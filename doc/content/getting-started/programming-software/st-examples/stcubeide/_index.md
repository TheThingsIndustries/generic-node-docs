---
title: "STM32CubeIDE"
description: ""
weight: 2
distributions: null
---

If you are using [STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html) as your build environment, then using the same tool to program your {{% gnse %}} is convenient.

{{< figure src="stm32cubeide.png" alt="stm32 cube ide" >}}

## Running Project

When the [build]({{< ref "/getting-started/se-sw/env-setup/stm32cubeide" >}}) process is done you can flash the binary file to the {{% gnse %}} by running the program from the STM32CubeIDE.

Right click on the project name in the **Project Explorer** and select **Run As -> STM32 Cortex-M C/C++ Application**.

{{< figure src="run_as.png" alt="project run as" >}}

This will start to **flash** the compiled program (bin file) to the {{% gnse %}}. The following figure shows the **Console** output, for example, when running the [basic]({{< ref "/applications/se-basic" >}}) project.

{{< figure src="file_download.png" alt="file download" >}}

When the flashing finishes the code will immediately start to run on the {{% gnse %}}. If the program prints text and data to the serial port during the execution they can be displayed on a **Serial Terminal**. The following figure shows the Serial output on [TM Terminal](https://marketplace.eclipse.org/content/tm-terminal), for example, when running the [basic]({{< ref "/applications/se-basic" >}}) project.

{{< figure src="run_capture.png" alt="serial terminal output" >}}

The STLINK-V3SET also supports [Drag-and-drop flash programming]({{< ref "/getting-started/programming-software/st-examples/mounting" >}}) of binary files.

If you want to reset the {{% gnse %}} program that is running, you can press the reset button on the back of the {{% gnse %}} and the current program will start again.

If everything goes well you can remove {{% gnse %}} from the STLINK-V3SET.
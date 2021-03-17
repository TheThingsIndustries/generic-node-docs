---
title: "STM32CubeProgrammer"
description: ""
weight: 1
distributions: null
---

[STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html) allows for multiple configuration options to work with any ST-LINK probe. It has both a graphical and a command-line interface, as well as support for multiple operating systems.

<!--more-->

## GUI version

1. Launch STM32CubeProgrammer.

{{< figure src="cubeprog_startupscreen.png" alt="cubeprog startup screen" >}}

2. Setup your preferred configuration settings and click the **Connect** button on the top right.

{{< figure src="cubeprog_programming_button.png" alt="cubeprog connect button" >}}

3. Next, click the ***Erasing and Programming*** button on the left.

{{< figure src="cubeprog_options.png" alt="cubeprog erase option" >}}

4. In the download section, choose the location of your executable file and start address (default is `0x08000000`), then hit the ***Start Programming*** button.

{{< figure src="cubeprog_download.png" alt="cubeprog download section" >}}

## CLI version

The CLI version should be automatically available after installing STM32CubeProgrammer.

{{< note >}} Windows version will be named `STM32_Programmer_CLI.exe`. Append `.exe` to all the following commands if you are running on Windows. {{</ note >}}

Available options for STM32_Programmer_CLI can be listed with:

```bash
STM32_Programmer_CLI -h
```

To program a binary executable, use the following command:

```bash
STM32_Programmer_CLI -c port=SWD -w <binary-file-location> 0x08000000
```

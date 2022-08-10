---
title: "Porting STM32CubeWL Firmware Library"
description: ""
weight:
distributions: null
---

This tutorial will help you port the **STM32CubeWL firmware library** to the **{{% gnse %}}**. 

The following figure shows the top view of NUCLEO-WL55JC1 (left) and {{% gnse %}} (right).

{{< figure src="nucleo-wl55jc1-vs-generic-node.png" alt="NUCLEO-WL55JC1 vs Generic Node Sensor Edition" >}}

The STM32CubeWL firmware library contains templates, examples, applications, and demonstrations for supported boards including NUCLEO-WL55JC1. The applications written for NUCLEO-WL55JC1 (based on STM32WL55JC) can be modified to run on {{% gnse %}} (based on STM32WL55CCU6) because both boards belong to the same device subfamily and have the same memory size. However, these boards have different pin counts: NUCLEO-WL55JC1 has 73 pins while {{% gnse %}} has 48 pins.

## Prerequisites

- **Software:** Download and install the following software if your operating system does not already have one. 
    - [STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html)
    - [STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html)
    - [TeraTerm](https://osdn.net/projects/ttssh2/releases/)

- **Hardware:** You will require the following hardware and accessories.
    - [{{% gnse %}}](https://www.thethingsshop.com/products/generic-node-sensor-edition)
    - [ST-LINK V3](https://www.st.com/en/development-tools/stlink-v3set.html)
    - [Jumper wires (M/F)](https://www.sparkfun.com/products/12794)
    - Two AA batteries 
    - micro USB cable

## Downloading STM32CubeWL firmware package

The STM32CubeWL firmware package comes in a single ZIP file. First, download the v1.1.0 and extract it into the folder of your choice.

{{< figure src="stm32-cube-mcu-package-download.png" alt="Downloading STM32CubeWL firmware package" >}}

## Connecting to ST-LINK

The easiest way to connect {{% gnse %}} to the ST-LINK V3 is by using male/female jumper wires. The table below provides an overview of which pins to connect:

| Pin function | ST-LINK V3  | {{% gnse %}} |
| ------------ | ----------- | ------------ |
| +3.3V        | VCC         | VCC          |
| Ground       | GND         | GND          |
| Clock        | CLK         | CLK          |
| Data         | DIO         | SWD          |
| Reset        | NRST        | NRST         |

Insert batteries to the battery compartment. Then connect ST-LINK V3 to your computer using the micro USB cable. Once finished your hardware setup looks something like this:

{{< figure src="hardware-setup.png" alt="Hardware setup" >}}

## Finding DevEUI

The DevEUI of your {{% gnse %}} is stored in the registry location `0x1fff7580`. The DevEUI that’s printed behind the enclosure is the Secure Element’s DevEUI and it is being used for the out-of-the-box demo app. In this case, you can also use that value as well. 

- Start STM32CubeProgrammer. 
- Click the **Connect** button.
- Enter the address, the size of the data, and the data width to be read, and then click on the **Read** button in the top-left corner.

{{< figure src="deveui-registry.png" alt="read DevEUI from registry" >}}

Note that the bytes are in little-endian format. So you can write the DevEUI as `00 80 E1 15 05 01 XX XX` which is in big-endian format.

## Adding your {{% gnse %}} to The Things Stack

Follow the instructions on [Adding Devices](https://www.thethingsindustries.com/docs/devices/adding-devices/) page to add your {{% gnse %}} to [The Things Stack](https://www.thethingsindustries.com/docs/getting-started/ttn/addresses/).

- **AppEUI** - fill with zeros for testing purposes.
- **DevEUI** - use the DevEUI you retrieve from the above section.
- **AppKey** - select the Generate button.

## Opening the Demo Application

Open the single-core project, **LoRaWAN_End_Node** which is a demo application that is found in the STM32CubeWL firmware library. 

- In the **System Explorer** navigate to `STM32Cube_FW_WL_V1.1.0\Projects\NUCLEO-WL55JC\Applications\ LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE`.

- Double click on the `.project` file.

{{< figure src="open-demo-project.png" alt="Open Demo Application" >}}

- This should launch the STM32CubeIDE.

## Building the Project

- In **Project Explorer**, choose the project node, **LoRaWAN_End_Node**.
- On the menu bar, choose **Project > Build Project**, or on the toolbar, select the **hammer** button. 

{{< figure src="build-project.png" alt="Build project" >}}

- The **Console** window displays the results of the build. The build succeeded.

{{< figure src="console-output.png" alt="Console output" >}}

In **Project Explorer**, expand **LoRaWAN_End_Node >  includes > STM32Cube_FW_WL_V1.1.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node\LoRaWAN\App**. Then double click on the `lora_app.h` file.

{{< figure src="lora-app-h.png" alt="lora_app.h" >}}

- Edit line 43 to match your LoRaWAN region.

```
/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
#define ACTIVE_REGION                               LORAMAC_REGION_EU868
```
- In **Project Explorer** expand **LoRaWAN_End_Node > Drivers > BSP > STM32WLxx_Nucleo**. Right-click on the `stm32wlxx_nucleo_radio.c` file and from the shortcut menu select **Show In > System Explorer**.

{{< figure src="show-in-system-explorer.png" alt="Show in system explorer" >}}

- In **System Explorer** select the following files:
    - stm32wlxx_nucleo.c
    - stm32wlxx_nucleo.h
    - stm32wlxx_nucleo_radio.c
    - stm32wlxx_nucleo_radio.h

{{< figure src="system-explorer.png" alt="System explorer" >}}

- Right-click on the selected files and select **Properties** from the menu. In the Properties window remove the **Read-only** attribute. When you are done select the **Apply** button and then select the **OK** button.

{{< figure src="file-properties.png" alt="File properties" >}}

- Double click on `stm32wlxx_nucleo_radio.c` file and then in **Outline** view double click on `stm32wlxx_nucleo_radio.h` file.

- In the `stm32wlxx_nucleo_radio.h` file, modify the RF switch GPIOs to match with the {{% gnse %}} (line 84 - 97). Here is the pin mapping between NUCLEO-WL55JC and the {{% gnse %}}.

| RF SWITCH    | NUCLEO-WL55JC1 | {{% gnse %}} |
| ------------ | -------------- | ------------ |
| RF_CTRL1     | PC4            | PA0          |
| RF_CTRL2     | PC5            | PA1          |
| RF_CTRL3     | PC3            | PB8          |

```
#define RF_SW_CTRL3_PIN                          GPIO_PIN_8
#define RF_SW_CTRL3_GPIO_PORT                    GPIOB
#define RF_SW_CTRL3_GPIO_CLK_ENABLE()            __HAL_RCC_GPIOB_CLK_ENABLE()
#define RF_SW_CTRL3_GPIO_CLK_DISABLE()           __HAL_RCC_GPIOB_CLK_DISABLE()


#define RF_SW_CTRL1_PIN                          GPIO_PIN_0
#define RF_SW_CTRL1_GPIO_PORT                    GPIOA
#define RF_SW_CTRL1_GPIO_CLK_ENABLE()            __HAL_RCC_GPIOA_CLK_ENABLE()
#define RF_SW_RX_GPIO_CLK_DISABLE()              __HAL_RCC_GPIOA_CLK_DISABLE()


#define RF_SW_CTRL2_PIN                          GPIO_PIN_1
#define RF_SW_CTRL2_GPIO_PORT                    GPIOA
#define RF_SW_CTRL2_GPIO_CLK_ENABLE()            __HAL_RCC_GPIOA_CLK_ENABLE()
#define RF_SW_CTRL2_GPIO_CLK_DISABLE()           __HAL_RCC_GPIOA_CLK_DISABLE()
```
- Save the file.

- In Project Explorer expand **LoRaWAN_End_Node > Drivers > BSP > STM32WLxx_Nucleo**. Double click on `stm32wlxx_nucleo.c` file and then in the Outline view double click on the `stm32wlxx_nucleo.h` file. In the `stm32wlxx_nucleo.h` file, modify the GPIO pins for the RGB LED:

| LED          | NUCLEO-WL55JC1 | {{% gnse %}} |
| ------------ | -------------- | ------------ |
| RED          | PB11 (LED3)    | PB5          |
| GREEN        | PB9 (LED2)     | PB6          |
| BLUE         | PB15 (LED1)    | PB7          |

```
#define LED1_PIN                                GPIO_PIN_7
#define LED1_GPIO_PORT                          GPIOB
#define LED1_GPIO_CLK_ENABLE()                  __HAL_RCC_GPIOB_CLK_ENABLE()
#define LED1_GPIO_CLK_DISABLE()                 __HAL_RCC_GPIOB_CLK_DISABLE()

#define LED2_PIN                                GPIO_PIN_6
#define LED2_GPIO_PORT                          GPIOB
#define LED2_GPIO_CLK_ENABLE()                  __HAL_RCC_GPIOB_CLK_ENABLE()
#define LED2_GPIO_CLK_DISABLE()                 __HAL_RCC_GPIOB_CLK_DISABLE()


#define LED3_PIN                                GPIO_PIN_5
#define LED3_GPIO_PORT                          GPIOB
#define LED3_GPIO_CLK_ENABLE()                  __HAL_RCC_GPIOB_CLK_ENABLE()
#define LED3_GPIO_CLK_DISABLE()                 __HAL_RCC_GPIOB_CLK_DISABLE()
```

- Change the button pin number from 3 to 0. This will remove the button functionality and just use a timer to send periodic messages.

| BUTTON       | NUCLEO-WL55JC1 | {{% gnse %}} |
| ------------ | -------------- | ------------ |
| BUTTON 1     | PA0            | PB3          |
| BUTTON 2     | PA1            | N/A          |
| BUTTON 3     | PC6            | N/A          |

```
#define BUTTONn                                 0
```

- Save the file.

- In Project Explorer, expand **LoRaWAN_End_Node >  includes > STM32Cube_FW_WL_V1.1.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node\LoRaWAN\App** and then double click on the `lora_app.c` file.

{{< figure src="lora-app-c.png" alt="lora_app.c" >}}

- In Outline view double click on the `sys_conf.h` file.

{{< figure src="sys-conf-h.png" alt="sys_conf.h" >}}

- In `sys_conf.h` file, make the following changes. This will make sure the debugger doesn’t crash.

```
Enable the debugger (line 61):
#define DEBUGGER_ENABLED            **1**

Disable the low power mode (line 72):
#define LOW_POWER_DISABLE           **1**
```

Save the file and **Rebuild** the project.

## Debug Configurations

- In Project Explorer, right-click on **LoRaWAN_End_Node** project, and on the menu bar, choose **Debug As > Debug Configurations…**

- In Debug Configurations dialog box, select the **New launch configurations** button.

{{< figure src="debug-configurations-1.png" alt="Debug configurations" >}}

- A new node named **LoRaWAN_End_Node Debug** (you can modify this name anytime) will create under the **STM32 Cortex-M C/C++ Application** node. 

{{< figure src="debug-configurations-2.png" alt="Debug configurations" >}}

- Select the **Debugger** tab and make the following settings.
    - **GDB Connection Settings** - Autostart local GDB server
    - **Debug probe** - ST-LINK (ST-LINK GDB server)
    - **Interface** - SWD
    - Select the **ST-LINK S/N** checkbox and select the **Scan** button.
    - **Frequency** - Auto
    - **Access port** - 0 - Cortex-M4

{{< figure src="debug-configurations-3.png" alt="Debug configurations" >}}

## LoRaWAN Network Commissioning Parameters

- In **Project Explorer**, expand **LoRaWAN_End_Node >  includes > STM32Cube_FW_WL_V1.1.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node\LoRaWAN\App** and then double click on the `se-identity.h` file.

{{< figure src="se-identity-h.png" alt="se_identity.h" >}}

- In the `se-identity.h` file,

    - replace JoinEUI (line 103) with the AppEUI that can be found in **The Things Stack: Applications > your application > End devices > your end device > Overview**. For example, if you have filled it with zeros, the code should be,

    ```
    #define LORAWAN_JOIN_EUI                                   { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 }
    ```

    - do not replace the **DevEUI** (line 98). Your DevEUI will automatically be set with a value provided by MCU.
    - replace both **AppKey** (line 120) and **NwkKey** (line 125) with the **AppKey** that can be found in **The Things Stack: Applications > your application > End devices > your end device > Overview**.
- Once you have edited the file, build the project again.
- Run the application by right-clicking on the **LoRaWAN_End_Node** project and from the shortcut menu select **Run As > STM32 Cortex-M C/C++ Application**.

{{< figure src="run-application.png" alt=" Run application" >}}

- Open **Tera Term** or any serial terminal program. You should see an output similar to the image capture below.

{{< figure src="tera-term-output.png" alt="Tera Term output" >}}

- In The Things Stackopen the **Live data** page. You will be able to see the messages coming from {{% gnse %}}. 

{{< note "The code is written for extracting data from the sensors (humidity, light, pressure, temperature) on NUCLEO-WL55JC1. Since we haven’t still updated the code, the payload contains bogus sensor data." />}}

{{< figure src="live-data.png" alt="Live data" >}}
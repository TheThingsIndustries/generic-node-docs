---
title: "STM32's Serial Bootloader"
description: ""
weight:
distributions: null
---

If you don't have an ST-LINK V3 probe for programming the Generic Node Sensor Edition (GNSE), you can program it through a **USB-to-UART TTL converter** (sometimes referred to as a serial converter). They are commonly available as breakout boards, such as the [SparkFun FTDI Basic Breakout - 3.3V](https://www.sparkfun.com/products/9873), for example.

{{< note "Make sure to use a USB-to-UART converter board configured to 3.3V for both power output and I/O levels. If you have a 5V FTDI breakout board, check if it has a jumper that allows you to switch it to 3.3V." />}}

Install drivers on your computer if they are not already installed. Follow the tutorials on the SparkFun website to learn how to install them on [Windows](https://learn.sparkfun.com/tutorials/how-to-install-ftdi-drivers/windows---in-depth), [Mac](https://learn.sparkfun.com/tutorials/how-to-install-ftdi-drivers/mac) or [Linux](https://learn.sparkfun.com/tutorials/how-to-install-ftdi-drivers/linux).

Connect GNSE with the FTDI breakout using jumper wires as shown below:

{{< figure src="gnse-ftdi.png" alt="" >}}

Please refer to the table below for clarity:

| GNSE   | FTDI |
|--------|------|
| TXD    | RXI  |
| RXD    | TXO  |
| VCC    | 3V3  |
| GND    | GND  |

Connect FTDI to the computer using miniUSB cable.

Now, you need to flash the `.bin` file of your project onto the GNSE using [STM32CubeProgrammer]({{< ref "/getting-started/programming-software/st-examples/stcubeprog" >}}). This file can be generated during the build process with the [STM32CubeIDE]({{< ref "/getting-started/programming-software/st-examples/stcubeide" >}}). To configure the generation of a `.bin` file, right-click on the **Project** and select **Properties** from the shortcut menu.

In the **Properties** window, expand **C/C++ Build** and then select **Settings**. In the **Tool Settings** tab, select **MCU Post build outputs** and then choose **Convert to binary file (-O binary)**. Then, click on the **Apply and Close** button.

{{< figure src="stcubeide-build-properties.png" alt="" >}}

Now, you can build the project by right-clicking on it and selecting **Build Project** from the shortcut menu. Once the build is complete, the `.bin` file can be found in the `Debug` folder.

Short the **BOOT0** pins on the GNSE board using a **shunt/jumper**. This allows programming GNSE through UART1 with the internal system bootloader of the STM32 MCU.

{{< figure src="boot0.png" alt="" >}}

Press and release the **RESET** button while shorting the **BOOT0**.

GNSE will switch to the bootloader mode. Now unshort **BOOT0** by removing the **shunt/jumper** since it’s only being read at the startup.

Start **STM32CubeProgrammar**.

Select **UART** from the dropdown menu, and then choose the **COM port** associated with your GNSE.

Click on the **Connect** button. 

{{< figure src="uart-config.png" alt="" >}}

After connecting, the button text will change to **Disconnect**. Also, the data in the device memory will display in the **Device memory** tab.

{{< figure src="stcubeprog-connect.png" alt="" >}}

Click on the **+** tab and select **Open file** from the menu.

{{< figure src="stcubeprog-open-file.png" alt="" >}}

Browse and select the `.bin` file, `basic.bin` for example.

{{< figure src="browse-bin-file.png" alt="" >}}

Click on the **Download** button.

{{< figure src="stcubeprog-download.png" alt="" >}}

It will take some time to download/flash the file onto the GNSE.

{{< figure src="stcubeprog-download-progress.png" alt="" >}}

Once completed click on the **OK** button.

{{< figure src="stcubeprog-ok.png" alt="" >}}

Click on the **Disconnect** button.

Now you can remove the USB-to-UART converter from your GNSE.

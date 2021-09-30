---
title: "Observation"
description: ""
---

The UART output should be read through the TX/RX lines. The default UART configuration is set to 115200/8-N-1. The application will go though some tests, which follows this routine:

1. **Battery**: the output should match the voltage of your battery.
2. **LEDs**: the three on-board LEDs (RGB LED) of the board should blink.
3. **Hardware Secure Element**: the application keys, which are unique for each device, should be presented.
4. **Temperature and Humidity sensor**: the outputted data should be similar to your environment's temperature and humidity.
5. **Accelerometer**: the data output consists of three axex corresponding to different directions of the device. When lying still on one side (on its bottom, top or any of the PCB edges) facing downwards, then one axis should have around (-)1g which is equal to (-)9.81m/s², whilst the others would be closer to 0g. This is due to the downwards facing axis being pulled by gravity whilst the others are largely unaffected by it. The PCB has silkscreen on the backside pointing to the corresponding directions if you're unsure about which direction it is pointing.
6. **Accelerometer temperature**: the temperature of the accelerometer should match the one of the temperature sensor.
7. **Flash IC**: the flash IC will perform some tests to erase, write and read the device. The output will indicate if it has failed at some point.
8. **Buzzer**: buzzer tones will play.
9. **Loop**: the application will enter a loop where the on-board LEDs (RGB LED) will blink forever, which is not a test but an indication that the program has finished.


When you run the code on the {{% gnse %}} the serial terminal should print something like this:

{{< note "We have removed the serial number, Device EUI, Application/Join EUI, and some lines of the Flash IC test from the output." />}}

```
 *********> Running GNSE basic app <******** 

 *********> Compiled on: 21:48:19 , Sep 11 2021 <******** 

 Testing on-board peripherals 

 Testing battery monitoring functionality 

 MCU internal reference voltage 2836 mv 

 Battery voltage 2985 mv 

 Testing LED functionality 

 Toggling LED lights 

 Testing secure element functionality 

 1) Enabling LOAD_SWITCH_SENSORS 

 2) Attempting to read secure element serial number 

 SE Serial Number:          [REMOVED]

 SE Device EUI:             [REMOVED]

 SE Application/Join EUI:   [REMOVED]

 Testing on board sensors functionality 

 Attempting to read sensors data 

 Measured Temperature: 30'C & Relative Humidity: 74 

 Measured Temperature: 30'C & Relative Humidity: 74 

 Measured Temperature: 30'C & Relative Humidity: 74 

 Measured Temperature: 30'C & Relative Humidity: 74 

 Measured Temperature: 30'C & Relative Humidity: 74 

 Accelerometer acceleration [mg]: X: -34.00      Y: -154.00      Z: -990.00

 Accelerometer Temperature sensor [degC]:  37.00

 Accelerometer acceleration [mg]: X: -34.00      Y: -158.00      Z: -993.00

 Accelerometer Temperature sensor [degC]:  37.25

 Accelerometer acceleration [mg]: X: -35.00      Y: -152.00      Z: -995.00

 Accelerometer Temperature sensor [degC]:  36.75

 Accelerometer acceleration [mg]: X: -32.00      Y: -158.00      Z: -992.00

 Accelerometer Temperature sensor [degC]:  37.00

 Testing on board external flash functionality 

 1) Enabling LOAD_SWITCH_FLASH 

 2) Attempting to read & write to external flash 

        Start initializing the device and controller
        Start matching the device ID
                 SPI, ID: C22815
  ------MxSimpleTest Start!------
  ID: C22815
  Sr: 00
        ERASE START
        ERASE DONE
                 **Start Dump data=> address        0
                            Length=> 20
                 READ address=> 00000000
                         data=> FF
                     expected=> FF
...
[REMOVED]
...
                 READ address=> 0000001e
                         data=> FF
                     expected=> FF
                 READ address=> 0000001f
                         data=> FF
                     expected=> FF
        ERASE PASS
        PROGRAM DONE
                 **Start Dump data=> address        0
                            Length=> 20
                 READ address=> 00000000
                         data=> 00
                     expected=> 00
                 READ address=> 00000001
                         data=> 01
                     expected=> 01
...
[REMOVED]
...

                 READ address=> 0000001E
                         data=> 1E
                     expected=> 1E
                 READ address=> 0000001F
                         data=> 1F
                     expected=> 1F
        MxSelfTest End!

 Simple external SPI flash (MX25R1635F) test passed!

 Testing Buzzer functionality 

 Playing Buzzer tones 

 Finished on-board testing, blinking LEDs forever
```
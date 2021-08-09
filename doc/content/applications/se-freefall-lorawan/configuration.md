---
title: "Configuration"
description: ""
weight: -1
---

### Default
1. Follow [this](https://www.thethingsindustries.com/docs/devices/adding-devices/) guide to add your device to The Things Stack.
2. Change the `APPEUI`, `DEVEUI` and `APPKEY` in `conf/app_conf.h` to the values specific to your device, which are used on The Things Stack.
3. Uncomment the `REGION` parameters in `conf/lorawan_conf.h`. These should correspond to the location that you use these devices at.

### Free fall detection
1. Change `ACC_FF_THRESHOLD` in `app/conf.h` to a value you prefer. This will determine the threshold where all axis can be from 0g (which would indicate that it is free falling) to be considered a free fall event.
2. Change `ACC_FF_DURATION` in `app/conf.h` to a value you prefer. This will determine how many times the axis have to meet the threshold values. Note that `ACC_FF_ODR` in the same file also affects this.
3. `ACC_FF_SCALE` in `app/conf.h` could also be changed for situations where more than 2g has to be detected. `LIS2DH12.h`in the `LIS2DH12` library lists all the options for this in the full scale section.
4. `ACC_FF_ODR` in `app/conf.h` could be lowered to save power, or increased to improve performance. `LIS2DH12.h` in the `LIS2DH12`library lists all the options for this in the `ODR` section.

### Low power

1. Set `GNSE_ADVANCED_TRACER_ENALBE` to `0` in `conf/app_conf.h`. This will make the device consume less power, but also disables UART.
2. Set `DEBUGGER_ON` to `0` in `conf/app_conf.h`.
3. Set `ACC_FF_ODR` in `app/conf.h` to a lower value if the decreased performance of the free fall detection does not matter for your setup. `LIS2DH12.h` in the `LIS2DH12` library lists all the options for this.

Additionally, try to remember that:

- Setting `DEBUGGER_ON` to `1` will consume more power. The debugger is ON by default using the macro `DEBUGGER_ON` in `conf/app_conf.h`.
- Keeping peripherals (such as the sensors) off by controlling the load switches will significantly reduce the power consumption. But, of course, you can not turn the load switch connected to the accelerometer off without disabling the free fall detection as well.

### LoRa extra's

Some extra setup configurations can be done to change the behaviour of the LoRaWAN features. These include:

1. Setting the activation method (OTAA or ABP) in `LORAWAN_DEFAULT_ACTIVATION_TYPE` in `lora_app.h`. OTAA [is recommended](https://www.thethingsindustries.com/docs/devices/abp-vs-otaa/).
2. The data rate can be set in `lora_app.h`. The default configuration uses the ADR. If you want to set your preferred data rate, set `LORAWAN_ADR_STATE` to `LORAMAC_HANDLER_ADR_OFF` and set `LORAWAN_DEFAULT_DATA_RATE` to your preference. A list of the options per region are shown in `Region.h` in the `STM32WLxx_LoRaWAN` library.
3. `ACC_FF_LORA_PORT` can be changed in `conf/app_conf.h`, which is used to configure the transmission port. The LoRaWAN keys mentioned in the default section can be altered here as well.
4. Also in `conf/app_conf.h`, the downlink port can be set by altering `ACC_FF_DOWNLINK_PORT`.

### Debugger

For debugging, the firmware has to support it first. The debugger is set in the macro `DEBUGGER_ON` in `conf/app_conf.h`.

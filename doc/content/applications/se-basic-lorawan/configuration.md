---
title: "Configuration"
description: ""
weight: -1
---

### Default

1. Follow [this](https://www.thethingsindustries.com/docs/devices/adding-devices/) guide to add your device to The Things Stack.
2. Change the `APPEUI`, `DEVEUI` and `APPKEY` in `conf/app_conf.h` to the values specific to your device, which are used on The Things Stack.
3. Uncomment the `REGION` parameters in `conf/lorawan_conf.h` and set `ACTIVE_REGION` in `lora_app.h`. These should correspond to the location that you use these devices at.

### Low power

1. Set `GNSE_ADVANCED_TRACER_ENALBE` to `0` in `conf/app_conf.h`. This will make the device consume less power, but also disables UART.
2. Set `DEBUGGER_ON` to `0` in `conf/app_conf.h`.

Additionally, try to remember that:

- Setting `DEBUGGER_ON` to `1` will consume more power. The debugger is ON by default using the macro `DEBUGGER_ON` in `conf/app_conf.h`.
- Keeping peripherals (such as the sensors) off by controlling the load switches will significantly reduce the power consumption.
- The less transmissions over time, the lower the power consumption will be. This is set by `APP_TX_DUTYCYCLE` in `lora_app.h`.

### LoRa extra's

Some extra setup configurations can be done to change the behaviour of the LoRaWAN features. These include:

1. Setting the activation method (OTAA or ABP) in `LORAWAN_DEFAULT_ACTIVATION_TYPE` in `lora_app.h`. OTAA [is recommended](https://www.thethingsindustries.com/docs/devices/abp-vs-otaa/).
2. The data rate can be set in `lora_app.h`. The default configuration uses the ADR. Should you want to set your preferred data rate, set `LORAWAN_ADR_STATE` to `LORAMAC_HANDLER_ADR_OFF` and set `LORAWAN_DEFAULT_DATA_RATE` to your preference. A list of the options per region are shown in `Region.h` in the `STM32WLxx_LoRaWAN` library.
3. `ACC_FF_LORA_PORT` can be changed in `conf/app_conf.h`, which is used to configure the transmission port. The LoRaWAN keys mentioned in the default section can be altered here as well.

### Debugger

For debugging, the firmware has to support it first. The debugger is set in the macro `DEBUGGER_ON` in `conf/app_conf.h`.

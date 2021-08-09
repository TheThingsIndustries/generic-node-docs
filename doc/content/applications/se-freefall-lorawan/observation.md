---
title: "Observation"
description: ""
weight: 2
---

On The Things Stack, the payload should be a single byte starting at one. When a downlink is received on the port set in `ACC_FF_DOWNLINK_PORT` in `app/conf.h`, then the buzzer should start making noises.

The UART on the TX/RX lines can also be used, which are configured to 115200/8-N-1 by default. If you are having troubles with the device, check if the UART output matches these things:

1. The accelerometer is initialized to detect free fall events, which is notified with this message:

```
Accelerometer initialized
```

2. The correct keys are used, i.e. they match the ones printed at the start of the application.
3. The device is connecting properly, as it will indicate if connections have failed or not. It should display something like this:

```
###### = JOINED = OTAA =====================
```

4. The device is transmitting anything, since each event is also logged via the UART lines. It should display something similar to:

```
###### ========== MCPS-Confirm =============
###### U/L FRAME:0005 | PORT:2 | DR:5 | PWR:0 | MSG TYPE:UNCONFIRMED
60s069:TX on freq 868500000 Hz at DR 5
60s080:SEND REQUEST
```

5. Downlinks are detected only if used. These only occur after being explicitly set in The Things Stack Console or another application, and will only be transmitted after the transmission of an uplink by the device. When any data are sent to the port set in `ACC_FF_DOWNLINK_PORT` in `app/conf.h` then the buzzer can also be heard. Additionally, after receiving the downlink, the GNSE should display something similar to:

```
 ###### ========== MCPS-Indication ==========

 ###### D/L FRAME:0002 | SLOT:1 | PORT:1 | DR:5 | RSSI:-44 | SNR:15

 Received 3 bytes on undefined port: 2
```

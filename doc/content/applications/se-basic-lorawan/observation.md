---
title: "Observation"
description: ""
weight: 2
---

The standard payload is "**AA BB CC**", which will repeat periodically, with intervals set in `APP_TX_DUTYCYCLE` in `lora_app.h`. The UART output can be read through the TX/RX lines, which can be used for debugging. The default UART configuration is set to 115200/8-N-1. If nothing can be seen on The Things Stack Console, then you could check from this debug output if:

1. The correct keys are used, i.e. they match the ones printed at the start of the application.
2. The device is connecting properly, as it will indicate if connections have failed or not. It should display something like this:

```
###### = JOINED = OTAA =====================
```

3. The device is transmitting anything, since each event is also logged via the UART lines. It should display something similar to:

```
###### ========== MCPS-Confirm =============
###### U/L FRAME:0005 | PORT:2 | DR:5 | PWR:0 | MSG TYPE:UNCONFIRMED
60s069:TX on freq 868500000 Hz at DR 5
60s080:SEND REQUEST
```

4. Downlinks are detected only if used. These only occur after being explicitly set on The Things Stack Console or another application, and will only be transmitted after the transmission of an uplink by the device. The GNSE should, after receiving the downlink, display something similar to:

```
 ###### ========== MCPS-Indication ==========

 ###### D/L FRAME:0002 | SLOT:1 | PORT:1 | DR:5 | RSSI:-44 | SNR:15

 Received 3 bytes on undefined port: 2
```

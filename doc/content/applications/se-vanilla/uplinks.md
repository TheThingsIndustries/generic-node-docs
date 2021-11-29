---
title: "uplinks"
description: ""
weight: 1
---

The vanilla app uplinks are compromised of two simple messages (heartbeat and temperature/humidity) to reduce the complexity and show a simple example of the device functionality.

## Payload formatters

Please see [The Things Stack Javascript payload formatter documentation](https://www.thethingsindustries.com/docs/integrations/payload-formatters/javascript/) for information on how to use payload formatters.

The javascript payload formatter below can be used to decode the vanilla app.

```javascript
function decodeUplink(input) {
  var data = {};
  if (input.fPort == 1)
  {
  data.BATTERY_VOLTAGE = (input.bytes[0]/10);
  data.GNSE_FW_VERSION = input.bytes[1] + (input.bytes[2]/10);
  }

  if (input.fPort == 2)
  {
  data.TEMPERATURE = ((input.bytes[0] << 8) + input.bytes[1])/10;
  data.HUMIDITY = ((input.bytes[2] << 8) + input.bytes[3])/10;
  }
  return {
    data: data,
  };
}
```

## Heartbeat

The heartbeat uplink message on FPort 1 contains:
- The device battery voltage (useful for replacing the batteries)
- The firmware version (useful for checking which commands to send)


## Temperature and Humidity
The temperature and humidity uplink message on FPort 2 contains:
- The temperature in Celsius
- The humidity in percentage (between 0% to 100%)

---
title: "Quick Start"
description: ""
weight: -1
distributions: null
---

The {{% gn %}} platform is designed to provide an easy way to get started with device development. It comes pre-programmed with a demo app. Please follow this section to learn how to claim your {{% gn %}} device and start using it right away.

<!--more-->

{{< note >}} {{% gnse %}} is currently in the production phase. If you don't have one get yours at [thethingsshop.com](https://www.thethingsshop.com/products/generic-node-sensor-edition)! {{</ note >}}

## Create a new account on {{% tts %}} Cloud

We have a dedicated [{{% tts %}} Cloud tenant for the {{% gn %}}](https://gnse.eu1.cloud.thethings.industries/). To access it, you may create a new account or sign in with The Things ID. You're also free to use our [community network](https://eu1.cloud.thethings.network/) or any other {{% tts %}} Cloud tenant for this purpose.

## Select your region and create an application

Choose a network cluster for your region (EU in this example) and head over to the **Applications** tab. Create new application with a unique **Application ID**. **Application name** and **Description** are optional.

{{< figure src="gnse_claim_0.png" alt="Create new Application" >}}

Once you have a test applicatin ready (like shown on the image below), you can proceed further to claim ownership over your device.

{{< figure src="gnse_claim_1.png" alt="Test application" >}}

## Claim your device ownership

{{% gnse %}} comes factory pre-flashed with the [vanilla app]({{< ref "/applications/se-vanilla" >}}) that uses the on-board secure element to join the LoRaWAN network using the [OTAA](https://www.thethingsindustries.com/docs/devices/abp-vs-otaa/#otaa).

In order to register your device and claim its ownership, you will have to provide information printed on the back of the device during its registration process. 

In your {{% tts %}} application, click on the **Register end device** button to create a new device. To add a new device, you have a few options:

- [Using its QR code](https://www.thethingsindustries.com/docs/devices/adding-devices/#onboarding-devices-using-qr-codes)
- [Using LoRaWAN Device Repository](https://www.thethingsindustries.com/docs/devices/adding-devices/#using-the-lorawan-device-repository)
- [Manually](https://www.thethingsindustries.com/docs/devices/adding-devices/#manually-registering-a-device)

{{< figure src="gnse_claim_2.png" alt="Registering new end device" >}}

Since every {{% gnse %}} comes with a QR code, this method is the easiest one and hence used in this guide.

### Claim the device using its QR code 

If your computer has a webcam then this is the most straightforward option. Just click on the **Scan end device QR code** button (with camera icon), select your webcam input and scan the back of your device. You may also use a smartphone to accomplish this. 

Once the camera is in focus, the Console should be able to successfully scan the QR code and extract the required device credentials. Then, hit **Apply** to continue the registration process.

{{< figure src="gnse_claim_3.png" alt="QR code scanned" >}}

{{% gnse %}} is already included in the [LoRaWAN Device Repository](https://www.thethingsnetwork.org/device-repository/), so you just enter the device brand, model, region profile and the [frequency plan](https://www.thethingsindustries.com/docs/reference/frequency-plans/) for your location (i.e. `The Things Industries` &#8594; `Generic Node (Sensor Edition)`, `EU_863_870 (SF9 for RX2 - recommended)` and simply hit **Register end device**.

{{< figure src="gnse_claim_4.png" alt="Registering end device" >}}

Congratulations! You have successfully registered your {{% gnse %}} device.

{{< figure src="gnse_claim_7.png" alt="Device registered" >}}

## Power up your device

After claiming, you can power up the device using two standard AA batteries, or using a small 3.7V LiPo/Li-ion battery with a standard JST PH 2.0 connector.

If the device powers up correctly, you will see the green LED briefly lighting up indicating a successful boot-up. Pressing the front user button also triggers a sensor sampling followed by an uplink.

## Join the network

The device will automatically attempt to join LoRaWAN network using OTAA. Please make sure there's [{{% tts %}} coverage](https://ttnmapper.org/heatmap/) in your area.  

When the device successfully joins, you will see some verbose activity and raw payload in the **Live Data** tab in your device's overview page. If you are not able to understand the raw bytes, don't panic! It's because you still need to configure the payload formatter. Please copy-paste the following JavaScript formatter code below to the **Payload formatters &#8594; Uplink** section. You can configure a payload formatter on a device or on an application level. 

{{< figure src="gnse_claim_8.png" alt="Payload Formatter" >}}

```javascript
function decodeUplink(input) {
  var data = {};
  data.batt_volt = (input.bytes[0]/10);
  data.temperature = (((input.bytes[1] << 8) + input.bytes[2]) - 500)/10;
  data.humidity = ((input.bytes[3] << 8) + input.bytes[4])/10;
  data.button = input.bytes[5];

  return {
    data: data,
  };
}
```

If everything goes well you should see incoming data packets formatted to a nicely readable form. Well done!

By default, devices are configured to transmit every 10 minutes. You're free to change this by sending hexadecimal values in minutes as a downlink message to the device under **Messaging &#8594; Downlink** on FPort 1. 

{{< figure src="gnse_claim_9.png" alt="Live Data" >}}

Please check out the [Sensor Edition: vanilla application]({{< ref "/applications/se-vanilla" >}}) page to learn more about the uplink, downlinks and the overall firmware behaviour. If you have any questions or feedback please do not hesitate to post it in [The Things Network forum](https://www.thethingsnetwork.org/forum/c/nodes/generic-node/88) or drop us a message on our Twitter channel [@generic_node](https://twitter.com/generic_node/).
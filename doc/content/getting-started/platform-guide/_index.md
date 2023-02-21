---
title: "Quick Start"
description: ""
weight: -1
distributions: null
---

The {{% gn %}} platform is designed to provide an easy way to get started with device development.

<!--more-->

To get started with the {{% gn %}} platform, you typically need two things:

1. {{% gn %}} supported hardware
2. {{% gn %}} supported software

For example, if you are planning to use the {{% gnse %}}, you would need:

1. {{% gnse %}} board
2. {{% gnse %}} application

## Step 1: Get a device


{{% gnse %}} is currently in the production phase. Order one at [thethingsshop.com](https://www.thethingsshop.com/products/generic-node-sensor-edition)!

## Step 2: Create a new account on our dedicated TTS tenant

We have a dedicated The Things Stact (TTS) tenant for the {{% gn %}}. Please head to this url and create a new account. You may also sign in with your Things ID:

**[https://gnse.eu1.cloud.thethings.industries/](https://gnse.eu1.cloud.thethings.industries/console/)**


## Step 3: Select your region and create a new Application

Create new Application with a unique app-id. Adding the name and the description are optional.  
{{< figure src="gnse_claim_0.png" alt="Create new Application" >}}


Once you have a test applicatin similar to this we can move to the next step:
{{< figure src="gnse_claim_1.png" alt="Test application" >}}


## Step 4: Claim your device ownership

{{% gnse %}} comes pre-flashed from the factory which the vanilla app that uses the on-board secure element to join the LoRaWAN network using over the air activation (OTAA) method.

In order to register your device and claim its ownership all you have to do is to use information that's printed on the back of each device during the end device registration process. 

We click on **Register end device** button to create a new one. Here we have two options:
{{< figure src="gnse_claim_2.png" alt="Registering new end device" >}}

### Step 4.1: Claiming by QR code 

If your PC/Laptop has a webcam then this is the easiest option. Just click on the **Scan end device QR code** button (w/ camera icon) and select your webcam input and scan the back of your device. 

Once the webcam is in focus console would be able to successfuly scan the QR code and extract required device credential information. Please hit **Apply** to continue with the registration process.

{{< figure src="gnse_claim_3.png" alt="QR code scanned" >}}

{{% gnse %}} is already declared in the [device repository](https://www.thethingsnetwork.org/device-repository/), so you just input the device brand, model, region profile and the frequency plan for your location (i.e. The Things Industries -> Generic Node (SE), EU_863_870, SF9 for RX2 - recommended ) and simply hit **Register end device**.

{{< figure src="gnse_claim_4.png" alt="Registering end device" >}}

Congratulations! You have successfully registered your {{% gnse %}} device. You may proceed to ***Step 5***.

{{< figure src="gnse_claim_7.png" alt="Device registered" >}}


### Step 4.2: Claiming by manual input

If you do not have a webcam, but have a smartphone at hand, you can manually extract the needed information from the QR code yourself. 

{{< figure src="gnse_claim_2.png" alt="Registering new end device" >}}

Please use a QR code scanner app (some smartphones have built-in, otherwise please download it from the app store) to extract device authentication code.

Once you scan it, you'll a string very similar to this:
`URN:DEV:LW:70B3D57ED0000000_0004A31000XXXXXX_00000000_VXXXXXXXX`

The first two value sections of the string corresponds to the AppEUI(JoinEUI) and the  DevEUI for this device. However for the claiming process you also need the "Claim authentication code" which is a 4 byte value and it's the last 8 characters of this string (omitting the leading "V" character). You should have these value at hand to be able to claim your device successfuly: 

- JoinEUI: `70B3D57ED0000000`
- DevEUI: `0004A31000XXXXXX`
- Claim code: `XXXXXXXX`


{{< figure src="gnse_claim_6.png" alt="Manual input" >}}



## Step 5: Powering up your device

After claiming, you can power up the device using two standard AA batteries or with a small 3.7V LiPo/Li-ion battery.

If the device powers up correctly, you will see the green turning ON thus indicating successful boot-up.

## Step 6: Joining the network and seeing the first data packets

The device will attempt to join LoRaWAN network using OTAA. Please make sure there's a TTN/TTS Gateway coverage in your area. 

When the device joins successfully you will see some verbose activity and payload in the ***Live Data*** tab of the device console. If you are not able to understand the raw bytes, don't panic!, it's because we still need to modify the javascript payload formatter. Please copy-paste the code below to the ***Payload Formatters -> Uplink*** section of your application. 

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

If everything goes well you should see data packets in correctly formatted form. Well done!

{{< figure src="gnse_claim_9.png" alt="Live Data" >}}

Please see the [Sensor Edition: vanilla application]({{< ref "/applications/se-vanilla" >}}) page to learn more about the uplink, downlinks and the overall firmware behaviour. 
---
title: "Quick Start"
description: ""
weight: -1
distributions: null
---

The {{% gn %}} platform is designed to provide an easy way to get started with device development. It comes pre-programmed with a demo app. 
<!--more-->
 {{% gnse %}} is currently in the production phase. If you don't have one get yours at [thethingsshop.com](https://www.thethingsshop.com/products/generic-node-sensor-edition)! Please follow these steps to claim your new device and start using it right away.

<!--more-->


## Step 1: Create a new account on {{% tts %}} Cloud

We have a dedicated [{{% tts %}} Cloud tenant for the {{% gn %}}](https://gnse.eu1.cloud.thethings.industries/). To access it, you may create a new account or sign in with The Things ID. You're also free to use our [community network](https://eu1.cloud.thethings.network/) or any other {{% tts %}} Cloud tenant for this purpose.



## Step 2: Select your region and create your application

Choose a network cluster for your region (EU in this example) and head over to the applications tab. Create new application with a unique **Application ID**. Application name and description are optional.  
{{< figure src="gnse_claim_0.png" alt="Create new Application" >}}

Once you have a test applicatin similar to this we can move to the next step:
{{< figure src="gnse_claim_1.png" alt="Test application" >}}


## Step 3: Claim your device ownership

{{% gnse %}} comes pre-flashed from the factory which the vanilla app that uses the on-board secure element to join the LoRaWAN network using over the air activation (OTAA) method.

In order to register your device and claim its ownership all you have to do is to use information that's printed on the back of each device during the end device registration process. 

We click on **Register end device** button to create a new one. Here we have two options:
{{< figure src="gnse_claim_2.png" alt="Registering new end device" >}}

### Step 4: Claiming by QR code 

If your PC/Laptop has a webcam then this is the easiest option. Just click on the **Scan end device QR code** button (w/ camera icon) and select your webcam input and scan the back of your device. You may also use a smartphone to accomplish this. 

Once the camera is in focus, console would be able to successfuly scan the QR code and extract the required device credentials. Please hit **Apply** to continue the registration process.

{{< figure src="gnse_claim_3.png" alt="QR code scanned" >}}

{{% gnse %}} is already included in the [device repository](https://www.thethingsnetwork.org/device-repository/), so you just input the device brand, model, region profile and the frequency plan for your location (i.e. The Things Industries &#8594; Generic Node (SE), EU_863_870, SF9 for RX2 - recommended ) and simply hit **Register end device**.

{{< figure src="gnse_claim_4.png" alt="Registering end device" >}}

Congratulations! You have successfully registered your {{% gnse %}} device. You may proceed to ***Step 5***.

{{< figure src="gnse_claim_7.png" alt="Device registered" >}}

## Step 5: Powering up your device

After claiming, you can power up the device using two standard AA batteries or with a small 3.7V LiPo/Li-ion battery with a standard JST PH 2.0 connector.

If the device powers up correctly, you will see the green LED briefly lighting up indicating successful boot-up. Pressing the front user button also triggers a sensor sampling followed by an uplink.

## Step 6: Joining the network and seeing the first data packets

The device will attempt to join LoRaWAN network using OTAA. Please make sure there's {{% tts %}} coverage in your area.  

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

If everything goes well you should see data packets in correctly formatted form. Well done!
By default, devices are configured to transmit every 10 minutes. You're free to change this by sending hexadecimal values in minutes as a downlink message to the device under **Messaging &#8594; Downlink** on FPort 1. 

{{< figure src="gnse_claim_9.png" alt="Live Data" >}}

Please see the [Sensor Edition: vanilla application]({{< ref "/applications/se-vanilla" >}}) page to learn more about the uplink, downlinks and the overall firmware behaviour. If you have any questions or feedback please do not hesitate to post it in our [forum](https://www.thethingsnetwork.org/forum/c/nodes/generic-node/88) or drop us a message on our social media channels [@generic_node](https://twitter.com/generic_node/).
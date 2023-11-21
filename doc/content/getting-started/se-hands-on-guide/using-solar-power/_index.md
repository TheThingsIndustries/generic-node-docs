---
title: "Powering GNSE Using Voltaic Solar Charger"
description: ""
weight:
distributions: null
---

This tutorial will show you how to power the {{% gnse %}} using the [Voltaic Lithium-Ion Capacitor Solar Charger](https://voltaicsystems.com/LIC-solar-charger/), which includes a 250F Lithium-Ion Capacitor for power storage and a Linear regulator (C116). The solar charger outputs an unregulated 2.5V - 3.8V, which is sufficient for powering the {{% gnse %}} as it accepts a range of input voltages from 2.2V to 5.5V. 

{{< figure src="voltaic-licap-solar-charger.jpg" alt="Voltaic Li-Ion Capacitor Solar Charger" >}}

Additionally, you will need a [0.3W 6V Mini Solar Panel - ETFE](https://voltaicsystems.com/0-3-watt-6-volt-solar-panel-etfe/) to work with the solar charger.

{{< figure src="mini-solar-panel.jpg" alt="Mini Solar Panel" >}}

Take a 2-pin JST (female) cable. Solder its wires to the Voltaic mini solar panel, ensuring that the negative and positive wires are correctly attached to the corresponding pads.

{{< figure src="soldering-solar-panel.jpg" alt="Soldering Solar Panel" >}}

Connect the female JST connector of the mini solar panel to the male JST connector marked as 'IN' on the solar charger.

{{< figure src="solar-charger-in.png" alt="Solar Charger IN" >}}

{{< note "Using a multimeter, check the voltage at the JST connector on the solar charger marked as 'OUT'. If the output voltage is below 2.5V, leave the mini solar panel under sunlight for some time to charge the supercapacitor." />}}

Take another cable with female JST 2-pin connectors at both ends. Connect one end to the universal power input JST connector marked as 'BATTERY' on the {{% gnse %}} and the other end to the JST connector marked as 'OUT' on the Voltaic Lithium-Ion Capacitor Solar Charger.

{{< figure src="solar-charger-gnse.png" alt="Solar Charger GNSE" >}}

The {{% gnse %}} will be powered by the solar power stored in the supercapacitor.

{{< figure src="gnse-on.png" alt="GNSE ON" >}}

Program your {{% gnse %}} with one of our [sample applications]({{< ref "/applications" >}}), and then connect it to [{{% tts %}}]({{< ref "/platform-guide" >}}).

Verify that the messages sent from the {{% gnse %}} are received on {{% tts %}} side.



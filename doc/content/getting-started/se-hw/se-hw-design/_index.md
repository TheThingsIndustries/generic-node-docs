---
title: "Sensor Edition Hardware Design Tools"
description: ""
weight: -1
distributions: null
---
This section helps you set up hardware design tools and explore the reference hardware design.

<!--more-->

## Prerequisites

1. [KiCAD v6 (newer versions will work too)](https://kicad.org/)
2. [FreeCAD](https://www.freecadweb.org/)

## Setup

1. Open KiCad and press the **Open existing project** button.
2. Navigate to `generic-node-se/Hardware/pcb-stm32wl/` and choose `pcb-stm32wl.pro`.

{{< figure src="se-hw-design-kicad.png" alt="KiCad open project" class="plain" >}}

## Exploring {{% gnse %}} schematics

1. Double click on the `pcb-stm32wl.sch`.

{{< figure src="se-hw-design-sch.png" alt="KiCad open schematics" class="plain" >}}

2. You should now be able to view and explore the schematics design.

{{< figure src="se-hw-design-sch-preview.png" alt="KiCad schematics view" class="plain" >}}

## Exploring {{% gnse %}} PCB layout

1. Double click on the `pcb-stm32wl.kicad_pcb`.

{{< figure src="se-hw-design-pcb.png" alt="KiCad open schematics" class="plain" >}}

2. You should now be able to view and explore the PCB layout.

{{< figure src="se-hw-design-pcb-preview.png" alt="KiCad schematics view" class="plain" >}}

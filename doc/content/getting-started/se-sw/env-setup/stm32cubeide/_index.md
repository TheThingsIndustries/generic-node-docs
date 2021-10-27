---
title: "STM32CubeIDE (Eclipse)"
description: ""
weight: 2
distributions: null
---

This section helps you set up the environment and build an application using ST STM32CubeIDE.

<!--more-->

## Prerequisites

1. [Java(TM) SE Runtime Environment](https://www.oracle.com/java/technologies/javase-jre8-downloads.html)
2. [STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html)

{{< note " STM32CubedIDE 1.5.0 runs with JRE 1.8.0_271." />}}

## Setup

1. Clone the {{% gnse %}} GitHub project as mentioned [before](http://localhost:1313/getting-started/se-sw/) and checkout the `develop` branch:

```bash
git checkout develop
```

2. Launch STM32CubeIDE, choose your workspace location and press **Launch**.

{{< figure src="cubeide_workspace.png" alt="cubeide workspace" class="plain" >}}

3. Choose **File &#8594; Import**.

{{< figure src="cubeide_import.png" alt="cubeide import" class="plain" >}}

4. Select **Existing Projects into Workspace** and click **Next >**.

{{< figure src="cubeide_import_existing.png" alt="cubeide import existing" class="plain" >}}

5. Choose **Browse...**, navigate to the cloned {{% gnse %}} project folder and click **Finish**.

{{< figure src="cubeide_projects.png" alt="cubeide projects" class="plain" >}}

6. You should now be able to see all imported projects in the **Project Explorer** on the left. 

{{< figure src="cubeide_imported.png" alt="cubeide imported" class="plain" >}}

## Build example

To build any of the imported projects, right-click on it and select **Build Project**.

{{< figure src="cubeide_build.png" alt="cubeide build" >}}

{{< note >}} If you build the `basic` app, find your newly built application in the `generic-node-se/Software/app/basic/Debug/` folder. {{</ note >}}

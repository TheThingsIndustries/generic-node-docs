---
title: "STM32CubeIDE (Eclipse)"
description: ""
weight: 2
distributions: null
---
Setup the environment and build an application using ST STM32CubeIDE.

<!--more-->

## Prerequisites

- [Java(TM) SE Runtime Environment](https://www.oracle.com/java/technologies/javase-jre8-downloads.html)
- [STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html)

{{< note " STM32CubedIDE 1.5.0 runs with JRE 1.8.0_271" />}}

## Setup

1. Clone project & checkout `develop` branch:

```bash
$ git clone --branch develop --recurse-submodules \
https://github.com/TheThingsIndustries/generic-node-se.git
```
2. Launch STM32CubeIDE and choose your Workspace location and press **Launch**
{{< figure src="cubeide_workspace.png" alt="cubeide workspace" >}}

3. Choose **File -> Import**
{{< figure src="cubeide_import.png" alt="cubeide import" >}}

4. Choose **Existing Projects into Workspace** and press **Next >**
{{< figure src="cubeide_import_existing.png" alt="cubeide import existing" >}}

5. Choose **Browse...** and navigate to the cloned project folder and click **Finish**
{{< figure src="cubeide_projects.png" alt="cubeide projects" >}}

6. You should be able to see all the imported projects in the Projects Explorer
{{< figure src="cubeide_imported.png" alt="cubeide imported" >}}

## Build Example

You can build any of the imported projects by right clicking the desired project and choosing **Build Project**
{{< figure src="cubeide_build.png" alt="cubeide build" >}}

For example: If you choose to build the basic app, will find your newly built application in the `generic-node-se/Software/app/basic/Debug/` folder.

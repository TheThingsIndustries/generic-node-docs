---
title: "Setup"
description: ""
weight: 1
---

This application does not require any additional setup as it acts as a template.
You can add more functionality to this application by following the steps below:

1. Add your source files in `app_template`
2. Add your library paths to `CMakeLists.txt` and STM32CubeIDE `.cproject`,`.project` similar to`GNSE_BSP`library

{{< note >}} Keep in mind that you can also see how this is done in the other example applications located in `app` folder. {{</ note >}}

If you are satisfied with the application behavior, you can rename it and add the new app name to `CMakeLists.txt` under `APP_LIST`.

> Please remember to adjust the paths of the source files according to your new application name.

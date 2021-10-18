---
title: "Visual Studio Code"
description: ""
weight: 3
distributions: null
---
Setup the environment and build an application using Visual Studio Code.

<!--more-->

## Prerequisites

1. [Visual Studio Code](https://code.visualstudio.com/)
2. [CMake Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools) or[Command-line Prerequisites](/getting-started/se-sw/env-setup/cmd/) or [Docker Prerequisites](/getting-started/se-sw/env-setup/docker/)

## Setup

1. Clone the project & checkout `develop` branch:

```bash
$ git clone --branch develop --recurse-submodules \
https://github.com/TheThingsIndustries/generic-node-se.git
```
2. Select the **Open Folder** button and navigate to the location of the cloned project.

{{< figure src="vscode_openfolder.png" alt="vscode open folder" >}}

## Build Examples

Visual Studio Code provides multiple methods to build an application.

### Using CMake and VSCode CMake Tools

After installing [CMake Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools), you can add the following CMake configurations to `settings.json` inside `.vscode` folder in order to build the `basic` application.

```json
{
    "cmake.generator":"Ninja",
    "cmake.configureSettings": {
        "TARGET_APP":"basic",
        "CMAKE_BUILD_TYPE":"Debug",
        "CMAKE_TOOLCHAIN_FILE":"${workspaceFolder}/Software/cross.cmake"
    },
    "cmake.sourceDirectory": "${workspaceFolder}/Software",
    "cmake.buildDirectory":"${workspaceFolder}/Software/build",
}
```

{{< figure src="vscode_cmake_settings.png" alt="vscode CMake settings" >}}

You can adjust [CMake settings](https://github.com/microsoft/vscode-cmake-tools/blob/develop/docs/cmake-settings.md#cmake-settings) according to your environment.

For example, In Windows, you can adjust the generator to `MinGW Makefiles` instead of `Ninja`:

```
"cmake.generator":"MinGW Makefiles",
```

You can also adjust the `TARGET_APP` to `basic_lorawan` or any other preferred application:

```
"TARGET_APP":"basic_lorawan",
```

After adjusting your CMake configurations, make sure `TOOLCHAIN_PREFIX` is configured in `generic-node-se/Software/cross.cmake` similar to [Command-line]({{< ref "/getting-started/se-sw/env-setup/cmd" >}}) setup.

Finally, you can invoke the following commands from VSCode Command Palette with `Cmake: Configure` followed by `Cmake: Build`.

{{< figure src="vscode_cmake_build.png" alt="vscode CMake build" >}}

### Using CMake and VSCode Terminal

The [Command-line]({{< ref "/getting-started/se-sw/env-setup/cmd" >}}) build commands can be used with the Visual Studio Code [Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal).

{{< figure src="vscode_terminal.png" alt="vscode terminal" >}}

### Using Docker

The [Docker]({{< ref "/getting-started/se-sw/env-setup/docker" >}}) build commands can be used with Visual Studio Code [Docker container plugins](https://code.visualstudio.com/docs/remote/containers).

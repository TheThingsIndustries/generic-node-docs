---
title: "Visual Studio Code"
description: ""
weight: 3
distributions: null
---

This section helps you set up the environment and build an application using Visual Studio Code.

<!--more-->

## Prerequisites

1. [Visual Studio Code](https://code.visualstudio.com/)
2. [CMake Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools), or tools from [Command-line Prerequisites](/getting-started/se-sw/env-setup/cmd/) or [Docker Prerequisites](/getting-started/se-sw/env-setup/docker/)

## Setup

1. Clone the {{% gnse %}} GitHub project as mentioned [before](http://localhost:1313/getting-started/se-sw/) and checkout the `develop` branch:

```bash
git checkout develop
```

2. Select the **Open Folder** button in Visual Studio Code and navigate to the location of the cloned {{% gnse %}} project.

{{< figure src="vscode_openfolder.png" alt="vscode open folder" class="plain" >}}

## Build examples

Visual Studio Code provides multiple methods to build an application. This section contains some commonly used ones.

### Using CMake and VSCode CMake tools

After installing [CMake Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools), you can add the following CMake configuration to the `settings.json` file, that is located in the `.vscode` folder, in order to build the `basic` application.

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

{{< figure src="vscode_cmake_settings.png" alt="vscode CMake settings" class="plain" >}}

You can adjust [CMake settings](https://github.com/microsoft/vscode-cmake-tools/blob/master/docs/cmake-settings.md) according to your environment.

For example, on Windows, you can adjust the generator to `MinGW Makefiles` instead of `Ninja`:

```
"cmake.generator":"MinGW Makefiles",
```

You can also adjust the `TARGET_APP` to `basic_lorawan` or any other application:

```
"TARGET_APP":"basic_lorawan",
```

After adjusting your CMake configuration, make sure `TOOLCHAIN_PREFIX` is configured in the `generic-node-se/Software/cross.cmake`. See [Command-line]({{< ref "/getting-started/se-sw/env-setup/cmd" >}}) section for examples.

Finally, you can invoke `Cmake: Configure` from VSCode Command Palette, followed by `Cmake: Build`.

{{< figure src="vscode_cmake_build.png" alt="vscode CMake build" class="plain" >}}

### Using CMake and VSCode Terminal

The [Command-line]({{< ref "/getting-started/se-sw/env-setup/cmd" >}}) build commands can be used with the Visual Studio Code [Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal).

{{< figure src="vscode_terminal.png" alt="vscode terminal" class="plain" >}}

### Using Docker

The [Docker]({{< ref "/getting-started/se-sw/env-setup/docker" >}}) build commands can be used with Visual Studio Code [Docker container plugins](https://code.visualstudio.com/docs/remote/containers).

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
2. [Command-line Prerequisites](/getting-started/se-sw/env-setup/cmd/) or [Docker Prerequisites](/getting-started/se-sw/env-setup/docker/)

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

### Using CMAKE and VSCODE Terminal

The [Command-line](/getting-started/se-sw/env-setup/cmd/) build commands can be used with the Visual Studio Code [Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal).

{{< figure src="vscode_terminal.png" alt="vscode terminal" >}}

### Using Docker

The [Docker](/getting-started/se-sw/env-setup/docker/) build commands can be used with Visual Studio Code [Docker container plugins](https://code.visualstudio.com/docs/remote/containers).

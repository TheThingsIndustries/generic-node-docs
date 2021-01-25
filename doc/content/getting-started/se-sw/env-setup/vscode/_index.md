---
title: "Visual Studio Code"
description: ""
weight: 3
distributions: null
---
Setup the environment and build an application using Visual Studio Code.

<!--more-->

## Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Command Line Prerequisites](/getting-started/se-sw/env-setup/cmd/) or [Docker Prerequisites](/getting-started/se-sw/env-setup/docker/)

## Setup

1. Clone project & checkout `develop` branch:

```bash
$ git clone --branch develop --recurse-submodules \
https://github.com/TheThingsIndustries/generic-node-se.git
```
2. Choose **Open Folder** and navigate to the cloned project location
{{< figure src="vscode_openfolder.png" alt="vscode open folder" >}}

## Build Example

Visual Studio Code provides multiple methods to build an application.

### Using CMAKE and VSCODE Terminal

The [Command Line](/getting-started/se-sw/env-setup/cmd/) build commands can be used with Visual Studio Code [Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal).

{{< figure src="vscode_terminal.png" alt="vscode terminal" >}}

### Using Docker

The [Docker](/getting-started/se-sw/env-setup/docker/) build commands can be used with Visual Studio Code [Docker container plugins](https://code.visualstudio.com/docs/remote/containers).

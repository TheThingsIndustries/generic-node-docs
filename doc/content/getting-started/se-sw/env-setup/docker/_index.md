---
title: "Docker"
description: ""
weight: 1
distributions: null
---

This section helps you set up the environment and build an application using a Docker image.

<!--more-->

## Prerequisites

1. [Docker](https://docs.docker.com/get-docker/)

## Setup

1. Clone the {{% gnse %}} GitHub project as mentioned [before](http://localhost:1313/getting-started/se-sw/) and checkout the `develop` branch:

```bash
git checkout develop
```

2. Run the build command:

```bash
$ cd generic-node-se/
$ docker build -t gnse_img ./Software
```

If the image build was successful, you will be able to use the image as your build environment.

3. Add the following line to the `generic-node-se/Software/cross.cmake` file:

`set(TOOLCHAIN_PREFIX "/toolchain/gcc-arm-none-eabi-9-2020-q2-update/")`

## Build example

Bind your {{% gnse %}} project folder to the newly built Docker image:


```bash
$ cd generic-node-se\
$ docker run \
-it \
--name gnse \
--mount type=bind,source="$(pwd)"/Software,target=/gnse \
gnse_img
```

You should now be able to build your application in the attached container:

```bash
$ mkdir -p build/debug
$ cd build/debug
$ cmake -G Ninja ../.. -DCMAKE_BUILD_TYPE=Debug -DCMAKE_TOOLCHAIN_FILE=../../cross.cmake -DTARGET_APP=basic
$ ninja -v
```

{{< note >}} You can also configure the following build fields in the `cmake` command:
- `DTARGET_APP` to build a different application (try `-DTARGET_APP=basic_lorawan`)
- `DCMAKE_BUILD_TYPE` to `Release` (instead of `Debug`) to build a smaller application for release purposes
{{</ note >}}

Find your newly built application in the `generic-node-se/Software/build/debug/app/basic` folder.

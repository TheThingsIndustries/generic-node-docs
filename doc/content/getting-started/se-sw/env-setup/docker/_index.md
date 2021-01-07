---
title: "Docker"
description: ""
weight: 1
distributions: null
---

Setup the environment and build an application using a Docker image.

<!--more-->

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)

## Setup

1. Clone project & checkout `develop` branch:

```bash
$ git clone --branch develop --recurse-submodules \
https://github.com/TheThingsIndustries/generic-node-se.git
```

2. Run the build command:

```bash
$ cd generic-node-se/
$ docker build -t gnse_img ./Software
```
If the image build was successful, you should be able to use the image as your build environment.

3. Add this line to `generic-node-se/Software/cross.cmake` file:

`set(TOOLCHAIN_PREFIX "/toolchain/gcc-arm-none-eabi-9-2020-q2-update/")`

## Build Example

You can attach and bind your project folder to your new image

```bash
$ cd generic-node-se\
$ docker run \
-it \
--name gnse \
--mount type=bind,source="$(pwd)"/Software,target=/gnse \
gnse_img
```

Now you should be able to build your application in the attached container
```bash
$ mkdir -p build/debug
$ cd build/debug
$ cmake -G ninja ../.. -DCMAKE_BUILD_TYPE=Debug -DCMAKE_TOOLCHAIN_FILE=../../cross.cmake -DTARGET_APP=basic
$ ninja -v
```

You will find your newly built application in the `generic-node-se/Software/build/debug/app/basic` folder.

You can also configure the following build fields in the `cmake` command:
- `TARGET_APP` to build a different application (try `-DTARGET_APP=basic_lorawan`)
- `DCMAKE_BUILD_TYPE` to `Release` instead of `Debug` to build a smaller application for release purposes

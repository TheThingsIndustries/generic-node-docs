---
title: "Docker"
description: ""
weight: 1
distributions: null
---

Setup the environment and build an application using a docker image.

<!--more-->

## Requirements

-  <a href="https://github.com/TheThingsIndustries/generic-node-se" target="_blank">  {{% gnse %}} Github repository</a>
-  [Docker](https://docs.docker.com/get-docker/)

## Setup your image

1. Navigate to your project root directory
2. Run the build command

```
$ cd generic-node-se/

$ docker build -t gnse_img ./Software
```
If the image build was successful, you should be able to use the image as your build environment.

3. Add this line to `generic-node-se/Software/cross.cmake`

`set(TOOLCHAIN_PREFIX "/toolchain/gcc-arm-none-eabi-9-2020-q2-update/")`

## Build example

- You can attach and bind your project folder to your new image

```
$ cd generic-node-se\

$ docker run \
-it \
--name gnse \
--mount type=bind,source="$(pwd)"/Software,target=/gnse \
gnse_img
```

- Now you should be able to build your application in the attached container
```
$ mkdir -p build/debug

$ cd build/debug

$ cmake -G ninja ../.. -DCMAKE_BUILD_TYPE=Debug -DCMAKE_TOOLCHAIN_FILE=../../cross.cmake -DTARGET_APP=basic

$ ninja -v
```
You can configure the following:
- `DCMAKE_BUILD_TYPE` to `Release` or `Debug`
- `TARGET_APP` to any supported app (try `-DTARGET_APP=basic_lorawan`)

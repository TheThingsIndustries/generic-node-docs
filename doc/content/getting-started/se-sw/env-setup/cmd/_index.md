---
title: "Command-line"
description: ""
weight: -1
distributions: null
---

Setup the environment and build an application using the command-line.

<!--more-->

## Prerequisites

To be able to build the applications from the command-line, you need to install the necessary tools first:

1. [Git](https://git-scm.com/)
2. [arm-none-eabi-gcc](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads)
3. [CMAKE](https://cmake.org/download/)
4. [Ninja](https://ninja-build.org/) or [Make](https://www.gnu.org/software/make/) or [MinGW](https://osdn.net/projects/mingw/releases/)

{{< note >}} The Make tool might already be installed on your Unix-based system. Run `make -v` in your terminal to check. {{</ note >}}

{{< note >}} In Windows environment, make sure `mingw32-make.exe` can be used from cmd, i.e. that it gets recognized as a command. {{</ note >}}

## Setup

1. Clone project & checkout `develop` branch:

```bash
$ git clone --branch develop --recurse-submodules \
https://github.com/TheThingsIndustries/generic-node-se.git
```
2. Set `TOOLCHAIN_PREFIX` with your compiler path in the `/Software/cross.cmake` file.

## Mac OSX & Linux Example

Adjust this line with your compiler path:

` set(TOOLCHAIN_PREFIX "/Users/USER/opt/gcc-arm-none-eabi-9-2020-q2-update/")`

and add it to `generic-node-se/Software/cross.cmake` file.

Navigate to the project folder and run the following commands:

```bash
$ cd generic-node-se/Software/
$ mkdir -p build/debug
$ cd build/debug
```

With Make:

```bash
$ cmake ../.. -DCMAKE_BUILD_TYPE=Debug -DCMAKE_TOOLCHAIN_FILE=../../cross.cmake -DTARGET_APP=basic
$ make
```

Or with Ninja:

```bash
$ cmake -G Ninja ../.. -DCMAKE_BUILD_TYPE=Debug -DCMAKE_TOOLCHAIN_FILE=../../cross.cmake -DTARGET_APP=basic
$ ninja -v
```

## Windows Example

Adjust this line with your compiler path:

` set(TOOLCHAIN_PREFIX "C:/Program Files (x86)/GNU Tools ARM Embedded/9 2020-q2-update/")`

and add it to `generic-node-se/Software/cross.cmake` file.

Navigate to the project folder and run the following commands:

```cmd
$ cd generic-node-se\Software\
$ mkdir build\debug
$ cd build\debug
$ cmake -G "MinGW Makefiles" ../.. -DCMAKE_BUILD_TYPE=Debug -DCMAKE_TOOLCHAIN_FILE=../../cross.cmake -DTARGET_APP=basic
$ mingw32-make.exe
```

You will find your newly built application in the `generic-node-se/Software/build/debug/app/basic` folder.

You can also configure the following build fields in the `cmake` command:
- `TARGET_APP` to build a different application (try `-DTARGET_APP=basic_lorawan`)
- `DCMAKE_BUILD_TYPE` to `Release` instead of `Debug` to build a smaller application for release purposes

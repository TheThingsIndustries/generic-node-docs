---
title: "Command-line"
description: ""
weight: -1
distributions: null
---

This section helps you set up the environment and build an application using the command-line.

<!--more-->

## Prerequisites

To be able to build the applications from the command-line, you need to install the following tools first:

1. [Git](https://git-scm.com/)
2. [arm-none-eabi-gcc](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads)
3. [CMake](https://cmake.org/download/)
4. [Ninja](https://ninja-build.org/), [Make](https://www.gnu.org/software/make/) or [MinGW](https://osdn.net/projects/mingw/releases/)

{{< note >}} If you are using a Unix-based OS, [Make](https://www.gnu.org/software/make/) might already be installed. Check this by running `make -v` in your terminal. {{</ note >}}

{{< note >}} On Windows OS, make sure that `mingw32-make.exe` can be used from command-line, i.e. that it gets recognized as a command. {{</ note >}}

## Setup

1. Clone the {{% gnse %}} GitHub project as mentioned [before]({{< ref "/getting-started/se-sw" >}}) and checkout the `develop` branch:

```bash
git checkout develop
```

2. Set `TOOLCHAIN_PREFIX` with your compiler path in the `/Software/cross.cmake` file.

## macOS & Linux example

To set up environment on macOS or Linux, you first need to adjust the following line with your compiler path:

`set(TOOLCHAIN_PREFIX "/Users/USER/opt/gcc-arm-none-eabi-9-2020-q2-update/")`

Then, you need to add this line to the `generic-node-se/Software/cross.cmake` file.

After that, navigate to the project folder and run the following commands:

```bash
$ cd generic-node-se/Software/
$ mkdir -p build/debug
$ cd build/debug
```

Now build the application with Make:

```bash
$ cmake ../.. -DCMAKE_BUILD_TYPE=Debug -DCMAKE_TOOLCHAIN_FILE=../../cross.cmake -DTARGET_APP=basic
$ make
```

or with Ninja:

```bash
$ cmake -G Ninja ../.. -DCMAKE_BUILD_TYPE=Debug -DCMAKE_TOOLCHAIN_FILE=../../cross.cmake -DTARGET_APP=basic
$ ninja -v
```

## Windows example

To set up environment on Windows, you first need to adjust the following line with your compiler path:

` set(TOOLCHAIN_PREFIX "C:/Program Files (x86)/GNU Tools ARM Embedded/9 2020-q2-update/")`

Then, add this line to the `generic-node-se/Software/cross.cmake` file.

Next, navigate to the {{% gnse %}} project folder and run the following commands:

```cmd
$ cd generic-node-se\Software\
$ mkdir build\debug
$ cd build\debug
$ cmake -G "MinGW Makefiles" ../.. -DCMAKE_BUILD_TYPE=Debug -DCMAKE_TOOLCHAIN_FILE=../../cross.cmake -DTARGET_APP=basic
$ mingw32-make.exe
```

{{< note >}} You can configure the following fields in the `cmake` command:
- `DTARGET_APP` to build a different application (try `-DTARGET_APP=basic_lorawan`)
- `DCMAKE_BUILD_TYPE` to `Release` (instead of `Debug`) to build a smaller application for release purposes
{{</ note >}}

For examples above, find your newly built application in the `generic-node-se/Software/build/debug/app/basic` folder.

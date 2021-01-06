---
title: "Command-line"
description: ""
weight: -1
distributions: null
---

Setup the environment and build an application using the command-line.

<!--more-->

## Requirements
Install the tools to be able to build applications from the command line.

### Version control
- [Git](https://git-scm.com/)

### Compiler
- [arm-none-eabi-gcc](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads)

### Build tools
- [CMAKE](https://cmake.org/download/)
- [Ninja](https://ninja-build.org/) or [Make](https://www.gnu.org/software/make/) or [MinGW](https://osdn.net/projects/mingw/releases/)

{{< note >}}
The [Make](https://www.gnu.org/software/make/) tool might be already installed on your unix based system, try `make -v`

Install [MinGW](http://mingw.org) for Windows environments and make sure `mingw32-make.exe` can be used from cmd (as a recognized command)
{{</ note >}}



## Setup
1. Clone project & checkout `develop` branch
```
$ git clone --branch develop --recurse-submodules \
https://github.com/TheThingsIndustries/generic-node-se.git
```
2. Set `TOOLCHAIN_PREFIX` with your compiler path in the `/Software/cross.cmake` file

## Mac OSX & Linux example

1. Add this line to `generic-node-se/Software/cross.cmake` after you adjust it with your compiler path

` set(TOOLCHAIN_PREFIX "/Users/USER/opt/gcc-arm-none-eabi-9-2020-q2-update/")`

2. Navigate to the project folder and run the commands

```
$ cd generic-node-se/Software/

$ mkdir -p build/debug

$ cd build/debug
```

With [Make](https://www.gnu.org/software/make/)

```
$ cmake ../.. -DCMAKE_BUILD_TYPE=Debug -DCMAKE_TOOLCHAIN_FILE=../../cross.cmake -DTARGET_APP=basic

$ make
```

Or with [Ninja](https://ninja-build.org/)

```
$ cmake -G ninja ../.. -DCMAKE_BUILD_TYPE=Debug -DCMAKE_TOOLCHAIN_FILE=../../cross.cmake -DTARGET_APP=basic

$ ninja -v
```

## Windows example

1. Add this line to `generic-node-se/Software/cross.cmake` after you adjust it with your compiler path

` set(TOOLCHAIN_PREFIX "C:/Program Files (x86)/GNU Tools ARM Embedded/9 2020-q2-update/")`

2. Navigate to the project folder and run the commands

```
$ cd generic-node-se\Software\

$ mkdir build\debug

$ cd build\debug

$ cmake -G "MinGW Makefiles" ../.. -DCMAKE_BUILD_TYPE=Debug -DCMAKE_TOOLCHAIN_FILE=../../cross.cmake -DTARGET_APP=basic

$ mingw32-make.exe
```
You can configure the following:
- `DCMAKE_BUILD_TYPE` to `Release` or `Debug`
- `TARGET_APP` to any supported app (try `-DTARGET_APP=basic_lorawan`)

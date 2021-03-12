---
title: "Sensor Edition Software Setup"
description: ""
weight: 2
distributions: null
---

Get started by installing all the tools needed and setting up your environment to proceed with building the applications.

<!--more-->

## Working with the Generic Node Sensor Edition Repository

It is always a good idea to get familiar with the available source code and the applications that are compatible with your board. Check out the <a href="https://github.com/TheThingsIndustries/generic-node-se" target="_blank">{{% gnse %}} on Github</a> to get familiar with the repository structure.

Next, clone the repository to get its local copy on your machine by running the following command:

```bash
$ git clone --branch develop \
--recurse-submodules \
https://github.com/TheThingsIndustries/generic-node-se.git
```
If you are not too familiar with Git, visit the official GitHub documentation to <a href="https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository" target="_blank">learn to clone a repository</a>.

If you are planning to develop custom applications and/or contribute to the source code, see the [Environment setup]({{< ref "/getting-started/se-sw/env-setup" >}}) guide.

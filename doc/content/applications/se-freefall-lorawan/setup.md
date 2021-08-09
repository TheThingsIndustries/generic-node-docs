---
title: "Setup"
description: ""
weight: 1
---

1. See if your device can detect free fall events. The default values should be enough to trigger on minor drops (try to not break the device) or even sudden movements with your arm whilst holding the GNSE. A message containing the counter should be transmitted, as was mentioned in `Description`(#description). If none can be seen, try to debug the device as described in the `Observation`(#observation) section.
2. Test you setup for free fall events and change it to a value you prefer (with the steps in `Configuration`(#configuration)). Be aware that `ACC_FF_THRESHOLD` would have to be increased to have the accelerometer determine a free fall event has occurred at a lower limit whilst `ACC_FF_DURATION` would have to be decreased for a similar effect.

---
type: cookbook
name: "Activate and deactivate parameters for pattrstorage"
summary: "This example shows how you can ignore certain preset parameters in pattrstorage."
chapter: "Max"
keywords: ["pattrstorage", "pattr", "active"]
objects: ["change", "pattr", "pattrstorage", "select", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/Activate&DeactivateParametersForPattrstorage.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Activate&DeactivateParametersForPattrstorage.PNG"
---

# Activate and deactivate parameters for pattrstorage

This example shows how you can ignore certain preset parameters in **pattrstorage**. The *active* message followed by the parameter name and a 0, allows you to deactivate that parameter and, consequently, all the preset interpolation associated with it. In this example, whenever you select particular preset 2, it deactivates the parameter, and then reactivates it for other presets. Try this example by first storing values for presets 1, 2, and 3, then recalling the presets using float values between 1 and 3.

## Objects used

`pattrstorage`, `change`, `select`, `t`, `pattr`

*Patch contains 17 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/Activate&DeactivateParametersForPattrstorage.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Activate&DeactivateParametersForPattrstorage.PNG`

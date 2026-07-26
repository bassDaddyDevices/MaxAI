---
type: cookbook
name: "Changing Live device parameters with the Live API"
summary: "This patch demonstrates some of the steps necessary to change a parameter automatically in a Max for Live device using the Live API."
chapter: "Max for Live"
keywords: ["Live API", "pack", "live.path", "live.object", "setvalue"]
objects: ["live.object", "live.path", "pack", "pak", "prepend", "route", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/changeparametervalue.amxd_.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0144_0.png"
---

# Changing Live device parameters with the Live API

This patch demonstrates some of the steps necessary to change a parameter automatically in a Max for Live device using the Live API. To use this patch, you will need the Ableton Live Studio application, and you'll need to paste the contents of this patch into the edit window of a Max for Live device.

To program successfully in the Live API, you'll need to consult the [Live Object Model](https://docs.cycling74.com/max7/vignettes/live_object_model) (LOM). It shows a map of the organization of the entire Live application, and shows how you can indentify the logical path to any specific thing in Live. It may seem like a convoluted map, but it's necessary to understand its basics.

As you can see, if you trace the path in the LOM, from the top level of the current Live set, *live\_set*, you will need to specify a track number, and within that track you specify a device, and within that device you specify a parameter. So, the full message to the **live.path** object to identify the logical path to a parameter is *goto live\_set tracks <#> devices <#> parameters <#>*, with the correct numbers inserted for the desired track, device, and parameter. Note that in the Live API these are all numbered starting from 0, even though in the user interface of Live the tracks are numbered starting from 1 to make the numbering more intuitive for the user.

In this patch, we use the objects **pak**, **pack**, and **prepend** to construct the complete messages. You should first specify a track number, then a device number, then a parameter number, and the result will be a complete well-formed message to **live.path**. When **live.path** gets such a message it sends out a unique ID number for that object in the LOM, and that *id* message should go to the right inlet of **live.object**. That tells **live.object** what specific object it refers to, and from then on all subsequent messages in its left inlet will refer to that object. You can query **live.object** to get information about its object using the *get* message, with such messages as *get name*, *get value*, *get min*, *get max*, etc. In this example, you can see how *get name* might be useful to show the user what device parameter is being controlled, and you can see how *get min* and *get max* could be used to constrain the range of a user interface object such as a **number** box. And, to actually change the value of that parameter, use the *set value* message to **live.object**.

## Objects used

`prepend` ×2, `t` ×2, `pack` ×2, `pak` ×2, `route` ×2, `live.object`, `live.path`

*Patch contains 34 boxes, 35 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/changeparametervalue.amxd_.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0144_0.png`

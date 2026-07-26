---
type: cookbook
name: "Avoiding infinity in pow and /"
summary: "Taking 0 to the power of any negative exponent equals infinity."
chapter: "Max"
keywords: ["routepass", "pow", "infinity"]
objects: ["!/", "/", "pow", "routepass", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/avoidinfinity.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/avoidinfinity.png"
---

# Avoiding infinity in pow and /

Taking 0 to the power of any negative exponent equals infinity. In Max, this yields the unique *float* value *inf*. In cases where you want to avoid getting *inf*, and would prefer to get *0*, you can simply make a special case for a *0* input, and pass it on directly, avoiding the **pow** object. On the left is an example of how to use **routepass** to force Max to output 0 when it would otherwise calculate infinity, such as when using a **pow -1** object.

The same thing can happen when you divide a number by 0, the result of which is mathematically undefined. In Max, this yields the unique *float* value *nan* (not a number) or *inf*. In cases where you may encounter a division by 0 and wish to avoid the *nan* result, you can use **sel** to look for and prohibit sending the value 0 into the right inlet of the **/** object.

The **/!** object does this sort of protection automatically. If you try to divide by 0, it will send out *0.* instead of *inf*.

## Objects used

`sel`, `!/`, `/`, `routepass`, `pow`

*Patch contains 12 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/avoidinfinity.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/avoidinfinity.png`

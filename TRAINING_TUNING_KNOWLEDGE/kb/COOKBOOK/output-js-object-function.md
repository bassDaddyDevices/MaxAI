---
type: cookbook
name: "Output js object into a function"
summary: "This example shows two methods for outputting a list in groups of two elements."
chapter: "Max"
keywords: ["zl.iter", "zl.group"]
objects: ["print", "zl"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/outputJSObjectIntoFunction.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/outputJSObjectIntoFunction.png"
---

# Output js object into a function

This example shows two methods for outputting a list in groups of two elements. Either of the objects **zl.iter** or **zl.group** with an argument of ‘2’ will output the a list sent into them two elements at a time in immediate succession. If a list with an odd number of elements is sent into either of the objects, the last message that is outputted will only contain one element.

## Objects used

`print` ×2, `zl` ×2

*Patch contains 12 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/outputJSObjectIntoFunction.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/outputJSObjectIntoFunction.png`

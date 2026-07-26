---
type: cookbook
name: "The patcher object encapsulates a subpatch"
summary: "In programming, it’s often useful to divide a task into parts, and consider the overall program as a combination of small tasks."
chapter: "MSP"
keywords: ["patcher", "subpatch"]
objects: ["*~", "cycle~", "dac~", "line~", "scope~", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/patcherobjectdemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/patcherobjectdemo.png"
---

# The patcher object encapsulates a subpatch

In programming, it’s often useful to divide a task into parts, and consider the overall program as a combination of small tasks. Each small task can be considered a subset of the overall program, to be called upon when needed. In programming lingo, that’s often called a “subroutine” or a “function”.

In Max, you can encapsulate a patch consisting of several objects inside a single Max **patcher** object (which can be abbreviated as **p**). The contents of that **patcher** object can be thought of as a “subpatch” of the main patcher. Inside the **patcher** object, you can create **inlet** and **outlet** objects, which will appear as inlets and outlets of the **patcher** object in the main patch.

You can view and edit the contents of a **patcher** object by double-clicking on it in the locked patcher window.

A **patcher** object could potentially even include other nested **patcher** objects. Dividing your overall task into separate tasks (subroutines) and encapsulating each one as an object is a good way to organize your program.

## Objects used

`scope~`, `unpack`, `line~`, `*~`, `cycle~`, `dac~`

*Patch contains 17 boxes, 15 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/patcherobjectdemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/patcherobjectdemo.png`

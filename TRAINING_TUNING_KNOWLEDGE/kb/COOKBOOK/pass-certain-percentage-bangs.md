---
type: cookbook
name: "Pass a certain percentage of bangs"
summary: "To make a random decision between two things, you can use the decide object."
chapter: "Max"
keywords: ["abstraction", "probability", "random"]
objects: ["<", "random", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/passpct.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/passpct.png"
---

# Pass a certain percentage of bangs

To make a random decision between two things, you can use the **decide** object. To make a probabilistic decision between two things, with one thing being more likely than the other, you can use the **random** object to choose randomly from a larger set of numbers, then assign a majority of those choices to mean one thing (and the remaining minority to mean the other thing). An easy way to do this is with the **<** object. In this example, a *bang* in the left inlet will choose a random number from 0 to 99, and that number will then be tested to see if it's less than some specified 'percentage' from 0 to 100. If it is, the **<** object will send out a *1*, causing a *bang* to be sent out the outlet. This means that, over a fairly large number of incoming *bang* messages, approximately the specified percentage of them will result in output.

The percentage can be sent in the right inlet, or specified as a typed-in argument in the parent patch. The #1 argument in the **<** object means that when this patch is used as an object in another program the #1 will be replaced by whatever is typed in as an argument to the object in the parent patch. If there is no typed-in argument in the parent patch, the #1 defaults to 0.

## Objects used

`sel`, `<`, `random`

*Patch contains 11 boxes, 6 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/passpct.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/passpct.png`

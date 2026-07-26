---
type: cookbook
name: "The function object"
summary: "The function object assists you to make shapes composed of line segments."
chapter: "Max"
keywords: ["function", "envelopes"]
objects: ["function"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/functionobject.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/functionobject.png"
---

# The function object

The **function** object assists you to make shapes composed of line segments. When you send a *bang* to the **function**, it sends out of its second outlet a *list* of *destination value* and *ramp time* pairs suitable for use as input to a **line~** object. In that way, the shape shown in the **function** object serves as a function over time, the shape of which will be enacted by the signal coming out of the **line~** object.

A two-dimensional graph like the one shown here shows the relationship between two variables, *x* and *y*, and is said to be a graph of "y as a function of x" or "y over x". That means that it shows how the y variable changes with each corresponding x value. In most musical situations, the x-axis designates time (with x=0 designating a starting point in time) while y designates a value that changes over time according to a certain shape or curve. Since the x value (time) increases at a constant rate, the shape of the function shows us how y will change over time.

In math terminology, the minimum and maximum of the numbers on the x-axis are said to determine the "domain" of the function, and the minimum and maximum of the numbers on the y-axis determine the "range" of the function. By default, the domain of the **function** object is 0 to 1000 (since it's assumed that the domain will designate milliseconds), and the range is 0 to 1. But you can change the extent of the domain and the range with the messages *setdomain* and *setrange*. The minimum of the domain is always 0 in the **function** object, so you only need to provide the desired maximum with the *setdomain* message, as in *setdomain 1000.* For the range, you specify both the minimum and the maximum, as in *setrange 0. 1.*

Try changing the domain and the range, and then sending a *bang* to see how the resulting list changes. Notice that in this patch we use the **pak** object to combine the minimum and maximum values in a single *setrange* message. The **pak** object is used to combine several individual numbers together into a *list*, much like the **pack** object. The crucial difference between the two is that the **pak** object sends out a list any time it receives something in any inlet, whereas the **pack** object sends out a list only when it receives something in its leftmost inlet.

## Objects used

`function`

*Patch contains 7 boxes, 4 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/functionobject.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/functionobject.png`

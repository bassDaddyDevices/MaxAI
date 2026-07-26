---
type: cookbook
name: "Envelope function without a fixed starting point"
summary: "The function object permits you to design a shape made up of line segments, and then you can send that information (out the second outlet) to a line~ object to"
chapter: "MSP"
keywords: ["function", "line~", "envelope"]
objects: ["*~", "cycle~", "ezdac~", "function", "line~", "loadbang", "metro", "route"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/functionwithoutstartpoint.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/functionwithoutstartpoint_0.png"
---

# Envelope function without a fixed starting point

The **function** object permits you to design a shape made up of line segments, and then you can send that information (out the second outlet) to a **line~** object to cause a changing signal with that shape over a specified amount of time. When the **function** object receives a *bang*, first it sends out its initial value as a float (0. in this case), then it sends out a list of subsequent values and destination times. (Connect the second outlet of **function** to a print object if you want to see the messages.) The combination of **function** and **line~** is handy for designing and triggering an amplitude envelope of a sound, as in this example, or any other sort of envelope or control function.

The total amount of time for the shape, in milliseconds, is determined by the *domain* of the **function**. You can set the domain with a *setdomain* message.

One potential problem with an amplitude envelope like this is that if you re-trigger the envelope before it has completed, it will leap back to the zero point, potentially causing a click in the sound. However, if you want, you can filter out those initial float values with a **route** object, as in this example. That way, instead of **line~** snapping to 0. each time the function is re-triggered (because of the intial *float 0.* message it sends out), it will continue from whatever value it was at at the moment of the re-triggering.

In this example, a *bang* will cause a one-second note; if the envelope is re-triggered after less than a second (as it will be if you click fast repeatedly or if you turn on the **metro**), you’ll notice that there’s no annoying click, because the envelope starts from wherever it was each time it’s triggered.

## Objects used

`route`, `loadbang`, `line~`, `ezdac~`, `function`, `metro`, `*~`, `cycle~`

*Patch contains 11 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/functionwithoutstartpoint.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/functionwithoutstartpoint_0.png`

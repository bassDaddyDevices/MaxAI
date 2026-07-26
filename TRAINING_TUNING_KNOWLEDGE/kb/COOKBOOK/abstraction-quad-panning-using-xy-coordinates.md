---
type: cookbook
name: "Abstraction for quad panning using x,y coordinates"
summary: "There are several standard speaker configurations for 2-dimensional surround sound panning, such as quadraphonic (four speakers in a square or rectangular place"
chapter: "MSP"
keywords: ["abstraction", "panning", "pan~", "quadraphonic"]
objects: ["pan~", "route", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/panLRFB~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/panLRFB.png"
---

# Abstraction for quad panning using x,y coordinates

There are several standard speaker configurations for 2-dimensional surround sound panning, such as quadraphonic (four speakers in a square or rectangular placement) and [the 5.1 or 7.1 THX cinema surround specifications](https://www.thx.com/faq/#buying-setup-guides). There are also sound distribution encoding techniques that work for a variety of speaker configurations, such as the [Ambisonics](http://en.wikipedia.org/wiki/Ambisonics) panning description, and there are processing techniques such as [head-related transfer functions (HRTF)](http://en.wikipedia.org/wiki/Head-related_transfer_function) filtering.

This shows a simple algorithm for intensity panning with a rectangular quadraphonic speaker configuration.

One way to implement two-dimensional panning is to specify the sound's virtual location as an x,y coordinate point on a rectangular plane representing the floor of the room, with a speaker at each corner of the plane. The x value can be used to represent the left-right panning (0 to 1, going from left to right) and the y value represents the front-back panning (0 to 1, going from front to back). For some purposes, [simple linear panning](linear-amplitude-panning.md) might suffice (or even be found to be preferable). I usually prefer to use a [constant intensity panning](constant-power-panning-using-table-lookup.md) algorithm. So I use the **[pan~](constant-intensity-panning-subpatch.md)** abstraction to calculate the amplitudes that will provide the left-to-right panning illusion, and then I use two other **pan~** objects to pan each of those gains (the left and right amplitudes) from front to back.

This patch is an abstraction that enacts that plan. (It requires that the **pan~** abstraction be somewhere in the Max file search path.) You can use this to pan any signal to four speakers in a rectangular quadraphonic layout. It takes a signal in its left inlet, an x coordinate in its second inlet, and a y coordinate in its right inlet. Similarly to the **pan~** abstraction, it allows the panning coordinates to be specified as initial arguments, floats in the 2nd and 3rd inlets, or as signals.

Save this patch in Max's file search path with the name "panLRFB~.maxpat", so that you can use it as a subpatch in other patches. Its use as an abstraction called **panLRFB~** is demonstrated in another example, "[Quadraphonic panning with mouse control and Open GL visualization](quadraphonic-panning-mouse-control-and-open-gl-visualization.md)".

## Objects used

`pan~` ×3, `route`, `unpack`

*Patch contains 25 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/panLRFB~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/panLRFB.png`

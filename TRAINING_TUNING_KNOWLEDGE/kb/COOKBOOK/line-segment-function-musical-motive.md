---
type: cookbook
name: "Line segment function as a musical motive"
summary: "This example is from my Algorithmic Composition blog, and is explained there."
chapter: "Max"
keywords: ["function", "line~", "rect~", "mtof~", "random", "table"]
objects: ["*", "*~", "+", "dbtoa~", "delay", "ezdac~", "function", "line~", "mtof~", "pack", "random", "rect~", "sel", "t", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/linesegmentenvelopesinuse.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/linesegmentenvelopesinuse.png"
---

# Line segment function as a musical motive

This example is from my [Algorithmic Composition blog](http://algocomp.blogspot.com/), and is explained [there](http://algocomp.blogspot.com/2009/04/control-function-as-recognizable-shape.html).

This patch uses the **table** object to calculate a [probablility distribution](http://algocomp.blogspot.com/2008/10/probability-distribution.html) to make the short notes occur much more often than the long notes.

I find it interesting that the shape in the **function** object on the left, which is the only musical motive of the composition, can produce a wide variety of effects when played at different speeds and with different transpositions, yet even with that variety of sounds, the unity of a single generating motive seems to give the music coherency.

## Objects used

`+` ×3, `*` ×3, `random` ×3, `function` ×2, `pack` ×2, `line~` ×2, `t`, `mtof~`, `delay`, `sel`, `table`, `dbtoa~`, `ezdac~`, `*~`, `rect~`

*Patch contains 43 boxes, 46 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/linesegmentenvelopesinuse.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/linesegmentenvelopesinuse.png`

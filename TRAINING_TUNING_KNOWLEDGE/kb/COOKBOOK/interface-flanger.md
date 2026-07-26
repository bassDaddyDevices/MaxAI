---
type: cookbook
name: "Interface for a flanger"
summary: "This patch shows an appropriate interface for a flanger, including dials to control delay time, flanging rate, flanging depth, and control over the mix between"
chapter: "Max"
keywords: ["clip", "delay~", "sig~", "line~", "cycle~"]
objects: ["*", "*~", "+~", "/", "adstatus", "clip", "clip~", "cycle~", "deferlow", "delay~", "ezdac~", "line~", "live.dial", "live.gain~", "loadbang", "playlist~", "prepend", "sig~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simpleflanging.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simpleflanging.png"
---

# Interface for a flanger

This patch shows an appropriate interface for a flanger, including dials to control delay time, flanging rate, flanging depth, and control over the mix between the dry (unaltered) and wet (altered) signal. Control over the dry/wet mix is a good thing to include in most audio effects.

The **live.dial** objects give intuitive controls for those important parameters of the effect, and they also limit the range of values that the user can choose from. Note that the left outlet of **live.dial** sends out the value shown below the dial, while the right outlet sends the dial's position normalized in the range 0 to 1. Both can be useful in certain circumstances, depending on the range of values they need to provide.

You can double-click on the **patcher** objects to see their contents, and you can drag and drop additional sound files into the **playlist~** object if you want to hear the flanging effect applied to other sounds. Try various values for each of the dials, especially extreme values.

This patch has two subpatches encapsulated in **patcher** objects, which are so generally useful that they could easily be made into abstractions for use in other patches. That's demonstrated in the [abstraction for flanging](http://music.arts.uci.edu/dobrian/maxcookbook/abstraction-flanging) and the [abstraction for S-curve mixing](http://music.arts.uci.edu/dobrian/maxcookbook/abstraction-s-curve-crossfading).

## Objects used

`*~` ×6, `live.dial` ×4, `t` ×4, `+~` ×4, `line~` ×3, `*` ×3, `loadbang` ×2, `cycle~` ×2, `clip` ×2, `playlist~`, `prepend`, `/`, `adstatus`, `delay~`, `deferlow`, `clip~`, `sig~`, `live.gain~`, `ezdac~`

*Patch contains 71 boxes, 58 connections, 2 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simpleflanging.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simpleflanging.png`

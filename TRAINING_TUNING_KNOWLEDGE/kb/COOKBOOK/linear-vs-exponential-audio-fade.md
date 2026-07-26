---
type: cookbook
name: "Linear vs. exponential audio fade"
summary: "An exponential amplitude fade is usually more subjectively natural-sounding than a linear amplitude fade."
chapter: "MSP"
keywords: ["cycle~", "dbtoa", "ezdac~", "line", "line~", "loadmess", "matrixctrl", "matrix~", "select", "slider", "*~", "*", "-"]
objects: ["*", "*~", "-", "cycle~", "dbtoa", "ezdac~", "line", "line~", "loadmess", "matrixctrl", "matrix~", "select", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/exponentialfade.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/exponentialfade.png"
---

# Linear vs. exponential audio fade

An exponential amplitude fade is usually more subjectively natural-sounding than a linear amplitude fade. This patch allows you to compare the two.

Clicking on the **toggle** at the top of the patch will fade the test tone in and out.Clicking on the **matrixctrl** buttons for “Linear” and “Decibel” lets you choose between a linear fade and an exponential fade, to see which you think sounds more intuitive and natural. You can also move the **slider**s manually to see which you think feels more intuitive and natural.

The **gain~** and **live.gain~** objects (not shown here) both use exponential fading, and they internally implement interpolation between amplitude values, as demonstrated with the **line~** objects in this patch.

## Objects used

`*` ×3, `loadmess` ×2, `line` ×2, `cycle~` ×2, `*~` ×2, `line~` ×2, `slider` ×2, `matrixctrl`, `matrix~`, `ezdac~`, `dbtoa`, `-`, `select`

*Patch contains 34 boxes, 34 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/exponentialfade.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/exponentialfade.png`

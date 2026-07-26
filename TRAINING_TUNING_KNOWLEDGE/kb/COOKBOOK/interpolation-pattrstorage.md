---
type: cookbook
name: "Interpolation with pattrstorage"
summary: "This example shows different ways to interpolate between values, for the purpose of automating volume control."
chapter: "Max"
keywords: ["gain~", "dbtoa", "atodb", "pattr", "autopattr", "pattrstorage", "line", "number~"]
objects: ["atodb", "autopattr", "dbtoa", "ezdac~", "gain~", "line", "loadbang", "multislider", "number~", "pattr", "pattrstorage", "pow", "sig~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/InterpolationWithPattrstorage.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/InterpolationWithPattrstorage.PNG"
---

# Interpolation with pattrstorage

This example shows different ways to interpolate between values, for the purpose of automating volume control.

First, remember that **gain~** has exponential scaling built in, so you can send it linearly changing int values from *0* to *128* and it will scale exponentially from 0. to 0.999999 (with sample-by-sample interpolation according to the ramp time you specify for **gain~**’s ‘interp’ attribute).

If you find that to not be enough, you can do your own conversion of linear to exponential, using **pow**, **expr**, **dbtoa**, or ‘pow’ interpolation in pattrstorage. There’s no right magic number for the exponent; it depends on the type of curve you want. For scaling audio signals, I find that **dbtoa** works fine, and you can use **number~** to do the sample-by-sample interpolation (in the amount of time specified by **number~**’s ‘interval’ attribute).

(Both **gain~** and **number~** use linear interpolation for their sample-by-sample interpolation between input values, but if you send enough intermediate input values in a smooth progression you won’t hear them interpolating linearly between exponentially-changing inputs.)

## Objects used

`multislider` ×3, `line` ×3, `number~` ×2, `pattr`, `loadbang`, `pattrstorage`, `autopattr`, `dbtoa`, `atodb`, `pow`, `ezdac~`, `sig~`, `gain~`

*Patch contains 43 boxes, 29 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/InterpolationWithPattrstorage.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/InterpolationWithPattrstorage.PNG`

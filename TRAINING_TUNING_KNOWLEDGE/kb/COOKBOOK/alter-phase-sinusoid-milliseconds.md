---
type: cookbook
name: "Alter phase of sinusoid by milliseconds"
summary: "This example shows how you can alter the phase of a wave by milliseconds using delay~."
chapter: "MSP"
keywords: ["mstosamps~", "line~", "delay~", "adstatus~", "phase offset"]
objects: ["!/", "adstatus", "cycle~", "delay~", "ezdac~", "line~", "loadbang", "mstosamps~", "pack", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/alterphaseofsinebyms.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0632 Alter phase of Sine by ms.png"
---

# Alter phase of sinusoid by milliseconds

This example shows how you can alter the phase of a wave by milliseconds using **delay~.** The object **mstosamps~** converts milliseconds to samples which then are smoothed by **line~** to avoid clicks. (See [MSP Basics Tutorial 2](https://docs.cycling74.com/max7/tutorials/05_mspbasicchapter02) for an example and explanation of linear interpolation using **line~**.)

## Objects used

`scope~` ×2, `ezdac~`, `mstosamps~`, `!/`, `loadbang`, `delay~`, `adstatus`, `pack`, `line~`, `cycle~`

*Patch contains 19 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/alterphaseofsinebyms.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0632 Alter phase of Sine by ms.png`

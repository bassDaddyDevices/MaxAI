---
type: cookbook
name: "Sixteen Harmonics"
summary: "This example plays the first sixteen harmonics based on a fundamental frequency where the rate at which each harmonic play is period / # of harmonic."
chapter: "MSP"
keywords: ["loadbang", "patcher", "patcherargs", "route", "metro", "cycle~", "inlet", "outlet", "line~", "ezdac~"]
objects: ["*", "*~", "/", "cycle~", "ezdac~", "line~", "loadbang", "metro", "patcherargs", "route"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sixteenharmonics.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sixteenharmonics.png"
---

# Sixteen Harmonics

This example plays the first sixteen harmonics based on a fundamental frequency where the rate at which each harmonic play is period / # of harmonic. For example, with a period of 10000 ms—meaning the fundamental plays every 10000 ms—the 4th harmonic will be heard every 10000/4 ms, or 2500 ms.

## Objects used

`loadbang` ×35, `line~` ×17, `*~` ×17, `*` ×17, `cycle~` ×17, `route` ×17, `patcherargs` ×17, `/` ×17, `metro` ×17, `ezdac~`

*Patch contains 403 boxes, 356 connections, 17 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sixteenharmonics.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sixteenharmonics.png`

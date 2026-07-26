---
type: cookbook
name: "Smooth filter changes"
summary: "If you want to change the coefficients of biquad~ in real time while a sound is playing, it's usually better to use MSP signals rather than individual Max messages, to avoid causing clicks."
chapter: "MSP"
keywords: ["biquad~", "cycle~", "ezdac~", "filtercoeff~", "filtergraph~", "filtering", "mtof~", "number~", "saw~", "unpack", "*~", "+~"]
objects: ["*~", "+~", "biquad~", "cycle~", "ezdac~", "filtercoeff~", "filtergraph~", "loadbang", "mtof~", "number~", "saw~", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/smoothfilterchanges.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/smoothfilterchanges_0.png"
---

# Smooth filter changes

If you want to change the coefficients of **biquad~** in real time while a sound is playing, it's usually better to use MSP signals rather than individual Max messages, to avoid causing clicks. In that case, you should replace **filtergraph~** with **filtercoeff~** and send the frequency, gain, and Q parameters into **filtercoeff~** as smooth signals (as shown in the left portion of the example). Or, if you also need the graphic interface capabilities of **filtergraph**, use **line~**—or **number~** with a nonzero ramp time—as an intermediary between **filtergraph~** and **biquad~**, to smooth the transitions with interpolation (as shown in the right portion of the example).

## Objects used

`number~` ×8, `biquad~` ×2, `unpack` ×2, `saw~` ×2, `loadbang`, `filtergraph~`, `ezdac~`, `+~`, `*~`, `cycle~`, `mtof~`, `filtercoeff~`

*Patch contains 41 boxes, 36 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/smoothfilterchanges.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/smoothfilterchanges_0.png`

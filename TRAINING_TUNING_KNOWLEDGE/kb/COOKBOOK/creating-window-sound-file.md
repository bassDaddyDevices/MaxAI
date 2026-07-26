---
type: cookbook
name: "Creating a window on a sound file"
summary: "A \"window\" is a function (shape) used to control the amplitude of a sound, briefly turning it up then turning it back down."
chapter: "MSP"
keywords: ["line~", "trapezoidal window", "window"]
objects: ["*~", "-", "ezdac~", "i", "line~", "metro", "scope~", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/windowonafile.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/windowonafile.png"
---

# Creating a window on a sound file

A "window" is a function (shape) used to control the amplitude of a sound, briefly turning it up then turning it back down. This example shows how to create a trapezoidal window on a sound file, which will quickly fade the file in and out for a specified duration, repeatedly at some specified triggering interval. The **metro** triggers a message to the **line~** object. The message is formed by taking the specified window duration, subtracting 10 from that number of milliseconds to allow for a 5 ms fade-in and a 5 ms fade-out, then forming a list that instructs **line~** to control the amplitude with that shape. The message says, in effect, go to 1 in 5 ms, stay at 1 for duration-10 ms, then go to 0 in 5 ms.

## Objects used

`ezdac~`, `metro`, `i`, `-`, `line~`, `scope~`, `*~`, `sfplay~`

*Patch contains 18 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/windowonafile.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/windowonafile.png`

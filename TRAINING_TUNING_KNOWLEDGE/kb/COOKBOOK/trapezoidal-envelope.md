---
type: cookbook
name: "Trapezoidal envelope"
summary: "The trapezoid~ object allows you to make a control signal that rises to a certain level, stays there, then falls back to its initial level."
chapter: "MSP"
keywords: ["phasor~", "trapezoid~", "scope~"]
objects: ["0.1", "0.6", "ezdac~", "loadbang", "number~", "phasor~", "scope~", "trapezoid~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/trapezoidDemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/trapezoidDemo.png"
---

# Trapezoidal envelope

The **trapezoid~** object allows you to make a control signal that rises to a certain level, stays there, then falls back to its initial level. That shape can be ueseful as an amplitude envelope or a filter envelope, for example. At its input **trapezoid~** needs to be driven by a signal, usually a control signal that progresses from 0 to 1 in a straight line, such as **phasor~** or **line~**. You can specify the initial value of the trapezoid with the *lo* attribute, and specify the level it will rise to with the *hi* attribute.

The shape of the resulting trapezoid depends on its two arguments. If you think of the width of the trapezoid as going from 0 to 1, the number or signal coming in the second inlet (or typed in as the first argument) states what fraction of the way from 0 to 1 you want the top of the trapezoid to begin, and the number or signal coming in the third inlet (or typed in as the second argument) says at what fraction of the way you want the trapezoid to begin its descent. In this example, the first 1/10 of the trapezoid will be its ascent from its *lo* value of 0 up to its *hi* value of 0.5, and the last 4/10 of the trapezoid, from 0.6 to 1., will be its descent. You can change the values in the **number~** objects to change the shape of the trapezoid.

The rate at which that trapezoidal signal actually occurs depends on the rate at which the incoming signal goes from 0 to 1. In this example the 2-Hz **phasor~** goes from 0 to 1 every 500 milliseconds.

## Objects used

`number~` ×2, `0.1`, `0.6`, `loadbang`, `ezdac~`, `scope~`, `phasor~`, `trapezoid~`

*Patch contains 11 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/trapezoidDemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/trapezoidDemo.png`

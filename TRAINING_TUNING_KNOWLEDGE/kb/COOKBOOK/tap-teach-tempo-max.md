---
type: cookbook
name: "Tap to teach tempo to Max"
summary: "This patch implements tap tempo using a \"simple moving average\" (SMA) calculation of time between taps."
chapter: "Max"
keywords: ["timer", "key", "bucket", "expr", "transport", "metro"]
objects: ["!=", "96", "bucket", "expr", "gate", "key", "makenote", "metro", "noteout", "pack", "select", "split", "t", "timer", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/taptempo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/taptempo1_0.png"
---

# Tap to teach tempo to Max

This patch implements tap tempo using a "simple moving average" (SMA) calculation of time between taps. The patch alters the transport tempo based on the rate at which you tap the 't' key. The method takes the average of the most recent three time intervals between the most recent four taps. So, once you tap four times, it will set the transport tempo to your tempo, and if you keep tapping it responds to your changes but takes a couple beats to move gradually to your new tempo. This is a bit smoother and more gradual than way that is shown in the example titled "[Tap to set tempo](tap-set-tempo.md)" and way that the tap tempo feature of Ableton Live works, which is to leap abruptly to what it thinks the new tempo should be.

To do this sort of SMA calculation, the **bucket** object is handy. The **bucket** object gets its name from a bucket brigade, passing its past inputs out each outlet, then shifting them in succession from left to right. When a number comes into the inlet of **bucket**, **bucket** sends out the previous numbers it received, and shifts them to the right in preparation for the next output. So, we can use the outputs of **bucket** to calculate the tempo based on the three most recent time intervals between events. Here's what happens:

Each tap triggers a measurement in the **timer** object, telling the time in milliseconds since the previous tap. If the time between taps is unreasonably small or large, as determined by the **split** object, we essentially clear the contents of **bucket** by "freezing" its output with a *freeze* message, loading in some 0 values, then allowing it to send output again by "unfreezing" it with a *thaw* message. But if the time between taps is between 200 and 2000 milliseconds, we add it to the bucket brigade. When four taps result in three good values, the **gate** will be opened, and the math expression in **expr** will calculate the tempo in beats per minute: 3 beats, times 60,000 ms per minute, divided by the sum of the three tap intervals in milliseconds, and that will be set as the *tempo* of the **transport**.

## Objects used

`noteout`, `makenote`, `96`, `metro`, `transport`, `expr`, `pack`, `gate`, `t`, `!=`, `bucket`, `split`, `timer`, `select`, `key`

*Patch contains 25 boxes, 26 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/taptempo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/taptempo1_0.png`

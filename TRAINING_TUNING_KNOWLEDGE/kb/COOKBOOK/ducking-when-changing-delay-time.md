---
type: cookbook
name: "Ducking when changing delay time"
summary: "Whenever you change the delay time, you're asking MSP to look at a new location in the delay buffer, which can cause a click in the output if the new sample val"
chapter: "MSP"
keywords: ["delay~", "delay", "trigger", "line~"]
objects: ["*~", "+~", "delay~", "ezadc~", "ezdac~", "gain~", "line~", "pack", "pipe", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaydemo03.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaydemo03.png"
---

# Ducking when changing delay time

Whenever you change the delay time, you're asking MSP to look at a new location in the delay buffer, which can cause a click in the output if the new sample value is very different from the previous one. One way to get around that is to quickly fade the output amplitude down to 0 whenever you make a change, then quickly fade it back up once the change has been made. In this example, whenever a new delay time comes out of the number box, it first sends a 0 to the **pack** object, which sends a *0 5* message to **line~**, which fades **line~**'s signal down to 0 in 5 milliseconds (meaning the output signal of **delay~** will get multiplied by 0, silencing it). The delay time meanwhile is held for 6 milliseconds by the **pipe** object, thus waiting for the fade-down to be completed by **line~**. Only then does the new delay time get passed on to the **delay~** object, and then a 1 gets sent to **pack**, sending a *1 5* message to **line~**, fading the sound back up in 5 ms. The net effect is that we do get a very quick (11-ms) fadedown/fadeup in the output of **delay~**, but at least it's not a jarring click.

## Objects used

`t` ×2, `gain~` ×2, `pipe`, `line~`, `pack`, `*~`, `delay~`, `+~`, `ezdac~`, `ezadc~`

*Patch contains 13 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaydemo03.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaydemo03.png`

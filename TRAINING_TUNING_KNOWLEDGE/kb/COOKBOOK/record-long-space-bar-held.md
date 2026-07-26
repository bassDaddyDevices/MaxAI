---
type: cookbook
name: "Record as long as space bar is held"
summary: "This patch records while the spacebar is held down, and starts looping when the spacebar is released."
chapter: "Max"
keywords: ["key", "sel", "select", "keyup", "timer", "play~", "record~", "buffer~"]
objects: ["buffer~", "ezadc~", "ezdac~", "key", "keyup", "play~", "record~", "sel", "timer"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/spacebarrecord_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/spacebarrecord_0.png"
---

# Record as long as space bar is held

This patch records while the spacebar is held down, and starts looping when the spacebar is released. 

Set the **buffer~** size to the largest duration you want to try to accommodate. Use a **key** objectconnected to a **sel** object to send a  *1* message to a **record~** object, and use **keyup** connected to **sel** to send a *0* message to the **record~** object. Use a **timer** object to measure the time between **key** to **sel** and **keyup** to **sel**. Use the time output of the **timer** as the second argument of a *start* message to **play~**. (And have the ‘loop’ attribute of **play~** set to ‘1’*.*)

## Objects used

`sel` ×2, `ezdac~`, `play~`, `timer`, `ezadc~`, `keyup`, `key`, `record~`, `buffer~`

*Patch contains 13 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/spacebarrecord_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/spacebarrecord_0.png`

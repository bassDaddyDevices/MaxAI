---
type: cookbook
name: "Play random excerpts from a sound file"
summary: "When you read a sound file into a buffer~ with a read or replace message, the exact amount of time that that operation will take is unknowable, but the buffer~"
chapter: "MSP"
keywords: ["play~", "random", "buffer~", "info~", "RAM", "sound file"]
objects: ["+~", "buffer~", "ezdac~", "info~", "live.gain~", "metro", "play~", "random"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playexcerptsfromabuffer.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playexcerptsfromabuffer2.png"
---

# Play random excerpts from a sound file

When you read a sound file into a **buffer~** with a *read* or *replace* message, the exact amount of time that that operation will take is unknowable, but the **buffer~** will send a *bang* out of its right outlet when the file has been completely loaded into RAM. When you load a file, you should wait for that *bang* before proceeding.

This patch uses that *bang* to get information about the duration of the file (the size of the buffer), and uses that information to set the maximum value for a set of **random** objects that will be used to choose random starting points within the buffer. A **metro** object regularly chooses four random starting points within the buffer and sends those times in *start* messages to four **play~** objects.

So, the *bang* from **buffer~** triggers the duration info from **info~**, which is used as the maximum for **random**, which limits the range of possible starting points for **play~**.

## Objects used

`random` ×4, `play~` ×4, `+~` ×3, `live.gain~`, `metro`, `info~`, `ezdac~`, `buffer~`

*Patch contains 29 boxes, 32 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playexcerptsfromabuffer.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playexcerptsfromabuffer2.png`

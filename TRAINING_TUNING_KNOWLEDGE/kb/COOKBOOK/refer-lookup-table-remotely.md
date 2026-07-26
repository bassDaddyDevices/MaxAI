---
type: cookbook
name: "Refer to a lookup table remotely"
summary: "You can temporarily change the name and contents of a table object with the refer message, referring to the contents of another named table."
chapter: "Max"
keywords: ["table"]
objects: ["*", "+", "counter", "makenote", "metro", "noteout", "select", "t", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tablereferdemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tablereferdemo.png"
---

# Refer to a lookup table remotely

You can temporarily change the name and contents of a **table** object with the *refer* message, referring to the contents of another named **table**. In this patch we use a **toggle** to switch between a major scale and a minor scale, triggering the necessary *refer* messages. Once we refer the **table** named "majorscale" to the **table** named "minorscale", the **table** named "majorscale" actually adopts the name and the contents of the table named "minorscale" as if it were its own (although the name that was typed in as an argument does not change). The major scale content does not disappear entirely, however. It's still in Max's memory, stored as a table with the name "majorscale", so the **table** object can be restored to its original name and contents by the message *refer majorscale*.

The name that's typed in as an argument also serves as the name of a text file that the **table** object will try to read when the patch is opened. If no such file is found, the **table** will be empty (all it values will be set to 0) or it will use the saved data if its *embed* attribute is set (its "Save Data With Patcher option was checked). In this example patch, the data of the two scales is embedded in the patcher file, but can also be stored in separate files named [majorscale](http://music.arts.uci.edu/dobrian/Music215/S13/MaxPatches/majorscale) and [minorscale](http://music.arts.uci.edu/dobrian/Music215/S13/MaxPatches/minorscale).

The basic scale pattern of pitch classes then needs to be transposed my some number to put it in the desired key and register. The patch also includes a "legato factor" applied to the duration of the notes. The time between note onsets, also known as the "inter-onset interval" or "IOI", is determined by the **metro** interval. That value is then multiplied by the legato factor to determine the actual duration, from attack to release, of each note. In this way, the duration of the notes is dependent on, but not identical to, the IOIs. A legato factor greater than 1 creates note overlap, while a legato factor less than 1 creates a detaché or staccato effect.

## Objects used

`table` ×2, `select`, `t`, `*`, `+`, `makenote`, `noteout`, `counter`, `metro`

*Patch contains 32 boxes, 22 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tablereferdemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tablereferdemo.png`

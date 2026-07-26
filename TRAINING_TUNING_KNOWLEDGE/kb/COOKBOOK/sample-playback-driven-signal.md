---
type: cookbook
name: "Sample playback driven by a signal"
summary: "The play~ object can be controlled by any MSP signal in its inlet."
chapter: "MSP"
keywords: ["buffer~", "play~", "line~", "sampling"]
objects: ["buffer~", "dac~", "line~", "play~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playsamplewithsignal.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playsamplewithsignal.png"
---

# Sample playback driven by a signal

The **play~** object can be controlled by any MSP signal in its inlet. The value of the signal controls the location in the **buffer~**, in milliseconds. Normal playback can be achieved in this way by using a linear signal, such as from a **line~** object, that traverses a given time span in the expected amount of time. By making a signal that goes linearly from a ‘starttime’ to a ‘stoptime’ in a certain amount of time, **line~** can be used to get the same sorts of playback as with the *start* message with three arguments demonstrated in the previous example.

In this patch you can see how the **line~** object is commanded to leap to a particular value, then proceed to a new value linearly in a certain amount of time. The existence of a comma in a message box divides the message into two separate messages, sent out in succession as quickly as possible. So a message such as *0, 2000 2000* sends out the int message *0* followed immediately by the list message *2000 2000*. The int causes **line~** to go to the value immediately, and the list causes **line~** to use the number pair(s) as destination and ramptime. So the first message says, "Go to 0 immediately, then proceed toward 2000 in 2000 milliseconds." This will result in normal forward playback. Going from 2000 to 0 in 2000 milliseconds causes backward playback at normal speed. Going from 0 to 420 in 525 milliseconds causes the playback to be at 4/5 normal speed, which also causes downward transposition by a major third.

## Objects used

`line~`, `dac~`, `play~`, `buffer~`

*Patch contains 12 boxes, 8 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playsamplewithsignal.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playsamplewithsignal.png`

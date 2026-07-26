---
type: cookbook
name: "Schedule events in the future"
summary: "In Max, the message bang is used as an all-purpose triggering message, to cause some event to happen."
chapter: "MSP"
keywords: ["delay", "metro", "sfplay~"]
objects: ["delay", "ezdac~", "metro", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/scheduletriggers.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/scheduletriggers.png"
---

# Schedule events in the future

In Max, the message *bang* is used as an all-purpose triggering message, to cause some event to happen. Most Max objects understand the message *bang* to mean "do whatever you do". In other words, the message *bang* is used to cause some event (such as playback of a sound file) to occur.

One very important ability for making music, and one of the things that makes Max such a useful program for making music, is the ability to schedule events in the future. "When I do thing A, thing B should happen a specific amount of time later." The Max object that does that is called **delay**. It receives a *bang* in its left inlet, and delays that message by the number of milliseconds that has been specified in its right inlet.

Another thing that's important to be able to do in music is cause things to happen at regular time intervals. (In a sense, that's pretty much the same as scheduling something to happen in the future, then at that new time scheduling it to happen again the same amount of time in the future, and so on.) The Max object that does that is called **metro**, as in metronome. When it gets a *bang* (or any nonzero integer) in its left inlet, it sends out a bang immediately and also schedules another bang to be sent out some number of milliseconds later, as specified in its right inlet, and does that repeatedly until it receives a *stop* message (or the number 0) in its left inlet.

This patch shows an example of **delay** and **metro** being used to schedule events. The **button** in the top left of the patch triggers soundfile playback (the message 1), and also tells **delay** to schedule a *bang* for one second in the future, which will be used to trigger the same sound event, but it could potentially be used to trigger something else. The **button** (or the **toggle**) above the **metro** object will turn on the metronome, which will send out a *bang* immediately and will continue to do so every half second until stopped by the *stop* message or by the **toggle**.

In these examples, the *bang* messages are used to trigger a snare drum sound, but you can potentially use a *bang* to trigger anything, even to turn on a whole other program.

## Objects used

`metro`, `delay`, `ezdac~`, `sfplay~`

*Patch contains 16 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/scheduletriggers.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/scheduletriggers.png`

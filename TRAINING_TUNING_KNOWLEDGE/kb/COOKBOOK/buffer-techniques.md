---
type: cookbook
name: "Buffer techniques"
summary: "This patch demonstrates a few different ways of reading audio from buffer~."
chapter: "MSP"
keywords: ["buffer~", "groove~", "phasor~", "play~", "wave~"]
objects: ["!/", "*", "buffer~", "ezdac~", "gate~", "groove~", "info~", "line", "line~", "metro", "phasor~", "play~", "sig~", "wave~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/buffertricks.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/buffertricks.png"
---

# Buffer techniques

This patch demonstrates a few different ways of reading audio from **buffer~**.

The sound file *snare.aiff*, which is provided with the Max application, is loaded into **buffer~** with the *replace* message. Whenever a new file is loaded in, **buffer~** sends a *bang* out of its right outlet to indicate that the procedure has completed. That *bang* can be used to get information about the contents of the **buffer~** with the **info~** object, such as the duration of the **buffer~**.

On the left, we're using the **play~** object to access the sound data in the **buffer~** named *snare*. You can play the data simply by sending a *start* message to **play~**, or you can use a signal to indicate to **play~** the current playback position, sample-by-sample. Here we're using the latter method. Once every 400 milliseconds, the **metro** triggers the **line~** object to go from 0 to 383.628113 (the exact duration of the **buffer~** contents) in 383.628113 milliseconds, causing playback at normal speed. A different duration in the message to **line~** would also cause a different playback rate.

On the right, we're using a **groove~** object to access the same **buffer~**. The constant signal value of 1 from the **sig~** object indicates normal playback rate, and the **metro** triggers the message *0*, causing **groove~** to leap to time 0 and play back from there to the end of the buffer. If we were to change the value of **sig~**, **groove~** would play back the sound at a corresponding rate.

In the middle example, we're using a continually changing playback rate to loop repeatedly through the sound. The **phasor~**'s output from 0 to 1 tells the **wave~** object to read the from beginning to the end of the buffer. The rate at which **phasor~** does that (the phasor~ frequency) is determined by the buffers-per-second value we've calculated based on the duration of the **buffer~**'s contents, as well as the output of the **line** object. When you click on the **message** box that says *8, 1 10000*, it tells **phasor~** to start at a rate of 8 times the buffer-per-second value (that is, to play through the whole buffer 8 times per second), and over the course of ten seconds slow down until it is playing at an even slower-then-normal rate. This creates an effect of a sped-up quickly-repeating version of the sound gradually slowing until it becomes recognizable as the original sound.

Through imaginative combinations of starting time, loop duration, playback rate, and triggering rate, you can achieve a wide variety of playback effects, from the normal to the bizarre.

## Objects used

`ezdac~` ×3, `metro` ×2, `sig~`, `groove~`, `line`, `phasor~`, `gate~`, `*`, `wave~`, `!/`, `line~`, `play~`, `info~`, `buffer~`

*Patch contains 33 boxes, 31 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/buffertricks.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/buffertricks.png`

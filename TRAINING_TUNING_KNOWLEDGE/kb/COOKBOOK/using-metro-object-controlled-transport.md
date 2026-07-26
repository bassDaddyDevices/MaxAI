---
type: cookbook
name: "Using the metro object controlled by the transport"
summary: "Whenever the time interval of a metro object is specified using tempo-relative time units such as note values, the operation of that metro will be governed by the transport."
chapter: "MSP"
keywords: ["if", "line~", "loadmess", "loadbang", "metro", "sfplay~", "textbutton", "timepoint", "transport", "when", "*~"]
objects: ["*~", "b", "dac~", "if", "line~", "loadbang", "loadmess", "metro", "sfplay~", "textbutton", "timepoint", "transport", "unpack", "when"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/metrowithtransport.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/metrowithtransport.png"
---

# Using the metro object controlled by the transport

Whenever the time interval of a **metro** object is specified using tempo-relative time units such as note values, the operation of that **metro** will be governed by the transport. The **metro** will only operate when the transport is turned on.

There are several ways to control the behavior of the **metro** via its attributes when it’s governed by the transport. Read in the manual about the @interval, @quantize, @active, @autostart, and @autostarttime attributes of **metro**. The **when** object reports the current time of the transport. The **timepoint** object automatically reports (sends out a *bang*) when a specific moment in time has been reached.

This patch shows a few ways you might use some of the features of transport-synched **metro** objects.

At the top of the patch are two **textbutton** objects, showing the words *Start* and *Rewind*. The one on the left is in Toggle mode, so it will send out a *1* or a *0* when clicked or triggered, and will toggle its text between *Start* and *Stop*. The one on the right is in Button mode, so it will just send out a *bang*. When the patch is loaded, a **loadbang** object sets the **transport** to time 0 and reports the current time with the **when** object. At the bottom of the patch are three **sfplay~** objects, loaded with three short percussive sounds that come with the Max application: snare drum, bass drum plus hi-hat, and cymbal.

When you click the *Start* button, it turns on the **transport**, which enables the three **metro** objects. Notice that two of the three **metro** objects have their *active* attribute turned on, which means they are running whenever Max's transport is running. The other **metro** is not active at first, but has its *autostarttime* attribute set to start on the second half of (i.e. 240 ticks after) the first beat of the third measure. So, immediately the **metro** that is quantized to send out a *bang* every quarter note will trigger the kick drum sound every beat, and the **metro** that is quantized to send out a *bang* every sixteenth note will cause the **when** object to report the current time. In measure 3, the other **metro** will begin triggering the snare drum sound. Note that it is set to trigger at the time interval of a quarter note, but is quantized to the nearest eighth note and starts on the offbeat, so it will play every offbeat.

Then, in measure 5, the conditions of the **if** object will be satisfied. The arguments of the **if** object specify, "If the measure number is at least 5, and the ticks number is not 0, send out a *bang*." Thus, the cymbal sound will be triggered on every offbeat sixteenth note, but not right on the beat (when the ticks will be 0). Note also that, in order to keep the cymbal sound short, we use a **line~** object and a **\*~** object to fade the sound out quickly each time it's played. The message to **line~** says, "Go to 1 (full amplitude) in 0 ms, then go to 0 (silence) in the time of a 16th note."

Finally, on the downbeat of measure 9 (i.e., after having played for 8 measures), the **timepoint** object sends out a *bang* to toggle the **textbutton** to *Stop* and stop the **transport**.

## Objects used

`sfplay~` ×3, `metro` ×3, `loadmess` ×2, `textbutton` ×2, `b`, `*~`, `line~`, `loadbang`, `timepoint`, `if`, `dac~`, `unpack`, `when`, `transport`

*Patch contains 40 boxes, 33 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/metrowithtransport.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/metrowithtransport.png`

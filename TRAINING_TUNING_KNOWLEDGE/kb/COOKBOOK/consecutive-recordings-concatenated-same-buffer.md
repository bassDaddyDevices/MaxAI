---
type: cookbook
name: "Consecutive recordings concatenated in the same buffer~"
summary: "A named record~ object records audio data into the buffer~ object that shares the same name."
chapter: "MSP"
keywords: ["record~", "line~", "buffer~"]
objects: ["*~", "adc~", "b", "buffer~", "dac~", "delay", "line~", "loadbang", "play~", "record~", "sel", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/consecutiverecordingsinsamebuffer.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/consecutiverecordinginsamebuffer.png"
---

# Consecutive recordings concatenated in the same buffer~

A named **record~** object records audio data into the **buffer~** object that shares the same name. When the **record~** object receives the message *1* (or any nonzero number) it begins recording the audio signal it receives, by placing that data in the associated **buffer~**, starting at the beginning of the **buffer~**. When **record~** receives a *0* message, it stops recording. However, if the **record~** object's *append* attribute is set to *1*, instead of always starting its recording at the beginning of the **buffer~**, **record~** will instead begin recording wherever it was last stopped. In effect, each recording is appended to the previously recorded material in the **buffer~**.

This patch demonstrates the use of the *append* attribute to concatenate several recordings in the same **buffer~**. The patch includes a **buffer~ *theholdingplace*** object that has set aside enough memory to store up to ten minutes of audio. When the patch is loaded, MSP is turned on and the *append 1* message is sent to the **record~** ***theholdingplace*** object. The patch is now ready to record multiple excerpts. Try clicking on the **toggle** marked "record/stop" to start and stop recording, and make several recordings. Once you have done that, you can click on the *start* **message** box to play back the concatenated recordings.

The **line~** object and the **\*~** object make a very quick fade-in and fade-out at the beginning and ending of each recorded excerpt to avoid clicks. At the beginning of the recording, **line~** goes from 0 to 1 in 10 milliseconds. When the recording is stopped, **line~** goes back to 0 in 10 milliseconds (and the *0* is delayed by 10 milliseconds to allow the fade-out to finish before the recording is actually stopped).

## Objects used

`*~`, `line~`, `t`, `delay`, `b`, `sel`, `loadbang`, `play~`, `dac~`, `buffer~`, `record~`, `adc~`

*Patch contains 34 boxes, 24 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/consecutiverecordingsinsamebuffer.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/consecutiverecordinginsamebuffer.png`

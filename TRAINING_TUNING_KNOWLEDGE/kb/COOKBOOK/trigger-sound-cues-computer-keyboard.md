---
type: cookbook
name: "Trigger sound cues from the computer keyboard"
summary: "This shows how to prepare multiple sound cues for playback, and how to detect specific keystrokes in order to trigger the sound cues."
chapter: "MSP"
keywords: ["dac~", "gain~", "key", "loadbang", "select", "sfplay~"]
objects: ["dac~", "gain~", "key", "loadbang", "select", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/triggersoundcues.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/triggersoundcues_0.png"
---

# Trigger sound cues from the computer keyboard

This shows how to prepare multiple sound cues for playback, and how to detect specific keystrokes in order to trigger the sound cues. It also shows how to initialize a program by triggering certain messages as soon as the patch is opened. The sound signal is sent through a multiplier to adjust the gain (volume).

This patch requires three specific sound files in order to work properly. The Max application should find these automatically in the /Applications/Max.app/Contents/Resources/C74/docs/tutorial-patchers/msp-tut folder. (These will be in a different location on Windows machines.)

When the patch is opened, the **loadbang** object sends out a *bang* message to trigger three message box objects. The first message is *startwindow* to the **dac~** object. That turns on audio *for this window only*, which is a good idea, because one can’t know what other Max windows might be open that might make (potentially loud) sound as soon as audio is turned on; *startwindow* activates audio objects only in the current window and any of its subwindows. The next message is *127*, a MIDI-style value that sets the **gain~** fader and causes it to scale whatever signal goes through it by a factor of 0.933 (just under full volume, about -0.6 dB). Then it triggers a message box that actually contains three messages, separated by commas. (The commas break up a single message into multiple messages, to be sent out one after the other as fast as possible.) Those messages open three sound files, assigning them to cue numbers 1, 2, and 3 in the **sfplay~** object. They’re all monophonic sound files, so there’s only one channel of audio to come out, but that single signal is patched to both inlets of the **dac~** object, so it goes to both speakers. When a key is typed on the computer keyboard, the key object reports the ASCII code of that key. The select object looks for the ASCII codes 49, 50, and 51–the codes for the number 1, 2, and 3 keys–and sends a *bang* out the appropriate outlet if it detects one of those numbers. Those bangs trigger the messages *1*, *2*, or *3* to **sfplay~** to play those cues.

## Objects used

`loadbang`, `key`, `select`, `gain~`, `dac~`, `sfplay~`

*Patch contains 21 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/triggersoundcues.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/triggersoundcues_0.png`

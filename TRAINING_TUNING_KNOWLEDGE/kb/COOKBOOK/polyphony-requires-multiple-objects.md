---
type: cookbook
name: "Polyphony requires multiple objects"
summary: "Any given MSP patch cord represents a single channel of audio."
chapter: "MSP"
keywords: ["dac~", "dbtoa", "dial", "if", "key", "keyup", "loadbang", "loadmess", "meter~", "number~", "pack", "poly", "polyphony", "route", "sflist~", "sfplay~", "+", "+~"]
objects: ["*~", "+", "+~", "-", "dac~", "dbtoa", "dial", "if", "key", "keyup", "loadbang", "loadmess", "meter~", "number~", "pack", "poly", "route", "sflist~", "sfplay~", "split"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/polyphony1.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/polyphony1_0.png"
---

# Polyphony requires multiple objects

Any given MSP patch cord represents a single channel of audio. If you want to generate or process multiple sounds or channels, you need to treat each sound or channel separately. For example, each **sfplay~** object can have multiple loaded sound cues so that it's *ready* to play any one of several files, but it can only play one sound file at any given instant. And if it's a stereo file you need to treat each channel separately for mixing, processing, etc. This patch demonstrates that. The patch has several components, outlined by different color regions.

The top (pink) part of the patch doesn't have anything to do with audio. It shows the use of **key** and **keyup** to detect key presses and releases, the use of **split** to isolate a particular range of ASCII values corresponding to the number keys 1 through 8, and then the use of **pack** objects to attach a 1 to each key press and a 0 to each key release, making each key into a unique momentary button press, analogous to a simple MIDI-like keyboard. This lets you use key presses to trigger the starting and stopping of sound files.

The next (blue) portion of the patch demonstrates the **poly** object, which supplies a unique voice number to each pitch and velocity pair it receives. The argument 4 determines how many voices **poly** will allow, and the argument 1 is a flag that turns on "voice stealing". When voice stealing is on, when poly has received more than its maximum number of notes (4 in this case) it sends out a note-off for its oldest note (a velocity of 0 and the pitch number) before it sends out the note-on for its newly-received note. It treats the lists it receives as if they were pitch-velocity pairs. This is a good way to limit the number of notes you generate at any given moment.

The next (green) section adds 1 to the key numbers (1 through 8) to convert them into cue numbers for **sfplay~** (2 through 9), and packs the voice number, cue number, and 'velocity' (1 or 0) together as a list. The **route** object looks at incoming lists, and compares the first item in each incoming list (in this case, the voice number) to its own arguments. If it finds a match, it routes the rest of the list out the corresponding outlet. This is a good way to direct messages to a particular destination. Here it directs each cue to a unique **sfplay~** object so that multiple cues can be played simultaneously. The **if** objects say, in effect, if the second number (the 'velocity') is nonzero, then send out the cue number (to play the cue), otherwise send out *0* (to stop the cue). *[Geeky side-note: In this particular instance, you could replace the **if** objects with **\*** objects. Do you see why? But the **if** object more explicitly explains what's going on.]*

The next (yellow) section demonstrates the mixing of multiple sound generators. The **sfplay~** objects play in stereo, so the **+~** objects add all the left channels together and all the right channels together before passing them to the **dac~**. Once they have all been added (mixed) together, they go through **\*~** objects to give some control over the overall amplitude, because the four mixed sound files could potentially add up to a signal greater than 1 which would get clipped when sent to the **dac~**.

But how do the **sfplay~** objects know what the cue numbers mean? They all have a common argument "thecuelist" that causes them to refer to a **sflist~** object with the same argument. This is a good way to keep all cues localized in one place, to which multiple **sfplay~** objects can refer. In the upper-right (orange) portion of the patch we have initially preloaded cue numbers 2 through 9 into a **sflist~** object named "thecuelist". That cue information is shared by all **sfplay~** objects with that same argument.

The lower-right (violet) portion of the patch gives the user a **dial** with which to control the output volume up to + or - 12 decibels. Those amplitude changes are smoothed with a **number~** object that sends out the value as a signal, smoothed with a 10-millisecond ramp time whenever it receives a float in its inlet. Notice that the output signal is also being sent to **meter~** objects, so you can monitor the effects of the volume control.

## Objects used

`+~` ×6, `if` ×4, `sfplay~` ×4, `pack` ×3, `split` ×2, `-` ×2, `meter~` ×2, `*~` ×2, `+`, `route`, `keyup`, `poly`, `key`, `loadmess`, `dial`, `dbtoa`, `number~`, `dac~`, `loadbang`, `sflist~`

*Patch contains 76 boxes, 52 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/polyphony1.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/polyphony1_0.png`

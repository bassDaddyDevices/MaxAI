---
type: cookbook
name: "Trigger sound cues with the mouse or from the computer keyboard"
summary: "This is effectively pretty much identical to Trigger sound cues from the computer keyboard(trigger-sound-cues-computer-keyboard.md), but a) it allows the user t"
chapter: "MSP"
keywords: ["dac~", "fpic", "key", "select", "sfplay~", "ubutton", "AIFF file", "WAVE file"]
objects: ["dac~", "fpic", "key", "loadbang", "select", "sfplay~", "ubutton"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/keyboardsoundcues.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/keyboardsoundcues.png"
---

# Trigger sound cues with the mouse or from the computer keyboard

This is effectively pretty much identical to [Trigger sound cues from the computer keyboard](trigger-sound-cues-computer-keyboard.md), but a) it allows the user to trigger sound cues *either* with the mouse or with the computer keyboard, b) it shows the user a more refined interface than just a Max patch, c) it demonstrates the use of pasted graphics and ubutton objects to make buttons on a user interface, and d) it demonstrates the use of Max’s “presentation” mode.

The **loadbang** object is again used to start audio and preload the sound cues. (There’s no volume control in this patch.) The three message boxes can again be triggered by the ASCII key codes coming from the computer keyboard (using the key and select objects). This time there are also three invisible buttons (**ubutton** objects) that the user can click on to trigger the same three messages. How does the user know to click on them if s/he can’t see them? They are placed on top of a picture that has been pasted into the background of the patch with the Paste Picture command from the Edit menu. The picture should be something that invites the user to click on it (usually something buttonlike) and ideally should even give the user a good idea of what will happen if s/he does click on it (that’s left as a surprise in this program). When the patch is locked and running, the **ubutton** objects become invisible but respond to mouse clicks just like a **button** object. When clicked upon, they highlight by showing an alternative color, to give the user feedback that the click has been successful. In this program we also connected the select object outlets to the **ubutton**s so that the appropriate keys in the graphic would appear to flash when we type on the keys.

In Max, you can select objects and designate them to be part of the user interface that the user will see, by choosing the Add to Presentation command from the Object menu. When the patch is put in presentation mode (by clicking on the Presentation Mode button that looks like an easel at the bottom of the Patcher window), only the objects that have been added to the presentation will be visible, and the rest of the Max objects will be hidden. Furthermore, the sizing and placement of those objects in the presentation can be set differently for presentation mode than they are in normal Max edit mode or run mode. This is very useful for creating precisely the look you want to present to the user (when it’s in presentation mode) that is laid out differently from the way you want your program to be laid out when you’re editing it. To cause the patch always to open in presentation mode, you can open the Patcher Inspector (from the View menu) and check the option Open in Presentation.

## Objects used

`ubutton` ×3, `loadbang`, `key`, `select`, `dac~`, `sfplay~`, `fpic`

*Patch contains 15 boxes, 19 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/keyboardsoundcues.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/keyboardsoundcues.png`

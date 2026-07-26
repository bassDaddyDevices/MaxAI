---
type: cookbook
name: "Using Presentation Mode"
summary: "This program demonstrates how objects in Presentation Mode can have a different location and appearance than they do in Patching Mode."
chapter: "Max"
keywords: ["presentation mode", "sfplay~", "key", "loadbang"]
objects: ["ezdac~", "key", "loadbang", "select", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/threebuttons.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/threebuttons.png"
---

# Using Presentation Mode

This program demonstrates how objects in Presentation Mode can have a different location and appearance than they do in Patching Mode. Select the objects that you want to have appear in the presentation, and choose the Add To Presentation command from the Object menu. Then, to switch to Presentation Mode, click on the small easel icon at the bottom of the window (or type command-option-E). Now you see only the objects that will appear in the Presentation. While in Presentation Mode (but still in "unlocked" Edit mode) you can move those objects, resize them, and change their appearance attributes in their Inspector. To force your patch to open in Presentation Mode, choose the Patcher Inspector command from the View menu (or type command-shift-I), and check the "Open In Presentation" option.

This file has been saved to open in Presentation mode. To see the working patch behind the scenes, type command-option-E to go from Presentation Mode to Patching Mode, then type command-E to go from Locked (Running) Mode to Unlocked (Edit) Mode, and expand the window to see the whole patch (which looks like the graphic above.

This patch uses the loadbang object to set up the desired initial conditions: it opens three audio files, then turns audio on, so it's ready to play the files. The *open* message to sfplay~ is used to designate a file for cue number 1. Any other numbered cues must be designated by the *preload* message (followed by the desired cue number and then the file name). These three numbered cue messages *1*, *2*, and *3* are triggered either by the three buttons or by the "1", "2", and "3" keys on the computer keyboard (ASCII codes 49, 50, and 51). The select object detects those three ASCII codes.

So the program just allows you to trigger one of three soundfiles, either by clicking on buttons or typing on keys. It demonstrates the use of the loadbang object to intialize conditions, the select object to detect specific key presses, and the use of Presentation Mode to present to the user the exact interface you want him/her to see.

## Objects used

`select`, `key`, `loadbang`, `sfplay~`, `ezdac~`

*Patch contains 28 boxes, 18 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/threebuttons.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/threebuttons.png`

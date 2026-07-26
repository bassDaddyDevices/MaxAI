---
type: cookbook
name: "Open a sound file and play it"
summary: "This shows an extremely bare-bones program for audio file playback."
chapter: "MSP"
keywords: ["sfplay~", "ezdac~", "sound file", "AIFF file", "WAVE file"]
objects: ["ezdac~", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playsoundfile_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playsoundfile_0.png"
---

# Open a sound file and play it

This shows an extremely bare-bones program for audio file playback.

1. Click on the speaker button (**ezdac~** object) to turn audio on.

2. Click on the word *open* (**message** object) to open a dialog box that allows you to select a sound file. (In the dialog, select a WAVE or AIFF file and click Open).

3. Click on the **toggle** object to start and stop playing. (The **toggle** alternately sends a *1* or *0* to the **sfplay~** object, which **sfplay~** interprets as start and stop.)

The **sfplay~** box is an MSP object. It performs an audio task: it plays sound files from disk and sends the audio signal out its outlets. The number 2 after **sfplay~** is an “argument”, giving the object some additional information: that it should play in stereo, and thus should have two audio signal outlets. (The third outlet will send a notifying message when the soundfile is done playing, but this program doesn't use that outlet.) The speaker button (a.k.a. the **ezdac~** object) is a “user interface object”. It allows the user to interact with the program (in this case, by clicking on it with a mouse) and it performs a task (to turn audio on and off, and to play whatever audio signals it receives in its inlets as long as audio is turned on). Notice that the patch cords between the outlets of **sfplay~** and **ezdac~** are yellow and striped; that indicates that what is being passed between those objects is audio signal. The box containing the message *open* is a “**message** box”. It's a user interface object, too. When clicked upon, it sends the message it contains (in this case, *open*) out the outlet to some other object. This is a message that **sfplay~** understands. (If it were not, **sfplay~** would print an error message highlighted in red in the Max window when it received an unfamiliar message.) The plain patch cord indicates that what is passed between these objects is a single message that happens at a specific instant in time rather than an ongoing stream of audio data. The words ‘start/stop’ and ‘audio on/off’ are called “comments”. They don't do anything. They're just labels to give some information.

Here are a few thoughts for you to investigate on your own.

If you wanted audio to be turned on automatically when the patch is opened, and/or the 'Open File' dialog box to be opened automatically, how would you make that happen? (Hint: See **loadbang**.)

If you want to cause something to happen when the file is done playing, how would you do that? (Hint: Read about the right outlet of **sfplay~**.)

If you wanted to play the file at a different speed than the original, how would you do that? (Hint: Read about the right inlet of **sfplay~**.)

A single **sfplay~** object can only play one sound file at a time, but it can actually access a choice of several preloaded sound files. How can you make it do that? (Hint: Read about the *preload* message to **sfplay~**.)

Suppose you'd like to be able just to pause **sfplay~** and then have it resume playing from the spot where it left off rather than start from the beginning of the sound file again. Is that possible? (Hint: Read about the *pause* and *resume* messages to **splay~**.)

What if you want to start playback from the computer keyboard instead of with the mouse? (Hint: See **key**—and/or **keyup**—and **select**.)

Suppose you want to have control over the loudness of the file playback. What mathematical operation corresponds to amplification (gain control)? (Hint: See **\*~**. See also **gain~** and **live.gain~**.)

## Objects used

`ezdac~`, `sfplay~`

*Patch contains 9 boxes, 4 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playsoundfile_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playsoundfile_0.png`

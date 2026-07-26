---
type: cookbook
name: "Preload and play sound cues"
summary: "A single sfplay~ object can refer to many different sound files, or even specific portions of sound files, with a unique \"cue\" number assigned to each sound."
chapter: "MSP"
keywords: ["closebang", "ezdac~", "loadbang", "sfplay~", "AIFF file", "WAVE file"]
objects: ["closebang", "ezdac~", "loadbang", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/preloadsoundcues.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/preloadsoundcues.png"
---

# Preload and play sound cues

A single **sfplay~** object can refer to many different sound files, or even specific portions of sound files, with a unique "cue" number assigned to each sound. Once those sound cues have been preloaded (i.e. taught to the object), you can cause the object to play a cue just by sending the desired cue number in its left inlet.

The *open* message demonstrated in "[Open a sound file and play it](open-sound-file-and-play-it.md)" can also be used with an argument naming a particular sound file, as in *open myfile.aif*. This preloads the sound file directly into cue number 1, without using a dialog box to let the user find the file, and subsequently sending the number *1* to **sfplay~** will play that file. The message *preload* followed by a cue number, followed by the name of a file, as in *preload 2 my2ndfile.aif*, will preload the file and assign it cue number 2, and subsequently sending the number *2* to **sfplay~** will play that file.

Note that when you ask Max to find a file for you automatically, Max has to know where to look for that file. How will it know? Read the discussion of Max's file [search path](https://docs.cycling74.com/max5/vignettes/core/search_path.html) in the documentation.

In this example we use the **loadbang** object to set up some initial conditions in the program. This is an extremely common technique for setting up your program to function correctly and display the correct information when it's first opened. Once the entire program has been loaded into RAM, the **loadbang** object sends out a *bang* message, which you can use to trigger the initial conditions and actions that you want. Here we use it to preload all the sound cues we want, and to start up MSP audio processing (i.e., to start generating audio signal) in this program. By so doing, we have taught **sfplay~** its 8 sound cues, and we've started sending signal to the computer's sound output. The signal is all 0 until we play a sound cue, but it's on nevertheless, so we're ready to go. Choosing a number other than 0 in the **number** box will now play the cue.

When the user closes the window, the **closebang** object will make sure that MSP is turned off with a *stop* message. This is maybe a good opportunity to discuss the difference between *start* and*startwindow* for **dac~** and **ezdac~**. The *start* message turns on audio processing for the entire Max application, meaning that it's on in all loaded patches. The *startwindow* message turns on audio processing only for the patch in which the **dac~** or **ezdac~** object resides, and any subpatches it may contain, but turns audio processing off in all other loaded patches. The *stop* message turns off all audio processing in all patches. When audio has been turned on in only one window with the *startwindow* message, audio in all other windows will be turned off, but if you then close the window in which the audio was turned on with *startwindow*, MSP will be turned back on in the other open windows. So, if you wish to avoid that, and truly have the audio processing be turned off everywhere once that window is closed, a good way to ensure it is to trigger a *stop* message with **closebang**, as in this example.

One other tidbit of information relevant to this example is that the comma character in a **message** box has a special meaning. It serves as a separator of messages. That allows you to include a whole sequence of messages in a single **message** box. When the **message** box is triggered (with either a mouse click or an incoming message), the messages are sent out and executed consecutively as fast as possible. So in this example, a single *bang* actually triggers an *open* message (to set up cue number 1) and seven *preload* messages (to set up cues 2 thru 8). If, for some reason, you actually want to send a message that contains a comma, you would have to precede it with a backslash, as in *Hey\, how do you like that comma?* The backslash is what's called an "escape character" in programming; it's a character that precedes another character to remove that character's specialized meaning and just treat it as a neutral character.

## Objects used

`loadbang`, `closebang`, `ezdac~`, `sfplay~`

*Patch contains 14 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/preloadsoundcues.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/preloadsoundcues.png`

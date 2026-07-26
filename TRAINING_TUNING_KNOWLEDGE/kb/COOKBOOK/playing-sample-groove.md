---
type: cookbook
name: "Playing a sample with groove~"
summary: "The groove~ object plays sound from a buffer~, using two important pieces of information: a rate provided as a MSP signal and a starting point provided as a float or int message."
chapter: "MSP"
keywords: ["groove~", "buffer~", "sampling"]
objects: ["buffer~", "ezdac~", "gain~", "groove~", "number~", "sig~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/groovebasics.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/groovebasics.png"
---

# Playing a sample with groove~

The **groove~** object plays sound from a **buffer~**, using two important pieces of information: a rate provided as a MSP signal and a starting point provided as a float or int message. For normal playback, the rate should be a signal with a constant value of 1. (The **sig~** object is a good way to get a constant signal value.) A rate of 2 will play at double speed, a rate of 0.5 will play at half speed, and so on. Negative rate values will play backward. The starting point is stated in milliseconds from the beginning of the **buffer~**. In the example patch, read some sound into the **buffer~** objects, turn up the **gain~**, send a starting point number to **groove~**'s left inlet from the number box, and set the **sig~** value to 1. The sound will play till the end of the **buffer~** is reached or until the rate is set to 0 (or until a new starting point is sent in the left inlet.)

You can use a *set* message to **groove~** to cause it to access a different **buffer~**. All its other settings will stay the same, but it will simply look at the new **buffer~** for its sample data. You can test this by clicking on the *set soundA* and *set soundB* message boxes.

One of the important features of **groove~** is that it can be set to loop repeatedly through a certain segment of the **buffer~**. You set **groove~**'s loop start and end times (in ms) with numbers in the second and third inlets. By default, looping is turned off in **groove~**, but if you send it a *loop 1* message it will play till the loop end point, then leap back to the loop start point and continue playing. When looping is turned off, the loop end point will be ignored and **groove~** will play till the end of the **buffer~**. To loop the entire **buffer~**, set the loop start and end times to 0. (An end time of 0 is a code to **groove~** meaning "the end of the **buffer~**".)

You can also cause **groove~** to start playing from the loop start time with the *startloop* message. This works even when looping is turned off, but the loop end point will be ignored if looping is turned off. (Note that *startloop* does not mean "turn looping on"; it means "start playing from whatever time is set as the loop start time".)

Whenever **groove~** leaps to a new point in the **buffer~**––either because of a float or int message in its left inlet, or with a *startloop* message, or by reaching its loop end time and leaping back to the loop start time––there is a potential to cause a click because of a sudden discontinuity in the sound. That potential problem is addressed in the example “[Random access of a sound sample](random-access-sound-sample.md).”

## Objects used

`buffer~` ×2, `number~`, `ezdac~`, `gain~`, `sig~`, `groove~`

*Patch contains 18 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/groovebasics.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/groovebasics.png`

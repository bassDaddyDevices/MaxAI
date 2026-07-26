---
type: cookbook
name: "Interpolation with the function object"
summary: "The function object can be used to create line segment functions that control a line~ object, and it can also be used as a lookup table."
chapter: "Max"
keywords: ["function", "tempo", "clocker", ">="]
objects: ["*", "+", ">=", "clocker", "function", "makenote", "noteout", "sel", "tempo"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tempofunction.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tempofunction.png"
---

# Interpolation with the function object

The **function** object can be used to create line segment functions that control a **line~** object, and it can also be used as a lookup table. A number coming in its inlet will be treated as a point on the x-axis, and whatever y-axis value is shown on the line segment function at that point will be sent out the leftmost outlet. This example patch demonstrates that use of **function**.

The **function** object in this patch has been saved with its domain set at 10,000 and its range set from 60 to 180. Click on the **toggle** to see and hear what this patch does. When the **toggle** is turned on, it sends out the number 1, which turns on the **clocker** object, which in turn begins to report the time that has elapsed (starting at 0 at the moment it's turned on) at regular intervals specified by its argument (every 100 milliseconds in this case). The elapsed time is used to look up a tempo between 60 and 180 in the **function** object, and that tempo is sent to the **tempo** object to determine its (quarter note) beats per minute. The elapsed time value from the **clocker** is also used to check whether the stopping time has been reached, which initially is 10,000 milliseconds. Finally, the 1 from the **toggle** will be used to start the **tempo** object, which will have already received the correct tempo from the **function**. When **clocker** reaches 10,000, the **>=** object will send out the number 1, which will be detected by the **sel 1** object, which will turn off the **clocker** and the **tempo** object. Thus, as the elapsed time progressed from 0 to 10,000 (or whatever you set as the stopping time), those increasing numbers read through the function that is in the lookup table, i.e., the line segment shape designating musical tempo that is in the **function** object.

The upper left portion of the patch is a very simple note generator. The **tempo** object is set to output numbers designating sixteenth notes at whatever quarter-note tempo it receives. The first argument is the initial tempo, and the next two arguments are the numerator and denominator of a fraction saying what kind of note value it should use as its output rate, in this case 1/16 notes. The **tempo** object will send out the numbers 0 to 15 showing which 16th note it's on within a standard 4/4 meter. At the downbeat of each 4/4 measure, it wraps back around to 0 and repeats. Those numbers from the **tempo** object are multiplied by 3, thus counting by threes from 0 to 45, and then added to 48 so that it's now counting by threes from 48 to 93. Those numbers 48, 51, 54, 57,...93 are used as pitch values in the **makenote** object, which combines them with a velocity value of 127 and sends 125-ms-long MIDI notes to the **noteout** object. The result is a four-octave arpeggiation of a C diminished seventh chord.

Try changing the domain of the **function** to play phrases of different durations. Try clicking in the **function** to create new points, making whatever shape of tempo changes you'd like to try. (You can shift-click on points to delete them.)

## Objects used

`sel`, `>=`, `clocker`, `tempo`, `+`, `*`, `makenote`, `noteout`, `function`

*Patch contains 21 boxes, 19 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tempofunction.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tempofunction.png`

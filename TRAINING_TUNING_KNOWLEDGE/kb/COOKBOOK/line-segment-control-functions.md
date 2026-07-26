---
type: cookbook
name: "Line segment control functions"
summary: "The line~ object is intended for use as a control signal for audio."
chapter: "MSP"
keywords: ["buffer~", "cycle~", "dac~", "function", "line~", "scope~", "*~"]
objects: ["*~", "buffer~", "cycle~", "dac~", "function", "line~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/linesegmentcontrol.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/linesegmentcontrol.png"
---

# Line segment control functions

The **line~** object is intended for use as a control signal for audio. You don't listen to **line~** directly, but it's very effective as a controller/modifier/modulator of other signals. A pair of numbers (i.e. a two-item space-separated list of numbers) tells **line~** a destination value and a time (in milliseconds) to get to that value. For example, the message *0.99 100* tells **line~** to change its signal value from whatever it currently is to 0.99, moving linearly sample-by-sample toward 0.99 over the course of 100 milliseconds, calculating the intermediate signal value for each sample along the way. The result is a smoothly changing signal.

You can also send **line~** a list that has more than two numbers. Every two numbers in the list are viewed as a "destination value / transition time" pair. The output of **line~** follows the instructions of the first pair of numbers, then immediately follows the second pair, and so on. Thus, one can create a variety of control function shapes by specifying the destination value and transition time for each line segment.

In this patch, try clicking on the **message box** that says "example of a guitar-like pluck". The amplitude of the sound goes to full (0.99) in 1 millisecond, dies by -12 dB (to 0.25) in the next 99 milliseconds, dies another -14 dB (to 0.05) in the next 900 milliseconds, and then fades entirely to 0 in 3000 ms. The result is a 4-second note with roughly the amplitude envelope of a plucked string.

The **message box** just below that, labeled "fade-in, stay, fade-out", describes a very slow fade-in and fade-out. It goes to an amplitude of 0.5 in 2 seconds, stays there for 3 seconds, then fades to 0 in 5 seconds. The same sort of line segment function can also be used to control other aspects of a sound. The **message box** labeled "line segment control of frequency" specifies frequency values (to send a constantly changing frequency to **cycle~**) instead of amplitude values. It causes the frequency of the **message box** to jump immediately to 220 Hz, glide to 660 Hz in 3 seconds, shoot quickly down to 110 Hz in 5 milliseconds, then glide up to 440 Hz in about 7 seconds.

The **function** object allows you to draw a line segment function by clicking at the desired breakpoints. You can set the domain of that function (the total time of the x axis) in the object's Inspector or with a *setdomain* message. In this example, we have set the **function**'s domain to 10 seconds (10,000 ms). When the object receives a *bang*, it sends out its second outlet a list of destination value / transition time pairs that are designed to go to a **line~** object, and that correspond to the shape of the drawn function. So, in this example we use one **button** to trigger the **function** to send a 10-second line segment function to the **line~** that controls amplitude at the same time as we trigger the **message box** to send a 10-second function to the **line~** that controls the frequency of the **cycle~**. The result is continuous modulation of the oscillator's frequency and its amplitude.

For more on the use of line segment control functions, see the chapters on the Algorithmic Composition blog, titled "[Line-segment control function](http://algocomp.blogspot.com/2009/04/line-segment-control-function.html)" and "[Control function as a recognizable shape](http://algocomp.blogspot.com/2009/04/control-function-as-recognizable-shape.html)".

It's worth pointing out that the **cycle~** object in this example uses 512 samples of a stored waveform in a **buffer~** instead of its default cosine waveform. By giving a **cycle~** object the same name as a **buffer~**, you instruct it to look at 512 samples of that **buffer~** for its wavetable. The waveform being used in this example is one cycle of an electric guitar chord.

## Objects used

`line~` ×2, `scope~`, `buffer~`, `function`, `*~`, `cycle~`, `dac~`

*Patch contains 18 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/linesegmentcontrol.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/linesegmentcontrol.png`

---
type: cookbook
name: "Arpeggiate the harmonic series"
summary: "This example repeatedly arpgeggiates the first 16 notes of the harmonic series based on the frequency 65.406395 Hz, which is the fundamental frequency of the open C string on a cello."
chapter: "MSP"
keywords: ["counter", "dac~", "line~", "live.gain~", "live.numbox", "loadmess", "metro", "saw~", "select", "*~", "harmonic series", "arpeggiator"]
objects: ["*", "*~", "counter", "dac~", "line~", "live.gain~", "live.numbox", "loadmess", "metro", "saw~", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/arpeggiate16harmonics.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/arpeggiate16harmonics.png"
---

# Arpeggiate the harmonic series

This example repeatedly arpgeggiates the first 16 notes of the harmonic series based on the frequency 65.406395 Hz, which is the fundamental frequency of the open C string on a cello. The note rate can be adjusted anywhere from 1 note per second to 100 notes per second. The default initial rate is 8 notes per second.

Here’s some explanation of the objects, from bottom to top.

**dac~** transmits MSP signal to the computer’s DAC to be heard. It can also turn MSP processing on or off.

**loadmess** sends out its argument(s) as a single message as soon as the patch is loaded (right after all the other objects have loaded). Here it’s used to start MSP processing in the window as soon as the patch is opened, by sending the message *startwindow* to the **dac~**.

**live.gain~** is a volume control fader that numerically displays the amount of amplitude change it’s causing (in decibels) and also graphically displays the amplitude of its output as a stack of LEDs like an output meter on a mixing console. You can control it by dragging on the fader arrow with the mouse, or by sending a numerical message (int or float) in its inlet. Based on the number of decibels specified, it multiplies all the samples of a signal by the desired factor and passes the scaled signal out its outlet(s). Internally it interpolates over the course of 10 ms to get to any new specified level, to avoid clicks. In the object’s Inspector, you can change that interpolation Ramp Time if you want, you can change the Short Name to whatever you want displayed as a label for the fader, you can specify the number of Channels of signal you’ll want it to control, and you can specify an Initial Value for the fader by setting the Initial Enable option in the Inspector and setting the Initial Value you want. In this example, the number of channels (the ‘channels’ attribute) is set to 1, the Short Name label is set to 1, and the Initial Value is set to -24 dB (a relatively low amplitude, so the sound won’t be too annoying).

**\*~** controls the amplitude of the audio signal before it ever gets to the **live.gain~** fader. It functions as the basic sound-on/sound-off control for this sound (triggered by the **toggle** at the top of the patch).

**line~** provides linear interpolation smoothing for the sound-on/sound-off switching. Rather than switch the multiplying factor of **\*~** instantaneously between 0 and 1, which would cause a click, **line~** ramps to the new level smoothy over several samples of the audio signal. It expects to get two values, which may arrive together as a two-item list in its left inlet; in that list, the first item is the destination value **line~**‘s output signal should go to, and the second value is the amount of time, in milliseconds, it should take to get there. Once it gets there, it stays constant until it gets another message in its inlet.

**message** box contains the message for the line~ object, which should be a two-item list: destination value and ramp time. But what’s that *$1* business? In a **message** box, the term *$1* means “Put the first item of the input message here, then send out the resulting message.” So, for example if the message *0.5* comes in, the **message** box will put the 0.5 in place of the *$1* and send out ‘*0.5 25*′. (In this case the incoming message only had 1 item, but even if it were a list of several items, its first item would be put in place of the $1 in the outgoing message.) Knowing that, you can figure out that the **toggle** at the top of the patch will cause messages ‘*1 25*′ and ‘*0 25*′ to go the **line~** object, causing quick 25-millisecond fades in and out when the toggle is switched on or off.

**saw~** produces an anti-aliasing (band-limited) sawtooth-like waveform. An ideal sawtooth waveform has energy at all harmonics of the fundamental, which could result in audible aliasing of the higher harmonics, whereas **saw~** diminishes the amplitude of the upper harmonics as they approach the Nyquist frequency.

**\*** has a multiplier argument of 65.406395, which is the fundamental frequency of low C below the bass clef staff (cello low C). You can obtain the frequency of any of the harmonics of that fundamental by multiplying the fundamental frequency times a positive integer such as 1, 2, 3, etc. Those resulting frequencies are used here to set the frequency of the **saw~**.

**counter** counts the number of times it has received a ‘bang’ (or an int) in its left inlet, and it sends the count out its left outlet. When it has two typed-in arguments, it uses those as its minimum and maximum count values, and after it reaches the maximum it loops around and starts again at its minimum. So this **counter** will count repeatedly from 1 to 16.

**select** looks for a specified number (or any number of specified messages, actually) in its inlet, and sends a bang out the corresponding outlet when it receives the number it’s looking for. When this **select** object gets the number 1 it sends ‘bang’ out its left outlet. That ‘bang’ sets the **counter** to its minimum so it will start counting at 1 each time the **toggle** is turned on.

**metro** sends out a *bang* when it’s turned on (by a *bang* or a nonzero number in its left inlet) and continues to send out bangs at regularly scheduled intervals (specified in milliseconds by its ‘interval’ attribute or by a number in its right intlet) until it’s turned off (by *stop* or *0* in its left inlet).

**live.numbox** is similar to its Max counterpart **numbox**, but it behaves more the way number boxes do in the Ableton Live application. It has a somewhat different look from the Max **numbox**, and it has the ability to send out its Initial Value when the patch is loaded (without the use of **loadbang** or **loadmess**) if its Initial Enable option is set in its Inspector. Here its Initial Value is set to 125 in the Inspector, so when the patch is opened it immediately tells the **metro** that its time interval should be 125 milliseconds (1/8 second). In the Inspector its minimum and maximum values have been set to what seem like reasonable extremes, from 10 (an interval of 10 ms results in 100 notes per second triggered by the **metro**) to 1000 (1 note per second triggered by **metro**).

**toggle** switches its output between 1 and 0 each time it’s clicked upon. When it’s clicked for the first time, it sends out 1 which first resets the **counter** (via the patch cord going to the **select** object), then starts the **metro** (which bangs the **counter** which sends 1 to the **\*** which sets the frequency of the **saw~** to 65.406395), then it goes to the **message**, which constructs the message ‘*1 25*′ to fade the sound in quickly with **line~** and **\*~**. The next time the **toggle** is clicked, it stops the **metro** and turns down the amplitude of the **saw~** to 0.

## Objects used

`*~`, `line~`, `loadmess`, `dac~`, `live.gain~`, `live.numbox`, `*`, `select`, `counter`, `metro`, `saw~`

*Patch contains 17 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/arpeggiate16harmonics.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/arpeggiate16harmonics.png`

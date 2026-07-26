---
type: cookbook
name: "Ways to turn MSP on and off"
summary: "Did you know that there are several different ways to turn MSP audio on and off in Max?"
chapter: "MSP"
keywords: ["adc~", "adstatus", "closebang", "cycle~", "dac~", "ezadc~", "ezdac~", "inlet", "loadbang", "mute~", "outlet", "patcher", "pcontrol", "*~"]
objects: ["*~", "adc~", "adstatus", "closebang", "cycle~", "dac~", "ezadc~", "ezdac~", "loadbang", "mute~", "pcontrol"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/waystoturnmspon.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/waystoturnmspon.png"
---

# Ways to turn MSP on and off

**Did you know** that there are several different ways to turn MSP audio on and off in Max?

(If you want, you can cut to the chase to read about the simplest way to turn MSP on automatically.)

In order for Max compute audio, it’s necessary to explicitly turn MSP on. You can read about the reasoning behind [turning MSP on and off](http://sites.uci.edu/iap2015/2015/01/16/turning-audio-on-and-off-in-max/) if you want; this post will show you the various ways to do it.

**1.** The easiest way to turn MSP on and off is with the **ezadc~** object or the **ezdac~** object. Just put one in your patch and, voilà, you’ve got an on/off switch for MSP computation. Once the patch is locked, you can turn audio on/off by clicking on one of those objects.

**2.** You can also turn audio on with a *start* message to one of those objects and turn it off with a *stop* message.

**3.** You can also turn audio on and off with an integer (*int*) message to one of those objects. Any nonzero integer will turn MSP on, and 0 will turn it off. N.B. Interestingly, unlike most Max objects, these objects will not convert *float* to *int*. If these objects receive a message of type float such as 3.14, rather than truncate the number and convert it to an int, they’ll simply report “doesn’t understand ‘float'” in the Max Console window.

**4.** Normally when MSP is on, it’s on in *all* loaded patches. The message *startwindow* to either of these two objects, however, will turn on audio only in the patch where the message was received (and in subpatches of that patch), and will stop audio in all other patches.

N.B. In Max 7, the **ezadc~** and **ezdac~** objects each have a ‘local’ attribute. When that attribute is enabled, the mouse-click behaves like *startwindow* and *stop* instead of *start* and *stop*.

**5.** The above methods 2, 3, and 4 apply equally well using the plain ol’ **adc~** and **dac~** objects. Those objects don’t provide the user-interface characteristics of their **ezadc~** and **ezdac~** counterparts, but in terms of the messages described above they behave identically.

N.B. Another important distinction is that the user-interface objects **ezadc~** and **ezdac~** are fixed at 2 channels of signal input/output communicating with channels 1 and 2 of the audio interface; **adc~** and **dac~** are also stereo by default, but they can be set to communicate with any number of specific channels of the audio interface depending on the typed-in channel arguments. That capability is essential for addressing specific channels of a multi-channel audio interface.

**6.** The **adstatus** object reports and/or sets different aspects of MSP. What it reports or sets depends on the argument that you type in after the object name. The argument‘switch’ refers to MSP’s on/off status, so an object **adstatus switch** allows you to report or set the on/off status of MSP. In either of its inlets, a nonzero integer turns MSP on, and 0 turns MSP off.

**7.** It’s a relatively unknown or at least underappreciated fact that a **message** object can send a message to any **receive** object by starting its message with a semicolon and the name of the **receive** object. This is a “Did You Know?” bit of knowledge, of the sort that’s well known to some people and completely unknown to others. Well, did you know that you can send a message to MSP itself using a **message** box, by starting its message with a semicolon and the word ‘dsp’? Thus, triggering a **message** box that contains the message ‘*; dsp start*’ starts MSP, and triggering a **message** box that contains the message ‘*; dsp stop*’ stops MSP.

**8.** In the Audio Status window, there’s a button to turn MSP on/off. You get to the Audio Status window by choosing Audio Status… from the Options menu, or by sending an ‘open’ message to any **adc~**, **dac~**, **ezadc~**, or **ezdac~** object.

**9.** In Max 7 each patcher window has an Audio On/Off button in the bottom right corner. (The button is disabled until the patch contains at least one MSP object.)

In addition to all of those methods of turning MSP on and off, there are a few ways you can turn off MSP selectively in certain subpatches (**patcher** objects) or abstractions (other patches loaded in as objects in a main patch). The next three items address some of those methods.

**10.** You can disable/enable the audio and MIDI capabilities of a subpatch or an abstraction by attaching a **pcontrol** object to the subpatch’s left inlet and sending a message ‘*enable 0*′ or ‘*enable 1*′ (or any nonzero number) to the **pcontrol** object.

**11.** You can disable/enable the audio capabilities of a subpatch or an abstraction by attaching a **mute~** object to the subpatch’s left inlet and sending an int to **mute~**: any nonzero int will mute the attached subpatch, and 0 will unmute it.

Note that “muting” is conceptually the opposite of “enabling”, so methods 10 and 11 above work in opposite ways. Think of the 0 and the nonzero numbers as meaning “no” and “yes” respectively. So the message ‘*enable 0*′ to **pcontrol** means, “no, don’t enable the subpatch”, whereas the message ‘*1*′ to **mute~** means, “yes, do mute the subpatch”.

N.B. The use of **mute~** and **pcontrol** to turn MSP computation on/off in a subpatch or abstraction is officially “deprecated” by Cycling ’74. That means that the company doesn’t guarantee that those methods will work in future versions of Max, so your patch may no longer work properly if Cycling ’74 stops supporting that feature. So far, as of Max 7, these methods continue to work fine. But you’ve been warned. For the Cycling ’74 approved way of muting subsidiary parts of a patch selectively, see method 12 below.

**12.** The **poly~** object is a container for multiple instances of a subpatch. It’s intended to facilitate polyphonic use of multiple instances of the same subpatch, and it allows each instance of the subpatch to be muted independently with a ‘*mute 1*′ message and unmuted with ‘*mute 0*′. So when you need to stop and start computation within a subpatch, even for muting and unmuting a single instance of a subpatch, encapsulating it inside a **poly~** is the preferred method.

**(13.)** This last method isn’t really about turning MSP on and off, but it’s useful knowledge for listening to different parts of a multi-patch signal network. In Max 7, you can create a Solo button and/or a Mute button for any patcher window. In the bottom right corner of a patcher window, you can right-click (or Control-Click in Mac OS) on the Audio On/Off button, which will present you with a popup menu that allows you to create a Solo button and/or a Mute button. Those buttons work as you might expect, just like comparable buttons on an audio mixer. The Mute button will silence (but not actually stop the computation of) all audio being sent to any **dac~** or **ezadc~** object in that particular patch. The Solo button will silence (but not actually stop the computation of) all audio being sent to any **dac~** or **ezadc~** objects in all other patches.

**Conclusion**

If your Max program does anything with audio, it should simply (automatically) turn audio on immediately and leave it on.

Somewhere in your patch you should automate one of the above methods of turning MSP on. The method that involves the fewest objects is to use a **loadbang** object to trigger a **message** box containing the message ‘*; dsp start*’. Place that in your main patch, and (provided you have at least one MSP object in the patch) audio processing will always be underway.

## Objects used

`dac~` ×4, `*~` ×2, `cycle~` ×2, `adc~` ×2, `pcontrol`, `mute~`, `ezdac~`, `ezadc~`, `adstatus`, `closebang`, `loadbang`

*Patch contains 38 boxes, 22 connections, 2 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/waystoturnmspon.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/waystoturnmspon.png`

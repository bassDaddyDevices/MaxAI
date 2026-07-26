---
type: cookbook
name: "Behringer BCF2000 emulator"
summary: "This patch provides a virtual emulator of the popular Behringer BCF2000 hardware MIDI controller."
chapter: "Max"
keywords: ["Behringer BCF2000", "emulator", "MIDI", "control", "fpic"]
objects: ["*", "ctlin", "ctlout", "dial", "fpic", "led", "loadbang", "midiinfo", "pack", "route", "slider", "swap", "t", "umenu"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/BCF2000.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/BCF2000_0.png"
---

# Behringer BCF2000 emulator

This patch provides a virtual emulator of the popular Behringer BCF2000 hardware MIDI controller.

Even if you don't have a BCF2000, this patch allows you to replicate it onscreen. The patch allows you to control other MIDI devices just as if you did have the hardware controller. Use the **umenu** to select the port to which you want to transmit, then use the emulator patch to send MIDI control messages.

If you do have a BCF2000, this patch can show any changes you make on the hardware controller. Ensure that the MIDI port chosen in the **umenu** in the patch corresponds to the port on which you have the hardware controller connected. This patch assumes that you're using the factory preset No. 1 of the controller, and will show whatever changes you make on the hardware controller. Conversely, any change you make to the **dial**s, **button**s, or **slider**s in this patch will be transmitted to, and replicated on, the hardware controller.

The patch is set to open in Presentation mode. The image of the BCF2000 is simply a JPEG picture, [BCF2000.jpg](http://music.arts.uci.edu/dobrian/maxcookbook/sites/default/files/BCF2000.jpg), in an **fpic** object. Max UI objects such as **dial**s, **button**s, and **slider**s have been placed on top of the **fpic**, to give the user the ability to move those as if the image had moveable controls. To see the contents of the patch, take the patch out of Presentation mode, unlock the patch (i.e., go to Edit mode), and expand the window. You can see that **ctlin** and **ctlout** objects are being used to receive and transmit the MIDI data. A series of **route** objects routes each type of control message from **ctlin** to the appropriate **dial**, **button**, or **slider** in the patch. (Because we're assuming factory preset No. 1, we know what MIDI controller number corresponds to each control on the BCF2000.) The output of those user interface objects gets combined with the proper controller number and channel number and is transmitted via the **ctlout** object. The patch also has **inlet** and **outlet** objects for each piece of information, so that this patch can be used as a subpatch inside a parent patch in Max; this way, the MIDI information can come from, and go to, the parent patch. You would need to save this patch in the Max file search path.

It might be a burden to keep track of all these MIDI controller numbers in other parts of a more complicated Max patch. So, for that reason, see the example "[Behringer BCF2000 router](behringer-bcf2000-router.md)", which shows how you could use intuitive names such as *button1* to route the MIDI data to the desired objects in a main patch. To use that router patch, you will need to save this patch file with the name "BCF2000.maxpat".

Even if you don't have a BCF2000, or don't see the value of using an emulator of it yourself, this patch can serve as a model for a similar one you might want to make, to create an emulator of a hardware device you do have.

## Objects used

`t` ×36, `led` ×20, `*` ×20, `slider` ×8, `dial` ×8, `route` ×5, `swap`, `loadbang`, `umenu`, `midiinfo`, `pack`, `fpic`, `ctlout`, `ctlin`

*Patch contains 122 boxes, 229 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/BCF2000.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/BCF2000_0.png`

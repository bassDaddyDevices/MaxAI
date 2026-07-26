---
type: cookbook
name: "Enable/disable subpatches"
summary: "The most direct and usually the best way to \"turn off\" a signal in MSP is to multiply it by 0."
chapter: "MSP"
keywords: ["pcontrol", "mute~", "matrix~", "enable"]
objects: ["==", "cycle~", "ezdac~", "gain~", "loadmess", "matrix~", "mute~", "pack", "pass~", "pcontrol", "prepend"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/beginAndMatrix.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/beginAndMatrix.png"
---

# Enable/disable subpatches

The most direct and usually the best way to "turn off" a signal in MSP is to multiply it by 0. However, even if a signal is multiplied by 0, MSP still works to compute that signal. So, if you need to conserve CPU usage, it's best to disable the computation of that signal once it has been silenced, then re-enable it when you want to turn it up again.

The best practice is to encapsulate the portion of your patch that you wish to disable/enable in a subpatch or an abstraction, so that you can simply disable that entire subpatch. There are various ways to disable MSP computation. This example shows two of them.

One method is to connect a **mute~** object to the left inlet of a subpatch (a **patcher** object or an abstraction). When the **mute~** object receives a non-zero number, it mutes the subpatch to which it is connected; when **mute~** receives a 0, it re-enables that subpatch. Note that the instructions to **mute~** serve as instructions to the verb "to mute", so an affirmative message (a non-zero number) means, "Yes, mute the subpatch," and a negative message (0) means "No, don't mute the subpatch."

Another method is to connect a **pcontrol** object to the left inlet of a subpatch. You can then enable or disable the connected subpatch by sending a message *enable 1* (yes, enable the subpatch) or *enable 0* (no, don't enable the subpatch) to **pcontrol**. By the way, **pcontrol** works for non-MSP subpatches, as well, enabling/disabling any MIDI objects in the subpatch.

In this example we use a **matrix~** object to control the amplitude of four MSP subpatches, allowing us to fade them in and out gradually. To actually disable the MSP computations within those subpatches, though, we need to use one of the methods described above, although that will turn the processes on and off instantaneously.

## Objects used

`pack` ×4, `pass~` ×4, `cycle~` ×4, `mute~` ×2, `==` ×2, `pcontrol` ×2, `prepend` ×2, `loadmess`, `ezdac~`, `gain~`, `matrix~`

*Patch contains 72 boxes, 48 connections, 5 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/beginAndMatrix.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/beginAndMatrix.png`

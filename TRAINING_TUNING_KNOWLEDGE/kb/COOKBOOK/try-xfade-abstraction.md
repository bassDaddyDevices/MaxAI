---
type: cookbook
name: "Try the xfade~ abstraction"
summary: "For this example to work properly, you must first download \"Abstraction for mixing or crossfading two audio signals(abstraction-mixing-or-crossfading-two-audio-"
chapter: "MSP"
keywords: ["*~", "-~", "gain~", "cycle~", "line~"]
objects: ["cycle~", "ezdac~", "gain~", "line~", "pack", "xfade~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/xfade~test.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/xfade~test.PNG"
---

# Try the xfade~ abstraction

For this example to work properly, you must first download "[Abstraction for mixing or crossfading two audio signals](abstraction-mixing-or-crossfading-two-audio-signals.md)" and save it with the name xfade~.maxpat. Then you must ensure that your xfade~.maxpat file is in the Max search path, or you must save this example patch in the same folder as the xfade~.maxpat file and reopen it, so that this patch can find the **xfade~** object.

This example demonstrates two ways to establish the initial crossfade value of the **xfade~** abstraction. The example on the left uses an initial float argument to establish the initial crossfade value. If you double-click on the **xfade~** object on the left, you will see that the two objects that had a ‘#1’ argument in the subpatch now have the number ‘0.1’ in those places. This sets up the object so that the **cycle~ 440** will have an amplitude of 0.9 in the mix, and the **cycle~ 465** object will have an amplitude of 0.1 (about 19 dB lower). The example on the right uses a control signal from the **line~** object to provide the crossfade value. So in this case there's no point in typing in an argument in the **xfade~** object, because it would not be used by the MSP objects in the subpatch anyway. The argument to the **line~** object, however, is important, since it establishes the initial value of that signal. That's where the real initialization takes place for the crossfade value of that **xfade~** object.

Notice that the **number** boxes in these examples show a value of 0 initially, which does not accurately represent the actual initial crossfade value. So if these objects will be presented to the user, and you want them to show the correct value, you would need to initialize them to the value 0.1, too. You could do that with a **loadbang** object triggering a **message** of *0.1* or *set 0.1*.

The **gain~** sliders are provided so that you can choose to listen to one or the other of the two halves of this example.

## Objects used

`cycle~` ×4, `gain~` ×2, `xfade~` ×2, `pack`, `line~`, `ezdac~`

*Patch contains 14 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/xfade~test.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/xfade~test.PNG`

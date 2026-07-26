---
type: cookbook
name: "Present different views of a subpatch"
summary: "The bpatcher object allows a patch to show a window onto the contents of a subpatch."
chapter: "Max"
keywords: ["bpatcher", "offset", "thispatcher"]
objects: ["/", "ctlin", "dial", "gain~", "pak", "split", "textbutton", "thispatcher"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/twoviewsofbpatcher.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/twoviewsofbpatcher.png"
---

# Present different views of a subpatch

The **bpatcher** object allows a patch to show a window onto the contents of a subpatch. The portion of the subpatch that will be shown in the **bpatcher** window can be changed by an *offset* message to the **bpatcher** or to a **thispatcher** object inside the subpatch.

You can devise your subpatch in such a way that different portions of the subpatch can usefully be shown in the main patch, which makes the main patch seem to automatically change its appearance, as demonstrated in this example. (To see the effect, put this example patch in Presentation mode.) The *offset* is 0 0 (the upper left corner of the subpatch's patcher window) by default, until you set it to something else. If you keep track of which offset positions will give the different desired appearances, you can switch from one view to another.

The additional file called "bpatchersubpatch.maxpat" provided here shows the contents of the subpatch that's embedded in the **bpatcher** in the main patch.

## Objects used

`textbutton` ×2, `/` ×2, `ctlin` ×2, `dial` ×2, `split`, `gain~`, `pak`, `thispatcher`

*Patch contains 31 boxes, 24 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/twoviewsofbpatcher.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/twoviewsofbpatcher.png`

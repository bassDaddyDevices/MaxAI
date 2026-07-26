---
type: cookbook
name: "Flashing picture as a button"
summary: "The button object in Max gives visual feedback when it’s clicked upon, by flashing once briefly."
chapter: "Max"
keywords: ["fpic", "ubutton"]
objects: ["fpic", "ubutton"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/flashingpicturebutton.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/flashingpicturebutton_0.png"
---

# Flashing picture as a button

The **button** object in Max gives visual feedback when it’s clicked upon, by flashing once briefly. If you’re using a picture (an **fpic** object) to serve as a button and you’d like it to give that same sort of visual feedback when clicked, you can cover the **fpic** object with a **ubutton** object, which behaves rather like a **button** but becomes transparent when the patch is locked.

![](/dobrian_book/drupal/sites/default/files/flashingpicturebutton.png)

This is what it will look like in Presentation Mode.

![](/dobrian_book/drupal/sites/default/files/flashingpicturebutton_presentation.png)

## Objects used

`ubutton`, `fpic`

*Patch contains 10 boxes, 1 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/flashingpicturebutton.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/flashingpicturebutton_0.png`

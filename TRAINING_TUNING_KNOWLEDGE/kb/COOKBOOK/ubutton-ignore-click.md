---
type: cookbook
name: "Ubutton ignore click"
summary: "This example demonstrates a particular logical task: make one text clickable, and as soon as it is clicked upon, make it unclickable and set some other text to be clickable."
chapter: "Max"
keywords: ["ubutton", "ignoreclick", "comment", "toggle", "trigger"]
objects: ["t", "ubutton"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ubuttontoggleignoreclick.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ubuttontoggleignoreclick.png"
---

# Ubutton ignore click

This example demonstrates a particular logical task: make one text clickable, and as soon as it is clicked upon, make it unclickable and set some other text to be clickable. In other words, have two texts, only one of which is clickable, and which swap their states whenever the clickable one is clicked.

To accomplish this, we've chosen to use the **ubutton** object, which is a clickable transparent button. Because it's transparent, you can place a text **comment** or any graphic image behind it. The patch shows you how you can set or clear the text that appears in the **comment**, while also toggling the *ignoreclick* attribute of the **ubutton** that's on top of it.

In general, whenever you're trying to program a situation in which something switches between two states, the **toggle** object is appropriate. In effect, just like a light switch, the **toggle** goes back and forth between on and off (1 and 0). Internally toggle keeps track of its current zero/nonzero state, and whenever it is triggered by a mouse click or a *bang*, it switches its state. In text terms we might say, "If state is TRUE, set state to FALSE, otherwise set state to TRUE." In this patch, however, the **toggle** objects are really just used as indicators of the state of the *ignoreclick* attribute of the **ubutton**; the actual toggling logic is accomplished by the two **t** (**trigger**) objects. Step through the different messages mentally, in order, to follow the process.

## Objects used

`ubutton` ×2, `t` ×2

*Patch contains 14 boxes, 18 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ubuttontoggleignoreclick.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ubuttontoggleignoreclick.png`

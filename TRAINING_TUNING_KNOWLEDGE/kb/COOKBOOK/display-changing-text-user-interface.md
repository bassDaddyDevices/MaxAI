---
type: cookbook
name: "Display changing text in the user interface"
summary: "This example shows several different ways you can display changing text in the user interface of your Max patch."
chapter: "Max"
keywords: ["comment", "text", "label", "message", "umenu"]
objects: ["lcd", "prepend", "umenu"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/displayingtext.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/displayingtext2_0.png"
---

# Display changing text in the user interface

This example shows several different ways you can display changing text in the user interface of your Max patch. For demonstration purposes, we’re storing the text we want to display in a **message** box, but in actual practice, if you had a whole collection of different messages you want to display at different times, you could keep them all in a **coll** object.

The most obvious and common object for displaying text is a **comment**. Most often the text of a **comment** is fixed, but there’s no reason you can’t make it change on the fly, setting its contents to something new with the *set* message, as shown in the top example. The *set* message by itself erases the contents entirely.

The next two examples use the **message** object. The appearance of these **message** boxes has been changed in the Inspector. The Background Color (the *bgfillcolor* attribute) has been set to Color Fill with an Opacity of 0%, making it transparent, and the Text Color (the *textcolor* attribute) has been set to black. You can set the contents of a **message** with the *set* message, just like a **comment**, or you can send the desired message into the right inlet of **message**, which has the same effect. (Although not demonstrated here, text that’s displayed in this way is clickable, because a **message** sends out its message when clicked upon.)

A **unmenu** object can be put into Label mode in the Inspector (or with a *menumode 2* message), which turns its background invisible and makes it non-clickable by default. Note that the syntax is a little different here: the menu is cleared with a *clear* message, and then the menu item is added with an *append* message. Perhaps more sensibly, if you have a number of different items you want to display at different times, you would make each one a different menu item (within the **umenu**), and then simply select the item you want to display by sending a number in the inlet.

Finally, although it’s not the simplest way, if you’re using the **lcd** object as part of your user interface, you can write text anywhere you want in the **lcd**.

## Objects used

`prepend` ×4, `umenu`, `lcd`

*Patch contains 19 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/displayingtext.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/displayingtext2_0.png`

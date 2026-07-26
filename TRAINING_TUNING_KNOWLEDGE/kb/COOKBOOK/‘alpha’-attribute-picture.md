---
type: cookbook
name: "The ‘alpha’ attribute of a picture"
summary: "In digital images, each pixel contains color information (such as values describing intensity of red, green, and blue) and also contains a value for its opacity known as its ‘alpha’ value."
chapter: "Max"
keywords: ["fpic", "loadmess", "mousestate", "select"]
objects: ["fpic", "loadmess", "mousestate", "select", "ubutton"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/fpic_alpha_ubutton.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/fpic_alpha_ubutton.png"
---

# The ‘alpha’ attribute of a picture

In digital images, each pixel contains color information (such as values describing intensity of red, green, and blue) and also contains a value for its opacity known as its ‘alpha’ value. An alpha value of 1 means totally opaque, and an alpha value of 0 means totally transparent. This value can be used for blending images, or for making all or part of an image totally transparent.

The **fpic** object has an attribute called ‘alpha’, the value of which determines the opacity of the whole image in the **fpic** object. By default its ‘alpha’ attribute is set to 1, totally opaque. You can change that alpha value to 0, making the image totally transparent, effectively hiding it.

This example shows how you can use the ‘alpha’ attribute to make an image seem toggle between two different pictures. The trick we use here is to stack two different **fpic** objects on top of each other in the Presentation, and then change the ‘alpha’ attribute of the top picture to make it transparent, revealing the second picture underneath it. To do that, we put a transparent **ubutton** object on top of both pictures, so that when a user clicks on it we can hide the top picture, and when the mouse is released we can show it again.

Put the patch in Presentation Mode and click on the picture to see the result.

In this case, in the **ubutton** object’s Inspector, we set the object’s ‘hilite’ attribute to 0 so that it wont flash. The change of the picture will be enough visual feedback for the user.

One little potential problem, though, is that if the user drags off of the **ubutton** before releasing the mouse button, the mouseup message (the release of the mouse button) is never detected by the **ubutton**. So we added a **mousestate** object to reset the alpha of the image to 1 whenever the mouse button is up.

## Objects used

`fpic` ×2, `loadmess`, `select`, `mousestate`, `ubutton`

*Patch contains 13 boxes, 8 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/fpic_alpha_ubutton.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/fpic_alpha_ubutton.png`

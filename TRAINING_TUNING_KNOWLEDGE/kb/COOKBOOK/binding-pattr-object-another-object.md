---
type: cookbook
name: "Binding a pattr object to another object"
summary: "If you're unfamiliar with the pattr object, see first the \"Introduction to the pattr object(introduction-pattr-object.md)\"."
chapter: "Max"
keywords: ["pattr", "bindto"]
objects: ["pattr", "print"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pattrdemo2.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pattrDemo2.JPG"
---

# Binding a pattr object to another object

If you're unfamiliar with the **pattr** object, see first the "[Introduction to the pattr object](introduction-pattr-object.md)".

A **pattr** object can be bound to another object, so that the two objects share the same data. By setting the **pattr**'s *bindto* attribute, you can bind it to any other named **pattr** object, or a user interface (UI) object that has a scripting name. In this example, we have set the scripting name of the **number box** at the bottom of the patch to *panning* in the object's Inspector. That allows us to bind it remotely (with no patch cord) to the **pattr**. (Incidentally, although it's not demonstrated here, you can also bind a **pattr** to a UI object, even an unnamed one, by connecting the UI object to the **pattr**'s middle outlet.) Once the two objects are bound together, any change to the contents of one of them will be shared by the other, and the contents can be recalled from either of them with a *bang*. Also, both of them will send out their stored message when the patch is loaded.

## Objects used

`print`, `pattr`

*Patch contains 12 boxes, 3 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pattrdemo2.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pattrDemo2.JPG`

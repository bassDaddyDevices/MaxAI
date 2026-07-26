---
type: cookbook
name: "Binding objects to each other, and to a pattr"
summary: "If you want two user interface objects (UI) always to display the same information, it might seem sensible to connect the outlet of one to the inlet of the other and vice versa."
chapter: "Max"
keywords: ["pattr", "bindto", "set"]
objects: ["pattr", "prepend", "print", "slider", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pattrdemo3_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pattrDemo3_03.png"
---

# Binding objects to each other, and to a pattr

If you want two user interface objects (UI) always to display the same information, it might seem sensible to connect the outlet of one to the inlet of the other and vice versa. However, that will lead to an infinite loop unless you do something to stop one of them from always sending out the value. The *set* message is useful in that regard, because it allows you to set the contents (and the display) of a UI object without causing that object to send out a message of its own. The top part of the patch demonstrates this technique. Whenever the **slider** is moved by the mouse, it sends its value out to the **number box**. The **number box** displays that value and passes it on out its outlet, so both objects end up showing the same (most recent) value. But what if the user changes the **number box** directly with the mouse? We would want the **slider** to be updated as well. That's why we use the *set* message to set the content and appearance of the **slider** without causing it to send out that value again (which would cause the feared infinite loop). In this way, no matter which object is moved by the mouse, they both correctly show the most recent value.

A **pattr** can be bound remotely to one of those two UI objects by referencing the object's scripting name (as set in the object's Inspector). Since the two UI objects are effectively bound to each other using the *set* technique described in the previous paragraph, the effect is as if the **pattr** were bound to both of those UI objects. (See also, "[Binding a pattr object to another object](binding-pattr-object-another-object.md)".)

## Objects used

`pattr`, `print`, `prepend`, `t`, `slider`

*Patch contains 18 boxes, 6 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pattrdemo3_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pattrDemo3_03.png`

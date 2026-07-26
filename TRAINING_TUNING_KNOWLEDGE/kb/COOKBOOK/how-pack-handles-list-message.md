---
type: cookbook
name: "How pack handles the list message"
summary: "The pack object is useful for combining int, float, and/or symbol messages into a single space-separated list."
chapter: "Max"
keywords: ["pack", "list", "message type"]
objects: ["pack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/listmessagetopack.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/listmessagetopack.png"
---

# How pack handles the list message

The **pack** object is useful for combining *int*, *float*, and/or *symbol* messages into a single space-separated *list*. Messages that come in each inlet of **pack** are stored until a message comes in the left inlet, triggering output of the entire list.

The inlets of the **pack** object are all "typed", which is to say that each inlet expects a particular message type, either "i" for *int*, "f" for *float*, or "s" for *symbol*, specified by the typed-in arguments. Everything that comes into **pack** gets converted to one of those three specified types if it doesn't already match the specified type for that inlet. There is no allowed argument "l" for *list* in **pack**. Instead, if **pack** gets a *list*, it distributes the list items among all the subsequent inlets and stores them, as shown in the middle section of this example patch. If the *list* comes in the leftmost inlet, the items are distributed per inlet, and then the output is triggered. If a *list* comes in the rightmost inlet, only the first item of the *list* gets stored; the length of the output doesn't get extended to accommodate the incoming *list*, as demonstrated in the right part of this patch.

By contrast, the inlets of the **join** object are all untyped (type-agnostic). Whatever comes in each inlet gets stored in its entirety, and the result is joined into a single output *list*, with a space in between each inlet's message.

## Objects used

`pack` ×3

*Patch contains 25 boxes, 19 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/listmessagetopack.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/listmessagetopack.png`

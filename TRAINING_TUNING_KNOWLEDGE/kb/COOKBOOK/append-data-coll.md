---
type: cookbook
name: "Append data to coll"
summary: "A reasonable way to append an item in the coll object is to keep track of the last or highest index."
chapter: "Max"
keywords: ["append", "coll", "store"]
objects: ["+", "coll", "i", "pack", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/appendItemInColl.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/appendItemInColl2.png"
---

# Append data to coll

A reasonable way to append an item in the **coll** object is to keep track of the last or highest index. This can be done using a **counter** object or an **i (int)** object just above **coll**. Then increment the **counter** or **i**by one each time you add a new item to the **coll** object.

To store any message in a **coll**, you simply prepend an index number before the message. In this example, we are just storing integers from a **number box**. Whatever integer comes out of the number box gets held in the right inlet of a **pack** object, then we increment the index counter (the **i** object) by adding 1 to it and putting it back in the right inlet of the **i** object (thus always storing the highest index used), and we use that as the index to store the integer in the **coll**.

## Objects used

`t` ×2, `+`, `coll`, `pack`, `i`

*Patch contains 7 boxes, 8 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/appendItemInColl.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/appendItemInColl2.png`

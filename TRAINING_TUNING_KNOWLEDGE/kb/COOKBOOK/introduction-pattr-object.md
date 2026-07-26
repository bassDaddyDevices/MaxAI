---
type: cookbook
name: "Introduction to the pattr object"
summary: "The pattr object and its related objects such as pattrhub, pattrforward, autopattr, and pattrstorage make it possible for you to store data (or any sort of mess"
chapter: "Max"
keywords: ["pattr"]
objects: ["pattr", "print"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pattrdemo1.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pattrDemo1_03.png"
---

# Introduction to the pattr object

The **pattr** object and its related objects such as **pattrhub**, **pattrforward**, **autopattr**, and **pattrstorage** make it possible for you to store data (or any sort of message, really), recall that data when the patch is reopened, store and recall it from other parts of the patch, and make transitions from one set of stored data to another.

The basic unit of storage is the **pattr** object. It can store any message, its contents will be saved as part of the patch, and it will recall and send out its saved message when the patch is loaded.

## Objects used

`print`, `pattr`

*Patch contains 9 boxes, 3 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pattrdemo1.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pattrDemo1_03.png`

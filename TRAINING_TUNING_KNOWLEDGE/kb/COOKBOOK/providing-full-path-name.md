---
type: cookbook
name: "Providing a full path name"
summary: "To ensure finding a file (regardless of any File Preferences… settings in Max) you may need to provide the entire path to the file in the hierarchical file syst"
chapter: "Max"
keywords: ["abstraction", "combine", "inlet", "loadbang", "outlet", "thispatcher"]
objects: ["combine", "loadbang", "thispatcher"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/providepath.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/providepath_0.png"
---

# Providing a full path name

To ensure finding a file (regardless of any File Preferences… settings in Max) you may need to provide the entire path to the file in the hierarchical file system: volume name, folder name(s), and file name. This example shows how you can construct such a full path. The example assumes that you have a folder named “sounds” in the same directory as your patch, but you can edit the patch and modify that name to be anything you want. It’s an abstraction that can be used to construct a full path for a file, based on the file name received in the inlet.

The **combine** object is for constructing a single symbol (a single string of characters) from multiple items received in its inlets. The number of inlets it will have depends on the number of typed-in arguments—three in this case. The arguments specify the default strings for each of those items, but those will be replaced by whatever comes in the corresponding inlet. Whereas most objects are triggered by a message received in the left inlet,  the **combine** object is rather special in that it lets the programmer choose which will the the triggering inlet(s) that will cause output. The inlets are numbered starting from 0, so setting the ‘triggers’ attribute to 2 in this case means that nothing will be sent out except when a message is received in the right inlet.

The ‘path’ message to the **thispatcher** object causes the full path of the current patch to be sent out the right outlet. Thus, the **loadbang** object triggers the “sounds” folder name to be sent in inlet 1 and the path to that folder to be sent in inlet 0. The **combine** object is then ready to make a full path out of any filename that comes in inlet 2 (from the main patch).

## Objects used

`thispatcher`, `loadbang`, `combine`

*Patch contains 10 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/providepath.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/providepath_0.png`

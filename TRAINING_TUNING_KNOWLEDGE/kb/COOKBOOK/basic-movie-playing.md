---
type: cookbook
name: "Basic movie playing"
summary: "This patch shows some fundamental techniques for playing a video in Max."
chapter: "Jitter"
keywords: ["jit.qt.movie", "jit.movie", "jit.window"]
objects: ["jit.qt.movie", "jit.window", "keyup", "loadbang", "metro", "prepend", "route", "select", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/basicmovieplay.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/basicmovieplay.png"
---

# Basic movie playing

This patch shows some fundamental techniques for playing a video in Max.

When the patch is first opened, the **loadbang** object triggers a *read* message to **jit.qt.movie** (which has been replaced in more recent versions of Max by **jit.movie**) to open a video file. By default, **jit.movie** will have its *autostart* attribute set to *1*, to begin playing the video automatically as soon as it's loaded. If you want to control the playback explicitly, you can type in *@autostart 0*, as was done here. Once the file is read into **jit.movie**, it sends a *read* message out its right outlet with two arguments: the name of the file, and a *1* or *0* to indicate whether the *read* operation was a success. You can use that success indicator to trigger other messages. In this case, we use it to query the **jit.qt.movie** object itself regarding the file's frame rate, with *getfps*, which causes an *fps* message to be sent out the right outlet.

You can set (or get) many attributes of the movie's playback. This patch shows how to construct a message to set the playback rate, either by using the **prepend** object to prepend the word *rate* before the number, or by using a **message** box with a changeable *$1* argument.

To display the video, the output of **jit.movie** should go to a **jit.window** object (or a **jit.world** object, which uses the computer's GPU for greater efficiency). This patch shows some of the attributes of **jit.window**. The *rect* attribute—the top, left, bottom, and right corner coordinates of the window—can be provided as typed-in arguments. That window can also be toggled between fullscreen or normal with the *fullscreen* attibute (*fullscreen 1* and *fullscreen 0* messages), triggered in this case by typing the esc key. And the decision whether or not to show the menubar when the window is shown in fullscreen mode is determined by the state of the *fsmenubar* attribute. (Note: if you set *fsmenubar* off, be sure to have a way to get out of fullscreen mode, other than with a menu command. The esc key takes care of that here.)

The playback of the video is started and stopped with the obvious *start* and *stop* messages. Output of each desired frame of the video is triggered by a *bang* message, usually from a regularly repeating source such as **metro** or **qmetro**. In this example, the **toggle** that turns the **metro** on or off is also used to trigger the *start* and *stop* messages.

## Objects used

`select` ×3, `loadbang`, `jit.qt.movie`, `jit.window`, `keyup`, `metro`, `prepend`, `route`, `unpack`

*Patch contains 33 boxes, 28 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/basicmovieplay.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/basicmovieplay.png`

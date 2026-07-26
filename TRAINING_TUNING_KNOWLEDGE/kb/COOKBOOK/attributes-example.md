---
type: cookbook
name: "Attributes example"
summary: "Most Jitter objects have internal states, known as attributes, and you can get and set their values."
chapter: "Jitter"
keywords: ["jit.qt.movie", "attribute", "message"]
objects: ["jit.pwindow", "jit.qt.movie", "loadbang", "metro", "prepend"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/attributesexample.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/attributesexample.png"
---

# Attributes example

Most Jitter objects have internal states, known as attributes, and you can get and set their values. The list of messages on the right hand side of the example are a few of the attributes of a **jit.qt.movie** object. When you click on one of the attribute-getting messages, its value is reported from the right outlet of **jit.qt.movie**. Values can be set for most of the attributes (such as the *vol* attribute in this example), and can also be initialized using the @ symbol as shown in the right bottom corner of the example. *stop*, *start* and *read* are ordinary messages understood by **jit.qt.movie**.

## Objects used

`jit.qt.movie` ×2, `prepend`, `jit.pwindow`, `loadbang`, `metro`

*Patch contains 33 boxes, 25 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/attributesexample.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/attributesexample.png`

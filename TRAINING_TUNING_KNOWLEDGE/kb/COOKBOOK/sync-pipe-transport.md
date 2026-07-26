---
type: cookbook
name: "Sync pipe to transport"
summary: "To achieve delays that are quantized to a named transport, use a combination of pipe (delay numbers by the desired amount), translate (to set the pipe to the de"
chapter: "Max"
keywords: ["transport", "zl group", "pipe", "metro"]
objects: ["+", "iter", "loadbang", "makenote", "metro", "noteout", "pipe", "random", "translate", "transport", "umenu", "zl"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/SyncPipeToTransport.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/SyncPipetoTransport.png"
---

# Sync pipe to transport

To achieve delays that are quantized to a named **transport**, use a combination of **pipe** (delay numbers by the desired amount), **translate** (to set the **pipe** to the desired delay time), **zl group** (hold onto numbers as they come out of the **pipe**) and **metro** (following a particular named **transport** and quantized to the time unit you want).

## Objects used

`umenu` ×4, `metro` ×2, `translate` ×2, `iter`, `+`, `random`, `noteout`, `makenote`, `zl`, `transport`, `pipe`, `loadbang`

*Patch contains 41 boxes, 39 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/SyncPipeToTransport.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/SyncPipetoTransport.png`

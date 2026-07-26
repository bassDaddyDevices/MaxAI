---
type: cookbook
name: "Add text to video in GL"
summary: "One method of subtitling a video is shown in the example \"Write subtitles onto a video(write-subtitles-video.md)\"."
chapter: "Jitter"
keywords: ["jit.gl.videoplane", "jit.gl.text", "jit.window", "subtitles"]
objects: ["jit.gl.render", "jit.gl.text", "jit.gl.videoplane", "jit.movie", "jit.window", "loadbang", "qmetro", "select", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/subtitlewithGL.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/subtitlewithGL.PNG"
---

# Add text to video in GL

One method of subtitling a video is shown in the example "[Write subtitles onto a video](write-subtitles-video.md)". That shows hot to use the **jit.lcd** object in Jitter, and add its output to that of a **jit.movie** object. Another method is to render both video and text in GL using the **jit.gl.videoplane** and **jit.gl.text** objects. The latter way, shown here, is more computationally efficient because the rendering takes place on the graphics card of the computer instead of within a Jitter matrix on the computer’s CPU.

In this example, notice that the **jit.gl.videoplane** object has been scaled in the x and y dimensions so that it will have a 4:3 (x:y) aspect ratio corresponding to the dimensions of the video and the window that’s displaying it. Note also that the **jit.gl.text** object has its ‘layer’ attribute set to 1, which causes it to be drawn after (i.e., in front of) the **jit.gl.videoplane**, which is in layer 0 by default. (Lower layer numbers are drawn first.)

## Objects used

`loadbang`, `jit.gl.text`, `jit.gl.videoplane`, `select`, `jit.movie`, `t`, `qmetro`, `jit.window`, `jit.gl.render`

*Patch contains 15 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/subtitlewithGL.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/subtitlewithGL.PNG`

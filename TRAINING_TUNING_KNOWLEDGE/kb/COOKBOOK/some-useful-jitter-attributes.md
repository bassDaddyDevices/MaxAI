---
type: cookbook
name: "Some useful Jitter attributes"
summary: "Here are a few attributes of the jit.movie and jit.window objects that I find useful for initializing the objects to behave the way I want."
chapter: "Jitter"
keywords: ["jit.movie", "jit.window", "select", "qmetro"]
objects: ["jit.movie", "jit.window", "qmetro", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/somemovieattributes.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/somemovieattributes.png"
---

# Some useful Jitter attributes

Here are a few attributes of the **jit.movie** and **jit.window** objects that I find useful for initializing the objects to behave the way I want.

autostart:

By default a **jit.movie** object’s ‘autostart’ attribute is set to 1, meaning that a movie (video file) will begin playing as soon as it’s loaded in. I usually prefer to have control of that myself, so I set the object’s ‘autostart’ attribute to 0 initially. That means I have to explicitly ‘start’ the movie when I want to view it. No problem. I use the 1 from the **toggle** object to trigger a *start* message to the **jit.movie** object at the same time as I use it to turn on the **qmetro**. (If you don’t know what **qmetro** is, or why you should use it instead of **metro**, read about it in the example called “Simplest possible A-B video switcher” and in the article linked to on that page called “[Event Priority in Max (Scheduler vs. Queue)](https://cycling74.com/articles/event-priority-in-max-scheduler-vs-queue)”.)

moviefile:

Instead of reading a video file into **jit.movie** with a *read* message, you can have it be read in automatically by specifying it with the ‘moviefile’ attribute. A couple of things to be aware of: 1) When you read a file in this way, **jit.movie** does not send out a *read* message as described in the post “[Detect when a movie has been read successfully](http://detect-when-movie-has-been-read-successfully)“. So, if you’re relying on that message coming out to trigger other events in your patch, you need to read the movie in by sending a *read* message to **jit.movie** (perhaps triggered by **loadbang**). 2) In Mac OS 10.8.5 or lower, there is a bug in **jit.movie** such that the ‘@autostart 0′ attribute setting described above will not work in conjunction with the ‘moviefile’ attribute *unless* it comes *before* the ‘moviefile’ attribute, as it does in this example patch. [I’ve reported the bug to Cycling ’74, so hopefully that second caveat will become obsolete soon.]

The next two attributes in the example show how you can force the matrix dimension of **jit.movie** to be something other than the size of the movie itself, if you want to. (For example, maybe the movie being read is higher-definition than you need, and you want to set a specific size of matrix to come out of **jit.movie**.) If you do that, the movie will be resized to fit the specified size of the object’s matrix. (Some pixels will be duplicated if the movie is being upsampled to fit in a larger matrix, and some pixels will be discarded if the movie is being downsampled to fit into a smaller matrix.)

adapt and dim:

The ‘adapt’ attribute determines whether the object’s matrix dimensions will be resized according to the dimensions of the video. By default, the ‘adapt’ attribute is on. If you want to enforce some other matrix size, you can set the ‘adapt’ attribute to 0 and use the ‘dim’ attribute to specify the width and height of the matrix.

vol:

In order to avoid any unwanted audio being played when the movie is read in, I like to have the movie’s audio volume (the ‘vol’ attribute) set to 0. You can then turn the audio up explicitly with a ‘vol’ message to **jit.movie** (not shown in this example). A ‘vol’ value of 1 is full volume, and values between 0 and 1 provide (logarithmically) scaled volume settings.

unique:

The ‘unique’ attribute, when turned on, means “Only send out a jit\_matrix message if your matrix is different from the last time you sent it out.” If **jit.movie** gets a *bang* message, but the content of its internal matrix is the same as the last time it got a *bang*, it won’t send anything out. Since **jit.movie** is constantly loading in new frames of video (assuming the video is running), if it’s getting a *bang* message constantly it will report each new frame, but it won’t send out redundant messages. This is useful if the **jit.movie** will be receiving a lot of bangs but you only want it to send something out when it has some new content.

In this patch the **qmetro** will be sending out bangs constantly at its default interval of 5 ms, but because **jit.movie**‘s ‘unique’ attribute is turned on, it will only send out a *jit\_matrix* message each time it gets a unique frame of video. The result will be that the output of **jit.movie** (when the movie is running) will be at the frame rate, accurate to within 5 ms, which is accurate enough for our eyes. There will be quite a lot of unnecessary bangs sent to **jit.movie**, but it will ignore them if it has no new video content to send out.

That’s one way to handle the triggering of video frames, but it’s not the only way. Another way would be to query the frame rate of the movie with a *getfps* message, which will cause **jit.movie** to send an *fps* message out its right outlet reporting the frame rate of its video, and then use that fps value to calculate the desired interval for **qmetro**. With that method (1000./fps=interval), the **qmetro** would reliably send a bang at the frame rate of the video. If the playback rate of the video were to be changed with the ‘rate’ attribute, however, the **qmetro** would no longer be in sync with the rate at which new frames of video appear; in that case, the method shown in the example patch here might be more appropriate.

name:

The ‘name’ attribute of **jit.window** serves two purposes: 1) it shows in the title bar of the window, and 2) it’s the name that GL 3D animation objects in Jitter can refer to as their drawing location. For that second purpose, it’s most convenient for the name to be a single word; if you want a multi-word name, though, for the title bar of the window, you must put it in quotes so that Max will treat it as if it were a single word.

size and pos:

The ‘size’ and ‘pos’ attributes of **jit.window** set the dimensions of the window and its location on the screen. The two arguments of the ‘size’ attribute are the width and height of the window, in pixels. The two arguments of the ‘pos’ attribute are the horizontal and vertical offset of the top-left corner of the image from the top-left corner of the screen. So, in this patch, we’re specifying that we want the top-left corner of the image (the part of the window that does not include the title bar) to be located 600 pixels to the right and 300 pixels down from the top-left corner of the screen, and we want the image to be 640 pixels wide and 480 pixels high. The same result can be achieved with the ‘rect’ attribute, which lets you specify the left-top and bottom-right coordinates of the image onscreen; so in this example, the setting ‘@rect 600 300 1240 780′ would have the same effect.

fsmenubar:

The ‘fsmenubar’ attribute determines whether the menu bar should be shown when the window is put into ‘fullscreen’ mode. (Setting the ‘fsmenubar’ attribute to 1 means “Yes, I want the menu bar when I go to fullscreen,” and setting it to 0 means “No menubar when in fullscreen.”) Using the ‘fullscreen’ attribute to make the video fill the screen is not demonstrated in this patch, but is demonstrated well (and explained) in an example called “[Using attributes to control video playback in Jitter](http://music.arts.uci.edu/dobrian/IAP2009/examples.htm#Ex38)”. If I’m putting the window into ‘fullscreen’ mode, it’s usually because I want a nice presentation of video, so I usually don’t want the menubar to show then. But be careful; if you hide the menubar, how will you get out of fullscreen mode (with no menu commands available)? The 2009 example shows a good, standard way to solve that problem.

visible:

Using the ‘visible’ attribute of **jit.window** you can hide and show the window whenever you want. If there’s no reason for the user to see the window (e.g., if it’s just a blank screen) you might as well hide it, and then make it visible when you actually want to show video in it, as is done in this example.

## Objects used

`select`, `jit.window`, `qmetro`, `jit.movie`

*Patch contains 9 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/somemovieattributes.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/somemovieattributes.png`

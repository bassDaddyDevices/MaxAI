---
type: cookbook
name: "Slideshow"
summary: "This program assumes that you have a folder of image files (jpg, etc.) that you want to show as a slideshow."
chapter: "Max"
keywords: ["jit.qt.movie", "metro", "toggle", "jit.qt.movie", "ubumenu", "jit.window", "closebang", "route", "counter", "ggate", "jit.xfade"]
objects: ["-", "b", "closebang", "counter", "gswitch2", "jit.qt.movie", "jit.window", "jit.xfade", "keyup", "line", "loadbang", "metro", "pack", "prepend", "route", "sel", "select", "t", "umenu", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/slideshow.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/slideshow.png"
---

# Slideshow

This program assumes that you have a folder of image files (jpg, etc.) that you want to show as a slideshow. This program also assumes that those images all have the same dimensions.

The program assumes images that are 320x240 pixels. If you want to use another size, you should change the dimensions of the **jit.qt.movie** objects and the size of the **jit.window**. Images that do not have a 4:3 aspect ratio will get distorted when shown fullscreen, unless some adjustments are made.

In order to let the program know what folder to look in for the images, you have to edit the **ubumenu** object. Unlock the patcher, click once on the **ubumenu** object, and choose "Get Info..." from the Object menu to open the **ubumenu** inspector. Where it says "Prefix" in the inspector, click on the "Folder..." button, and then Choose from the dialog box the folder you want to use. Close the inspector, lock the patcher, and Save it. From now on the **ubumenu** will store the pathname of that folder, and will use that folder to look for filenames.

The names of the files get loaded into the **ubumenu** when it receives the *populate* message, which is triggered when the patch is first opened. When the **ubumenu** has populated itself with filenames from the specified folder, it sends out the message *populate* *N*, where “N” is the number of items in the **ubumenu**. Using the **route** object, one can capture that message and use the number of items in the menu to set the maximum count of the **counter** object. (Note that the **ubumenu** items are numbered starting from 0, so the **counter** is set to generate numbers from 0 to one less than the number of items in the **ubumenu**.) After setting the maximum of the **counter**, the program performs a number of reset actions (i.e., initializes settings). It first resets the **counter** to its minimum value (0); then it sets the **toggle**, **line**, and **ubumenu** objects to 0 (without causing any output); it then sets the **gGate** to 1 (so that the first file will get loaded into the right **jit.qt.movie** object (in a moment); it then bangs the left **jit.qt.movie** object just so that the **jit.xfade** object will have the right dimensions; and then it bangs the **counter**, which sends out a 0, which selects the top item from the **ubumenu**, which sends it as a *read <filename>* message to **gGate**, which routes it to the right **jit.qt.movie** object, thus loading that image.

If the image is successfully loaded, the **jit.qt.movie** object will send the message *read <filename> 1.* out its right outlet. If there was an error in reading the file, the 1 will be a 0 instead. So, by looking for the number 1, we can know when the image has been loaded successfully, and can then trigger the **jit.qt.movie** to send its matrix to the right inlet of **jit.xfade**. Since we're dealing with still images, and since **jit.xfade** remembers the matrix name in its right inlet, we only need to send this one time, whenever the image in the right **jit.qt.movie** changes. If we were showing videos instead of still images, we'd need a separate **metro** to send bangs to both **jit.qt.movie** objects at the desired frame rate.

Now, when you start the **metro**, the first bang will flip the **toggle** to 1, sending the message *1. 2500 50* to **line**, which will begin fading toward the right matrix of **jit.xfade** by sending multiple *xfade N* messages to **jit.xfade**, where “N” is a value from 0. to 1. With each new **xfade** value, we also bang the left **jit.qt.movie**, to re-trigger **jit.xfade** and show the new blend of images.

When line reaches its destination value after 2.5 seconds, it sends a bang out its right outlet. We use this bang to flip the **gGate** to point to its other outlet, and to trigger the **counter** to send the next filename to the other **jit.qt.movie** object (the one we're not currently seeing, because we have faded all the way to the other image).

The next time **metro** sends out a *bang*, it flips the **toggle** back to 0, causing a fade back to the left matrix of **jit.xfade**, after which line will again send a bang out its right outlet, causing the next image to be loaded into the **jit.qt.movie** object that we are not currently viewing.

Thus we always see one image (the current image) in the **jit.window**, except during the 2.5 seconds when we fade to the next image. As soon as the fade is complete and we're seeing only the next image, the "next" image becomes the "current" image, and we load a new "next" image into the **jit.qt.movie** that we're not seeing. The "current" image is seen in the **jit.window**, and the "next" filename is seen in the **ubumenu**.

When the patch is closed, **closebang** triggers a *clear* message to empty the **ubumenu** so it will be ready to be re-populated next time it is opened.

The escape key [esc] can be used to toggle fullscreen view on and off.

If we wanted to use a similar technique to show a succession of video clips, we'd have to change some things. 1) We'd need another **metro** to bang both **jit.qt.movie** objects at the desired frame rate. 2) We might want to use the duration of each clip to decide when to fade to the next movie, instead of a fixed duration. 3) We would want to fade the audio of each movie, too, using the *vol N* message to each **jit.qt.movie** object, corresponding to the **xfade** value.

## Objects used

`prepend` ×3, `b` ×2, `t` ×2, `route` ×2, `jit.qt.movie` ×2, `closebang`, `gswitch2`, `sel`, `unpack`, `select`, `keyup`, `metro`, `line`, `pack`, `-`, `counter`, `umenu`, `jit.xfade`, `jit.window`, `loadbang`

*Patch contains 41 boxes, 50 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/slideshow.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/slideshow.png`

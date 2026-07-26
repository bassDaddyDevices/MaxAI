---
type: cookbook
name: "Using the full path when opening a file"
summary: "This example consists of a .zip archive of files."
chapter: "Max"
keywords: ["closebang", "dac~", "deferlow", "gain~", "loadbang", "prepend", "providepath", "AIFF file"]
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tones.png"
---

# Using the full path when opening a file

This example consists of a .zip archive of files. Together they demonstrate the idea of organizing one’s sound files in a specific folder, and then using the full path to that folder to ensure finding the sound files when you want to play them. It takes advantage of (and demonstrates) an [abstraction for providing a full path name](http://sites.uci.edu/camp2014/2014/04/09/providing-a-full-path-name/); that abstraction is saved with the name “providepath” and used as an object in the “\*main\*” patch.

The \*main\* patch has been set (in the Patcher Inspector) to open in Presentation mode. Try it out, then uncheck Presentation in the View menu to see the full patch.

A **umenu** popup menu object contains the names of the three sound files contained in the “sounds” folder. Each soundfile is a few cycles of a steady sinusoidal tone. When played once, each file makes a brief 100-millisecond beep, but when the Loop **toggle** is on, the file will be played in a continuous loop and will only stop when looping is turned off.

Note the use of the *$1* argument in the **message** box. This signifies a replaceable argument. Whatever is the first item in the incoming message (in this case either ‘1’ or ‘0’) is put in place of the *$1* before the message is sent out. In this way, the **toggle** will produce either a ‘loop 1′ message or a ‘loop 0′ message to turn looping on or off in the **sfplay~** object.

When the patch is opened, **loadbang** automatically turns MSP on, sets the **gain~** volume to full on, and chooses the desired default file from the **umenu**. That filename gets combined with its full path in the “providepath” subpatch (abstraction), and that full name is used as the argument of an ‘open’ message to **sfplay~**. Thus, the file is loaded and ready to play, waiting for the user to click on the Go **button**.

One object left unexplained is **deferlow**. This object takes whatever message it receives, and waits until all other tasks have been completed before it passes the message on. The reason it’s used here is because there are really two **loadbang** objects in this program—one in the main patch and one in the “providepath” subpatch. (You can double-click on the “providepath” object to see its contents.) The order of the two **loadbang** objects’ outputs is unspecified. So in order to make sure that the path name and folder name are acquired *before* the filename is specified, we defer execution of the **umenu** selection till after the ‘path’ message has been sent to **thispatcher** in the subpatch. That way the file name from **umenu** will successfully be combined with the path constructed in the subpatch.

## Files

- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tones.png`

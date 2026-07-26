---
type: cookbook
name: "TouchOSC data via wireless UDP"
summary: "You can send messages to Max wirelessly from a mobile device such as iPhone, iPod Touch, iPad, or Android-based smart phone or tablet, using the TouchOSC app."
chapter: "Max"
keywords: ["osc-route", "print", "udpreceive"]
objects: ["osc-route", "print", "udpreceive"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/TouchOSCdata.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/touchOSCdata.png"
---

# TouchOSC data via wireless UDP

You can send messages to Max wirelessly from a mobile device such as iPhone, iPod Touch, iPad, or Android-based smart phone or tablet, using the [TouchOSC](http://hexler.net/software/touchosc) app. You can read more about the [OSC communication protocol](http://opensoundcontrol.org/introduction-osc) that is used by TouchOSC, and you can [download Max objects for managing OSC messages](https://cnmat.berkeley.edu/downloads) as part of the package of useful Max objects distributed freely by [CNMAT](http://cnmat.berkeley.edu/) at UC Berkeley. (You will need the CNMAT Max external object **osc-route** in order for this example patch to work.)

This patch uses the **udpreceive** object to receive wireless UDP data from a device transmitting on virtual port 8000. It uses the CNMAT Max external object **osc-route** to parse the OSC messages coming from TouchOSC. This patch has been set up to work with the TouchOSC default interface "Mix 2". It will print all the data coming from tabs 1 and 3 in the "Mix 2" TouchOSC interface. The first part of the OSC message indicates the tab number (such as */1*), and the next part of the message indicates the interface object that sent the message (such as */fader1*), and the last part of the message is the useful data from that object.

This program can receive WiFi data via a local network that you create on your own computer, or via the Internet.

## Objects used

`print` ×19, `osc-route` ×6, `udpreceive`

*Patch contains 31 boxes, 25 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/TouchOSCdata.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/touchOSCdata.png`

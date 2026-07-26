---
type: cookbook
name: "Networking Max messages via UDP"
summary: "The simplest way to communicate over the internet in Max is by sending Max messages as UDP packets."
chapter: "Max"
keywords: ["udpsend", "udpreceive"]
objects: ["udpreceive", "udpsend"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/udpobjects.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Screen Shot 2018-12-20 at 3.47.14 PM.png"
---

# Networking Max messages via UDP

The simplest way to communicate over the internet in Max is by sending Max messages as UDP packets. The **udpsend** and **udpreceive** objects make that very easy. Tell the **udpsend** object what IP address to send to and what virtual port number to use, and tell the **udpreceive** object on the other computer the same port number. (Needless to say, for two-way communication, you just create objects to send and receive in the other direction.) In this example we use the IP address 127.0.0.1 which is a synonym for 'localhost', the same computer, so that you can see the messages being passed from one object to the other.

## Objects used

`udpreceive`, `udpsend`

*Patch contains 7 boxes, 2 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/udpobjects.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Screen Shot 2018-12-20 at 3.47.14 PM.png`

---
type: cookbook
name: "Networking Jitter matrices via TCP"
summary: "For sending large amounts of media data—such as video—over the internet, TCP is more reliable than UDP because the receiving computer can check that it has rece"
chapter: "Jitter"
keywords: ["jit.net.recv", "jit.net.send", "TCP"]
objects: ["jit.net.recv", "jit.net.send", "jit.pwindow", "jit.qt.movie", "route", "select", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tcpobjects.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tcpobjects.png"
---

# Networking Jitter matrices via TCP

For sending large amounts of media data—such as video—over the internet, TCP is more reliable than UDP because the receiving computer can check that it has received packets in the proper order, and it sends back an acknowledgement messages so that the sending computer knows whether the packet was successfully received. For large packets, it's best to put all the data into a Jitter matrix and send that via TCP. Of course, if you just send a *jit\_matrix* message, the receiving computer wouldn't know where to find the data, so the **jit.net.send** object, when it gets a *jit\_matrix* message, sends all the data contained in that matrix; when the **jit.net.recv** object gets the data, it puts it into a Jitter matrix of its own, then sends out the address of that matrix. Note that for these objects, unlike for the **udpsend** and **udpreceive** objects, the IP address and port number are attributes rather than arguments. In this example we're sending to the same computer via the localhost IP address, 127.0.0.1.

Click on the **message** box that says *read chilis.jpeg*. When the **jit.qt.movie** object (or **jit.movie**) has loaded the image, it sends a *read chilis.jpeg 1* message out its right outlet, and that message triggers a *bang* to send out its matrix and transmit that via **jit.net.send** to the **jit.net.recv** object on the designated IP address and port number.

## Objects used

`jit.pwindow`, `select`, `unpack`, `route`, `jit.qt.movie`, `jit.net.recv`, `jit.net.send`

*Patch contains 10 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tcpobjects.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tcpobjects.png`

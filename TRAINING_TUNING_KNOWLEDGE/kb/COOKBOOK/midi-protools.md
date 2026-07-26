---
type: cookbook
name: "MIDI with ProTools"
summary: "A max user asked the following:  I would like to create a virtual mixer with max and control Pro Tools 9."
chapter: "Max"
keywords: ["notein", "midiout", "ctlout", "<<", "pack"]
objects: ["%", "/", "<<", "ctlout", "midiout", "notein", "pack", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDIwithProTools.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDIwithProTools.PNG"
---

# MIDI with ProTools

A max user asked the following:

I would like to create a virtual mixer with max and control Pro Tools 9. But pro tools does not have MIDI learn for the mixer.

In order to design an interface in Max that will allow one to remotely control the mixer and transport in Pro Tools, my suggestion would be, in general, to choose a MIDI control surface one wants to emulate (such as MotorMix or Mackie) and then send/receive the proper MIDI messages –– either through a MIDI interface if the emulator is to be on a completely different computer, or via the virtual MIDI ports 'from Max 1' and 'to Max 1' if the emulator will be on the same computer as Pro Tools.

If you have an actual Mackie HUI in your possession, you could sniff its messages by sending its output directly into Max (see below), but that would be rather time-consuming. A simpler way to go is probably to emulate the MotorMix control surface, because that company readily provides the [complete MIDI specification for the MotorMix](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwiX-9Pd4cHeAhXbwcQHHZUzA6EQFjAAegQIARAC&url=https%3A%2F%2Fforum.cockos.com%2Fattachment.php%3Fattachmentid%3D7813%26d%3D1272309372&usg=AOvVaw0qUOF6KrUMzW6YNj1k_tag).

So, first of all, in Max, we need to create a **midiout** object with the output port ‘from Max 1’ specified as an argument and create a **midiin** object with argument ‘to Max 1’. However, to fool Pro Tools into thinking we actually have a MotorMix connected, we’ll need to respond to its active sensing ping messages. The DAW sends note 0 with velocity 0 on channel 1 and expects to receive note 0 with velocity 127 on channel 1 in response. Thus we need to make a little patch that responds appropriately, which is what the example on the left illustrates. This way, every time Pro Tools sends a ping, our patch will respond, and Pro Tools will be content that it’s in touch with a control surface.

If you’re interested to see what Pro Tools will send out to the control surface, you could also make a little sniffer using a **midiin** **"to Max 1"** object connected to a **capture** or **print** object.

Then, in Pro Tools, we need to choose Peripherals, and, from the Setup menu, click on the tab for MIDI Controllers, in order to choose MotorMix as our first controller, with 'from Max 1' in the Receive From popup menu and 'to Max 1' in the Send To popup menu.

At this point, if you were to be sniffing the 'to Max 1' port, you would see a bunch of MIDI from Pro Tools –– sysex messages and controller messages –– telling the control surface what’s going on in Pro Tools, plus a steady stream –– every 500 or 750 ms or so –– of MIDI notes *144 0 0* for active sensing pings. That’s why setting up a pinger in advance is so useful: it creates the virtual ports 'to Max 1' and 'from Max 1' and it gets ready to respond to those pings.

Now we can start sending Pro Tools messages from our new virtual control surface according to the MIDI specifications of the actual control surface we’re trying to emulate. For example, to control fader 1, we need to send the message that we have touched fader 1 on the control surface, then start sending fader position messages, which are stated in 512 steps by sending the 0-127 coarse value on controller 0, and the 0-3 fine value (on bits 6 and 7, thus as decimal numbers 0, 32, 64, and 96) on controller 32 –– see the example on the right.

## Objects used

`pack` ×2, `%`, `/`, `<<`, `ctlout`, `sel`, `notein`, `midiout`

*Patch contains 19 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDIwithProTools.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDIwithProTools.PNG`

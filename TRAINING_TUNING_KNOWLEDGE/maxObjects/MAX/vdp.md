---
type: max
name: "vdp"
summary: "Control a videodisk player through a serial port"
signal: false
url: "https://docs.cycling74.com/reference/vdp/"
package: "Max"
see_also: ["serial"]
---
# vdp

Control a videodisk player through a serial port

## Description

The [vdp](https://docs.cycling74.com/reference/vdp) object works with serially-controlled videodisk players (remember them?) that are compatible with the Pioneer 4200 or 8000 standard. Each command received by the [vdp](https://docs.cycling74.com/reference/vdp) object sends a stream of numbers out the object's left outlet, intended to be connected to the [serial](https://docs.cycling74.com/reference/serial) object. The description of each command discusses what effect the command has on the player, not the exact character stream sent by [vdp](https://docs.cycling74.com/reference/vdp).

Because videodisc players have relatively buffer-less serial interfaces, [vdp](https://docs.cycling74.com/reference/vdp) places each command it receives in a queue, and sends it out only when the player has finished executing its most recent command. This "feature" may cause a delay between the time a command is sent to the [vdp](https://docs.cycling74.com/reference/vdp) object and the time it is actually sent out the serial port.

Any message received in the right inlet will behave exactly as if it had been received in the left inlet, except that it will be put at the front of the queue, to be the very next command sent out to the player.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: Same as  play  from a specified frame number to the end of the disc.

In middle inlet: [vdp](https://docs.cycling74.com/reference/vdp) expects responses from the player to be fed from the [serial](https://docs.cycling74.com/reference/serial) object into its middle inlet. When [vdp](https://docs.cycling74.com/reference/vdp) sees "received" (the letter  R  followed by the return character) from the player, it sends the next command from its queue of pending commands. The example shows how to connect the [vdp](https://docs.cycling74.com/reference/vdp) and [serial](https://docs.cycling74.com/reference/serial) objects together.

Arguments:

- frame-number
  [int]

### chapter

In left inlet: Asks the player what its current chapter number is and sends the response (received in the middle inlet) out the middle-right outlet.

### clear

In left inlet: Removes any pending commands from the queue and resets the object.

### cmd

In left inlet: The  cmd  message can be used to send "primitive" commands consisting of ASCII codes to the video disk player. Commands usually consist of two-letter codes preceded by numeric arguments. For example, searching to frame 5000 could be accomplished with the message cmd 5000 SE. Refer to the owner's manual of your player for details. The  cmd  message is particularly useful with the Pioneer 8000 player, since it has a number of special features not supported by the regular messages of the [vdp](https://docs.cycling74.com/reference/vdp) object.

Arguments:

- ASCII-primitive-command-code
  [list]

### control

In left inlet: The word  control , followed by a number, tells the videodisc player to perform one of the following operations:

Number Operation

0 --------- Initialize and reset player

1 --------- Eject disk

2 --------- Audio off

3 --------- Audio 1 on

4 --------- Audio 2 on

5 --------- Stereo on

6 --------- Picture on

7 --------- Picture off

8 --------- Display frame numbers on

9 --------- Display frame numbers off

11 ------- Frame access mode

12 ------- Time access mode

13 ------- Chapter access mode

Arguments:

- action-ID
  [int]

### fps

In left inlet: Sets the playing speed. The  fps  message is followed by a number (frames per second) or an adjective. The following adjectives and numbers are equivalent (at least for the Pioneer 4200):

slowest 1

slower 10

slow 15

normal 30

fast 60

faster 90

fastest 120

Arguments:

- playback-speed (frames-per-second)
  [list]

### frame

In left inlet: Asks the player what its current frame number is and sends the response (received in the middle inlet) out the middle-right outlet.

### name

In left inlet: Asks the player what the current name is and sends the response (received in the middle inlet) out the middle-right outlet.

### play

In left inlet: With no arguments,  play  starts playing at the current speed from the current location to the end of the disk (or until the player receives another command). With one argument (a frame number),  play  searches to the specified frame number and begins playing to the end of the disk. With two arguments,  play  searches to the location specified by the first number and plays until the disc reaches the second frame number.

Arguments:

- first-frame
  [int]
- last-frame
  [int]
- speed
  [int]

### restrict

The word  restrict  followed by a starting frame-number and an ending frame-number will restrict all future messages to perform their actions restricted between the two frames.

Arguments:

- start-frame-number
  [int]
- end-frame-number
  [int]

### scan

In left inlet: Initiates a "fast forward" or "rewind" operation.  scan forward  moves forward,  scan backward  moves backward.

Arguments:

- forward/backward
  [list]

### search

In left inlet: The first argument indicates a frame number to search to. The second, optional argument, if non-zero, instructs the player to keep the picture on while searching. If searching a great distance from the current location, the player may not be able to keep from blanking the screen. Once the player arrives at the desired frame, it will display the (still) image from that frame.

Arguments:

- start-frame-number
  [int]
- display-flag (0 or non-zero)
  [int]

### setskip

In left inlet: Followed by a number, sets the number of frames to jump (forward or backward) from the current frame location when using the  skip  message.

Arguments:

- number-of-skipped-frames
  [int]

### skip

In left inlet: Followed by -1 , skips backward by a number of frames specified in the  setskip  message. Followed by  1 , skips forward by a number of frames specified in the  setskip  message.

Arguments:

- backward/forward-flag (-1 or 1)
  [int]

### step

In left inlet: Followed by -1 ,  step  pauses the player (if playing) and displays the previous frame. Followed by  1 ,  step  pauses the player (if playing) and displays the next frame.

Arguments:

- previous/next-step (-1 or 1)
  [int]

### stop

In left inlet: Pauses the player.

## Output

### bang

Out middle-left outlet: After sending a command out its left outlet, [vdp](https://docs.cycling74.com/reference/vdp) begins "polling" the [serial](https://docs.cycling74.com/reference/serial) object for a response from the player by sending  bang  messages out this outlet approximately every 20 milliseconds, until [vdp](https://docs.cycling74.com/reference/vdp) receives a "received" signal from the player in its right inlet. (A  bang  sent to a [serial](https://docs.cycling74.com/reference/serial) object causes any characters received in that serial port to be sent out the [serial](https://docs.cycling74.com/reference/serial) object's outlet.)

### int

Out left outlet: A stream of characters, coded instructions to the videodisc player, for each command. These numbers are intended to be sent to the left inlet of a [serial](https://docs.cycling74.com/reference/serial) object.

### int

Out middle-right outlet: Current frame number, received from the player in response to a  frame  message.

### int

Out right outlet: Not implemented.

## See Also

| Name | Description |
| --- | --- |
| [serial](https://docs.cycling74.com/reference/serial) | Send and receive from a serial port |

---
type: jitter
name: "jit.avc"
summary: "Control a FireWire VTR"
signal: false
url: "https://docs.cycling74.com/reference/jit.avc/"
package: "Jitter"
see_also: ["jit.qt.grab", "jit.qt.videoout"]
---
# jit.avc

Control a FireWire VTR

## Description

Communicates with FireWire VTR devices, such as digital cameras and DV decks, using the 1394 AV/C protocol. Use it to control the transport of these devices with messages.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### close

Closes the AV/C connection. The connection is closed automatically if the object is deleted, or the patch containing the object is closed.

### custom

Sends a custom string of data to the DV device. Messages are usually sent as a sequence of hexadecimal numbers. Accepted messages are documented by the
[1394 Trade Association](http://www.1394ta.com)
. The relevant specification is the "AV/C Tape Recorder/Player Subunit".

Arguments:

- sequence
  [list]

### fastwind

Fast rewinds the transport.

### ff

Fast forwards the transport.

### getdevice

Sends the name of the currently active device out the right outlet of the object in the form  device   *active-device* .

### gettime

Sends the name of the currently active device out the right outlet of the object in the form  time   *DVdevicemedia-time* .

### gettransport

The  gettransport  message will report the precise state of the transport of the VTR device to which it is connected out the right outlet of the [jit.avc](https://docs.cycling74.com/reference/jit.avc) object.

### open

Opens an AV/C connection to a compatible device if one can be found.

### pause

Pauses the transport playback.

### play

Sets playback at normal speed. The following optional arguments are permitted:

 pause : Pause in playback.

 reverse : Playback at normal speed in reverse.

 revpause : Pause in reverse playback.

 nextframe : Playback the next sequential frame or field.

 prevframe : Playback the previous sequential frame or field.

 sf : Playback at the slowest forward special effect speed (sf = slowest, sf6 = slow, sf1 = fastest)

 sf6 : Playback at slow forward special effect speed

 sf5 : Playback at slow forward special effect speed

 sf4 : Playback at slow forward special effect speed

 sf3 : Playback at slow forward special effect speed

 sf2 : Playback at slow forward special effect speed

 sf1 : Playback at fastest slow forward special effect speed

 sr : Playback at the slowest reverse special effect speed (sr = slowest, sr6 = slow, sr1 = fastest)

 sr6 : Playback at slow reverse special effect speed

 sr5 : Playback at slow reverse special effect speed

 sr4 : Playback at slow reverse special effect speed

 sr3 : Playback at slow reverse special effect speed

 sr2 : Playback at slow reverse special effect speed

 sr1 : Playback at fastest slow reverse special effect speed

 ff : Playback at the fastest fast forward special effect speed (ff = fastest, ff6 = fast, ff1 = slowest)

 ff6 : Playback at fast forward special effect speed

 ff5 : Playback at fast forward special effect speed

 ff4 : Playback at fast forward special effect speed

 ff3 : Playback at fast forward special effect speed

 ff2 : Playback at fast forward special effect speed

 ff1 : Playback at slowest fast forward special effect speed

 fr : Playback at the fastest fast reverse special effect speed. (fr = fastest, fr6 = fast, fr1 = slowest)

 fr6 : Playback at fast reverse special effect speed

 fr5 : Playback at fast reverse special effect speed

 fr4 : Playback at fast reverse special effect speed

 fr3 : Playback at fast reverse special effect speed

 fr2 : Playback at fast reverse special effect speed

 fr1 : Playback at slowest fast reverse special effect speed

Arguments:

- command
  [symbol]

### record

Sets the DV device to record. The following optional arguments are permitted:

 recpause : Pause while recording all signal(s)

 insertvideo : Replace the video signal with a new signal, but leave any other signals on the medium intact

 insertaudio : Replace the audio signal with a new signal, but leave any other signals on the medium intact

 insertav : Replace the audio and video signals with new signals, but leave any other signals on the medium intact

 insertsubcode : Replace the subcode signal with a new signal, but leave any other signals on the medium intact

 insertvideopause : Pause recording signals, and set the recording mode  record insertvideo
 insertaudiopause : Pause recording signals, and set the recording mode  record insertaudio
 insertavpause : Pause recording signals, and establish the recording mode  record insertav
 insertsubcodepause : Pause recording signals, and set the recording mode  record insertsubcode

Arguments:

- command
  [symbol]

### recpause

Pauses while recording all signal(s).

### rewind

Rewinds the transport.

### stop

Halts the transport.

### time

Causes the attached DV device to seek for the specified time on any loaded media. Time is specified by four integer arguments that specify hours, minutes, seconds and frames. Many devices do not support this function.

## See Also

| Name | Description |
| --- | --- |
| [jit.qt.grab](https://docs.cycling74.com/reference/jit.qt.grab) | Digitize video from an external source |
| [jit.qt.videoout](https://docs.cycling74.com/reference/jit.qt.videoout) | Output video to QuickTime video output component |

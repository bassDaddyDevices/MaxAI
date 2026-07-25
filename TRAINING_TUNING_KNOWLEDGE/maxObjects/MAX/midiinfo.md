---
type: max
name: "midiinfo"
summary: "Fill a pop-up menu with MIDI device names"
signal: false
url: "https://docs.cycling74.com/reference/midiinfo/"
package: "Max"
see_also: ["midiin", "midiout", "umenu"]
---
# midiinfo

Fill a pop-up menu with MIDI device names

## Description

Outputs a series of messages which will set up a pop-up menu to a list of MIDI output devices when a  bang  is received. A number in [midiinfo](https://docs.cycling74.com/reference/midiinfo) 's right inlet creates a list of MIDI input devices.

## Arguments

None.

## Attributes

### autopollcontrollers[int]: 0

When enabled, object will output an updated controller list upon changes to connected devices

### autopollinput[int]: 0

When enabled, object will output an updated input device list upon changes to connected devices

### autopolloutput[int]: 0

When enabled, object will output an updated output device list upon changes to connected devices

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Same as  int , but doesn't send a  set  message after setting the [umenu](https://docs.cycling74.com/reference/umenu) items. The equivalent message to  bang  for retrieving input device names is -1 in the right inlet.

### int

In left inlet: Causes [midiinfo](https://docs.cycling74.com/reference/midiinfo) to send out a series of messages containing the names of the current MIDI output devices. Those messages can be used to set the individual items of a pop-up [umenu](https://docs.cycling74.com/reference/umenu) object connected to the [midiinfo](https://docs.cycling74.com/reference/midiinfo) object's outlet. The number received in the [midiinfo](https://docs.cycling74.com/reference/midiinfo) object's left inlet is then sent in a set message to set the currently displayed [umenu](https://docs.cycling74.com/reference/umenu) item. In right inlet: Causes [midiinfo](https://docs.cycling74.com/reference/midiinfo) to send out a series of messages containing the names of the current MIDI input devices. Those messages can be used to set the individual items of a pop-up [umenu](https://docs.cycling74.com/reference/umenu) object connected to the [midiinfo](https://docs.cycling74.com/reference/midiinfo) object's outlet. The number received in the [midiinfo](https://docs.cycling74.com/reference/midiinfo) object's right inlet is then sent in a set message to set the currently displayed [umenu](https://docs.cycling74.com/reference/umenu) item, unless the number is less than zero, in which case no set message is sent.

Arguments:

- index
  [int]

### controllers

In left inlet: Causes [midiinfo](https://docs.cycling74.com/reference/midiinfo) to send out a series of messages containing the names of all MIDI controllers (devices that transmit MIDI) in the current MIDI setup. Those messages can be used to set the individual items of a pop-up [umenu](https://docs.cycling74.com/reference/umenu) object connected to the [midiinfo](https://docs.cycling74.com/reference/midiinfo) object's outlet. The word  controllers  may be followed by a number, which sets the pop-up [umenu](https://docs.cycling74.com/reference/umenu) to that item number after the menu items have been created.

Arguments:

- index
  [int]

## Output

### append

Immediately after sending the  clear  message, [midiinfo](https://docs.cycling74.com/reference/midiinfo) sends an  append  message for each MIDI input or output device name, to set the items of a connected [umenu](https://docs.cycling74.com/reference/umenu) object. The device names will be sent out in the order in which they appear in Max's  MIDI Setup  dialog.

### clear

[midiinfo](https://docs.cycling74.com/reference/midiinfo) first sends a  clear  message out its outlet to clear all the receiving [umenu](https://docs.cycling74.com/reference/umenu) object's items.

### set

If the incoming message to [midiinfo](https://docs.cycling74.com/reference/midiinfo) is an integer greater than or equal to zero, a  set  message is sent after the  append  messages, to set the currently displayed menu item.

## See Also

| Name | Description |
| --- | --- |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [midiout](https://docs.cycling74.com/reference/midiout) | Transmit raw MIDI data |
| [umenu](https://docs.cycling74.com/reference/umenu) | Pop-up menu |

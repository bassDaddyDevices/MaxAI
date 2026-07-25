---
type: max
name: "hi"
summary: "Human Interface device input (legacy)"
signal: false
url: "https://docs.cycling74.com/reference/hi/"
package: "Max"
see_also: ["hid", "gamepad", "key", "keyup"]
---
# hi

Human Interface device input (legacy)

## Description

Provides input from human interface peripherals (i.e. Trackpad, Keyboard, and others).

## Arguments

### device[symbol] optional

An argument can be used to specify the object for focus on the [hi](https://docs.cycling74.com/reference/hi) object.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  message will output the current event queue.

### int

An incoming  int  causes the object to focus on the device in the device list with that index.

Arguments:

- index
  [int]

### anything

Sending the name of any device to the [hi](https://docs.cycling74.com/reference/hi) object will set the object to focus on the specified device.

Arguments:

- device
  [list]

### clear

The message  clear  will reset all values set using the  ignore  and  delta  messages to their default values.

### delta

The word  delta , followed by an integer that represents an element of the device will cause the [hi](https://docs.cycling74.com/reference/hi) object to report an event from the specified element only if it is different then the last value that was reported.

Arguments:

- element
  [int]

### ignore

The word  ignore , followed by an integer that represents an element of the device, disables event reporting from the specified element.

Arguments:

- element
  [int]

### info

The  info  message causes device information to be output to the Max console.

### menu

The  menu  message causes a device list to be output from the right outlet in a format fit for a  umenu  object. On Windows, Onboard and or bluetooth HID devices (keyboards, mouse) are unsupported as available devices.

### poll

The word  poll , followed by a number, sets the time in milliseconds between outputs of the event queue. The message  poll  0 disables automatic polling.

Arguments:

- output-time
  [float]

## Output

### list

The object collects data from the selected device and will output all collected data when a  bang  or a timing trigger from to a  poll  message is received. Data is output as a two-element integer list; he first element represents the element of the device to which the data applies, and the second element represents the data value.

## See Also

| Name | Description |
| --- | --- |
| [hid](https://docs.cycling74.com/reference/hid) | Human Interface Device input (modern) |
| [gamepad](https://docs.cycling74.com/reference/gamepad) | Report gamepad controller events |
| [key](https://docs.cycling74.com/reference/key) | Report keyboard presses |
| [keyup](https://docs.cycling74.com/reference/keyup) | Report key information on release |

---
type: max
name: "hid"
summary: "Human Interface Device input (modern)"
signal: false
url: "https://docs.cycling74.com/reference/hid/"
package: "Max"
see_also: ["hi", "gamepad", "key", "keyup"]
---
# hid

Human Interface Device input (modern)

## Description

Provides input from human interface peripherals (i.e. Trackpad, Keyboard, and others). The [hid](https://docs.cycling74.com/reference/hid) object is similar to the legacy [hi](https://docs.cycling74.com/reference/hi) object but is cross platform with more information and capabilities. This includes providing usage pages, usages, types, and ranges for the information received. (see
https://www.usb.org/hid
for more information)

## Arguments

### device[symbol] optional

An argument can be used to specify the object for focus on the [hid](https://docs.cycling74.com/reference/hid) object.

## Attributes

### exclusive[int]

On Mac OS, the
exclusive
enables to use devices such as mice, keyboards, graphics tablets, etc. exclusively. This is useful when one wishes the input to only be sent to Max and not control the online mouse cursor or trigger system key events, etc. Be careful when using that you will not prevent yourself from using you rmouse or keyboard to disable or close your patch.

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

Sending the name of any device to the [hid](https://docs.cycling74.com/reference/hid) object will set the object to focus on the specified device.

Arguments:

- device
  [list]

### close

Close the currently open device

### info

The  info  message causes device information to be output to the Max console.

### menu

The  menu  message causes a device list to be output from the right outlet in a format fit for a  umenu  object. On Windows, Onboard and or bluetooth HID devices (keyboards, mouse) are unsupported as available devices.

### poll

The word  poll , followed by a number, sets the time in milliseconds between outputs of the event queue. The message  poll  0 disables automatic polling.

Arguments:

- output-time
  [float]

## See Also

| Name | Description |
| --- | --- |
| [hi](https://docs.cycling74.com/reference/hi) | Human Interface device input (legacy) |
| [gamepad](https://docs.cycling74.com/reference/gamepad) | Report gamepad controller events |
| [key](https://docs.cycling74.com/reference/key) | Report keyboard presses |
| [keyup](https://docs.cycling74.com/reference/keyup) | Report key information on release |

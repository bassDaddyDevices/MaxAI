---
type: ableton
name: "live.thisdevice"
summary: "Send a bang automatically when a Max Device is loaded, report device state"
signal: false
url: "https://docs.cycling74.com/reference/live.thisdevice/"
package: "Max for Live"
see_also: ["active", "button", "closebang", "freebang", "loadbang", "loadmess", "thispatcher"]
---
# live.thisdevice

Send a bang automatically when a Max Device is loaded, report device state

## Description

[live.thisdevice](https://docs.cycling74.com/reference/live.thisdevice) reports three pieces of information about your Max Device. A  bang  message is automatically sent from the left outlet when the Max Device is opened and completely initialized, or when the containing patcher is part of another file that is opened. Additionally, a  bang  will be reported every time a new preset is loaded or the device is saved (and thus reloaded within the Live application). A  1  or  0  will be sent from the middle outlet when the Device is enabled or disabled, respectively. A  1  or  0  will be sent from the right outlet when preview mode for the Device is enabled or disabled, respectively. Used within Max, [live.thisdevice](https://docs.cycling74.com/reference/live.thisdevice) functions essentially like the [loadbang](https://docs.cycling74.com/reference/loadbang) object. The middle and right outlets are inactive in this case.

## Arguments

None.

## Attributes

### openinpresentation[int]

Open in Presentation

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sending a  bang  message to a [live.thisdevice](https://docs.cycling74.com/reference/live.thisdevice) object causes it to output a  bang  message from the leftmost outlet.

### (mouse)

Double-clicking on a  live.thisdevice  object causes it to output a  bang  message from the leftmost outlet.

### getstate

Sending a  getstate  message to a [live.thisdevice](https://docs.cycling74.com/reference/live.thisdevice) object causes it to output the Max Device state from the rightmost outlet.

### loadbang

Same as  bang .

### setwidth

The setwidth message will dynamically set the width of the Max for Live device.

 **Note:**  This width is not automatically saved as part of the preset and/or Live set.

The message  setwidth 0  will return to the default condition where the width of the device is calculated by using the devices's visible objects.

Arguments:

- width
  [int]

## See Also

| Name | Description |
| --- | --- |
| [active](https://docs.cycling74.com/reference/active) | Send 1 when patcher window is active, 0 when inactive |
| [button](https://docs.cycling74.com/reference/button) | Blink and send a bang |
| [closebang](https://docs.cycling74.com/reference/closebang) | Send a bang on close |
| [freebang](https://docs.cycling74.com/reference/freebang) | Send a bang when a patcher is freed |
| [loadbang](https://docs.cycling74.com/reference/loadbang) | Send a bang when a patcher is loaded |
| [loadmess](https://docs.cycling74.com/reference/loadmess) | Send a message when a patch is loaded |
| [thispatcher](https://docs.cycling74.com/reference/thispatcher) | Send messages to a patcher |

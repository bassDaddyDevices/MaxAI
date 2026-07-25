---
type: ableton
name: "live.routing"
summary: "Route MIDI and Audio Inputs and Outputs in Ableton Live"
signal: false
url: "https://docs.cycling74.com/reference/live.routing/"
package: "Max for Live"
see_also: ["JS API", "Live API Overview", "Creating Devices that use the Live API", "Live Object Model", "live.object", "live.observer", "live.path", "live.banks"]
---
# live.routing

Route MIDI and Audio Inputs and Outputs in Ableton Live

## Description

Route MIDI and Audio data in Ableton Live using available inputs and outputs. [live.routing](https://docs.cycling74.com/reference/live.routing) only supports one midi or audio port at a time per Max for Live device. So, if you use two [live.routing](https://docs.cycling74.com/reference/live.routing) objects in one Max for Live device, they will both point to the same port. This is because the Live API currently supports only one port at a time per Max for Live device.

To route audio data through a Max for Live device, you will need to use the [plugin~](https://docs.cycling74.com/reference/plugin~) and [plugout~](https://docs.cycling74.com/reference/plugout~) objects to recieve audio data from Live in Max. Similarly, to route midi data through a Max for Live device, you will need to use the [midiin](https://docs.cycling74.com/reference/midiin) and [midiout](https://docs.cycling74.com/reference/midiout) objects to recieve midi data from Live in Max. You can then build your routing patch in Max using the [live.routing](https://docs.cycling74.com/reference/live.routing) object. To learn more about Ableton Live's I/O, look up the Device I/O Object Class in the [Live Object Model](https://docs.cycling74.com/userguide/m4l/live_api_overview#live-object-model).

## Arguments

None.

## Attributes

### index[int]

Set the Audio or MIDI I/O of the current Max device by its index number.

### port[symbol]

Port Live Audio and MIDI inputs and outputs to Max to enable routing.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### channel

Set the current Audio or MIDI channel to be routed by the specified index number.

Arguments:

- input
  [int]

### type

Set the current Audio or MIDI type to be routed by the specified index number.

Arguments:

- input
  [int]

## See Also

| Name | Description |
| --- | --- |
| [JS API](https://appdocs.cycling74.com/apiref/js) | JS API |
| [Live API Overview](https://docs.cycling74.com/userguide/m4l/live_api_overview) | Live API Overview |
| [Creating Devices that use the Live API](https://docs.cycling74.com/userguide/m4l/live_api) | Creating Devices that use the Live API |
| [Live Object Model](https://appdocs.cycling74.com/apiref/lom) | Live Object Model |
| [live.object](https://docs.cycling74.com/reference/live.object) | Perform operations on Live objects |
| [live.observer](https://docs.cycling74.com/reference/live.observer) | Monitor changes in Live objects |
| [live.path](https://docs.cycling74.com/reference/live.path) | Navigate to objects in the Live application |
| [live.banks](https://docs.cycling74.com/reference/live.banks) | Manage Max for Live Device banks for Push controllers. |

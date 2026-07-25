---
type: ableton
name: "live.miditool.in"
summary: "Retrieve notes and contextual data of MIDI clips in Live. Designed for use in a MIDI Tool Generator or MIDI Tool Transformation."
signal: false
url: "https://docs.cycling74.com/reference/live.miditool.in/"
package: "Max for Live"
see_also: ["JS API", "Live API Overview", "Creating Devices that use the Live API", "Max for Live MIDI Tools", "Live Object Model", "live.miditool.out", "live.object", "live.path", "live.observer"]
---
# live.miditool.in

Retrieve notes and contextual data of MIDI clips in Live. Designed for use in a MIDI Tool Generator or MIDI Tool Transformation.

## Description

The [live.miditool.in](https://docs.cycling74.com/reference/live.miditool.in) object is used in a MIDI Tool Generator or MIDI Tool Transformation and is responsible for retrieving note and contextual information of the currently selected clip in Live. In combination with the [live.miditool.out](https://docs.cycling74.com/reference/live.miditool.out) object, you can develop a generative or transformative process that can be controlled and triggered from the Tool Tabs.

#### Discussion

The [live.miditool.in](https://docs.cycling74.com/reference/live.miditool.in) object is an essential building block of a Max for Live MIDI Tool and can only be used in an AMXD with the Note Generator or Note Transformation type. It will not work in an Audio Effect, MIDI Effect or Instrument device.

When [live.miditool.in](https://docs.cycling74.com/reference/live.miditool.in) receives a bang it will start a new apply cycle or continue an existing one. Starting an apply cycle will retrieve the notes and contextual information of the currently selected clip. The notes are sent out the leftmost outlet as a dictionary, and the contextual information is sent out the middle outlet as a dictionary. Performing a user interaction outside of the MIDI Tool, for example, selecting a different clip, will cause the apply cycle to stop. The next time a bang is received, a new apply cycle will start. Continuation of the apply cycle will return the notes and contextual information of the clip from  *when you began the cycle*  and won't reflect the updated state of the clip if you modified it in the previous cycle. If you click the "Apply" button in the Tool Tabs, a cycle is started and ended in one interaction. The rightmost outlet is used for receiving notifications from Live that happen independently of the apply cycle. For instance, Live will send a "pitch\_range" message through this outlet when a user selects a pitch range.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

A bang will continue or start an iteration of the apply cycle. In either case, a dictionary of notes is provided from the left outlet, and another dictionary of contextual information is provided from the right outlet.

### (MIDI)

TEXT\_HERE

## See Also

| Name | Description |
| --- | --- |
| [JS API](https://appdocs.cycling74.com/apiref/js) | JS API |
| [Live API Overview](https://docs.cycling74.com/userguide/m4l/live_api_overview) | Live API Overview |
| [Creating Devices that use the Live API](https://docs.cycling74.com/userguide/m4l/live_api) | Creating Devices that use the Live API |
| [Max for Live MIDI Tools](https://docs.cycling74.com/userguide/m4l/live_miditools) | Max for Live MIDI Tools |
| [Live Object Model](https://appdocs.cycling74.com/apiref/lom) | Live Object Model |
| [live.miditool.out](https://docs.cycling74.com/reference/live.miditool.out) | Set or replace notes of MIDI clips in Live. Designed for use in a MIDI Tool Generator or MIDI Tool Transformation. |
| [live.object](https://docs.cycling74.com/reference/live.object) | Perform operations on Live objects |
| [live.path](https://docs.cycling74.com/reference/live.path) | Navigate to objects in the Live application |
| [live.observer](https://docs.cycling74.com/reference/live.observer) | Monitor changes in Live objects |

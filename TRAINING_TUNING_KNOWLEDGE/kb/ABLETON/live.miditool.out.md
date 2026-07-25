---
type: ableton
name: "live.miditool.out"
summary: "Set or replace notes of MIDI clips in Live. Designed for use in a MIDI Tool Generator or MIDI Tool Transformation."
signal: false
url: "https://docs.cycling74.com/reference/live.miditool.out/"
package: "Max for Live"
see_also: ["JS API", "Live API Overview", "Creating Devices that use the Live API", "Max for Live MIDI Tools", "Live Object Model", "live.miditool.in", "live.object", "live.path", "live.observer"]
---
# live.miditool.out

Set or replace notes of MIDI clips in Live. Designed for use in a MIDI Tool Generator or MIDI Tool Transformation.

## Description

The [live.miditool.out](https://docs.cycling74.com/reference/live.miditool.out) object is used in a MIDI Tool Generator or MIDI Tool Transformation and is responsible for setting or replacing notes of the currently selected clip in Live. In combination with the [live.miditool.in](https://docs.cycling74.com/reference/live.miditool.in) object, you can develop a generative or transformative process that can be controlled and triggered from the Tool Tabs.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### dictionary

When [live.miditool.out](https://docs.cycling74.com/reference/live.miditool.out) receives a dictionary, it will set the currently selected clip to the notes contained in the dictionary. The dictionary must be formatted in the same way as the dictionary sent out from the [live.miditool.in](https://docs.cycling74.com/reference/live.miditool.in) object.

For an AMXD with the "Note Transformation" type, the notes in the dictionary become the new state of the clip. For an AMXD with the "Note Generator" type, the notes in the dictionary are added to the clip and can be superimposed on existing notes.

## See Also

| Name | Description |
| --- | --- |
| [JS API](https://appdocs.cycling74.com/apiref/js) | JS API |
| [Live API Overview](https://docs.cycling74.com/userguide/m4l/live_api_overview) | Live API Overview |
| [Creating Devices that use the Live API](https://docs.cycling74.com/userguide/m4l/live_api) | Creating Devices that use the Live API |
| [Max for Live MIDI Tools](https://docs.cycling74.com/userguide/m4l/live_miditools) | Max for Live MIDI Tools |
| [Live Object Model](https://appdocs.cycling74.com/apiref/lom) | Live Object Model |
| [live.miditool.in](https://docs.cycling74.com/reference/live.miditool.in) | Retrieve notes and contextual data of MIDI clips in Live. Designed for use in a MIDI Tool Generator or MIDI Tool Transformation. |
| [live.object](https://docs.cycling74.com/reference/live.object) | Perform operations on Live objects |
| [live.path](https://docs.cycling74.com/reference/live.path) | Navigate to objects in the Live application |
| [live.observer](https://docs.cycling74.com/reference/live.observer) | Monitor changes in Live objects |

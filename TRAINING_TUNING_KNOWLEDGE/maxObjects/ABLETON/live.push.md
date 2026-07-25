---
type: ableton
name: "live.push"
summary: "Configuration of Push 2 and 3"
signal: false
url: "https://docs.cycling74.com/reference/live.push/"
package: "Max for Live"
see_also: ["live.banks"]
---
# live.push

Configuration of Push 2 and 3

## Description

**live.push**  allows a Max for Live device to override the settings of a connected Push instrument. The Push settings are only overridden if the Max for Live device containing live.push is selected, or if the device is the first in the device chain. This behavior can be configured with the  **play\_usage**  attribute.

## Arguments

None.

## Attributes

### play\_flat\_zone[int]

Width of pad that is in tune (mm), -1 means use value set on Push. Only works for a Push with expressive pads.

### play\_in\_tune\_location[symbol]

When the In Tune Location is set to Finger, the location where you initially set your finger will have zero pitch bend. For example, if you place your finger on the right side of a pad, the pitch remains in tune until you slide your finger horizontally to initiate the pitch bend. When the In Tune Location is set to Pad, wherever you place your finger on the pad determines the initial pitch bend, with zero pitch bend at the center of the pad. Only works for a Push with expressive pads, if the Push's Expression Mode is set to MPE.

Possible values:

'default'
(
Use the value set on Push
)
'finger'
(
Wherever the musician places their finger on the pad initially
)
This setting means the note is initially in tune no matter where the finger makes contact.

'pad'
(
The middle of the pad
)
This setting means the note can be out of tune (with MPE pitch bend) when it is triggered.

### play\_note\_colors[128 symbols]

A list of up to 128 symbols that will be used as colors for each MIDI note if  **play\_pad\_map**  is  **serial** . The first color will be used for MIDI note 0, the second for MIDI note 1, and so on. If there are fewer than 128 symbols, the given symbols will repeat. It is important to note that the positioning of MIDI notes on matrix pads can change according to the user-selected layout and the octave up and down buttons on Push, so the assigned colors do not necessarily correspond to a specific pad.

Three symbols have special meanings:

- scale\_base\_note - uses whatever color Push uses normally for the scale base note, currently the track's color
- scale\_note - uses whatever color Push uses normally for a note that's in the scale, but not the base note, currently white
- non\_scale\_note - uses whatever color Push uses normally for a note that's not in the scale, currently black (off)

The other possible symbols are specific colors: orange\_one, orange\_one\_shade, orange\_one\_shade\_two, brown\_two, brown\_two\_shade, brown\_two\_shade\_two, yellow\_highlight, purple, ocean, deep\_ocean, sky, green\_green, green\_green\_shade, red\_red, red\_red\_shade, red\_red\_shade\_two, blue\_blue, light\_grey, dark\_grey, black, white

### play\_pad\_map[symbol]

Controls how MIDI notes are distributed over the pads. In both  **scale**  and  **serial**  modes, the user can cycle through layouts with the Push Layout button allowing quick access to macro variations and note sequencing.

Possible values:

'scale'
(
Pad notes follow scale
)
The MIDI notes mapped to the pads as well as the colors of the pads follow the selected scale, tuning system and in-key or chromatic mode.

'serial'
(
Pad notes ignore scale
)
All MIDI notes are shown in order, with no reference to the selected scale or tuning system. The colors provided by  **play\_note\_colors**  are used.

### play\_slide\_height[int]

Height of pad with slide expression (mm), -1 means use value set on Push, values less than 10mm rounded up to 10mm. Only works for a Push with expressive pads.

### play\_usage[symbol]

When to use the values of the attributes preceded with  **play\_**  to override Push, taking into account potential other devices that use live.push.

Possible values:

'never'
(
Never override Push behavior
)
Never override Push behavior.

'first\_or\_selected'
(
Override Push if device is first in the chain or device is selected
)
Activate custom settings if the device is the first in the device chain which wants to override Push behavior, or if the device is selected.

'first'
(
Override Push if device is first in the chain
)
Activate custom settings if the device is the first in the device chain which wants to override Push behavior.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [live.banks](https://docs.cycling74.com/reference/live.banks) | Manage Max for Live Device banks for Push controllers. |

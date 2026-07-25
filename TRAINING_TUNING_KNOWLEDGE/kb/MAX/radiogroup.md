---
type: max
name: "radiogroup"
summary: "Radio button or check box"
signal: false
url: "https://docs.cycling74.com/reference/radiogroup/"
package: "Max"
see_also: ["button", "matrixctrl", "pictctrl", "toggle", "ubutton"]
---
# radiogroup

Radio button or check box

## Description

Provides a user interface for option selection. There are two modes of operation: radio button and checkbox.

#### Discussion

The [radiogroup](https://docs.cycling74.com/reference/radiogroup) object has two modes of operation: radio button and check box. In radio button mode, the [radiogroup](https://docs.cycling74.com/reference/radiogroup) object provides a user-definable number of buttons in a group, only one of which may be selected at a time. In check box mode, the indicators in the [radiogroup](https://docs.cycling74.com/reference/radiogroup) object function as a set of on/off indicators. Check box mode also supports a way to have the checkboxes act as indicators for the bit pattern of a binary representation of an integer (see the  flagmode  message).

Note: [radiogroup](https://docs.cycling74.com/reference/radiogroup) can be re-sized horizontally so it will extend under comment boxes placed to the right of the buttons or boxes. this way, clicking on the text to the right of the button will also set the button selection or box state.

## Arguments

None.

## Attributes

### activecolor[4 floats]

Sets the color for the active radiobuttons/checkboxes in RGBA format.

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats]

Sets the background color for the object in RGBA format.

### elementcolor[4 floats]

Sets the off color for the radiobuttons/checkboxes in RGBA format. This color only applies if the shape attribute is set to Square (1) or Circle (2).

### enabled[atom]

Enables/disables buttons. The word  enabled , followed by followed by a list of zeroes and ones whose length is the same as the number of buttons or boxes, will disable (0) or enable (1) the item in the list position that corresponds to the button or box (e.g.,  enableitem 1 1 1 0  will disable only the fourth button or box).

### flagmode[int]: 0

Sets the flag mode of operation for the [radiogroup](https://docs.cycling74.com/reference/radiogroup) object. In this mode, each check box corresponds to one bit in an integer value (i.e., the first radio button or checkbox corresponds to the ones bit, the second button or checkbox to the twos bit, the third button or checkbox to the fours bit, etc.). The message  flagmode 0  disables this mode (default).

### inactive[int]: 0

Toggles the active or inactive state of the entire group of radio buttons or check boxes.

### itemtype[atom\_long]: 0

Selects the mode of operation for the [radiogroup](https://docs.cycling74.com/reference/radiogroup) object.

 Button  (the default)

 Checkbox

Possible values:

0 = 'Radio Buttons'

1 = 'Check Boxes'

### offset[int]: 16

Sets the pixel offset (spacing) between the tops of the buttons/boxes. the minimum offset is 14 pixels, the default offset is 16 pixels.

### param\_connect[symbol]:

Connect to Parameter

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### selection[atom]

Specifies the currently selected button or box.

### shape[int]: 0 >= 7.0.0

Sets the shape of the radiobuttons/checkboxes.

Possible values:

0 = 'Classic'

1 = 'Square'

2 = 'Circle'

### size[atom\_long]: 2

Specifies the number of buttons or boxes. The default is 2, and the maximum is 64. Note: If you care using the radiogroup object in check box mode and have enabled Flag Mode, you will only be able to set 32 checkboxes.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In radio button mode: A  bang  outputs the currently selected radio button number.

In check box mode: A  bang  outputs a list of zeros and ones representing the on/off state of the check boxes.

In flag mode: A  bang  send the integer that corresponds to the bit pattern of the currently checked boxes (i.e., if boxes one, two, and three are checked, a  bang  will output a value of  7 )out the [radiogroup](https://docs.cycling74.com/reference/radiogroup) object's output.

### int

In radio button mode: An integer sets the radio button selection and outputs the input value. Numbering starts with 0, and a negative number indicates that no buttons will be selected.

In flag mode: An integer value received in the [radiogroup](https://docs.cycling74.com/reference/radiogroup) object's inlet will set the buttons or checkboxes to reflect the bit pattern of the integer value (i.e., a value of 19 will select boxes one, two, and five, corresponding to the binary value  10011 ) and send the integer value out the [radiogroup](https://docs.cycling74.com/reference/radiogroup) object's output.

Arguments:

- selection
  [int]

### list

In check box mode: list of zeros and ones sets the check box states and causes output of the input list. If you have specified check box mode and have the flag mode set using the  flagmode 1  message, a list of zeros and ones sets the check box states and causes output of the input list.

Arguments:

- states
  [list]

### disableitem

In radio button and check box modes: disable the items whose numbers are indicated (they will be drawn in grey and will not respond to clicks, although they will still respond to  set  messages, ints or lists).

Arguments:

- indices
  [list]

### enableitem

In radio button and check box modes: The word  enableitem , followed by followed by a number or list of numbers, will enable the items whose numbers are indicated if they have been disabled with the  disableitem  message.

Arguments:

- indices
  [list]

### (mouse)

In  radio button  mode, clicking on a radio button will set the radio button selection and output the corresponding button number (numbering starts from zero). In  check box  mode, clicking on a check box will change its state (from one to zero or from zero to one) and output a list of zeros and ones corresponding to the on/off state of the boxes. if the entire group of buttons/boxes is inactive (grayed out) it will not respond to clicks. if an individual item is disabled (grayed out) it will not respond to clicks, although active items in the group will still respond to clicks as usual. The  Flag Mode  variation on the  check box  mode has check boxes that correspond to bit positions for a binary value (i.e. the first checkbox corresponds to the 1s, the second to 2s, the third to 4s, etc.) Clicking on a check box will select or deselect the check box and output the integer value which corresponds to the bit pattern.

### set

In radio button mode: The word  set , followed by a number, sets the currently selected radio button without triggering any output.

In check box mode: The word  set , followed by a list of zeros and ones, sets the check box states without triggering any output.

If you are using check box mode and are also using Flag Mode, a number will set the state of the first 32 checkboxes in a pattern which corresponds to the bit pattern of the number without triggering output (see the  flagmode  section for more information).

Arguments:

- selection
  [list]

## Output

### int

In radio button mode: Clicking on a radio button outputs an int corresponding to the radio button selected. Numbering begins with 0.

In flag mode: Clicking on a check box outputs an int corresponding to the bit pattern represented by the checked boxes (i.e., if boxes one, two, and three are checked, a  bang  will output a value of  7 ).

### list

In check box mode: A  bang  will output a list of zeros and one which indicate the on/off state of the group of check boxes.

## See Also

| Name | Description |
| --- | --- |
| [button](https://docs.cycling74.com/reference/button) | Blink and send a bang |
| [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) | Matrix switch control |
| [pictctrl](https://docs.cycling74.com/reference/pictctrl) | Picture-based control |
| [toggle](https://docs.cycling74.com/reference/toggle) | Switch between off and on (0 and 1) |
| [ubutton](https://docs.cycling74.com/reference/ubutton) | Transparent button |

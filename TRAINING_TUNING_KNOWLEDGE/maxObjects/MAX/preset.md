---
type: max
name: "preset"
summary: "Store and recall settings"
signal: false
url: "https://docs.cycling74.com/reference/preset/"
package: "Max"
see_also: ["grab", "pattstorage", "nodes", "umenu", "chooser"]
---
# preset

Store and recall settings

## Description

[preset](https://docs.cycling74.com/reference/preset) can store and recall the parameters of any specified user interface objects at the click of a mouse. It can also be used as a user interface link to a named [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object.

## Arguments

None.

## Attributes

### active1[4 floats]

Sets the active preset color of the object in RGBA format

### bgcolor[4 floats]

Sets the background color of the object in RGBA format

### bubblesize[int32]: 8

Sets the size of the preset "bubble", in pixels. A bubble must be larger than 2 pixels.

### dirty[int]: 0

When enabled, storing or clearing a preset will mark the parent patcher of the [preset](https://docs.cycling74.com/reference/preset) dirty so you will be prompted to save changes when closing the document.

### embed[int]: 1

Toggles the ability to save your presets as part of the main patch (The default behavior is 1 (save presets with the patcher).

### emptycolor[4 floats]

Sets the empty slot color of the object in RGBA format.

### ignoreconnected[int]: 0

Ignore Objects Connected to Preset Inlet

### ignoreemptyinterp[int]: 1

Ignore Empty Multi Interpolation

### paramonly[int]: 0

When enabled, [preset](https://docs.cycling74.com/reference/preset) will store only parameters in objects connected to its rightmost outlet instead of all attributes. This applies only to objects with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) and [rnbo~](https://docs.cycling74.com/reference/rnbo~).

### pattrstorage[symbol]

the  pattrstorage  attribute takes as its argument the name of a [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object and sets the [preset](https://docs.cycling74.com/reference/preset) object to allow its use as a user interface object for the named [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's contents.

### stored1[4 floats]

Sets the stored preset color of the object in RGBA format.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### textcolor[4 floats]

Sets the text color of the object in RGBA format.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends out the settings of the preset that was most recently recalled with an  int  or a mouse click.

### int

Sending any integer will trigger the preset of the same number.

Arguments:

- slotnumber
  [int]

### float

A float recalls a preset that is a linear interpolation between two adjacent presets. The first preset is the integer part of the float value and the second preset is the next highest integer. The weight of the first preset is 1 minus the decimal part of the float value. The weight of the second preset is the decimal part of the float value. For example with an input of 2.7, preset 2 will contribute 30% and preset 3 will contribute 70%. Not all objects that store data in a preset can interpolate their stored data. For these objects, the data used will be selected from the preset slot with the highest weighting.

Arguments:

- interpolation\_value
  [float]

### list

See the  bang  listing.

### anything

If a preset with a matching name is found, it is recalled.

Arguments:

- name
  [symbol]

### clear

Erases the contents of the most recently sent preset. The word  clear , followed by a number, erases the contents of that numbered preset.

Arguments:

- slotnumber
  [int]

### clearall

Erases the contents of all presets.

### (mouse)

Clicking on a button in the [preset](https://docs.cycling74.com/reference/preset) object will recall a stored preset.

Shift-clicking on a button in the [preset](https://docs.cycling74.com/reference/preset) object will store a preset.

The number of visible presets can be adjusted by resizing the [preset](https://docs.cycling74.com/reference/preset) object's box. The maximum number of presets in a single [preset](https://docs.cycling74.com/reference/preset) object is 2048.

### name

The word  name , followed by a symbol, sets the ID Name for the preset. The ID Name allows the preset to have a unique ID so that files created for it will not read into other presets.

Arguments:

- ID
  [symbol]

### read

The word  read , followed by no arguments or a number, displays an Open Document dialog box for choosing a file of preset data to read. If the preset has been given a Preset Name Code, only files of the type specified by the code will be displayed. The number argument specifies the preset number into which the file data should be read. If the number is 0 or -1, the data in the file will be read into the number of presets contained in the file starting with the first one. If the word  read  is followed by a symbol or a number and a symbol, no dialog box is displayed. Instead, the symbol is taken as a filename from which to read presets. The number functions as previously described.

Arguments:

- filename
  [symbol]
- slotnumber
  [int]

### recallmulti

The arguments to  recallmulti  are a series of float values representing preset slots (the integer part) and weights (the decimal part). The preset values recalled are the weighted combination of all the presets. Weights are normalized so they are not required to add to 1. Example:  recallmulti 4.6 6.1 3.3  will combine preset slots 4, 6, and 3 with weights of 0.6, 0.1, and 0.3 respectively. Not all objects that store data in a preset can interpolate their stored data. For these objects, the data used will be selected from the preset slot with the highest weighting.

Arguments:

- preset\_weights
  [list]

### setname

setname  followed by an  int  slot number and a name, assigns the name to the slot number. Names will be displayed when moving the mouse over a slot or when connecting a [umenu](https://docs.cycling74.com/reference/umenu) or [chooser](https://docs.cycling74.com/reference/chooser) object to a [preset](https://docs.cycling74.com/reference/preset). Once assigned a name, presets can be recalled by sending the name as a message.

If the slot number is 0, the name will be assigned to the current preset.

Arguments:

- slotnumber
  [int]
- name
  [symbol]

### store

The word  store , followed by a number, stores the current setting of all user interface objects in the same window in the preset indicated by the number. If an optional name argument is present, it is assigned to the stored preset.

Presets are numbered left-to-right, top-to-bottom. When settings are stored in a preset, the dot's color changes to indicate that it contains something. Settings can also be stored in a preset by holding down the Shift key and clicking on the preset with the mouse.

Arguments:

- slotnumber
  [int]
- name
  [symbol]

### write

The word  write , followed by no arguments or a number, displays a Save As dialog box for specifying a destination filename for writing the preset data. If the preset has been given a Preset Name Code, the file is given this code as its file type. The number argument specifies the preset number from which the preset data should be written. If the number is 0 or -1, all presets will be written. If the word  write  is followed by a symbol or a number and a symbol, no dialog box is displayed. Instead, the symbol is taken as a filename to use for writing the data, and the file will be placed in the current default folder. The number functions as previously described.

Arguments:

- filename
  [symbol]
- slotnumber
  [int]

## Output

### (internal)

Third outlet: Any user interface objects connected to the third outlet of [preset](https://docs.cycling74.com/reference/preset) will be excluded from the effects of that [preset](https://docs.cycling74.com/reference/preset). (This is particularly useful when there are many objects you want to affect with [preset](https://docs.cycling74.com/reference/preset), and only a few you want to exclude.)

Objects whose data is stored in a preset include almost all user interface objects. Although an [itable](https://docs.cycling74.com/reference/itable) object will get stored and recalled, a [table](https://docs.cycling74.com/reference/table) object must be connected to the [preset](https://docs.cycling74.com/reference/preset) object's first outlet with a patch cord.

The first outlet of [preset](https://docs.cycling74.com/reference/preset) can also be connected to a [send](https://docs.cycling74.com/reference/send) object, to communicate with objects connected to a [receive](https://docs.cycling74.com/reference/receive) object of the same name.

### int

Out second outlet: When a preset is recalled, the number of the preset is sent out.

Out fourth outlet: When a preset is stored, the number of the preset is sent out.

### int or float

Out left (first) outlet: When a preset is recalled, either by a mouse click or by a number in the inlet, the settings stored in that preset are sent out the outlet to all connected objects, or, if no objects are connected, to all user interface objects in the patcher.

Out right (fifth) outlet: Similar to the left outlet, but the right outlet will also send out attribute states for all connected objects that were stored with the preset.

## Connections

### chooser

Connecting a [chooser](https://docs.cycling74.com/reference/chooser) object to the inlet of [preset](https://docs.cycling74.com/reference/preset) displays the numbers and names of all presets. Clicking on a row in [chooser](https://docs.cycling74.com/reference/chooser) will recall the displayed preset. The [chooser](https://docs.cycling74.com/reference/chooser) display updates as presets are are added, removed, or named.

### nodes

Connecting a [nodes](https://docs.cycling74.com/reference/nodes) object to the inlet of [preset](https://docs.cycling74.com/reference/preset) adds a node for each preset up to a maximum set by the maxdynamicnodes attribute of the [nodes](https://docs.cycling74.com/reference/nodes) object. Once connected, [nodes](https://docs.cycling74.com/reference/nodes) serves as a user interface for multi-way interpolation as described under the  recallmulti  message.

### umenu

Connecting a [umenu](https://docs.cycling74.com/reference/umenu) object to the inlet of [preset](https://docs.cycling74.com/reference/preset) displays the numbers and names of all presets in a menu. Choosing a menu item from [umenu](https://docs.cycling74.com/reference/umenu) will recall the displayed preset. The menu will update as presets are added, removed, or named.

## See Also

| Name | Description |
| --- | --- |
| [grab](https://docs.cycling74.com/reference/grab) | Intercept the output of another object |
| [pattstorage](https://docs.cycling74.com/reference/pattstorage) |  |
| [nodes](https://docs.cycling74.com/reference/nodes) | Interpolate data graphically |
| [umenu](https://docs.cycling74.com/reference/umenu) | Pop-up menu |
| [chooser](https://docs.cycling74.com/reference/chooser) | Display a scrolling list of selectable items |

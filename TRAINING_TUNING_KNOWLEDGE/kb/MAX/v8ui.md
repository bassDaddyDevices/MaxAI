---
type: max
name: "v8ui"
summary: "Javascript user interfaces and graphics (Modern Engine)"
signal: false
url: "https://docs.cycling74.com/reference/v8ui/"
package: "Max"
see_also: ["v8", "js", "jsui"]
---
# v8ui

Javascript user interfaces and graphics (Modern Engine)

## Description

Provides an environment to make user interface elements using Javascript (ECMAScript 6+). This provides all of the programming tools available in the [v8](https://docs.cycling74.com/reference/v8) object, but also exposes the mgraphics and sketch drawing routines for visual output.

#### Discussion

The [v8ui](https://docs.cycling74.com/reference/v8ui) object is a general purpose user interface object driven by javascript. There are a number of templates already built to use (some of which are shown below). If the javascript file also has a help file associated with it, the associated help file will be loaded instead of v8ui.maxhelp. The inspector lets you set the javascript file, javascript arguments, size, border flag, and disable full scene anti-aliasing (fsaa).

At the present time, mouse position and object redrawing will only be reported correctly in the [v8ui](https://docs.cycling74.com/reference/v8ui) object if the patching and Presentation mode sizes of the object are the same.

## Arguments

None.

## Attributes

### border[int]: 1

Toggles the drawing of a border around the object. The default is 1 (draw border).

### embed[int]

Embed Javascript

### filename[symbol]: none

The word  filename , followed by a symbol that specifies a pathname, designates the Javascript file to be loaded.

### jsarguments[255 atoms]:

Specifies any arguments to be passed to the Javascript code contained in the object.

### nofsaa[int]: 0

Toggle full screen anti-aliasing

### param\_connect[symbol]:

Connect to param Object

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

Visible to Mapping

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Invokes the function named bang if defined.

### int

Invokes the function named msg\_int if defined.

Arguments:

- user-defined
  [int]

### float

Invokes the function named msg\_float if defined.

Arguments:

- user-defined
  [float]

### list

Performs the same as  anything .

Arguments:

- user-defined
  [list]

### anything

Invokes the function with the message name, assigning the message arguments to the arguments to the function. For example, if the object has a function named xyz defined, the message  xyz 1 2 3  would invoke the xyz function with arguments 1 2 and 3.

Arguments:

- user-defined
  [list]

### (drag)

When a file is dragged from the File Browser to a [v8ui](https://docs.cycling74.com/reference/v8ui) object, the file is loaded and executed.

### array

TEXT\_HERE

### assiststr

TEXT\_HERE

### compile

Recompiles the current file. If followed by a symbol, will load, compile, and set the currently loaded Javascript file to be the file specified by the symbol argument.

Arguments:

- filename
  [symbol]

### (mouse)

Double-clicking on the object opens a text window where the Javascript source file can be edited. When the text window is saved, the text is compiled as the object's script.

### delprop

The word  delprop , followed by a name, deletes the named property.

Arguments:

- property
  [symbol]

### getprop

The word  getprop , followed by a name, outputs the value of the property name stored in the object out the left outlet.

Arguments:

- property
  [symbol]

### jsfile

The word  jsfile , followed by a symbol , loads, compiles, and sets the currently loaded Javascript file to be the Javascript file specified by the symbol argument.

Arguments:

- filename
  [symbol]

### loadbang

Call the loadbang function

### open

Opens the text window where the object's Javascript source file can be edited.

### read

TEXT\_HERE

### setprop

The word  setprop , followed by name and one or more names or numbers, sets the named property to what follows the name. For example, after sending setprop  xyz 1 2 3  to the object, the xyz property would have a value of the list 1 2 3.

Arguments:

- property and settings
  [list]

### size

The word  size , followed by two int arguments, sets the width and height of the [v8ui](https://docs.cycling74.com/reference/v8ui) object.

Arguments:

- width
  [int]
- height
  [int]

### string

TEXT\_HERE

### wclose

Closes the text window where the object's Javascript source file is edited.

## See Also

| Name | Description |
| --- | --- |
| [v8](https://docs.cycling74.com/reference/v8) | Execute Javascript (Modern Engine) |
| [js](https://docs.cycling74.com/reference/js) | Execute Javascript (Legacy Engine) |
| [jsui](https://docs.cycling74.com/reference/jsui) | Javascript user interfaces and graphics (Legacy Engine) |

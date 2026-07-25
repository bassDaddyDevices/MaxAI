---
type: max
name: "jsui"
summary: "Javascript user interfaces and graphics (Legacy Engine)"
signal: false
url: "https://docs.cycling74.com/reference/jsui/"
package: "Max"
see_also: ["JavaScript", "Custom UI Objects", "js", "jstrigger", "mxj"]
---
# jsui

Javascript user interfaces and graphics (Legacy Engine)

## Description

Provides an environment to make user interface elements using Javascript (ECMAScript 5). This provides all of the programming tools available in the [js](https://docs.cycling74.com/reference/js) object, but also exposes the mgraphics and sketch drawing routines for visual output.

#### Discussion

The [jsui](https://docs.cycling74.com/reference/jsui) object is a general purpose user interface object driven by javascript. There are a number of templates already built to use (some of which are shown below). While the patcher is in edit mode, you can ctrl-click (mac) or right-click (pc) to bring up the contextual menu which will let you view and edit the currently loaded javascript file, or select one of the template files from jsui-library. If the javascript file also has a help file associated with it (as do all of the template objects contained in this patch), the associated help file will be loaded instead of jsui.maxhelp. The inspector lets you set the javascript file, javascript arguments, size, border flag, and disable full scene anti-aliasing (fsaa).

At the present time, mouse position and object redrawing will only be reported correctly in the [jsui](https://docs.cycling74.com/reference/jsui) object if the patching and Presentation mode sizes of the object are the same.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### border[int]: 1

Toggles the drawing of a border around the [jsui](https://docs.cycling74.com/reference/jsui) object. The default is 1 (draw border).

### filename[symbol]: none

The word  filename , followed by a symbol that specifies a pathname, designates the Javascript file to be loaded.

### jsarguments[256 atoms]:

Specifies any arguments to be passed to the Javascript code contained in the [jsui](https://docs.cycling74.com/reference/jsui) object.

### nofsaa[int]: 0

Toggle full screen anti-aliasing

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters).

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### template[symbol]: jsui\_default.js

If no file is explictly loaded by the [jsui](https://docs.cycling74.com/reference/jsui) object (via the filename attribute, for instance), the template file will be loaded into memory and evaluated, and can be used as the starting point for further development. The user will be prompted to save the template to a file when editing, or the external editor is opened.

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

When a file is dragged from the File Browser to a [jsui](https://docs.cycling74.com/reference/jsui) object, the file is loaded and executed.

### autowatch

The word  autowatch , followed by a 1, turns on file watching for the Javascript source file. When file watching is on, the file is recompiled automatically when it is modified. This allows you to use an external editor for your Javascript file. When you save the file, the [jsui](https://docs.cycling74.com/reference/jsui) object will notice. autowatch 0 turns off file watching.

Arguments:

- flag
  [int]

### compile

Recompiles the current file. If followed by a symbol, will load, compile, and set the currently loaded Javascript file to be the file specified by the symbol argument.

Arguments:

- filename
  [symbol]

### delprop

The word  delprop , followed by a name, deletes the named property.

Arguments:

- property
  [symbol]

### editfontsize

Changes the font-size of the text used in the editing window which contains the object's Javascript source file.

Arguments:

- size
  [int]

### getprop

The word  getprop , followed by a name, outputs the value of the property name stored in the object out the left outlet.

Arguments:

- property
  [symbol]

### jsargs

Sets the current Javascript arguments to any following message arguments.

Arguments:

- arguments
  [list]

### jsfile

The word  jsfile , followed by a symbol , loads, compiles, and sets the currently loaded Javascript file to be the Javascript file specified by the symbol argument.

Arguments:

- filename
  [symbol]

### loadbang

Call the loadbang function

### (mouse)

Double-clicking on a [js](https://docs.cycling74.com/reference/js) object opens a text window where the object's Javascript source file can be edited. When the text window is saved, the text is compiled as the object's script.

### open

Opens the text window where the object's Javascript source file can be edited.

### setprop

The word  setprop , followed by name and one or more names or numbers, sets the named property to what follows the name. For example, after sending setprop  xyz 1 2 3  to a js object. the xyz property would have a value of the list 1 2 3.

Arguments:

- property and settings
  [list]

### size

The word  size , followed by two int arguments, sets the width and height of the [jsui](https://docs.cycling74.com/reference/jsui) object.

Arguments:

- width
  [int]
- height
  [int]

### statemessage

Allows for the testing of messages passed to functions within the Javascript source file.

Arguments:

- messages
  [list]

### wclose

Closes the text window where the object's Javascript source file is edited.

## Output

### anything

Numbers, lists, or symbols are sent out the jsui object's outlets when the Javascript code executing within the [jsui](https://docs.cycling74.com/reference/jsui) object invokes the outlet function.

## See Also

| Name | Description |
| --- | --- |
| [JavaScript](https://docs.cycling74.com/userguide/javascript) | JavaScript |
| [Custom UI Objects](https://docs.cycling74.com/userguide/custom_ui_objects) | Custom UI Objects |
| [js](https://docs.cycling74.com/reference/js) | Execute Javascript (Legacy Engine) |
| [jstrigger](https://docs.cycling74.com/reference/jstrigger) | Execute Javascript instructions sequentially |
| [mxj](https://docs.cycling74.com/reference/mxj) | Execute Java in Max |

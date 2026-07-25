---
type: max
name: "js"
summary: "Execute Javascript (Legacy Engine)"
signal: false
url: "https://docs.cycling74.com/reference/js/"
package: "Max"
see_also: ["jstrigger", "jsui", "mxj"]
---
# js

Execute Javascript (Legacy Engine)

## Description

Exposes the Javascript language (ECMAScript 5) and some Max specific extensions. The [js](https://docs.cycling74.com/reference/js) object can be instantiated with a javascript filename or with numerical arguments to specify the number of outlets and inlets respectively. The default number of outlets and inlets are both 1.

#### Discussion

Note that this implementation does not include the traditional web browser specific extensions that are often associated with Javascript.

## Arguments

### filename[symbol] optional

Specifies the name of a text file to be used as the Javascript source. If no argument is specified, it will not initially have any Javascript associated with it. You can still open a text window and edit and save the Javascript source, but unless you recreate the object with the saved source filename as an argument, the file will not be used when a patch containing the [js](https://docs.cycling74.com/reference/js) object is loaded.

### inlets-outlets[list] optional

If no filename is present as an argument, the number of inlets and outlets is specified. If one int argument is present, the number of desired outlets is specified. If two int arguments are present, the first number specifies the number of outlets and the second number specifies the number of inlets.

### jsarguments[list] optional

Following the optional filename or number of outlets and inlets, any symbols or numbers can be entered that will be assigned to the Javascript variable jsarguments. jsarguments[0] is the filename entered, and jsarguments[1] is the first typed-in argument following the filename. The Javascript expression jsarguments.length will be one more than the number of typed-in arguments

## Attributes

### annotation\_name[symbol]:

Info View Title

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### template[symbol]: none

If no file is explictly loaded via an argument to the [js](https://docs.cycling74.com/reference/js) object, the template file will be loaded into memory and evaluated, and can be used as the starting point for further development. The user will be prompted to save the template to a file when editing, or the external editor is opened.

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

### autowatch

The message  autowatch , followed by a 1, turns on file watching for the Javascript source file. When file watching is on, the file is recompiled automatically when it is modified. This allows you to use an external editor for your Javascript file. When you save the file, the [js](https://docs.cycling74.com/reference/js) object will notice.  autowatch 0  turns off file watching.

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

- propertyname
  [symbol]

### editfontsize

Changes the font-size of the text used in the editing window which contains the object's Javascript source file.

Arguments:

- font-size
  [int]

### getprop

The word  getprop , followed by a name, outputs the value of the property name stored in the object out the left outlet.

Arguments:

- property
  [symbol]

### loadbang

Invokes the function named loadbang if defined. This message is sent when the file is loaded.

### open

Opens the text window where the object's Javascript source file can be edited.

### setprop

The word  setprop , followed by name and one or more names or numbers, sets the named property to what follows the name. For example, after sending setprop  xyz 1 2 3  to a [js](https://docs.cycling74.com/reference/js) object. the xyz property would have a value of the list 1 2 3.

Arguments:

- property
  [symbol]
- values
  [list]

### statemessage

Allows for the testing of messages passed to functions within the Javascript source file.

Arguments:

- messages
  [list]

### wclose

Closes the text window where the object's Javascript source file is edited.

## Methods and Inlets

###

All messages listed can be sent to any inlet of the [js](https://docs.cycling74.com/reference/js) object. The Javascript inlet property reveals the inlet that received the message that invoked the currently running script.

## Output

### anything

Numbers, lists, or symbols are sent out the [js](https://docs.cycling74.com/reference/js) object's outlets when the Javascript code executing within the [js](https://docs.cycling74.com/reference/js) object invokes the outlet function.

## See Also

| Name | Description |
| --- | --- |
| [jstrigger](https://docs.cycling74.com/reference/jstrigger) | Execute Javascript instructions sequentially |
| [jsui](https://docs.cycling74.com/reference/jsui) | Javascript user interfaces and graphics (Legacy Engine) |
| [mxj](https://docs.cycling74.com/reference/mxj) | Execute Java in Max |

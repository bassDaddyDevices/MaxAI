---
type: max
name: "qlist"
summary: "Store a collection of messages"
signal: false
url: "https://docs.cycling74.com/reference/qlist/"
package: "Max"
see_also: ["External Text Editor", "coll", "text"]
---
# qlist

Store a collection of messages

## Description

Stores a collection of timed or untimed "cues" in the form of messages which can be sent either out its outlet or remotely to various receive objects in your patch.

#### Discussion

If you double-click on the object it opens up a text editor where you can enter or edit the [qlist](https://docs.cycling74.com/reference/qlist) object's cue-list. Each line of the cue-list is a message ending in a semicolon. Lines do not need to be numbered or indexed (as with the [coll](https://docs.cycling74.com/reference/coll) object), but there are a few idiosyncrasies which need to be discussed here.

There are three different message formats for lines in a cue-list: lines which contain only numerical values (i.e an  int ,  float  or  list ), lines which begin with a  symbol  (i.e. message name and arguments), and lines beginning with a numerical value (or  list  of numerical values) and subsequently having a  symbol  (message name) with arguments. These three types of lines are treated differently by [qlist](https://docs.cycling74.com/reference/qlist). Lines containing only numerical values are sent out the [qlist](https://docs.cycling74.com/reference/qlist) object's left outlet, and lines beginning with a symbol are sent remotely to a [receive](https://docs.cycling74.com/reference/receive) object named with that symbol. (Note that this is similar to remotely sending messages from a message box - contents before the first semicolon are sent out the outlet, and messages after each semicolon are sent remotely to named [receive](https://docs.cycling74.com/reference/receive) objects.) Lines which begin with a numerical value (or values) but have a message and arguments after the number(s), are treated as two separate lines - the first part (all numerical) is sent out the left outlet, and the second (message) part is remotely sent to a [receive](https://docs.cycling74.com/reference/receive) object.

When [qlist](https://docs.cycling74.com/reference/qlist) receives a command (such as the  next  message) to output data, it will send all lines beginning with symbols to the corresponding receive objects, and stop after it has output the numerical contents of a line beginning with a number. The qlist object also has an internal timer which it uses for automatic sequencing. Sending a  bang  message to a [qlist](https://docs.cycling74.com/reference/qlist) will cause it to play the entire contents of the cue-list. When a line begins with a number, qlist will use that number as a delay time in milliseconds before it continues outputting or sending the remaining cues.

The [qlist](https://docs.cycling74.com/reference/qlist) objects saves its cue-list with the patcher.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sending a  bang  to qlist triggers automatic-playback of the entire cue list. It begins sending messages from the first line, until a line begins with a number, at which point [qlist](https://docs.cycling74.com/reference/qlist) will use that number as a delay time in milliseconds before continuing to send the remaining messages. A [qlist](https://docs.cycling74.com/reference/qlist) that is playing automatically can be stopped using the  stop  message.

### append

The word  append  followed by any arguments will append those arguments to the last entry in the [qlist](https://docs.cycling74.com/reference/qlist) object's cue-list. To append a semicolon, it must be preceded by a backslash character.

Arguments:

- message
  [list]

### clear

The word  clear  will clear the contents of the cue-list. This is the same as sending a  set  message with no arguments.

### (mouse)

Double-clicking with the mouse on the [qlist](https://docs.cycling74.com/reference/qlist) object displays its contents as text in an editing window which the user can modify.

### fwd

The word  fwd , followed by a number, is used to "fast forward" through a given number of lines, without remotely sending messages to named receive objects. For example,  fwd 2  will output the next two lines in the cue-list which bengin with numerical values. Lines beginning with symbols will be ignored.

Arguments:

- lines
  [int]

### insert

The word  insert  followed by any arguments will append those arguments to the [qlist](https://docs.cycling74.com/reference/qlist) object's cue-list as a new entry in the list. To append a semicolon, it must be preceded by a backslash character.

Arguments:

- message
  [list]

### next

The word  next  is used to output the next line in the cue-list. It will remotely send all lines beginning with a symbol, and stop after it encounters and outputs a line beginning with a numerical value. If the word  next  is followed by a non-zero argument, it will ignore lines beginning with symbols and only output the next line beginning with a numerical value.

Arguments:

- ignore-symbols
  [int]

### open

The word  open  will cause the [qlist](https://docs.cycling74.com/reference/qlist) object's text editing window to be opened.

### read

The word  read  will allow you to read a file from disk via a standard Max file opening dialog. If followed by a symbol argument, Max will use the symbol as a filename (or filepath and filename) and try to read a text file with the given name from the disk.

Arguments:

- filename
  [symbol]

### rewind

Move to the beginning of the file

### set

The word  set  can be used to set the contents of a [qlist](https://docs.cycling74.com/reference/qlist) object. It completely clears any previous cue-list contents. Sending a  set  message with no arguments is the same as sending a  clear  message.

Arguments:

- cue-list-contents
  [list]

### stop

The word  stop  can be used to stop a [qlist](https://docs.cycling74.com/reference/qlist) which is in the middle of playback as a result of a  bang  message.

### tempo

The word  tempo , followed by a floating-point numerical value, can be used to allow a [qlist](https://docs.cycling74.com/reference/qlist) to automatically play itself at a faster or slower speed than indicated by the millisecond values stored internally in the cue list. By default the tempo is 1.0, which means the playback tempo is not scaled. A tempo of 0.5 plays back the cue list at half speed, whereas a tempo of 2. plays it back twice as fast.

Arguments:

- tempo-multiplier
  [float]

### wclose

The word  wclose  will cause the [qlist](https://docs.cycling74.com/reference/qlist) object's text editing window to be closed.

### write

The word  write  will allow you to save a file via a standard Max file saving dialog. If followed by a symbol argument, Max will use the symbol as a filename (or filepath and filename) and write a text file with the given name to disk.

Arguments:

- filename
  [symbol]

## Output

### bang

Out middle outlet. A  bang  is sent when a cue list has reached the end, and there are no more lines to send or output.

### bang

Out right outlet. A  bang  is sent when a file has been read successfully from disk.

### int

Out left outlet. The [qlist](https://docs.cycling74.com/reference/qlist) object outputs a numerical value or list of numerical values when a line in the cue list begins with a number. Output is usually in response to a  next  or  fwd  message, but can also be a result of the object's internal timer, when the entire list of cues is being played as the result of a  bang  message.

### list

Out left outlet. The [qlist](https://docs.cycling74.com/reference/qlist) object outputs a numerical value or list of numerical values when a line in the cue list begins with a number. Output is usually in response to a  next  or  fwd  message, but can also be a result of the object's internal timer, when the entire list of cues is being played as the result of a  bang  message.

## See Also

| Name | Description |
| --- | --- |
| [External Text Editor](https://docs.cycling74.com/userguide/external_text_editor) | External Text Editor |
| [coll](https://docs.cycling74.com/reference/coll) | Store and edit a collection of data |
| [text](https://docs.cycling74.com/reference/text) | Format messages as a text file |

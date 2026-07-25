---
type: max
name: "textedit"
summary: "Enter text"
signal: false
url: "https://docs.cycling74.com/reference/textedit/"
package: "Max"
see_also: ["dialog", "jit.cellblock", "text"]
---
# textedit

Enter text

## Description

Provides a user interface within a patcher which can collect typed-in text from the computer-keyboard.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### autoscroll[int]: 1

Toggles autoscrolling in the text display area. The message  autoscroll 1  lets you scroll past the amount of text displayed in the [textedit](https://docs.cycling74.com/reference/textedit) window when the number of lines is set to 1 and the word wrapping is disabled (see the  wordwrap  message) using either the cursor or by clicking and dragging in the [textedit](https://docs.cycling74.com/reference/textedit) window. The default is 0 (autoscroll disabled).

### bangmode[int]: 0

When bangmode is set to "Bang Outputs Typed Text" (0 = default) then the [textedit](https://docs.cycling74.com/reference/textedit) object will output the text currently being typed when banged. When set to "Bang Outputs Entered Text" (1) then the [textedit](https://docs.cycling74.com/reference/textedit) object will output the text previously entered (will wait until text being typed is completed before sending the new value).

Possible values:

0 = 'Bang Outputs Typed Text'

1 = 'Bang Outputs Entered Text'

### bgcolor[4 floats]

Sets the background color of the [textedit](https://docs.cycling74.com/reference/textedit) object in RGBA format.

### border[float]: 2.

Sets the size, in pixels, of the border of the [textedit](https://docs.cycling74.com/reference/textedit) object. The default is 1.

### bordercolor[4 floats]

Sets the border color of the [textedit](https://docs.cycling74.com/reference/textedit) object in RGBA format. The  bordercolor  attribute is mapped to the  elementcolor  style color.

### clickmode[int]: 0

Sets the way that the [textedit](https://docs.cycling74.com/reference/textedit) object responds to mouse clicks in the text display area. The message  clickmode 0  will send an individual character clicked on out the right outlet of the [textedit](https://docs.cycling74.com/reference/textedit) object. Setting the object with the message  clickmode 1  will send the word the user clicks on. The default is  0  (select characters).

Possible values:

0 = 'Output Character'

1 = 'Output Word'

### keymode[int]: 0

Sets the way that the [textedit](https://docs.cycling74.com/reference/textedit) object responds to carriage returns while typing characters into its text display area. The message  keymode 0  allows for text input, and displays carriage returns normally. Setting the object with the message  keymode   1  causes the carriage return to output the entire contents of the current buffer. The default is  0 .

### lines[int]: 0

Sets the number of lines in the [textedit](https://docs.cycling74.com/reference/textedit) object display.

### nosymquotes[int]: 0

Sets whether the [textedit](https://docs.cycling74.com/reference/textedit) object displays quotation marks around a single symbol. Note that once the symbol is sent out of textedit, it will be expressed using quotes in Max. nosymquotes has no effect on contents which contain multiple elements ("foo bar bap" bep  will display the same with nosymquotes enabled and disabled).

### outputmode[int]: 0

Sets whether the [textedit](https://docs.cycling74.com/reference/textedit) object outputs its contents as a message (0) or as a single symbol (1). The message  outputmode 0  causes the output of the object to be sent out as messages. Setting the object with the message  outputmode 1  will output the buffer contents as a single symbol. The default is  0  (output as messages).

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters).

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### readonly[int]: 0

Toggles the read only mode of the [textedit](https://docs.cycling74.com/reference/textedit) object. The message  readonly 1  disables any user entry into the text box. Messages which operate on the current contents of the [textedit](https://docs.cycling74.com/reference/textedit) buffer such as  clear ,  append , or  separator  are not affected by the  readonly  message. The default is  0  (readonly mode off).

### rounded[float]: 8.

Sets the rounding radius, in pixels, for the corners of the [textedit](https://docs.cycling74.com/reference/textedit) object.

### separator[symbol]: nothing

Designates a symbol as a line separator. and treats it as a carriage return when the contents of the buffer are output. If the buffer contains the text "red green blue" and the object receives the message  separator green , the next  bang  received by [textedit](https://docs.cycling74.com/reference/textedit) will output  red  (carriage return)  blue .

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### tabmode[int]: 1

Toggles the ability to cause the tab key to output the entire contents of the current buffer. The default is 1 (on).

### textcolor[4 floats]

Sets the text color in RGBA format. The  textcolor  attribute is mapped to the  textcolor\_inverse  style color.

### valuemode[int]: 0

When set to 0 (default), [textedit](https://docs.cycling74.com/reference/textedit) will save/restore exactly what is typed into the object, and will output the text as a list of numbers and symbols, even if those symbols are a semicolon (;) or a comma (,). When set to 1, [textedit](https://docs.cycling74.com/reference/textedit) will evaluate the text, as if clicking a [message](https://docs.cycling74.com/reference/message) box, will save that evaluated text as the [textedit](https://docs.cycling74.com/reference/textedit) value, respecting special characters like semicolons and commas. This mode is helpful if you wish to use textedit like a message box, where you can send messages with semicolons, separate messages with commas, etc.

### wordwrap[int]: 1

Sets the way that the [textedit](https://docs.cycling74.com/reference/textedit) object displays messages which are longer than the [textedit](https://docs.cycling74.com/reference/textedit) display area. The message  wordwrap 0  will disable text wrapping on word boundaries in the display area.  wordwrap  is enabled (set to 1) by default.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Outputs the typed or stored contents of the [textedit](https://docs.cycling74.com/reference/textedit) object's buffer.

### int

Sets the contents of the [textedit](https://docs.cycling74.com/reference/textedit) object's buffer while causing no output.

Arguments:

- input
  [int]

### float

Sets the contents of the [textedit](https://docs.cycling74.com/reference/textedit) object's buffer while causing no output.

Arguments:

- input
  [float]

### list

Sets the contents of the [textedit](https://docs.cycling74.com/reference/textedit) object's buffer while causing no output as long as the list is comprised of numbers, otherwise, an error message is displayed.

Arguments:

- input
  [list]

### (mouse)

Clicking with the mouse on the [textedit](https://docs.cycling74.com/reference/textedit) object (when the patcher window is locked) will cause the [textedit](https://docs.cycling74.com/reference/textedit) object to send either the letter or word selected out its right outlet depending on the setting of the click mode (see the  clickmode  message).

### (typing)

When the [textedit](https://docs.cycling74.com/reference/textedit) object is highlighted, typing enters text into the text display area and modifies its buffer, unless the object is set to read-only mode (see the  readonly  message). The ASCII value of the character typed is sent out the middle outlet.

### (drag)

When a file is dragged onto the [textedit](https://docs.cycling74.com/reference/textedit) object, the full file name will be added, replacing any text that was previously typed. Holding down the option/command (Mac), or option/alt (Windows), keys when releasing the mouse will append the file name to the existing text rather than replace it. If the file is in Max's search path, only the file name will be added. If the file is not in Max's search path, the entire file path will be added.

### append

The word  append , followed by a message, will append the message to the [textedit](https://docs.cycling74.com/reference/textedit) object's buffer without causing any output.

Arguments:

- input
  [list]

### clear

Erases the contents of the [textedit](https://docs.cycling74.com/reference/textedit) object's buffer.

### dictionary

The message  dictionary , followed by a valid dictionary name, displays the contents of a "text" key in dictionary in the [textedit](https://docs.cycling74.com/reference/textedit) object, while causing no output. In order to  set  or  append  messages to [textedit](https://docs.cycling74.com/reference/textedit), the dictionary should contain a "mode" : "set" or "mode" : "append" entry.

Arguments:

- dict-name
  [symbol]

### select

Causes all text (if any) to be highlighted and sets the object to be the target of keyboard events if the object is not in read-only mode.

### set

The word  set , followed by any message, sets the contents of the [textedit](https://docs.cycling74.com/reference/textedit) object's buffer while causing no output.

Arguments:

- input
  [list]

## Output

### symbol

Out left outlet: The currently stored contents of the [textedit](https://docs.cycling74.com/reference/textedit) object's buffer preceded by the word  text  are output when the object receives a  bang  message. If the [textedit](https://docs.cycling74.com/reference/textedit) message has been set to enter text on a carriage return using the  keymode 1  message, a carriage return will also output the typed text and the buffer contents.

### symbol

Out middle outlet: The ASCII value of the typed key.

### symbol

Out right outlet: The word or letter in the [textedit](https://docs.cycling74.com/reference/textedit) object's text box that the user has clicked on.

## See Also

| Name | Description |
| --- | --- |
| [dialog](https://docs.cycling74.com/reference/dialog) | Open a dialog box |
| [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) | Edit rows and columns of data |
| [text](https://docs.cycling74.com/reference/text) | Format messages as a text file |

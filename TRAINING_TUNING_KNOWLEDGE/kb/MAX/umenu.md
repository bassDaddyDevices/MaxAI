---
type: max
name: "umenu"
summary: "Pop-up menu"
signal: false
url: "https://docs.cycling74.com/reference/umenu/"
package: "Max"
see_also: ["coll", "fontlist"]
---
# umenu

Pop-up menu

## Description

Displays text as a pop-up menu. Selections can be made manually, or set incoming numbers. Outputs both selection number and selection text.

## Arguments

None.

## Attributes

### align[atom] renamed

Sets the text alignment mode. Alignment modes are:

0 left (the default)

1 center (1)

2 right alignment (2)

### allowdrag[int]: 1 >= 7.0.2

Toggles the ability of using drag & drop from a folder to populate the [umenu](https://docs.cycling74.com/reference/umenu) object (default = 1).

### annotation\_name[symbol]:

Info View Title

### applycolors[int]: 0

When applycolors is on, and menumode is set to "Normal", the background of the drop-down menu will use the bgfillcolor.

### arrow[int]

Toggles the drawing of the down arrow on the [umenu](https://docs.cycling74.com/reference/umenu) object (default = 1).

### autopopulate[int]: 0

Toggles the automatic population of an [umenu](https://docs.cycling74.com/reference/umenu) object with folder contents (default = 0). The automatic population will occur when it receives a valid folder path as the argument to a prefix message, or at patcher load, if a valid prefix is stored with the object. See the prefix, populate, and types message descriptions for more information.

### bgfillcolor[4 floats] >= 7.0.0

Sets the background color of the [umenu](https://docs.cycling74.com/reference/umenu) object in RGBA format.

### blanksym[symbol]: <none>

Symbol To Output For Empty Text

### collection[symbol]: >= 7.0.0

Toggles the automatic population of an [umenu](https://docs.cycling74.com/reference/umenu) object with the contents of a Collections folder (default = 1). The automatic population will occur when the  autopopulate  attribute is enabled.

### color[4 floats] >= 7.0.0

Sets the toggle ON color in RGBA format. When the menumode is set to "Toggle", the color attribute sets the active font color.

### depth[int]: 0

Sets the folder recursion depth used by the [umenu](https://docs.cycling74.com/reference/umenu) object when populating from a valid file path.

### elementcolor[4 floats] >= 7.0.0

Sets the toggle OFF color in RGBA format. When the menumode is set to "Toggle", the elementcolor attribute sets the inactive font color.

### items[atom]

The items attribute, which is only accessible using the [umenu](https://docs.cycling74.com/reference/umenu) object's Inspector, lets you enter the items which you want to appear on the menu by typing into a dialog box. Menu items are separated by by commas (e.g., red, orange, yellow, green).

### labelclick[int]: 0

Toggles Label Click mode on or off. In this mode, when the object is in Label mode, you can click in the object's rectangle and the current value of the menu is sent out the left outlet. In addition, the text of the current item is shown underlined.

### menumode[int]: 0

Sets the appearance and behavior of the [umenu](https://docs.cycling74.com/reference/umenu) object. The modes are:

0: Normal mode - the normal pop-up menu (default).

1: Scrolling mode - lets you scroll through the individual menu items by dragging the mouse up or down, displaying one item at a time.

2: Label mode - shows the text of the selected menu item with no border around it, and does not respond to the mouse.

3: Toggle mode - Clicking on the object in mode 3 causes it to alternate between an active and inactive state. When changing from inactive to active, the object sends the message  toggle 1  from its rightmost outlet, and changes to the color set using the color attribute. When changing from active to inactive, the object sends the message  toggle 0  from its rightmost outlet, and changes to the color set using the elementcolor attribute. Whether activating or deactivating, the object also sends its current message from the middle outlet and its current item number from the left outlet.

Control-clicking allows you to change the current state of a [umenu](https://docs.cycling74.com/reference/umenu) object in toggle mode.

Possible values:

0 = 'Normal'

1 = 'Scrolling'

2 = 'Label'

3 = 'Toggle'

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping). (default = 1).

### pattrmode[int]: 0

Sets the method used by the [umenu](https://docs.cycling74.com/reference/umenu) object object to report its internal state to the pattr object. When the argument is 0 (default), the [umenu](https://docs.cycling74.com/reference/umenu) object reports its internal state by number (e.g. item 3 of the list of items). When the argument is 1, the [umenu](https://docs.cycling74.com/reference/umenu) object reports its internal state by symbol (e.g. item 'carrots' of the list of items).

### prefix[symbol]:

Sets a menu-wide prefix, which can be concatenated or prepended to all menu item text before output. If the prefix is a valid folder path, the populate and types messages can be used to automatically fill the [umenu](https://docs.cycling74.com/reference/umenu) object with a list of files in the folder. See the entries for those messages for more information. Sending a prefix message without any argument clears the currently stored prefix.

### prefix\_mode[int]: 0

Sets the output behavior of the prefix mode. The modes are:

0: concatenate mode; the prefix is added to the front of the outgoing message without a space.

1: prepend mode; the prefix is added to the front of the outgoing message list as a discrete symbol.

2: ignore mode; the prefix is not used for output.

Possible values:

0 = 'Concatenate'

1 = 'Prepend'

2 = 'Ignore'

### showdotfiles[int]: 0

Toggles the display of files whose names begin with a dot (.). The default is off.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### textcolor[4 floats]

Sets the text color of the [umenu](https://docs.cycling74.com/reference/umenu) object in RGBA format. The  textcolor  attribute is mapped to the  textcolor\_inverse  style color.

### truncate[int]: 1

Toggles the location of the truncation of text in the [umenu](https://docs.cycling74.com/reference/umenu) object when the text is too long. The default is 1 (truncate the end of the text on the right-hand side). A value of 2 will cause the text to truncate in the middle in the same manner as the textbutton object.

Possible values:

0 = 'Truncation full words'

1 = 'Truncate from the right'

2 = 'Truncate from the middle'

### types[symbol]

Sets a file type filter for use by the  populate  message. Up to 64 file types or file extensions (beginning with '.') may be entered as a list. By default, no file types are filtered. For a list of valid four-letter filetype codes, see the [file types](https://docs.cycling74.com/userguide/filetypes) Guide.

### underline[int]: 0

Toggles the underlining of text in the [umenu](https://docs.cycling74.com/reference/umenu) object. The default is 0 (no underlining).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends out the currently displayed menu item.

### int

The number specifies a menu item to be sent out, and causes [umenu](https://docs.cycling74.com/reference/umenu) to display that item. The items are numbered starting at 0. A menu item can also be chosen from a umenu with the mouse, as with any pop-up menu.

Arguments:

- index
  [int]

### float

Converted to  int .

Arguments:

- index
  [float]

### (drag)

When a file folder is dragged from the Max File Browser to a [umenu](https://docs.cycling74.com/reference/umenu) object, the folder's contents will be loaded into as menu choices.

When a file folder is dragged from the Max File Browser to a blank space in an unlocked patcher window, a [umenu](https://docs.cycling74.com/reference/umenu) object containing the folder's contents loaded will be created.

### append

The word  append , followed by any message, appends that message as the new last item in the menu.

Arguments:

- message
  [list]

### checkitem

The word  checkitem , followed by an item number and 1 or 0, places (1) or removes (0) a check mark next to the item number.

Arguments:

- index
  [int]
- checked
  [int]

### clear

Removes all items from the [umenu](https://docs.cycling74.com/reference/umenu).

### clearchecks

The word  clearchecks  removes check marks for all items.

### count

Sends the number of items in the [umenu](https://docs.cycling74.com/reference/umenu) out the right outlet, preceded by the word  count .

### delete

The word  delete , followed by one or more numbers that correspond to items in the list, deletes the item or items from the [umenu](https://docs.cycling74.com/reference/umenu).

Arguments:

- indices
  [list]

### dictionary

The word  dictionary , followed by a dictionary name, will set the menu items for [umenu](https://docs.cycling74.com/reference/umenu). You can also attach the first outlet of a [dict](https://docs.cycling74.com/reference/dict) object to the first inlet of [umenu](https://docs.cycling74.com/reference/umenu). In order for this to work, the dictionary needs to include an "items" entry. For example, the following dictionary entry will populate [umenu](https://docs.cycling74.com/reference/umenu) with the items "hank, carol, andreas, roland":

"items" : [ "hank", "carol", "andreas", "roland" ]

Arguments:

- dict-name
  [symbol]

### dump >= 8.0.0

Output is the word 'dump', the item's entry number, and the contents. ex: 'dump 1 one'.

### enableitem

The word  enableitem , followed by a number that specifies a menu item and a 1 or 0, enables or disables the specified item number. Disabled menu items cannot be selected, but their text and item number are sent from the rightmost outlet if the mouse is released while above them, prefixed by the symbols  disabled\_eval  and  disabled\_item , respectively.

Arguments:

- index
  [int]
- enable
  [int]

### gettoggle

Reports the current value of the [umenu](https://docs.cycling74.com/reference/umenu) object's toggle state (1 or 0, for on or off), from the right outlet, preceded by the word  toggle .

### insert

The word  insert , followed by a number and a message, inserts the message at the address specified by the number, incrementing all equal or greater addresses by 1 if necessary.

Arguments:

- index
  [int]
- message
  [list]

### mode

Legacy message. Please use the menumode attribute. The word  mode , followed by a number in the range 1-4, sets the appearance and behavior of the [umenu](https://docs.cycling74.com/reference/umenu) object. The normal pop-up menu style is 1 (the default). Scrolling mode (2) lets you scroll through the individual menu items by dragging the mouse up or down, displaying one item at a time. Label mode (3) shows the text of the selected menu item with no border around it, and does not respond to the mouse. Toggle mode (4) sets a button style. Clicking on the object in mode 3 causes it to alternate between an active and inactive state. When changing from inactive to active, the object sends the message  toggle 1  from its rightmost outlet. When changing from active to inactive, the object sends the message  toggle 0  from its rightmost outlet, and changes to the color set using the  bgcolor  attribute. Whether activating or deactivating, the object also sends its current message from the middle outlet and its current item number from the left outlet.

Arguments:

- display
  [int]

### (mouse)

Clicking with the mouse lets you select a menu item to be sent out, and causes [umenu](https://docs.cycling74.com/reference/umenu) to display that item.

### next

Selects the next menu item and causes the [umenu](https://docs.cycling74.com/reference/umenu) object to display that item. This message will ignore disabled or separator menu items.

### populate

If the [umenu](https://docs.cycling74.com/reference/umenu) object has a valid folder path as its prefix, the  populate  message will cause the menu to re-populate its items list, based on the current contents of the specified path (and filtered by the types list). After population is complete, the number of items added to the [umenu](https://docs.cycling74.com/reference/umenu) object will be output from the right outlet, preceded by the word  populate .

### prev

Selects the previous menu item and causes the [umenu](https://docs.cycling74.com/reference/umenu) object to display that item. This message will ignore disabled or separator menu items.

### set

The word  set , followed by a number or symbol, specifies a menu item to be displayed by [umenu](https://docs.cycling74.com/reference/umenu), but does not send it out the outlet. If the set argument is a symbol,  set  searches for a menu item which begins with the symbol.

Arguments:

- item
  [list]

### setcheck

(Macintosh only) The word  setcheck , followed by a number that specifies the decimal representation of a UTF-8 character (e.g. 8226 for a bullet or 62 for a greater than symbol), sets the character used to be the check mark. The word  setcheck  with no argument specifies the default square root checkbox.

Arguments:

- character
  [int]

### setitem

The word  setitem , followed by an item number and any message, sets the specified menu item to that message.

Arguments:

- index
  [int]
- message
  [list]

### setrgb

The word  setrgb , followed by six numbers between 0 and 255 that specify RGB values, uses the first three numbers to set the foreground (text) color and the second three numbers to set the background (fill) color.

Arguments:

- fore-red
  [int]
- fore-green
  [int]
- fore-blue
  [int]
- back-red
  [int]
- back-green
  [int]
- back-blue
  [int]

### setsymbol

The word  setsymbol , followed by a message, specifies a menu item to be displayed by name without triggering any output.

Arguments:

- menu item
  [symbol]

### settoggle

The word  settoggle , followed by a one or zero, sets the [umenu](https://docs.cycling74.com/reference/umenu) object to the specified state if it is in toggle mode and performs output as if the object were clicked on (the symbol  toggle , followed by a zero or one, indicating the toggle state). Without an argument, the message simply toggles the object's state and triggers output.

Arguments:

- state
  [int]

### showchecked

This message operates as follows. If the currently displayed item is checked, do nothing. Otherwise, starting at the first item in the menu, find one that is checked and set the menu to display that item. If there isn't one, do nothing.

### symbol

Identical to the  set  message with a symbol argument, except that the found item number is sent out (and the text of the item is sent out the right outlet, if the Evaluate Item Text feature is enabled).

Arguments:

- item
  [symbol]

### toggle

The word  toggle , followed by a one or zero, sets the [umenu](https://docs.cycling74.com/reference/umenu) object to the specified state if it is in toggle mode and performs output as if the object were clicked on (the symbol  toggle , followed by a zero or one, indicating the toggle state). Without an argument, the message simply toggles the object's state and triggers output.

Arguments:

- state
  [int]

## Output

### anything

Out middle outlet: The text of the selected menu item is sent out as a message.

Out right outlet: The  count ,  gettoggle , and  populate , messages will cause status messages to be sent out the right outlet.

### int

Out left outlet: The number of the selected menu item is sent out. Menu items are numbered beginning with 0.

## Connections

### preset

Connecting the left outlet of [umenu](https://docs.cycling74.com/reference/umenu) to the inlet of a [preset](https://docs.cycling74.com/reference/preset) object establishes a two-way connection where [umenu](https://docs.cycling74.com/reference/umenu) displays the current set of presets and acts as a front end for selecting presets by number and/or name.

## See Also

| Name | Description |
| --- | --- |
| [coll](https://docs.cycling74.com/reference/coll) | Store and edit a collection of data |
| [fontlist](https://docs.cycling74.com/reference/fontlist) | List system fonts |

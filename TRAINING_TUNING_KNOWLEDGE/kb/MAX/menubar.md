---
type: max
name: "menubar"
summary: "Put up a custom menu bar"
signal: false
url: "https://docs.cycling74.com/reference/menubar/"
package: "Max"
see_also: ["umenu"]
---
# menubar

Put up a custom menu bar

## Description

The [menubar](https://docs.cycling74.com/reference/menubar) object provides control over the menu bar. It allows your patch to put up its own menus, and add items to standard File and Edit menus. When a menu item is chosen, the item number is sent out the outlet corresponding to the menu containing the item.

#### Discussion

You configure the [menubar](https://docs.cycling74.com/reference/menubar) by writing a script in a text editor window available by double-clicking on the object in a locked patcher.

When you close the script window and confirm saving the changes, the script file is interpreted. If there are no errors, the customized menu bar will be ready for use when menubar receives a nonzero number in its inlet.

Each message should be preceded by  **#X**  and end with a semicolon (**;** ).

Here is an example menubar script:

  **#X about About Note Algorithms…;

#X closeitem;

#X menutitle 5 Algorithm;

#X item 5 1 Transpose;

#X item 5 2 Invert;

#X item 5 3 Randomize;

#X end;**

Note that we suggest capitalizing each letter in a menu item to maintain a consistent style with other items in the menu.

## Arguments

### display and behavior[int] optional

The argument sets the number of menus in the object's menu bar. If present, it must be at least 5 (one additional menu). The four default menus, which are always present, are File, Edit, Windows., and Help. On Macintosh, the Standard System Menu with the Apple icon and the Max application menu will appear to the left of the other menus.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

A non-zero number displays the [menubar](https://docs.cycling74.com/reference/menubar) object's menus, 0 restores the previous contents of the menu bar (either the Max menus or the menus of another [menubar](https://docs.cycling74.com/reference/menubar) object).

Arguments:

- show-menus-flag (0 or non-zero)
  [int]

### about

This is a script message (see above) used to modify standard menus, and is the first item to appear in a script. It takes the following arguments:

• Text of the first menu item (i.e. About My Program…).

On the Macintosh the About item appears as the first item in the application menu (Max menu). On Windows, it appears as the first item in the Help menu. The message apple may be used optionally for compatibility with older Macintosh versions of Max.

Arguments:

- text of first menu item
  [list]

### append

The  append  message adds an item to a menu previously defined in the [menubar](https://docs.cycling74.com/reference/menubar) object's script with the  menutitle  message. The arguments are as follows:

• Menu number

• Item number

• Text of item

• metacharacters (optional, see  item  message for details)

If the menus for the object are currently showing, the item will be usable in the menu immediately. If it is not showing, the item will be included in the specified menu when the menus are showing next. After returing to the regular Max menus, any items added to the [menubar](https://docs.cycling74.com/reference/menubar) object's menus with the  append  message will not be shown again (unless you send another  append  message), and are not saved in the object's script.

Arguments:

- menu number, item number, text
  [list]

### appendpermanent

The  appendpermanent  message adds an item to a menu previously defined in the [menubar](https://docs.cycling74.com/reference/menubar) object's script with the  menutitle  message. The arguments are as follows:

• Menu number

• Item number

• Text of item

• metacharacters (optional, see  item  message for details)

If the menus for the object are currently showing, the item will be usable in the menu immediately. If it is not showing, the item will be included in the specified menu when the menus are showing next. Items will be shown for the lifetime of the [menubar](https://docs.cycling74.com/reference/menubar) object are added to the object's script.

Arguments:

- menu number, item number, text
  [list]

### apple

This is a script message (see above) used to modify standard menus, and, when used, is the first item to appear in a script. It takes the following arguments:

• Text of the first menu item (i.e. About My Program…).

On the Macintosh the About item appears as the first item in the application menu (Max menu). On Windows, it appears as the first item in the Help menu. This message may be used optionally for compatibility with older Macintosh versions of Max.

Arguments:

- text of first menu item
  [list]

### checkitem

Followed by a menu number, an item number, and a code 0 or 1,  checkitem  puts a check before the specified item if the code is 1, otherwise it removes the check.

Arguments:

- checkitem
  [list]

### closeitem

This is a script message (see above) used to modify standard menus. The  closeitem  message takes an optional argument of 0 or 1. If "closeitem", "closeitem 1", or no message at all is entered in the script, the Close item will appear in the File menu for closing the active window. If "closeitem 0" is entered in the script, the Close item will be disabled in the File menu.

### (mouse)

Double-clicking on the [menubar](https://docs.cycling74.com/reference/menubar) object in a locked patcher will open a text editor window where you can insert a script to configure the menubar's appearance and behavior.

### edit

This is a script message (see above) used to modify standard menus. It takes the following arguments:

• Item number to output

• Text of item to add to edit menu

The  edit  message inserts items into the standard Edit menu after the Clear item and before the Overdrive and Resume items (which are moved into the Edit menu when menubar is activated). A blank line separates the custom inserted items from the default items. Each item has a number associated with it which is sent out the third outlet of menubar when the item is chosen. The order in which your additional items appear in the Edit menu is determined by their order in the script, not by the (arbitrary) number associated with each item.

Arguments:

- item number, text
  [list]

### enableitem

Followed by a menu number, an item number, and a code 0 or 1,  enableitem  enables the specified item if the code is 1, otherwise it disables (and grays out) the item.

Arguments:

- menu-number, item-number, and enable/disable-flag (0 or 1)
  [list]

### end

This is a script message (see above) used to complete a script definition. This builds the menus and reports any errors encountered.

### file

This is a script message (see above) used to modify standard menus. It takes the following arguments:

• Item number to output

• Text of item to add to file menu

The  file  message inserts items at the top of the standard File menu (before the  **Midi Setup...**  menu item). Each item has a number associated with it which is sent out the when the item is chosen. The order in which your additional items appear in the File menu is determined by their order in the script, not by the (arbitrary) number associated with each item.

Arguments:

- item number, text
  [list]

### item

This is a script message (see above) used to create new menus and menu items. It takes the following arguments:

• Menu number

• Item number

• Text of item

• metacharacters (optional)

The  item  message adds an item to an additional menu previously defined with a  menutitle  message. The order in which your items appear in the menu is determined by their order in the script, not by the (arbitrary) number associated with each item. The item number argument only specifies the number which is sent out the [menubar](https://docs.cycling74.com/reference/menubar) object’s outlet when the user chooses this item. It’s a good idea to start your item numbers at 1 and list the items in the order you want them to appear in a menu.

Two characters can be used to modify the appearance of a menu item:

 **/** : followed by a character, assigns that character as a Command-key equivalent

 **(**: disables the menu item

These special characters cannot appear as part of the actual item text. For example, the text  On/Off  will appear as  Onff\_O , not as  On/Off .

Arguments:

- menu number, item number, text
  [list]

### markitem

This message is no longer supported.

Arguments:

- menu-number, item-number, and ASCII-code
  [list]

### menutitle

This is a script message (see above) used to create new menus and menu items. It takes the following arguments:

• Menu number (must be at least 5 and must not exceed the number of outlets specified in the argument to the [menubar](https://docs.cycling74.com/reference/menubar) object.

• Name of menu

The  menutitle  message adds a new menu before the Window menu. The first additional menu is number 5. The menu number determines both the order of the additional menu in the menu bar and the outlet it uses when the user chooses its items. A  menutitle  message must appear in the script before any  item  messages that refer to its menu number.

Arguments:

- item number, name of menu
  [list]

### newitem

This is a script message (see above) used to modify standard menus. It takes the following arguments:

• Item number to output.

The  newitem  message followed by a non-zero number directs Max to send the specified number out the [menubar](https://docs.cycling74.com/reference/menubar) object’s File menu outlet when the user chooses the  **New**  command from the File menu, instead of opening a new patcher window. The message  newitem 0  (or the absence of any  newitem  message) causes the  **New**  command to behave normally.

Arguments:

- menu item number
  [int]

### open

This is a script message (see above) used to modify standard menus. It takes the following arguments:

• Item number to output.

The  open  message followed by a non-zero number directs Max to send the specified number out the [menubar](https://docs.cycling74.com/reference/menubar) object’s File menu outlet when the user chooses the  **Open...**  command from the File menu, instead of displaying the Open Document dialog box. The message  open 0  (or the absence of any  open  message) causes the  **Open...**  command to behave normally.

Arguments:

- menu item number
  [int]

### saveas

This is a script message (see above) used to modify standard menus. It takes the following arguments:

• Item number to output.

The  saveas  message followed by a non-zero number directs Max to send the specified number out the [menubar](https://docs.cycling74.com/reference/menubar) object’s File menu outlet when the user chooses  **Save**  or  **Save As...**  from the File menu, instead of performing the standard Save actions. The number sent out the outlet when  **Save**  is chosen will be 1 less than the number sent when  **Save As...**  is chosen. The message  saveas 0  (or the absence of any  saveas  message) causes the  **Save**  and  **Save As...**  commands to behave normally.

Arguments:

- menu item number
  [int]

## See Also

| Name | Description |
| --- | --- |
| [umenu](https://docs.cycling74.com/reference/umenu) | Pop-up menu |

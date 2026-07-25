---
type: max
name: "coll.codebox"
summary: "Store and edit a collection of data"
signal: false
url: "https://docs.cycling74.com/reference/coll.codebox/"
package: "Max"
see_also: ["coll", "dict", "dict.codebox"]
---
# coll.codebox

Store and edit a collection of data

## Description

Allows for the storage, organization, editing, and retrieval of different messages, using a UI object for display and editing.

## Arguments

None.

## Attributes

### bgcolor[4 floats]

Sets the color for the object's background frame.

### editlocked[int]: 0

Allow editing of the codebox text while the patcher is locked.

### embed[int]

Toggles the ability to embed the contents of the text editor with the patcher. Disable to allow for display of changing text contents that will not dirty the patcher, and prompting to save.

### linenumbers[int]: 1

Show lefthand column containing line numbers for non empty lines.

### linenumberwidth[int32]: 20

Set the width of lefthand line number column in pixels.

### margin[int32]: 4

Set the width of the left and righthand margin in pixels

### style[symbol]:

Style

### textcolor[4 floats]

The default textcolor (typically overridden by syntax coloring)

### precision[int]

The number of decimal places for converted floating point values (default = 6).

### name[symbol]

The name of the [coll](https://docs.cycling74.com/reference/coll). Multiple objects with the same name will share the same data. You can also share data using the  refer  message.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The number refers to the address of a message stored in [coll](https://docs.cycling74.com/reference/coll). If a message is stored at that address, the stored message is output. If the stored message is a single symbol, it is always prepended with the word "symbol" when output.

Arguments:

- index
  [int]

### float

The number refers to the address of a message stored in [coll](https://docs.cycling74.com/reference/coll). If a message is stored at that address, the stored message is output. If the stored message is a single symbol, it is always prepended with the word "symbol" when output.

Arguments:

- index
  [float]

### list

The first value is used as the address (the storage location within [coll](https://docs.cycling74.com/reference/coll)) at which to store the remaining items in the list. The address will always be stored as an int.

Arguments:

- index
  [int]
- data
  [list]

### (mouse)

Double-click on the [coll](https://docs.cycling74.com/reference/coll) object to display the contents as text in an editing window. The data can be manually edited within this editor.

Arguments:

- double-click
  []

### anything

See the  symbol  listing.

Arguments:

- index
  [any]

### append

The  append  message creates a new item associated with an index that is one larger than the highest current index. For example, if the [coll](https://docs.cycling74.com/reference/coll) is empty,  append xyz  will add an item  xyz  associated with the index 0.  append xyz  a second time will add another item  xyz  associated with the index 1.

Arguments:

- data
  [list]

### assoc

Associates a symbol with the numeric address, provided that the number address already exists. After association, any reference to that symbol will be interpreted as a reference to the number address. Each number address can have only one symbol associated with it.

Arguments:

- address name
  [symbol]
- data index
  [int]

### bang

See the  next  listing.

### symbol

Retrieves a message stored at the address named by the symbol. If no address is associated with the symbol, no output is produced. If the stored message is a single symbol, it is always prepended with the word "symbol" when output.

Arguments:

- index
  [symbol]

### clear

Clear all data

### deassoc

Removes the association between a symbol and the number address. The symbol will no longer have any meaning to [coll](https://docs.cycling74.com/reference/coll).

Arguments:

- address name
  [symbol]
- data index
  [int]

### delete

Removes the data at the address provided. If the specified address is numeric, all higher numbered addresses are decremented by 1.

Arguments:

- index
  [any]

### dump

Sends all of the stored addresses out the 2nd outlet and all of the stored messages out the 1st outlet, in the order in which they are stored. A  bang  is sent out the 4th outlet when the dump is completed.

### end

Sets the pointer (as used by the  goto ,  next , and  prev  messages) to the last address.

### filetype

Sets the file types which can be read and written into the [coll](https://docs.cycling74.com/reference/coll) object. The message  filetype  with no arguments restores the default file behavior.

Arguments:

- filetype
  [symbol]

### flags

Sets the flags used to save its contents within the patch that contains it. The message  flags 1 0  notifies the object to save its contents as part of the patcher file. The message  flags 0 0  causes the contents not to be saved.

Arguments:

- save-setting
  [int]
- unused
  [int]

### goto

Sets the pointer (as used by the  goto ,  next , and  prev  messages) at a specific address, but does not trigger output. If the specified address does not exist, the pointer is set at the beginning of the collection. Data will be output in response to a subsequent  bang ,  next , or  prev  message.

Arguments:

- index
  [list]

### insert

Inserts the message at the address specified by the number, incrementing all equal or greater addresses by 1 if necessary.

Arguments:

- index
  [int]
- data
  [list]

### insert2

See the  insert  listing.

Arguments:

- index
  [int]
- data
  [list]

### length

Counts the number of entries contained in the [coll](https://docs.cycling74.com/reference/coll) and sends the number out the 1st outlet.

### max

Gets the highest value in any entry. An optional integer argument (defaults to '1') specifies an element position to use.

Arguments:

- element
  [int]

### merge

Appends data at the end of the data found at the specified index. If the address does not yet exist, it is created.

Arguments:

- index
  [int]
- data
  [list]

### min

Gets the lowest value in any entry. An optional integer argument (defaults to '1') specifies an element position to use.

Arguments:

- element
  [int]

### next

Sends the address and data stored at the current address, then sets the pointer to the next address. If the pointer is currently at the last address in the collection, it wraps around to the first address. If the address is a symbol rather than a number,  0  is sent out the second outlet.

### nstore

Stores the message at the specified number address, with the specified symbol associated. This has the same effect as storing the message at an int address, then using the  assoc  message to associate a symbol with that number.

Arguments:

- index
  [int]
- association
  [symbol]
- data
  [list]

### nsub

Replaces a data element with a new value. As an example,  nsub 2 4 7  replaces the fourth element of address 2 with the value 7. Number values and symbols can both be substituted in this manner.

Arguments:

- index
  [int]
- position
  [int]
- data
  [any]

### nth

Returns the data element found at a specific position in the stored list and send it out the first outlet. As an example,  nth 75 2  will output the second item in the list stored at address 75.

Arguments:

- index
  [int]
- position
  [int]

### open

Opens a data editing window for the current data and bring it into focus.

### prev

Sends the address and data stored at the current address, then sets the pointer to the previous address. If the pointer is currently at the first address in the collection, it wraps around to the last address. If the address is a symbol rather than a number,  0  is sent out the second outlet.

### read

With no arguments,  read  puts up a standard Open Document dialog box to choose a file to load. If an argument is provided, the named file is loaded.

Arguments:

- filename
  [symbol]

### readagain

Loads the contents of the most recently read file. If no prior file load has occurred, the request is treated like a  read  message.

### refer

Changes the reference to the data in another named [coll](https://docs.cycling74.com/reference/coll) object. Changes to the data stored in any referenced [coll](https://docs.cycling74.com/reference/coll) will be shared by all other objects with the same name.

Arguments:

- object name
  [symbol]

### remove

Removes that address and its contents from the collection.

Arguments:

- index
  [any]

### renumber

Renumbers data entries as consecutive and in increasing order. The optional argument specifies the starting number address for the data.

Arguments:

- data index
  [int]

### renumber2

Increment indices by one

Arguments:

- data index
  [int]

### separate

Increments the numerical indices for all data whose index is greater than the provided. This creates an open 'slot' for a subsequent add.

Arguments:

- data index
  [int]

### sort

Sorts the data into a specified order. If the first argument is -1 , the items are sorted in ascending order. If the first argument is  1 , the items are sorted in descending order.

The second argument specifies what data is used to sort the contents. If the second argument is -1 , the index (either number or symbol) associated with the data is used. If the second argument is not present or is  0 , the first item in the data is used. If the second argument is  1  or greater, that data elements is used for the sorting order.

Arguments:

- sort order (-1 or 1)
  [int]
- entry (-1, 0, or 1)
  [int]

### start

Sets the pointer (used by the  goto ,  next , and  prev  messages) to the first address in the [coll](https://docs.cycling74.com/reference/coll).

### store

Stores the message at an address named by the provided symbol. As an example,  store triad 0 4 7  will store  0 4 7  at an address named  triad .

Arguments:

- index
  [symbol]
- data
  [list]

### sub

Same as  nsub , except that the message stored at the specified address is sent out after the item has been substituted.

Arguments:

- index
  [int]
- position
  [int]
- data
  [list]

### subsym

Changes the symbol associated with data. The first argument is the new symbol to use, the second argument is the symbol associator to replace.

Arguments:

- new name
  [symbol]
- old name
  [symbol]

### swap

Exchanges the indices associated with two addresses. The data is unchanged, but the indexes that they use are swapped.

Arguments:

- index
  [int]
- index
  [int]

### wclose

Close the data editing window

### write

With no arguments,  write  puts up a standard Open Document dialog box to choose a filename to write. If an argument is provided, the name is used as a filename for storage.

Arguments:

- filename
  [symbol]

### writeagain

Saves the contents to the most recently written file. If no prior file write has occurred, the request is treated like a  write  message.

## See Also

| Name | Description |
| --- | --- |
| [coll](https://docs.cycling74.com/reference/coll) | Store and edit a collection of data |
| [dict](https://docs.cycling74.com/reference/dict) | Create and access dictionaries |
| [dict.codebox](https://docs.cycling74.com/reference/dict.codebox) | Create and access dictionaries |

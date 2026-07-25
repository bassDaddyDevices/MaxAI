---
type: max
name: "list.group"
summary: "Process lists in many ways"
signal: false
url: "https://docs.cycling74.com/reference/list.group/"
package: "Max"
see_also: ["fromsymbol", "join", "maximum", "minimum", "mean", "pack", "regexp", "swap", "thresh", "tosymbol", "unjoin", "unpack"]
---
# list.group

Process lists in many ways

## Description

Performs several kinds of list processing functions. You set the function with an argument, and can change the function performed with the  mode  message. The behavior of the [zl](https://docs.cycling74.com/reference/zl) object's inlets and outlets vary according to the selected mode.

## Arguments

### length[int] optional

An optional integer arg sets the maximum list length for all modes of operation for the [zl](https://docs.cycling74.com/reference/zl) object. The default list length is 256, and the maximum list length limit is 32,767.

### mode[symbol] optional

The words  change ,  compare ,  delace ,  ecils ,  group ,  indexmap ,  iter ,  join ,  lace ,  len ,  lookup ,  median ,  mth ,  nth ,  queue ,  reg ,  rev ,  rot ,  scramble ,  sect ,  slice ,  sort ,  stack ,  stream ,  sub ,  sum ,  swap ,  thin ,  union , or  unique  are used as optional arguments to set the mode of the [zl](https://docs.cycling74.com/reference/zl) object. See the  mode  message for descriptions of the different modes.

### function-int[int] optional

For the following modes of operation, an additional number may be used as an argument to specify the functionality of a given mode:

 ecils : Specifies the number of list items beginning at the end of the input list to be sent out the right outlet of the [zl](https://docs.cycling74.com/reference/zl) object.

 group : Specifies a number of the most recently stored list items to be output.

 iter : The currently stored contents of the [zl](https://docs.cycling74.com/reference/zl) object will be output as a series of lists consisting of the number of items specified by this value.

 mth : Specifies the order of an element in the input list (using 0 as the index of the first element of the list) and outputs that element of the list.

 nth : Specifies the order of an element in the input list in numerical form (i.e., 1="the" index of the first element of the list) and outputs that element of the list.

 rot : Specifies the number of places to rotate the currently stored list. Positive values for rotate the list right, and negative values rotate left.

 slice : Specifies the number of list items to be sent out the left outlet of the [zl](https://docs.cycling74.com/reference/zl) object.

 stream : Specifies the length of the output list. The object will collect this number of items input through the left inlet. After the list-length is complete, the list will be output the left outlet. A  1  or a  0  will be output from the right outlet depending on whether the list-length has been defined or not. A  1  signifies that the list-length has been defined and that the object is now collecting the stream.

### function-list[list] optional

For the following modes of operation, an additional list may be used as an argument to specify the functionality of a given mode:

 filter : The object will accept a list in as an argument. A list in the left inlet will cause the object to immediately output a version of the input-list that does  *not*  contain the elements specified in the argument list. The object will also output a list of the indices of all filtered list items. A list in the right inlet will set the list of items to be filtered without causing output.

 lookup : The object will accept a list in as an argument. A number in the right inlet will cause the object to output the element located at the list index specified by the number received in the left inlet. (if  6.2 3 5.6 5.3 3.8 2.4  is received in the right inlet, a  2  received in the left inlet will cause the object to output  5.6  out of the left output).

 reg : In this mode, the object functions as a register that holds a list. The object will accept a list as an argument to set the initial stored content of the object.

## Attributes

### fuzzy[atom]: 0.

Fuzzy floating-point comparison epsilon

### zlmaxsize[atom\_long]

Set the maximum list length for all modes of operation for the [zl](https://docs.cycling74.com/reference/zl) object. This is the equivalent to using an argument to the object, but allows the list length to be changed dynamically. The default list length is 256, and the maximum list length limit is 32,767.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: A bang message will output the most recent list or value calculated. Many modes of the  zl  object take inputs through their right inlet which will only set the input without triggering output. In these cases, a subsequent bang received in the left inlet will trigger the output.

### int

In right inlet: Some modes of [zl](https://docs.cycling74.com/reference/zl) accept an int in the right inlet and behave as follows:

 ecils : Specifies the number of list items beginning at the end of the input list to be sent out the right outlet of the [zl](https://docs.cycling74.com/reference/zl) object. Any remaining list elements beyond the number specified by this inlet are sent out the left outlet of the object.

 group : Specifies a number of the most recently stored list items to be output.

 iter : The currently stored contents of the [zl](https://docs.cycling74.com/reference/zl) object will be output as a series of lists consisting of the number of items specified by this value. The final list output may be shorter than the number, depending on the stored contents of the object.

 mth : Specifies the order an element in the input list (using 0 as the index of the first element of the list) and outputs that element of the list.

 nth : Specifies the order an element in the input list in numerical form (i.e., 1=the index of the first element of the list) and outputs that element of the list.

 rot : Specifies the number of places to rotate the currently stored list. Positive values for rotate the list right, and negative values rotate left.

 slice : Specifies the number of list items to be sent out the left outlet of the [zl](https://docs.cycling74.com/reference/zl) object. Any remaining list elements beyond the number specified by this inlet are sent out the right outlet of the object.

 sort : Specifies the sorting order.  sort -1  sorts the input list in descending order, and the  sort  message with any other value sorts the input list in ascending order.

 stream : Specifies the output list length.

Arguments:

- input
  [int]

### float

Performs the same function as  int  but with floats.

Arguments:

- input
  [float]

### list

In left inlet: The behavior of the [zl](https://docs.cycling74.com/reference/zl) object to lists received in the left inlet varies according to the mode of the object, as described under the  mode  message.

Arguments:

- input
  [list]

### anything

Allows for the recognition of lists that begin with symbols.

Arguments:

- input
  [list]

### mode

The word  mode , followed by one of the symbols  change ,  compare ,  delace ,  ecils ,  group ,  iter ,  indexmap ,  join ,  lace ,  len ,  lookup ,  median ,  mth ,  nth ,  queue ,  reg ,  rev ,  rot ,  scramble ,  sect ,  slice ,  sort ,  stack ,  stream ,  sub ,  sum ,  swap ,  thin ,  union , or  unique  sets the current mode of the [zl](https://docs.cycling74.com/reference/zl) object. The modes are:

 change : accepts a list in both inlets. A list in the left inlet will trigger output while a list in the right inlet will only set the input without causing output. The object will output the input list only if it is different from the list which was last received. If it is different, the new list is sent out the left outlet along with a  1  out the right outlet. If the list is not different, nothing is sent out the left outlet while a  0  is sent out the right outlet.

 compare : accepts a list in both inlets. A list in the left inlet will trigger output while a list in the right inlet will only set the input without causing output. If the lists in both inlets are the same, a  1  is sent out the left outlet. If the two lists differ, a  0  is sent out the left outlet and a list of the indices for those elements of the lists that differ are sent out the right outlet.

 delace : accepts a list in the left inlet and will output a list out of both outlets which consists of every other element in the input list (if the input list is  6.2 3 5.6 5.3 3.8 2.4  the left output list is  6.2 5.6 3.8  and the right output list is  3 5.3 2.4 ).

 ecils : is used to divide a list into two lists. This mode takes an additional number argument which specifies the size, in elements, of a list. This value can also be specified as an input in the right inlet in this mode. A list received in the left inlet will be split into two lists -- the first list contains the number of items specified by the argument beginning from the end of the list and counting backward toward the first list element, and is sent out the right outlet. Any remaining list elements are sent out the left outlet of the object. Note: Lists are sent out the right outlet first.

 group : takes an additional number argument which specifies the size, in elements, of a list. A list received in the left inlet will be stored and the length of the list is compared to a number received in the right inlet or an argument to the [zl](https://docs.cycling74.com/reference/zl) object. If the list of items is longer than the number specified by the right inlet or argument, a list of items of the length specified by the number is sent out the left outlet. Any remaining symbols or list elements are stored.

 indexmap : The object will accept a list in as an argument. A list of numbers (0-based) in the right inlet will indicate indices of list elements to use to generate a new list. For instance, if  0 0 0 1 3 5  is received in the right inlet,  A B C D E F G H  received in the left inlet will cause the object to output  A A A B D F  from the left output). An index less than 0 or greater than/equal to the number of elements of the incoming list will be clamped to 0 and (number of elements - 1).

 iter : takes an additional number argument which specifies the size, in elements, of a list. A symbol list of items received in the left inlet will be stored and sent out the left outlet as a series of lists consisting of the number of items specified by argument or by a number received in the right inlet. The final list output may be shorter than the specified number of items, depending on the stored contents of the [zl](https://docs.cycling74.com/reference/zl) object.

 join : accepts a list in both inlets and sends a list out the left outlet which is the combination of both input lists.

 lace : accepts a list in both inlets and will output a list out the left outlet populated with items from both input lists interlaced with each other (if the left input list is  6.2 5.6 3.8  and the right input list is  3 5.3 2.4  the output list is  6.2 3 5.6 5.3 3.8 2.4 ).

 len : accepts a list in the left inlet and outputs number of elements in the list out the left outlet.

 lookup : accepts a list in the right inlet. Following receipt of this list, a number in the left inlet will cause the object to output the element located at the list index specified by the number received in the left inlet.(if  6.2 3 5.6 5.3 3.8 2.4  is received in the right inlet, a  2  received in the left inlet will cause the object to output  5.6  out of the left output).

 median : accepts a list of numbers and will output the median of those numbers.

 mth : works exactly like  mode nth  mode, except the list index numbering begins with 0 as opposed to 1.

 nth : accepts a list in the left inlet and outputs the nth element of the list out the left outlet.

 queue : functions as a first-in-first-out (FIFO) stack; it outputs the oldest message received.

 reg : functions as a register that holds a list. A list received in the left inlet is sent out the left outlet immediately. A list received in the right inlet is stored. A  bang  sends the stored list out the left outlet.

 rev : accepts a list in its left inlet and sends the list out the left outlet in reverse order.

 rot : is used to rotate the contents of a list. An additional argument is used to specify the number of places a list item is to be rotated - positive numbers rotate the list to the right, and negative numbers rotate left. This value can also be specified as an input in the right inlet in this mode.

 scramble : accepts a list in either inlet. A list in the left inlet will cause the object to immediately output a scrambled version of the input-list (a list containing the same elements as the input-list but in a randomized order). A list in the right inlet will set the input-list without causing output (a subsequent  bang  received in the left inlet will cause a randomized version of the right-input list to be sent out the object's left outlet).

 sect : accepts a list in both inlets and sends a list out the left outlet that contains the elements common to both lists.

 slice : is used to divide a list into two lists. This mode takes an additional number argument which specifies the size, in elements, of a list. This value can also be specified as an input in the right inlet in this mode. A list received in the left inlet will be split into two lists - the first list contains the number of items specified by the argument, and is sent out the left outlet. Any remaining list elements are sent out the right outlet of the object. Note: Lists are sent out the right outlet first.

 sort : is used to sort the contents of a list. An additional argument is used to specify the sorting order.  sort -1  sorts the input list in descending order, and the  sort  message with any other value sorts the input list in ascending order. This value can also be specified as an input in the right inlet in this mode.

 stream : accepts a number in the right inlet which specifies the length of the output list. Following the receipt of this number, the object will collect this number of items input through the left inlet. After the list-length is complete, the list will be output the left outlet. A  1  or a  0  will be output from the right outlet depending on whether the list-length has been defined or not. A  1  signifies that the list-length has been defined and that the object is now collecting the stream.

 sub : accepts a list in both inlets and sends the output position for each occurrence of right list in the left list out the left outlet.

 stack : functions as a last-in-first-out (LIFO) stack; it outputs the most recently received message.

 stream : will output the last  *N*  items in a list, where  *N*  is user-specifiable.

 sum : accepts a list of numbers and will output the sum of those numbers.

 swap : The object will accept a list in as an argument. A list of two numbers (0-based) in the right inlet will indicate a pair of indices to swap in the list received in the left inlet. For instance, if  1 3  is received in the right inlet,  A B C D  received in the left inlet will cause the object to output  A D C B  from the left output. Multiple pairs of numbers can be used to perform multiple, sequential swap operations.

 thin : accepts a list in the left inlet and will output a list containing all the elements of the input list which are not duplicates.

 union : accepts a list in both inlets and sends a list out the left outlet that contains the contents of both input lists. If the left and right inlets contain any items in common, only one symbol will be output.

 unique : accepts a list in both inlets and will output a list out the left outlet populated with items from the left-input-list which were not present in the right-input-list.

Arguments:

- mode
  [symbol]
- setting
  [int]

### zlclear

Reinitializes the [zl](https://docs.cycling74.com/reference/zl) object.

### zlreset

Reinitializes the [zl](https://docs.cycling74.com/reference/zl) object.  zlreset  works slightly differently from  zlclear  and won't zero the mode parameters for  ecils ,  iter ,  mth ,  nth ,  rot ,  slice , and  sort .  group  's mode parameter won't be reset by either  zlclear  nor  zlreset .

## Output

### list

Out left outlet:

In  change  mode, the input list only if it is different from the list which was last received. If it is different, the new list is sent out the left outlet. If the list is not different, nothing is sent out the left outlet.

In  delace  mode, a list which consists of every other element in the input list starting with the first element (if the input list is  6.2 3 5.6 5.3 3.8 2.4  the left output list is  6.2 5.6 3.8 ).

In  ecils  mode, a list containing the number of elements specified by the number argument starting at the end of the list and counting toward the beginning.

In  filter  mode, a list with elements matching the filtering list removed.

In  group  mode, a list containing the number of elements specified by the number argument.

In  indexmap  mode, a new list composed from the specified indices, based on values of the list input in the left inlet.

In  iter  mode, a number of lists having the number of elements specified by the number argument. The final list output may be shorter than the specified number of items, depending on the stored contents of the [zl](https://docs.cycling74.com/reference/zl) object

In  join  mode, a list containing all the elements of the lists received in both inlets.

In  lace  mode, a list populated with items from both input lists interlaced with each other (if the left input list is  6.2 5.6 3.8  and the right input list is  3 5.3 2.4  the output list is  6.2 3 5.6 5.3 3.8 2.4 ).

In  len  mode, a number which corresponds to the number of list items.

In  lookup  mode, the list element located at the list index specified by the number received in the left inlet.(if  6.2 3 5.6 5.3 3.8 2.4  is received in the right inlet, a  2  received in the left inlet will cause the object to output  5.6  out of the left output).

In  median  mode, the median of the input-list.

In  mth  mode, the mth element of the list (where 0 is the index of the first element of the list).

In  nth  mode, the nth element of the list.

In  queue  mode, the oldest element received.

In  reg  mode, the input or the most recently stored input value received in the right inlet.

In  rev  mode, the input list in reverse order.

In  rotate  mode, the input list rotated to the right or left according to the positive or negative specified by the number argument.

In  scramble  mode, a scrambled version of the input-list (a list containing the same elements as the input-list but in a randomized order).

In  sect  mode, a list containing all the elements common to the lists received in both inlets.

In  slice  mode, a list containing the number of elements specified by the number argument.

In  stack  mode, the most recently received message.

In  stream  mode, the stream or list consisting of the element to be collected a specified number of times.

In  sum  mode, the sum of the input-list.

In  swap  mode, a list with the specified elements swapped.

In  thin  mode, a list containing all the elements of the input list which are not duplicates.

In  union  mode, a list containing the items from both lists without repeating items common to both lists. If the left and right inlets contain any items in common, only one symbol will be output.

In  unique  mode, a list populated with items from the left-input-list which were not present in the right-input-list.

### list

Out the right outlet:

In  change  mode, if the input-list is different from the last one received, a  1  is sent out the right outlet. If the list is not different, nothing is sent out the left outlet while a  0  is sent out the right outlet.

In  delace  mode, a list which consists of every other element in the input list starting with the second element (if the input list is  6.2 3 5.6 5.3 3.8 2.4 , the right output list is  3 5.3 2.4 ).

In  ecils  mode, a list containing any list elements before the numbered element specified by the number argument.

In  filter  mode, a list of the index numbers of list elements not filtered out.

In  mth  mode, a list containing all list elements except for the list element specified by the number argument (where 0 is the index of the first element in the list).

In  nth  mode, a list containing all list elements except for the list element specified by the number argument (where 1 is the index of the first element in the list).

In  slice  mode, a list containing any list elements beyond the numbered element specified by the number argument.

In  sect  mode, a bang will be sent out the right outlet if the two input lists contain no common elements.

In  sub  mode, the number of list elements specified by the number argument in the left input list is sent out the right outlet of the object. If an optional second argument is used to specify a value which will replace the number specified by the input value, the resulting list is sent out the right outlet of the [zl](https://docs.cycling74.com/reference/zl) object.

In  stream  mode, a  1  or a  0  will be output from the right outlet depending on whether the list-length has been defined or not. A  1  signifies that the list-length has been defined and that the object is now collecting the stream.

In  change  mode, if the input-list is different from the last one received, the new list is sent out the left outlet along with a  1  out the right outlet. If the list is not different, nothing is sent out the left outlet while a  0  is sent out the right outlet.

## See Also

| Name | Description |
| --- | --- |
| [fromsymbol](https://docs.cycling74.com/reference/fromsymbol) | Convert a symbol into numbers/messages |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [maximum](https://docs.cycling74.com/reference/maximum) | Output the highest value |
| [minimum](https://docs.cycling74.com/reference/minimum) | Output the smallest value |
| [mean](https://docs.cycling74.com/reference/mean) | Calculate a running average |
| [pack](https://docs.cycling74.com/reference/pack) | Create a list |
| [regexp](https://docs.cycling74.com/reference/regexp) | Use regular expressions to process input |
| [swap](https://docs.cycling74.com/reference/swap) | Swap position of two numbers |
| [thresh](https://docs.cycling74.com/reference/thresh) | Combine numbers, symbols and lists when received close together |
| [tosymbol](https://docs.cycling74.com/reference/tosymbol) | Convert messages, numbers, or lists to a single symbol |
| [unjoin](https://docs.cycling74.com/reference/unjoin) | Break a list into messages |
| [unpack](https://docs.cycling74.com/reference/unpack) | Break a list into individual messages |

---
type: max
name: "zl.lookup"
summary: "Process lists in many ways"
signal: false
url: "https://docs.cycling74.com/reference/zl.lookup/"
package: "Max"
see_also: ["zl", "zl.change", "zl.compare", "zl.delace", "zl.ecils", "zl.filter", "zl.group", "zl.indexmap", "zl.iter", "zl.join", "zl.lace", "zl.len", "zl.median", "zl.mth", "zl.nth", "zl.queue", "zl.reg", "zl.rev", "zl.rot", "zl.scramble", "zl.sect", "zl.slice", "zl.sort", "zl.stack", "zl.stream", "zl.sub", "zl.sum", "zl.swap", "zl.thin", "zl.union", "zl.unique"]
---
# zl.lookup

Output elements of a list

## Description

Outputs the elements of an input list. Element indexing begins at 0.

## Arguments

### initial-list[list] optional

The object will accept a list in as an argument. A number in the right inlet will cause the object to output the element located at the list index specified by the number received in the left inlet. (if 6.2 3 5.6 5.3 3.8 2.4 is received in the right inlet, a 2 received in the left inlet will cause the object to output 5.6 out of the left output). Indexing begins at 0.

## Attributes

### fuzzy[atom]: 0.

Fuzzy floating-point comparison epsilon

### zlmaxsize[atom\_long]

Sets the maximum list length for all modes of operation. This is the equivalent to using an argument to the object, but allows the list length to be changed dynamically. The default list length is 256, and the maximum list length limit is 32,767.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: A bang message will output the most recent list or value calculated. Many modes of the  zl  object take inputs through their right inlet which will only set the input without triggering output. In these cases, a subsequent bang received in the left inlet will trigger the output.

### int

In left inlet: Outputs the element located at the specified index. Indexing starts at 0.

In right inlet: Sets the list

### float

See  int  message.

### list

In left inlet: Output elements located at the specified indexes. Indexing starts at 0.

In right inlet: Set lookup list

### anything

Allows for the recognition of lists that begin with symbols.

Arguments:

- input
  [list]

### mode

The word 'mode' followed by one of the following words will set the mode of the object:

change, compare, delace, ecils, group, indexmap, iter, join, lace, len, lookup, median, mth, nth, queue, reg, rev, rot, scramble, sect, slice, sort, stack, stream, sub, sum, swap, thin, union, or unique.

See the reference for the corresponding mode for more information.

### zlclear

Clears the currently held list.

### zlreset

TEXT\_HERE

## Output

### list

Out left outlet:

A list of the element(s) as specified by the input to the leftmost inlet.

## See Also

| Name | Description |
| --- | --- |
| [zl](https://docs.cycling74.com/reference/zl) | Process lists in many ways |
| [zl.change](https://docs.cycling74.com/reference/zl.change) | Filter out list repetitions |
| [zl.compare](https://docs.cycling74.com/reference/zl.compare) | Compare two lists |
| [zl.delace](https://docs.cycling74.com/reference/zl.delace) | De-interleave a list |
| [zl.ecils](https://docs.cycling74.com/reference/zl.ecils) | Slice a list in reverse order |
| [zl.filter](https://docs.cycling74.com/reference/zl.filter) | Remove items in a list |
| [zl.group](https://docs.cycling74.com/reference/zl.group) | Store and output a list |
| [zl.indexmap](https://docs.cycling74.com/reference/zl.indexmap) | Create new list from list of indexes |
| [zl.iter](https://docs.cycling74.com/reference/zl.iter) | Successively output lists of specific size |
| [zl.join](https://docs.cycling74.com/reference/zl.join) | Combine two lists |
| [zl.lace](https://docs.cycling74.com/reference/zl.lace) | Interleave two lists |
| [zl.len](https://docs.cycling74.com/reference/zl.len) | Get list length |
| [zl.median](https://docs.cycling74.com/reference/zl.median) | Get the median value of a list of numbers |
| [zl.mth](https://docs.cycling74.com/reference/zl.mth) | Extract item from list |
| [zl.nth](https://docs.cycling74.com/reference/zl.nth) | Extract item from list |
| [zl.queue](https://docs.cycling74.com/reference/zl.queue) | Output elements of a list in the order they are received |
| [zl.reg](https://docs.cycling74.com/reference/zl.reg) | Store and output a list |
| [zl.rev](https://docs.cycling74.com/reference/zl.rev) | Reverse a list |
| [zl.rot](https://docs.cycling74.com/reference/zl.rot) | Rotate a list |
| [zl.scramble](https://docs.cycling74.com/reference/zl.scramble) | Scramble a list |
| [zl.sect](https://docs.cycling74.com/reference/zl.sect) | Find common items between two lists |
| [zl.slice](https://docs.cycling74.com/reference/zl.slice) | Slice a list in two |
| [zl.sort](https://docs.cycling74.com/reference/zl.sort) | Arrange a list in alphanumeric order |
| [zl.stack](https://docs.cycling74.com/reference/zl.stack) | Output elements of a list in reverse order |
| [zl.stream](https://docs.cycling74.com/reference/zl.stream) | Make a list of a certain size |
| [zl.sub](https://docs.cycling74.com/reference/zl.sub) | Output position for each occurance of right list in left |
| [zl.sum](https://docs.cycling74.com/reference/zl.sum) | Sum a list of numbers |
| [zl.swap](https://docs.cycling74.com/reference/zl.swap) | Swap two list indexes |
| [zl.thin](https://docs.cycling74.com/reference/zl.thin) | Remove duplicates from list |
| [zl.union](https://docs.cycling74.com/reference/zl.union) | Combine two lists without duplicating shared items |
| [zl.unique](https://docs.cycling74.com/reference/zl.unique) | Remove items from a list |

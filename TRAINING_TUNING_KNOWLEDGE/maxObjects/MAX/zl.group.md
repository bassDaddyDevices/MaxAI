---
type: max
name: "zl.group"
summary: "Process lists in many ways"
signal: false
url: "https://docs.cycling74.com/reference/zl.group/"
package: "Max"
see_also: ["zl", "zl.change", "zl.compare", "zl.delace", "zl.ecils", "zl.filter", "zl.indexmap", "zl.iter", "zl.join", "zl.lace", "zl.len", "zl.lookup", "zl.median", "zl.mth", "zl.nth", "zl.queue", "zl.reg", "zl.rev", "zl.rot", "zl.scramble", "zl.sect", "zl.slice", "zl.sort", "zl.stack", "zl.stream", "zl.sub", "zl.sum", "zl.swap", "zl.thin", "zl.union", "zl.unique"]
---
# zl.group

Store and output a list

## Description

Output a list after the number of items specified by the maximum output length are received.

## Arguments

### initial-size[int] optional

Specifies a number of the most recently stored list items to be output.

## Attributes

### fuzzy[atom]: 0.

Fuzzy floating-point comparison epsilon

### zlmaxsize[atom\_long]

Sets the maximum list length for all modes of operation. This is the equivalent to using an argument to the object, but allows the list length to be changed dynamically. The default list length is 256, and the maximum list length limit is 32,767.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Immediately outputs current list.

### int

In left inlet: Adds to grouped list

In right inlet: Sets group size

### float

See  int  message.

### list

Add elements to group

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

The grouped list is output when the max size is met or a bang is input to the left inlet.

## See Also

| Name | Description |
| --- | --- |
| [zl](https://docs.cycling74.com/reference/zl) | Process lists in many ways |
| [zl.change](https://docs.cycling74.com/reference/zl.change) | Filter out list repetitions |
| [zl.compare](https://docs.cycling74.com/reference/zl.compare) | Compare two lists |
| [zl.delace](https://docs.cycling74.com/reference/zl.delace) | De-interleave a list |
| [zl.ecils](https://docs.cycling74.com/reference/zl.ecils) | Slice a list in reverse order |
| [zl.filter](https://docs.cycling74.com/reference/zl.filter) | Remove items in a list |
| [zl.indexmap](https://docs.cycling74.com/reference/zl.indexmap) | Create new list from list of indexes |
| [zl.iter](https://docs.cycling74.com/reference/zl.iter) | Successively output lists of specific size |
| [zl.join](https://docs.cycling74.com/reference/zl.join) | Combine two lists |
| [zl.lace](https://docs.cycling74.com/reference/zl.lace) | Interleave two lists |
| [zl.len](https://docs.cycling74.com/reference/zl.len) | Get list length |
| [zl.lookup](https://docs.cycling74.com/reference/zl.lookup) | Output elements of a list |
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

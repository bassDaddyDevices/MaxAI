---
type: max
name: "zl.compare"
summary: "Process lists in many ways"
signal: false
url: "https://docs.cycling74.com/reference/zl.compare/"
package: "Max"
see_also: ["zl", "zl.change", "zl.delace", "zl.ecils", "zl.filter", "zl.group", "zl.indexmap", "zl.iter", "zl.join", "zl.lace", "zl.len", "zl.lookup", "zl.median", "zl.mth", "zl.nth", "zl.queue", "zl.reg", "zl.rev", "zl.rot", "zl.scramble", "zl.sect", "zl.slice", "zl.sort", "zl.stack", "zl.stream", "zl.sub", "zl.sum", "zl.swap", "zl.thin", "zl.union", "zl.unique"]
---
# zl.compare

Compare two lists

## Arguments

### initial-list[list] optional

Sets the initial list to compare input with.

## Attributes

### fuzzy[atom]: 0.

Fuzzy floating-point comparison epsilon

### zlmaxsize[atom\_long]

Maximum List Length

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

TEXT\_HERE

### int

TEXT\_HERE

### float

TEXT\_HERE

### list

In left inlet: Compares with input from right inlet and triggers output.

In right inlet: Sets list to compare and does not trigger output.

### anything

TEXT\_HERE

### mode

The word 'mode' followed by one of the following words will set the mode of the object:

change, compare, delace, ecils, group, indexmap, iter, join, lace, len, lookup, median, mth, nth, queue, reg, rev, rot, scramble, sect, slice, sort, stack, stream, sub, sum, swap, thin, union, or unique.

See the reference for the corresponding mode for more information.

### zlclear

Clears the currently held list.

### zlreset

TEXT\_HERE

## Output

### int

Out left outlet:

If the input list is the same as the last one received, a  1  is output. If the list is not the same, a  0  is output.

### list

Out right outlet:

If the input list is different, a list of indexes that are not equal will be output.

## See Also

| Name | Description |
| --- | --- |
| [zl](https://docs.cycling74.com/reference/zl) | Process lists in many ways |
| [zl.change](https://docs.cycling74.com/reference/zl.change) | Filter out list repetitions |
| [zl.delace](https://docs.cycling74.com/reference/zl.delace) | De-interleave a list |
| [zl.ecils](https://docs.cycling74.com/reference/zl.ecils) | Slice a list in reverse order |
| [zl.filter](https://docs.cycling74.com/reference/zl.filter) | Remove items in a list |
| [zl.group](https://docs.cycling74.com/reference/zl.group) | Store and output a list |
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

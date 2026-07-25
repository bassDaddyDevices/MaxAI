---
type: max
name: "patcherargs"
summary: "Retrieve patcher arguments"
signal: false
url: "https://docs.cycling74.com/reference/patcherargs/"
package: "Max"
see_also: ["bpatcher", "thispatcher"]
---
# patcherargs

Retrieve patcher arguments

## Description

Retrieves patcher arguments and parses attribute style arguments. "normal" arguments are sent out the left outlet (first), and attribute style arguments are sent out the right outlet (second).

#### Discussion

This object is useful inside abstractions, bpatchers, and subpatchers. If there are arguments present to the [patcherargs](https://docs.cycling74.com/reference/patcherargs) object, they are assumed to be the default arguments in the instance that the parent patcher has no arguments.

## Arguments

### defaults[int, float, symbol] optional

The [patcherargs](https://docs.cycling74.com/reference/patcherargs) object permits access to more than 10 arguments for patchers which are typed into an object box, but those contained within a [bpatcher](https://docs.cycling74.com/reference/bpatcher) object remain limited to 10 arguments.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends a list of the parent patcher's arguments out the left outlet.

If the parent patcher uses any attribute-style arguments (e.g. if any Jitter objects are used in the patcher), they are sent out the right outlet as a series of lists.

### (mouse)

Double-clicking on the object will send the parent patcher's arguments out the left outlet.

If the parent patcher uses any attribute-style arguments (e.g. if any Jitter objects are used in the patcher), they are sent out the right outlet as a series of lists.

## Output

### Int, float, symbol

Out left outlet: A list of the parent patcher's arguments are sent out the left outlet when the patcher is loaded.

Out right outlet: A series of lists corresponding to the attribute-style arguments (if any Jitter objects are contained in the patcher) are sent out the right outlet when the patcher is loaded.

## See Also

| Name | Description |
| --- | --- |
| [bpatcher](https://docs.cycling74.com/reference/bpatcher) | Embed a subpatch with a visible UI |
| [thispatcher](https://docs.cycling74.com/reference/thispatcher) | Send messages to a patcher |

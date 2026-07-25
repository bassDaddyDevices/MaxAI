---
type: max
name: "pattrhub"
summary: "Access all pattr objects in a patcher"
signal: false
url: "https://docs.cycling74.com/reference/pattrhub/"
package: "Max"
see_also: ["autopattr", "pattr", "pattrforward", "pattrmarker", "pattrstorage"]
---
# pattrhub

Access all pattr objects in a patcher

## Description

Centralizes communication with all pattr objects in a patcher.

#### Discussion

The [pattrhub](https://docs.cycling74.com/reference/pattrhub) object has a single inlet and two outlets. The inlet is used for all incoming messages. Messages that can be understood by a [pattr](https://docs.cycling74.com/reference/pattr) object within the [pattrhub](https://docs.cycling74.com/reference/pattrhub) object's patcher (e.g.  get  or  set  messages) will be automatically forwarded to that object, and any response will be sent from the [pattrhub](https://docs.cycling74.com/reference/pattrhub) object's right outlet.

## Arguments

None.

## Attributes

### bound[int] read-only

Patcher is bound/valid

### patcher[symbol]

The word  patcher , followed by a symbol describing a valid path to a patcher, sets the patcher referenced by the [pattrhub](https://docs.cycling74.com/reference/pattrhub) object. The default is the special symbol  this , which represents the patcher the pattrhub object resides within. The [pattrhub](https://docs.cycling74.com/reference/pattrhub) object can refer to patchers other than the one in which the object resides. A double-colon syntax ('::') is used to separate levels of patcher hierarchy. See the [pattrhub](https://docs.cycling74.com/reference/pattrhub) help file for further information on this feature.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  is passed through the [pattrhub](https://docs.cycling74.com/reference/pattrhub) object and output from its left outlet.

### int

An  int  is passed through the [pattrhub](https://docs.cycling74.com/reference/pattrhub) object and output from its left outlet.

Arguments:

- input
  [int]

### float

float  is passed through the [pattrhub](https://docs.cycling74.com/reference/pattrhub) object and output from its left outlet.

Arguments:

- input
  [float]

### list

list  is passed through the [pattrhub](https://docs.cycling74.com/reference/pattrhub) object and output from its left outlet.

Arguments:

- input
  [list]

### anything

Incoming messages to the [pattrhub](https://docs.cycling74.com/reference/pattrhub) object are analyzed. If the first element of the  message  matches the name of a [pattr](https://docs.cycling74.com/reference/pattr)- or [autopattr](https://docs.cycling74.com/reference/autopattr)-maintained object, the subsequent arguments in the message set that object's value. If the first element of the message matches  get  (name), where (name) matches the name of a [pattr](https://docs.cycling74.com/reference/pattr)- or [autopattr](https://docs.cycling74.com/reference/autopattr)-maintained object, the value of that object is sent from the [pattrhub](https://docs.cycling74.com/reference/pattrhub) object's right outlet, preceded by the object's name. Otherwise, the message is passed through the [pattrhub](https://docs.cycling74.com/reference/pattrhub) object and output from its left outlet.

Arguments:

- arguments
  [list]

### getattributes

The  getattributes  message causes a list of all [pattr](https://docs.cycling74.com/reference/pattr)- or [autopattr](https://docs.cycling74.com/reference/autopattr)-maintained object names to be output from the [pattrhub](https://docs.cycling74.com/reference/pattrhub) object's right outlet, preceded by the symbol  attributes .

### getstate

The  getstate  message causes a series of lists to be output from the [pattrhub](https://docs.cycling74.com/reference/pattrhub) object's right outlet -- one for every [pattr](https://docs.cycling74.com/reference/pattr)- or [autopattr](https://docs.cycling74.com/reference/autopattr)-maintained object in the patcher containing the [pattrhub](https://docs.cycling74.com/reference/pattrhub) object. Each list begins with the name of the object, and is followed by the object's current value.

## Output

### anything

Out left outlet: Any  message  not matching a  get  or  set  request to a [pattr](https://docs.cycling74.com/reference/pattr)- or [autopattr](https://docs.cycling74.com/reference/autopattr)-maintained object in the [pattrhub](https://docs.cycling74.com/reference/pattrhub) object's  patcher  is passed through the left outlet unchanged.

Out right outlet:  get  queries to the a [pattr](https://docs.cycling74.com/reference/pattr)- or [autopattr](https://docs.cycling74.com/reference/autopattr)-maintained object in the [pattrhub](https://docs.cycling74.com/reference/pattrhub) object's  patcher  are output from the right outlet, also known as the  dumpout  outlet.

## See Also

| Name | Description |
| --- | --- |
| [autopattr](https://docs.cycling74.com/reference/autopattr) | Expose multiple objects to the pattr system |
| [pattr](https://docs.cycling74.com/reference/pattr) | Provide an alias with a named data wrapper |
| [pattrforward](https://docs.cycling74.com/reference/pattrforward) | Send any message to a named object |
| [pattrmarker](https://docs.cycling74.com/reference/pattrmarker) | Provide pattr communication between patchers |
| [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) | Save and recall pattr presets |

---
type: max
name: "autopattr"
summary: "Expose multiple objects to the pattr system"
signal: false
url: "https://docs.cycling74.com/reference/autopattr/"
package: "Max"
see_also: ["pattr", "pattrforward", "pattrhub", "pattrmarker", "pattrstorage"]
---
# autopattr

Expose multiple objects to the pattr system

## Description

Causes multiple objects within a patcher to be automatically included in the pattr system.

Note: you should use only one instance of an [autopattr](https://docs.cycling74.com/reference/autopattr) object per level in a patch.

## Arguments

### name[symbol] optional

A symbol argument can be used to set the [autopattr](https://docs.cycling74.com/reference/autopattr) object's  name . In the absence of an argument, the [autopattr](https://docs.cycling74.com/reference/autopattr) object is given an arbitrary, semi-random name, such as u197000004.

## Attributes

### autoname[int]

The word  autoname , followed by a 1 or 0, enables or disables the [autopattr](https://docs.cycling74.com/reference/autopattr) object's autoname state. The default is 0 (off). When enabled, the [autopattr](https://docs.cycling74.com/reference/autopattr) object will automatically name any unnamed objects in the patcher supported by the [pattr](https://docs.cycling74.com/reference/pattr) system and bind to them, if possible. Naming only occurs when the patcher loads, when the [autopattr](https://docs.cycling74.com/reference/autopattr) object is again instantiated, or when the [autopattr](https://docs.cycling74.com/reference/autopattr) object receives the message  autoname 1 . New objects placed in a patcher after the [autopattr](https://docs.cycling74.com/reference/autopattr) has been instantiated will not be autonamed until one of these conditions is met.

### autorestore[int]

The word  autorestore , followed by a 1 or 0, enables or disables the [autopattr](https://docs.cycling74.com/reference/autopattr) object's autorestore state. The default is 1 (on). When enabled, the [autopattr](https://docs.cycling74.com/reference/autopattr) object will automatically output its last-saved values when the patcher is loaded, and distribute them to bound objects. Values are saved whenever the patcher is saved.

### dirty[int]

The word  dirty , followed by a 1 or 0, enables or disables the patcher-dirty flag. The default is 0 (disabled). When enabled, the [autopattr](https://docs.cycling74.com/reference/autopattr) object will dirty the patch whenever its state changes.

### greedy[int]

The word  greedy , followed by a 1 or 0, enables or disables the attribute-gathering feature of the [autopattr](https://docs.cycling74.com/reference/autopattr) object. The default is 0 (disabled). When enabled, any internal attributes of objects attached to the left outlet of the [autopattr](https://docs.cycling74.com/reference/autopattr) object will be exposed to the [pattr](https://docs.cycling74.com/reference/pattr) system (as well as the normal value, if present).

### name[symbol]

The word  name , followed by a symbol, sets the [autopattr](https://docs.cycling74.com/reference/autopattr) object's patcher name.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  is passed through the [autopattr](https://docs.cycling74.com/reference/autopattr) object and output from its center right outlet.

### int

An  int  is passed through the [autopattr](https://docs.cycling74.com/reference/autopattr) object and output from its center right outlet.

Arguments:

- input
  [int]

### float

float  is passed through the [autopattr](https://docs.cycling74.com/reference/autopattr) object and output from its center right outlet.

Arguments:

- input
  [float]

### list

list  is passed through the [autopattr](https://docs.cycling74.com/reference/autopattr) object and output from its center right outlet.

Arguments:

- input
  [list]

### anything

Any  message  is analyzed. If the first element of the  message  matches the name of an object maintained by the [autopattr](https://docs.cycling74.com/reference/autopattr), the subsequent arguments in the  message  set that object's value. If the first element of the  message  matches  get  (name), where (name) matches the name of an object maintained by the [autopattr](https://docs.cycling74.com/reference/autopattr), the value of that object is sent from the [autopattr](https://docs.cycling74.com/reference/autopattr) object's right outlet, prepended by the object's name. Otherwise, the  message  is passed through the [autopattr](https://docs.cycling74.com/reference/autopattr) object and output from its center right outlet.

Arguments:

- input/arguments
  [list]

### getattributes

Causes a list of all objects names maintained by the [autopattr](https://docs.cycling74.com/reference/autopattr) object to be output from the right outlet, prepended by the symbol  attributes .

### getstate

Causes a series of lists to be output from the [autopattr](https://docs.cycling74.com/reference/autopattr) object's right outlet, one for every object maintained by the [autopattr](https://docs.cycling74.com/reference/autopattr). Each list begins with the name of the object, and is followed by the object's current value.

## Output

### (internal)

Out left outlet: Any user interface object (or other object that responds to the internal messaging system utilized by [autopattr](https://docs.cycling74.com/reference/autopattr)) connected to the left outlet of the [autopattr](https://docs.cycling74.com/reference/autopattr) object will be automatically named (if necessary) and bound to. If the [autopattr](https://docs.cycling74.com/reference/autopattr) object's  greedy  attribute has been enabled, any attributes associated with the bound object will also be exposed to the [pattr](https://docs.cycling74.com/reference/pattr) system. The name is automatically generated from the object's class name (e.g. a connected [number box](https://docs.cycling74.com/reference/number) might be named number[1].) At the time of this writing, the following Max user interface objects can be bound in this fashion: [dial](https://docs.cycling74.com/reference/dial), [function](https://docs.cycling74.com/reference/function), [gain~](https://docs.cycling74.com/reference/gain~), [ggate](https://docs.cycling74.com/reference/gswitch2), [gswitch](https://docs.cycling74.com/reference/gswitch), [js](https://docs.cycling74.com/reference/js), [jsui](https://docs.cycling74.com/reference/jsui) (see the JavaScript in Max manual for more information on using the [pattr](https://docs.cycling74.com/reference/pattr) system with JavaScript), [led](https://docs.cycling74.com/reference/led), [matrixctrl](https://docs.cycling74.com/reference/matrixctrl), [multislider](https://docs.cycling74.com/reference/multislider), [number box](https://docs.cycling74.com/reference/number) (int and float), [pictctrl](https://docs.cycling74.com/reference/pictctrl), [pictslider](https://docs.cycling74.com/reference/pictslider), [radiogroup](https://docs.cycling74.com/reference/radiogroup), [rslider](https://docs.cycling74.com/reference/rslider), [slider](https://docs.cycling74.com/reference/slider), [table](https://docs.cycling74.com/reference/table), [textedit](https://docs.cycling74.com/reference/textedit), [toggle](https://docs.cycling74.com/reference/toggle) and [umenu](https://docs.cycling74.com/reference/umenu).

Out center-left outlet: Any user interface object (or other object that responds to the internal messaging system utilized by [autopattr](https://docs.cycling74.com/reference/autopattr)) connected to the center left outlet of the [autopattr](https://docs.cycling74.com/reference/autopattr) object will be automatically named (if necessary) and excluded from the [autopattr](https://docs.cycling74.com/reference/autopattr) object's bound-object list.

### anything

Out center-right outlet: Any  message  not matching a  get  or  set  request to an object maintained by the [autopattr](https://docs.cycling74.com/reference/autopattr) is passed, unchanged, through the center right outlet.

Out right outlet:  get  queries to an object maintained by the [autopattr](https://docs.cycling74.com/reference/autopattr) are output from the right outlet, also known as the  dumpout  outlet.

## See Also

| Name | Description |
| --- | --- |
| [pattr](https://docs.cycling74.com/reference/pattr) | Provide an alias with a named data wrapper |
| [pattrforward](https://docs.cycling74.com/reference/pattrforward) | Send any message to a named object |
| [pattrhub](https://docs.cycling74.com/reference/pattrhub) | Access all pattr objects in a patcher |
| [pattrmarker](https://docs.cycling74.com/reference/pattrmarker) | Provide pattr communication between patchers |
| [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) | Save and recall pattr presets |

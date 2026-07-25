---
type: max
name: "thisobject"
summary: "Monitor and control named objects"
signal: false
url: "https://docs.cycling74.com/reference/thisobject/"
package: "Max"
see_also: ["getattr", "thispatcher", "attrui"]
---
# thisobject

Monitor and control named objects

## Description

Use [thisobject](https://docs.cycling74.com/reference/thisobject) as a connection to objects by name. [thisobject](https://docs.cycling74.com/reference/thisobject) can be used with global named objects including  max  and  dsp . It can also connect to objects with scripting names, including objects in other patchers using [pattr](https://docs.cycling74.com/reference/pattr) paths. You can also use the name  patcher  for connecting to the patcher containing the [thisobject](https://docs.cycling74.com/reference/thisobject), which works similarly to the [thispatcher](https://docs.cycling74.com/reference/thispatcher) object. [thisobject](https://docs.cycling74.com/reference/thisobject) is similar to [getattr](https://docs.cycling74.com/reference/getattr) but permits you to change the named target object using the target attribute, whereas [getattr](https://docs.cycling74.com/reference/getattr) uses a patch cord to establish a connection to its target.

## Arguments

### target object[symbol] optional

If present, the first argument names the target object for [thisobject](https://docs.cycling74.com/reference/thisobject) to monitor and control.

### selected attribute[symbol] optional

If present, the second argument names the selected attribute that [thisobject](https://docs.cycling74.com/reference/thisobject) whose value will reported when receiving a  bang .

## Attributes

### attr[symbol]

The attr attribute selects the attribute of the target object that [thisobject](https://docs.cycling74.com/reference/thisobject) whose value will be reported out the outlet when receiving a  bang  or when the value changes and listen is enabled.

### listen[int]

When listen is enabled, changes in the value of the selected attribute of the target object will cause the new value to be sent out the [thisobject](https://docs.cycling74.com/reference/thisobject) object's left outlet.

### listenvalue[int]

When listenvalue is enabled, changes in the value of the the target object will cause the new value to be sent out the [thisobject](https://docs.cycling74.com/reference/thisobject) object's left outlet.

### prefix[int]

WHen enabled, the attribute value output is preceded by the attribute's name.

### target[symbol]

The target attribute specifies the name of the object for [thisobject](https://docs.cycling74.com/reference/thisobject). Object names can be global such as  max  and  dsp  or objects with scripting names. When changing the target attribute, the reserved names  patcher  and  patcherassoc  are checked first, followed by global names such as  max , followed by scripting names.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  outputs the current value of the selected attribute of the target object.

### int

An  int  is sent to the target object

### float

An  float  is sent to the target object

### list

An  list  is sent to the target object

### anything

Any message is sent to the target object

### targetattach

The  targetattach  message attempts to attach [thisobject](https://docs.cycling74.com/reference/thisobject) to a named target object. This can be useful if the named object didn't exist when the the target was initially set. [thisobject](https://docs.cycling74.com/reference/thisobject) will attach to the named target when its containing patcher file is loaded.

### targetattrdict

The  targetattrdict  outputs a dictionary of the target object's attribute names, labels, and values out the right outlet.

### targetbang

The  targetbang  message sends a  bang  to the target object.

### targetvalue

If the target object is a user interface object with a value, the  targetvalue  message sends the current value of the target object out the left outlet.

## See Also

| Name | Description |
| --- | --- |
| [getattr](https://docs.cycling74.com/reference/getattr) | Query object attributes |
| [thispatcher](https://docs.cycling74.com/reference/thispatcher) | Send messages to a patcher |
| [attrui](https://docs.cycling74.com/reference/attrui) | Inspect attributes |

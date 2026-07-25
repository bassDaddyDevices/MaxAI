---
type: max
name: "param"
summary: "Define a polyphonic-compatible parameter in  poly~"
signal: false
url: "https://docs.cycling74.com/reference/param/"
package: "Max"
see_also: ["poly~", "rnbo", "gen~", "amxd~"]
---
# param

Define a polyphonic-compatible parameter in [poly~](https://docs.cycling74.com/reference/poly~)

## Description

The [param](https://docs.cycling74.com/reference/param) object appears as an attribute on the [poly~](https://docs.cycling74.com/reference/poly~) object, in addition to being published to the Parameter system, and can be attached to UI objects via the [Parameter Connect feature](https://docs.cycling74.com/userguide/param_connect). It currently only supports single numeric values (int/float), but not symbols nor lists.

Parameters defined with the [param](https://docs.cycling74.com/reference/param) object will only appear once in the Parameter Window for the top-level patcher containing the hosting [poly~](https://docs.cycling74.com/reference/poly~) object, regardless of how many voices of polyphony are configured, and changes will be propagated to all voices. This feature is useful for defining "monophonic" parameters which apply to every voice of a polyphonic structure (such as amplitude envelope attack).

## Arguments

### name[symbol] optional

If no name is provided, the parameter will be named  param .

## Attributes

### annotation\_name[symbol]:

Info View Title

### default[atom]

By default, the object has no initial value (and a default value of 0, or the parameter's minimum value).

### max[atom]

The upper range of the parameter's value (default =  1. ).

### min[atom]

The lower range of the parameter's value (default =  0. ).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The current value of the object will be sent from the outlets.

### int

The current value of the object will be updated and sent from the outlets.

Arguments:

- value
  [int]

### float

The current value of the object will be updated and sent from the outlets.

Arguments:

- value
  [float]

## Output

### value

Out left outlet: When the [param](https://docs.cycling74.com/reference/param) object's value changes, or the object receives a  bang , the current value is output.

Out right outlet: When the [param](https://docs.cycling74.com/reference/param) object's value changes, or the object receives a  bang , the normalized (0. - 1.) current value is output.

## See Also

| Name | Description |
| --- | --- |
| [poly~](https://docs.cycling74.com/reference/poly~) | Manage polyphony/DSP for patchers |
| [rnbo](https://docs.cycling74.com/reference/rnbo) |  |
| [gen~](https://docs.cycling74.com/reference/gen~) | Generate native audio signal processing routines |
| [amxd~](https://docs.cycling74.com/reference/amxd~) | Host Max for Live devices |

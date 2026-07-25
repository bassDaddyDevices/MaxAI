---
type: max
name: "param.osc"
summary: "Control and report info about parameters using OSC."
signal: false
url: "https://docs.cycling74.com/reference/param.osc/"
package: "Max"
see_also: ["osc.codebox"]
---
# param.osc

Control and report info about parameters using OSC.

## Description

Controls and reports info about parameters using OpenSoundControl (OSC).

## Arguments

None.

## Attributes

### auto[int]

Automatically report changes to the parameters of a patch.

### outputformat[symbol]

Output Format

Possible values:

'osc\_packet'

'fullpacket'

### outputmode[symbol]

The type of output to produce in response to changes if auto is set to 1. This attribute also controls the behavior of  bang .

Possible values:

'param'
(
The most recently updated parameter only
)
Output a bundle containing only the value(s) of the most recently updated parameter. See  param .

'allparams'
(
The values of all parameters
)
Output a bundle containing the values of all parameters in a patch. See  allparams .

'info'
(
Comprehensive info about all parameters.
)
Output a bundle containing comprehensive info about all parameters in a patch. See  info .

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Then bang message will cause param.osc to output OSC according to the outputmode.

### anything

param.osc accepts normal Max messages that represent OSC, for example: /param/live.gain~ -18.

### FullPacket

An OSC packet containing messages to be dispatched to parameters in the patch.

### allparams

Generate an OSC bundle containing the values of every parameter in a patch.

### info

Generate an OSC bundle containing comprehensive info about every parameter in the patch, for example the long name, short name, minimum, maximum, etc.

### osc\_packet

TEXT\_HERE

### param

Generate an OSC bundle containing the value of the most recently changed parameter.

### set

Dispatches OSC to parameters without triggering output from param.osc or UDP if enabled.

## See Also

| Name | Description |
| --- | --- |
| [osc.codebox](https://docs.cycling74.com/reference/osc.codebox) | Display OSC packets as Dictionaries |

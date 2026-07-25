---
type: ableton
name: "live.param~"
summary: "Generate an MSP signal from a parameter value."
signal: true
url: "https://docs.cycling74.com/reference/live.param~/"
package: "Max for Live"
see_also: ["live.observer", "live.remote~"]
---
# live.param~

Generate an MSP signal from a parameter value.

## Description

[live.param~](https://docs.cycling74.com/reference/live.param~) produces a signal with the current value of a parameter.

## Arguments

### parameter-name[parameter-name] optional

The [live.param~](https://docs.cycling74.com/reference/live.param~) object takes as an argument the name of the parameter that you wish to monitor.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

The current value of the parameter is output as a value at signal rate.

## See Also

| Name | Description |
| --- | --- |
| [live.observer](https://docs.cycling74.com/reference/live.observer) | Monitor changes in Live objects |
| [live.remote~](https://docs.cycling74.com/reference/live.remote~) | Realtime control of parameters in Ableton Live and Max for Live. |

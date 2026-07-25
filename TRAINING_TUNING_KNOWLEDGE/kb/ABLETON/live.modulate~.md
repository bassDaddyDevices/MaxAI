---
type: ableton
name: "live.modulate~"
summary: "Modulate Ableton Live and Max for Live Parameters"
signal: true
url: "https://docs.cycling74.com/reference/live.modulate~/"
package: "Max for Live"
see_also: ["JS API", "Live API Overview", "Creating Devices that use the Live API", "Live Object Model", "live.remote~", "live.object", "live.path", "live.map", "live.observer"]
---
# live.modulate~

Modulate Ableton Live and Max for Live Parameters

## Description

The [live.modulate~](https://docs.cycling74.com/reference/live.modulate~) object enables you to modulate the value of Live parameters in realtime using signal objects. To understand more about Live's parameters, look up the DeviceParameter Object Class in the [Live Object Model](https://docs.cycling74.com/userguide/m4l/live_api_overview#live-object-model).

#### Discussion

[live.modulate~](https://docs.cycling74.com/reference/live.modulate~) modulates a valid Live parameter by sending an identifier such as  id 3  to the right inlet. A signal to the left inlet within the range -1 to 1 modulates that parameter.

The input range is mapped to the full range of the mapped parameter. This means that for a 'bipolar' parameter, a signal value of 1 will modulate the current base value by the maximum - minimum. For example, if the current value is 50 and the minimum and maximum are 0 and 100 respectively and the modulation signal is 1, the resulting modulated value would be 50 + 100. The result is then clamped to the minimum and maximum.

For unipolar parameters, the input range of -1 to 1 is interpreted as a percentage of the range between the minimum and current value. For example, if the minimum is 0 and the current value is 50, a modulation signal value of 0.0 would result in a modulated parameter value of 25 (halfway between the current and minimum). A modulation signal value of -1 would result in a modulated parameter value of 0.

See the [live.modulate~](https://docs.cycling74.com/reference/live.modulate~) help patch for more information on how scaling and parameter modulation types work together to change the behaviour of the object.

In this sense, it is similar to [live.remote~](https://docs.cycling74.com/reference/live.remote~), however, [live.modulate~](https://docs.cycling74.com/reference/live.modulate~) does not take over control of the parameter it is modulating. Instead, the current value acts as a 'nominal' reference point that can be changed, with the input signal applying an offset to that reference.

To stop modulating a parameter, send an  id 0  message to the right inlet of [live.modulate~](https://docs.cycling74.com/reference/live.modulate~).

## Arguments

None.

## Attributes

### depth[float]

The [live.modulate~](https://docs.cycling74.com/reference/live.modulate~) object has an input range of -1 to 1 which maps onto the full range of the modulated parameter.

You can control the depth of the modulation with the depth attribute. In other words, you can constrain the modulation to a smaller amount than the full range, expressed as a depth amount between 0 and 1.

### smoothing[float]

Set the ramp time that is used for each incoming event. This also performs an automatic downsampling of any signal you send in. For example, a smoothing value of 1 ms will downsample the signal to 1 ms and send ramp events which output a linear approximation of the initial signal. This attribute defaults to 1 ms.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

An integer number value received in the left inlet will be applied to the selected Live parameter (DeviceParameter Object), if any, at the beginning of the next audio buffer, or at the end of a pending ramp (see smoothing).

Arguments:

- value
  [int]

### float

A floating point number value received in the left inlet will be applied to the selected Live parameter (DeviceParameter Object), if any, at the beginning of the next audio buffer, or at the end of a pending ramp (see smoothing).

Arguments:

- value
  [float]

### list

Start a ramp with a list of two floats, similar to the [line~](https://docs.cycling74.com/reference/line~) object. Sending in “1 500” means that the value 1 will be reached in 500 ms, starting at the current value. New ramps will always override the current ramp, so if you want to cut short a ramp, send another value.

Arguments:

- target-value
  [float]
- delta-time
  [number]

### getid

The mapped object's id is sent from the outlet, preceded by the word  id . If there is no mapped object,  id 0  will be sent.

### id

In right inlet: Sets the selected Live object. The message has no effect if the id is not a parameter (DeviceParameter Object).

Arguments:

- parameter id
  [int]

### signal

Signal input values received in the left inlet will be applied to the selected parameter (DeviceParameter Object), if any, in realtime.

## Inspector

### Persistence

The [live.modulate~](https://docs.cycling74.com/reference/live.modulate~) object has a special entry in its inspector labelled "Use Persistent Mapping". This setting, when enabled, causes the  id  associated with the object to persist when the Live document is saved and restored, and when the Max Device is moved between the Live application and the Max editor, or within the Live Set. Beginning in Live 8.2.2, Live API ids remain persistent between launches of Live, which in conjunction with the  Persistence  feature of [live.modulate~](https://docs.cycling74.com/reference/live.modulate~), [live.object](https://docs.cycling74.com/reference/live.object), [live.observer](https://docs.cycling74.com/reference/live.observer) and [live.remote~](https://docs.cycling74.com/reference/live.remote~), makes it possible to create simpler devices which retain their association with elements in the Live user interface.

## See Also

| Name | Description |
| --- | --- |
| [JS API](https://appdocs.cycling74.com/apiref/js) | JS API |
| [Live API Overview](https://docs.cycling74.com/userguide/m4l/live_api_overview) | Live API Overview |
| [Creating Devices that use the Live API](https://docs.cycling74.com/userguide/m4l/live_api) | Creating Devices that use the Live API |
| [Live Object Model](https://appdocs.cycling74.com/apiref/lom) | Live Object Model |
| [live.remote~](https://docs.cycling74.com/reference/live.remote~) | Realtime control of parameters in Ableton Live and Max for Live. |
| [live.object](https://docs.cycling74.com/reference/live.object) | Perform operations on Live objects |
| [live.path](https://docs.cycling74.com/reference/live.path) | Navigate to objects in the Live application |
| [live.map](https://docs.cycling74.com/reference/live.map) | Simplify the process of selecting Live interface elements for use with the Live API. |
| [live.observer](https://docs.cycling74.com/reference/live.observer) | Monitor changes in Live objects |

---
type: ableton
name: "live.remote~"
summary: "Realtime control of parameters in Ableton Live and Max for Live."
signal: true
url: "https://docs.cycling74.com/reference/live.remote~/"
package: "Max for Live"
see_also: ["JS API", "Live API Overview", "Creating Devices that use the Live API", "Live Object Model", "live.object", "live.observer", "live.path", "live.modulate~"]
---
# live.remote~

Realtime control of parameters in Ableton Live and Max for Live.

## Description

The
[live.remote~](https://docs.cycling74.com/reference/live.remote~)
object allows you to remotely control parameters in Ableton Live and Max for Live in realtime.
To understand more about Live's parameters, look up the DeviceParameter Object Class in the
[Live Object Model](https://docs.cycling74.com/userguide/m4l/live_api_overview#live-object-model)
.

#### Discussion

A parameter in Live and Max for Live is selected using
[live.path](https://docs.cycling74.com/reference/live.path) or
[live.map](https://docs.cycling74.com/reference/live.map)
and its id is sent to the right inlet of
[live.remote~](https://docs.cycling74.com/reference/live.remote~)
. An example path of a DeviceParameter is
 live\_set master\_track mixer\_device volume
. Alternatively, you can get the path to a parameter in Ableton Live's interface by right-clicking a parameter and selecting "Copy LOM Path" in the context-menu (available only in Ableton Live 12).

Integer or float values are sent to the left inlet of
[live.remote~](https://docs.cycling74.com/reference/live.remote~)
, as messages or as an audio signal. The values are applied sample-accurately
(if sent by the audio thread of Max) with a constant latency of a single
audio buffer.

A parameter is disabled in Live while it is controlled by a
[live.remote~](https://docs.cycling74.com/reference/live.remote~)
, just as if it were controlled by a Macro parameter (but without the green
dot). This means that any parameter automation is disabled and the
value in the Live set is not changed. Additionally, no undo steps are created. The
envelopes remain active. To stop remote-controlling a device parameter and to
re-enable it, send
 id 0
to the right inlet of
[live.remote~](https://docs.cycling74.com/reference/live.remote~)
.

## Arguments

None.

## Attributes

### smoothing[float]

Set the ramp time that is used for each incoming event. This also performs a temporal downsampling of any signal you send in.
For example, a smoothing value of 1 ms will sample the incoming signal every 1 ms and send ramp events which output a linear approximation of the signal. This attribute defaults to 1 ms.

### normalized[int]

Toggles the
[live.remote~](https://docs.cycling74.com/reference/live.remote~)
object's normalized mode, which automatically scales the input values to the target parameter range. When the normalized attribute is set to 1,
sending a signal or values in the range 0 to 1 to [live.remote~](https://docs.cycling74.com/reference/live.remote~) will automatically scale the values to the range of the receiving parameter.
If the normalized attribute is set to 0, automatic scaling is disabled. You will need to provide values between the minimum and maximum of the parameter in order to control it.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Inlets

### Left inlet

value (signal/float)
Sets the value of the parameter object specified by  id  in the right
inlet. For the valid range, refer to the min and max properties of the
target parameter. The value curve is linear to the parameter's GUI
control in Live.

### Right inlet

id
 *nn*
Sets object  id  in the format
id
 *nn*
to select the target parameter (DeviceParameter Object) in Live and Max for Live to control.

 id 0
means no object, i.e. the remote stops controlling the target parameter. This is also the initial state.

## Messages

### float

A floating point number value received in the left inlet will be
applied to the selected Live parameter (DeviceParameter Object), if any, at the beginning of the next audio buffer, or at the end of a pending ramp (see smoothing).

Arguments:

- value
  [float]

### int

An integer number value received in the left inlet will be applied to
the selected Live parameter (DeviceParameter Object), if any, at the beginning of the next audio buffer, or at the end of a pending ramp (see smoothing).

Arguments:

- value
  [int]

### list

Start a ramp with a list of two floats, similar to the [line~](https://docs.cycling74.com/reference/line~) object. Sending in “1 500” means that the value 1 will be reached in 500 ms,
starting at the current value. New ramps will always override the current ramp, so if you want to cut short a ramp, send another value.

Arguments:

- target-value
  [float]
- delta-time
  [number]

### signal

Signal input values received in the left inlet will be applied to the
selected parameter (DeviceParameter Object), if any, in realtime.

### id

In right inlet: Sets the selected object. The message has
no effect if the id is not a parameter (DeviceParameter Object).

Arguments:

- parameter id
  [int]

### getid

The mapped object's id is sent from the outlet, preceded by the word  id . If there is no mapped object,  id 0  will be sent.

## Inspector

### Persistence

The
[live.remote~](https://docs.cycling74.com/reference/live.remote~)
object has a special entry in its inspector labeled "Use Persistent
Mapping". This setting, when enabled, causes the
 id
associated with the object, in this case the id of the parameter, to persist when the Ableton Live Set is saved
and restored, and when the Max Device is moved between the Live
application and the Max editor, or within the Live Set. Beginning in
Live 8.2.2, Live API ids remain persistent between launches of Live,
which in conjunction with the
 Persistence
feature of
[live.object](https://docs.cycling74.com/reference/live.object)
,
[live.observer](https://docs.cycling74.com/reference/live.observer)
and
[live.remote~](https://docs.cycling74.com/reference/live.remote~)
, makes it possible to create simpler devices which retain their
association with elements in the Ableton Live user interface.

## See Also

| Name | Description |
| --- | --- |
| [JS API](https://appdocs.cycling74.com/apiref/js) | JS API |
| [Live API Overview](https://docs.cycling74.com/userguide/m4l/live_api_overview) | Live API Overview |
| [Creating Devices that use the Live API](https://docs.cycling74.com/userguide/m4l/live_api) | Creating Devices that use the Live API |
| [Live Object Model](https://appdocs.cycling74.com/apiref/lom) | Live Object Model |
| [live.object](https://docs.cycling74.com/reference/live.object) | Perform operations on Live objects |
| [live.observer](https://docs.cycling74.com/reference/live.observer) | Monitor changes in Live objects |
| [live.path](https://docs.cycling74.com/reference/live.path) | Navigate to objects in the Live application |
| [live.modulate~](https://docs.cycling74.com/reference/live.modulate~) | Modulate Ableton Live and Max for Live Parameters |

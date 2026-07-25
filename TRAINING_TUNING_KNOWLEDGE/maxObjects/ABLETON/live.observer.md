---
type: ableton
name: "live.observer"
summary: "Monitor changes in Live objects"
signal: false
url: "https://docs.cycling74.com/reference/live.observer/"
package: "Max for Live"
see_also: ["JS API", "Live API Overview", "Creating Devices that use the Live API", "Live Object Model", "live.path", "live.object", "live.remote~"]
---
# live.observer

Monitor changes in Live objects

## Description

[live.observer](https://docs.cycling74.com/reference/live.observer)
is used to listen to changes in the values of properties of Live
objects. This object works in conjunction with the
[live.path](https://docs.cycling74.com/reference/live.path)
object, which sends
id
 *nn*
messages into the right inlet of
[live.observer](https://docs.cycling74.com/reference/live.observer)
.

After an object id and property is specified, its value is sent out the
left outlet. From this moment on, the value is sent on each change of the
property ('notification') as well as in response to bang messages.

The left outlet is reserved for value messages, all other output is sent to
the right outlet.

Not all properties can be observed, please consult the
[Live Object Model](https://docs.cycling74.com/userguide/m4l/live_api_overview#live-object-model)
to see which can. Also, it is not possible to modify the live set from a
notification, i.e. while you are receiving a value message spontaneously
sent by a
[live.observer](https://docs.cycling74.com/reference/live.observer)
's outlet.

Besides properties, it is also possible to observer children of Live
objects. Their values are object ids or lists of them.

 *Note: The Live API runs in the main thread in Live, and all messages to and from the API are automatically deferred.*

## Arguments

### property[symbol] optional

Specify a property or child name as argument to
[live.observer](https://docs.cycling74.com/reference/live.observer)
.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Inlets

### Left inlet

Gets all command messages described below.

### Right inlet

Gets object id message
id
 *nn*
to select the object to operate upon. In response to the id message,
the current value of the property, if a property was already selected,
is sent out the left outlet.

 id 0
means no object, i.e. all messages to the left inlet are ignored, which
is also the initial state.

## Outlets

### Left outlet

Sends the current value of the selected property of the selected
object. The value type depends on the property, as described in the Live
Object Model, and may be int, float, symbol,
id
 *nn*
or lists of ids.

### Right outlet

Sends responses to
 getproperty
,
 gettype
,
 getid
.

## Messages

### property

Arguments:

 *property*
the name of a property of the current object

Operation:

Selects the property to be observed. Outputs the current value to the
left outlet if a proper Live object is selected.

Remark:

Not all properties can be observed.

The types of the properties are given in the Live Object Model.

| Outlet | Output | Example |
| --- | --- | --- |
| left | *value* | 3.1415926 |

Arguments:

- property
  [symbol]

### property

Arguments:

 *child*
the name of a child of the current object

Operation:

Selects the child id to be observed. Outputs the id (or "id 0") to the
left outlet if the selected Live object has such a child.

Remark:

Not all children can be observed.

| Outlet | Output | Example |
| --- | --- | --- |
| left | id  *nn* | id 17 |

Arguments:

- child
  [symbol]

### property

Arguments:

 *child*
the name of a child list of the current object

Operation:

Selects the child list to be observed. Outputs the id list (or nothing)
to the left outlet if the selected Live object has such a list child.

Remark:

Not all child lists can be observed.

| Outlet | Output | Example |
| --- | --- | --- |
| left | id  *nn*  ... id  *mm* | id 4 id 5 |

Arguments:

- list-child
  [symbol]

### getproperty

Operation:

Sends the name of the selected property (or child resp. list-child) out
the right outlet.

| Outlet | Output | Example |
| --- | --- | --- |
| right | property  *property*  or   property  *child* | property name or   property selected\_track |

### gettype

Operation:

Sends the type of currently observed property or child to the right
outlet. The types of the properties and children are given in the Live
Object Model.

For list-children it just sends
 type tuple
, w/o further type information.

| Outlet | Output | Example |
| --- | --- | --- |
| right | type  *property-type*  or   type  *object-type* | type int  or    type Track |

### getid

Operation:

Sends the id of the currently observed Live object to the right outlet.

| Outlet | Output | Example |
| --- | --- | --- |
| right | id  *nn* | id 20 |

### bang

Operation:

Sends current value of selected property of current object to the left
outlet. Does nothing if no property or no Live object is selected or if
they don't match.

| Outlet | Output | Example |
| --- | --- | --- |
| left | *value* | Drums |

### id nn

Operation:

Sets the current object. The message has the same effect if sent to
both the right or the left inlet. For clarity it is suggested to always
use the right inlet to supply the object id.

- no output -

## Inspector

### Persistence

The
[live.observer](https://docs.cycling74.com/reference/live.observer)
object has a special entry in its inspector labelled "Use Persistent
Mapping". This setting, when enabled, causes the
 id
associated with the object to persist when the Live document is saved
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
association with elements in the Live user interface.

## See Also

| Name | Description |
| --- | --- |
| [JS API](https://appdocs.cycling74.com/apiref/js) | JS API |
| [Live API Overview](https://docs.cycling74.com/userguide/m4l/live_api_overview) | Live API Overview |
| [Creating Devices that use the Live API](https://docs.cycling74.com/userguide/m4l/live_api) | Creating Devices that use the Live API |
| [Live Object Model](https://appdocs.cycling74.com/apiref/lom) | Live Object Model |
| [live.path](https://docs.cycling74.com/reference/live.path) | Navigate to objects in the Live application |
| [live.object](https://docs.cycling74.com/reference/live.object) | Perform operations on Live objects |
| [live.remote~](https://docs.cycling74.com/reference/live.remote~) | Realtime control of parameters in Ableton Live and Max for Live. |

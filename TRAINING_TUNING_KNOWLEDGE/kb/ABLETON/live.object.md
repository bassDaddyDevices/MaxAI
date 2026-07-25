---
type: ableton
name: "live.object"
summary: "Perform operations on Live objects"
signal: false
url: "https://docs.cycling74.com/reference/live.object/"
package: "Max for Live"
see_also: ["JS API", "Live API Overview", "Creating Devices that use the Live API", "Live Object Model", "live.path", "live.observer", "live.remote~"]
---
# live.object

Perform operations on Live objects

## Description

[live.object](https://docs.cycling74.com/reference/live.object) is used to perform operations on Live objects that have been selected using the [live.path](https://docs.cycling74.com/reference/live.path) object. These operations include retrieving information on the current state of the Live API and setting values to control Live.

 *Note: The Live API runs in the main thread in Live, and all messages to and from the API are automatically deferred.*

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Inlets

### Left inlet

Gets all command messages described below.

### Right inlet

Gets object id message  id  *nn*   to select the object to operate upon.

 id 0  means no object, i.e. all messages to the left inlet are ignored, which is also the initial state.

## Outlets

### Left outlet

Sends responses to  get ,  call ,  bang ,  getid ,  getinfo ,  gettype  and  getpath .

## Messages

### getid

The current object's id is sent from the outlet, preceded by the word  id . If there is no current object,  id 0  will be sent.

### id nn

Operation:

Sets the current object. The message has the same effect if sent to both the right or the left inlet. For clarity it is suggested to always use the right inlet to supply the object id.

- no output -

### getpath

Operation:

Sends the canonical path of current object.

| Outlet | Output | Example |
| --- | --- | --- |
| left | path  *path* | path live\_set return\_tracks 0 |

### gettype

Operation:

Sends the type (a.k.a. class) of the current object.

| Outlet | Output | Example |
| --- | --- | --- |
| left | type  *object-type* | type Song |

### getinfo

Operation:

Sends a description of the current object.

Output to left outlet (most lines may occur multiple times, last line is  info done ):

info id  *nn*
info type  *object-type*
info description  *description*
info children  *list-child*   *object-type*
info child  *child*   *object-type*
info property  *property*   *property-type*
info function  *function*
info done

Example output:

info id 3

info type Scene

info description This class represents a series of ClipSlots in Lives session view matrix

info children clip\_slots ClipSlot

info child canonical\_parent Song

info property is\_triggered bool

info property name symbol

info property tempo float

info function fire

info function fire\_as\_selected

info function set\_fire\_button\_state

info done

### bang, getid

Operation:

Sends the id of the current Live object to the outlet.

| Outlet | Output | Example |
| --- | --- | --- |
| left | id  *nn* | id 5 |

### call

Arguments:

 *function*  the name of the function

 *parameter-list*  an optional list of parameters

Operation:

Calls the given function of the current object, optionally with a list of parameters.

Remark:

The types of the parameters are given in the Live Object Model.

| Outlet | Output | Example |
| --- | --- | --- |
| left | *function*  *value* | get\_beats\_loop\_length 004.00.00.000 |

Arguments:

- function
  [symbol]
- parameter-list
  [list of different types]

### set

Arguments:

 *list-child*  the name of a list child of the current object

 id  *nn* ... id  *mm*   the new list of objects for the given name

Operation:

Set the list child to contain the given ids.

Remark:

Not all children can be set.

- no output -

Arguments:

- list-child
  [symbol]
- id nn ... id mm
  [id-list]

### set

Arguments:

 *child*  the name of a child of the current object

 id  *nn*   the new child object for this name

Operation:

Set the child name to point to the given child.

Remark:

Not all children can be set.

- no output -

Arguments:

- child
  [symbol]
- id nn
  [id]

### set

Arguments:

 *list-property*  the name of a list property of the current object

 *value-list*  the new values for the property

Operation:

Set the given list property to the value list.

Remark:

Not all properties can be set. The types of the properties are given in the Live Object Model.

- no output -

Arguments:

- list-property
  [symbol]
- value-list
  [various types]

### set

Arguments:

 *property*  the name of a single-value property of the current object

 *value*  the new value for the property

Operation:

Set the value of given property of the current object.

Remark:

Not all properties can be set. The types of the properties are given in the Live Object Model.

- no output -

Arguments:

- property
  [symbol]
- value
  [various types]

### get

Arguments:

 *list-child*  the name of a list-child of the current object

Operation:

Sends the ids of the elements of the list-child of the current object.

| Outlet | Output | Example |
| --- | --- | --- |
| left | *list-child*  id  *nn* ... id  *mm* | clip\_slots id 4 id 5 |

Arguments:

- list-child
  [symbol]

### get

Arguments:

 *child*  the name of a child of the current object

Operation:

Sends the id of the child of the current object.

| Outlet | Output | Example |
| --- | --- | --- |
| left | *child*  id  *nn* | master\_track id 10 |

Arguments:

- child
  [symbol]

### get

Arguments:

 *list-property*  the name of a list property of the current object

Operation:

Sends the list of values of given property of the current object.

| Outlet | Output | Example |
| --- | --- | --- |
| left | *list-property*  *list of values* | input\_routings Ext. In Max Resampling 1-Audio A-Return Master No Input |

Arguments:

- list-property
  [symbol]

### get

Arguments:

 *property*  the name of a single-value property of the current object

Operation:

Sends value of given property of the current object.

| Outlet | Output | Example |
| --- | --- | --- |
| left | *property*  *value* | name base solo 3 |

Arguments:

- property
  [symbol]

## Inspector

### Persistence

The [live.object](https://docs.cycling74.com/reference/live.object) object has a special entry in its inspector labelled "Use Persistent Mapping". This setting, when enabled, causes the  id  associated with the object to persist when the Live document is saved and restored, and when the Max Device is moved between the Live application and the Max editor, or within the Live Set. Beginning in Live 8.2.2, Live API ids remain persistent between launches of Live, which in conjunction with the  Persistence  feature of [live.object](https://docs.cycling74.com/reference/live.object), [live.observer](https://docs.cycling74.com/reference/live.observer) and [live.remote~](https://docs.cycling74.com/reference/live.remote~), makes it possible to create simpler devices which retain their association with elements in the Live user interface.

## See Also

| Name | Description |
| --- | --- |
| [JS API](https://appdocs.cycling74.com/apiref/js) | JS API |
| [Live API Overview](https://docs.cycling74.com/userguide/m4l/live_api_overview) | Live API Overview |
| [Creating Devices that use the Live API](https://docs.cycling74.com/userguide/m4l/live_api) | Creating Devices that use the Live API |
| [Live Object Model](https://appdocs.cycling74.com/apiref/lom) | Live Object Model |
| [live.path](https://docs.cycling74.com/reference/live.path) | Navigate to objects in the Live application |
| [live.observer](https://docs.cycling74.com/reference/live.observer) | Monitor changes in Live objects |
| [live.remote~](https://docs.cycling74.com/reference/live.remote~) | Realtime control of parameters in Ableton Live and Max for Live. |

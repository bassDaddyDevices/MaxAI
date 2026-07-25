---
type: ableton
name: "live.path"
summary: "Navigate to objects in the Live application"
signal: false
url: "https://docs.cycling74.com/reference/live.path/"
package: "Max for Live"
see_also: ["JS API", "Live API Overview", "Creating Devices that use the Live API", "Live Object Model", "live.object", "live.observer", "live.remote~"]
---
# live.path

Navigate to objects in the Live application

## Description

[live.path](https://docs.cycling74.com/reference/live.path) is used to navigate to Live objects on which the [live.object](https://docs.cycling74.com/reference/live.object), [live.observer](https://docs.cycling74.com/reference/live.observer) and [live.remote~](https://docs.cycling74.com/reference/live.remote~) objects operate. The navigation is purely path-based and is independent of the objects currently present in Live (navigating to a nonexistent path will result in the message  id 0  being sent out the left and middle outputs rather than an error message).

 *Note: The Live API runs in the main thread in Live, and all messages to and from the API are automatically deferred.*

## Arguments

### initial path[symbol] optional

Specify an initial path as argument to [live.path](https://docs.cycling74.com/reference/live.path), without any quotes.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Inlets

### Single inlet

Gets all command messages described below.

## Outlets

### Left outlet

Sends the message  id  *nn*   in response to a  goto ,  bang  or  getid  message  **only** . Use this outlet if you want to keep working with a particular object determined at goto or bang time, even if its position in Live changes.

For example, consider a fresh Live set with two tracks, "1 Audio" as the leftmost track and "2 MIDI" to the right of it. If you navigate to the "2 MIDI" track ( goto live\_set tracks 1 ) and you create a new Audio track between "1 Audio" and "2 MIDI", your original MIDI track now would be at  live\_sets tracks 2 . But since the id number of the MIDI track would stay the same and no new id is sent out to the left outlet, the live.xxx objects connected to this outlet keep working with the MIDI track, until you sent another goto.

### Middle outlet

Sends  id  *nn*   whenever the id of the object at the current path changes (because the current path is changed or because the object at this place in Live has changed, for example. Use this outlet if you want to keep working with the same path, whatever object there might be. This outlet is very useful for things like  live\_set view detail\_clip .

Consider the example above. If the live.xxx objects would be connected to the middle outlet of [live.path](https://docs.cycling74.com/reference/live.path), then they would work with the newly created audio track.

The spontaneous sending of object ids out of the middle outlet, i.e. without an inlet message causing it, but caused by a change in Live, is called a notification.

 **Note:**  It is not possible to modify the Live set from such a notification.

### Right outlet

Sends responses to  getpath ,  getchildren ,  getcount .

## Messages

### getid

TEXT\_HERE

### getcount

Arguments:

 child-name  is the name of a child of the object at the current path.

Operation:

Sends a count message to the right outlet, containing the name of the child and its number of entries.

Remarks:

The given child must be a list.

| Outlet | Output | Example |
| --- | --- | --- |
| right | count  *child-name*   *count* | count clip\_slots 2 |

Arguments:

- child-name
  [symbol]

### getchildren

Operation:

Sends a list of children of the object at the current path, if any, to the right outlet.

Remarks:

The child names are the same names as used in the goto message.

| Outlet | Output | Example |
| --- | --- | --- |
| right | children  *list-of-child-names* | children canonical\_parent clip\_slots |

### getpath

Operation:

Sends a path message with the current path to the right outlet.

| Outlet | Output | Example |
| --- | --- | --- |
| right | path  *path* | path live\_set scenes 1 |

### bang, getid

Operation:

Sends the id of the object at the current path to left and middle outlets. Sends  id 0  if there is no object at the current path.

| Outlet | Output | Example |
| --- | --- | --- |
| left | id  *nn* | id 5 |
| middle | id  *nn* | id 5 |

### path

Same as  goto  but limited to absolute paths that start with a root object name like  live\_app ,  live\_set ,  this\_device  or  control\_surfaces  *N*  .

Arguments:

- absolute-path
  [symbol]

### goto

Arguments:

  *path*   is an absolute path (starts with live\_app, live\_set or control\_surfaces  *N* ) or a relative path, or  up

Operation:

Navigates to given path and sends id of the object at that path out the left and middle outlets. If there is no object at the path,  id 0  is sent.

Remarks:

You cannot go to a list property, only to one of its members.

invalid:  goto live\_set scenes
correct:  goto live\_set scenes 3

| Outlet | Output | Example |
| --- | --- | --- |
| left | id  *nn* | id 5 |
| middle | id  *nn* | id 5 |

Arguments:

- path
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [JS API](https://appdocs.cycling74.com/apiref/js) | JS API |
| [Live API Overview](https://docs.cycling74.com/userguide/m4l/live_api_overview) | Live API Overview |
| [Creating Devices that use the Live API](https://docs.cycling74.com/userguide/m4l/live_api) | Creating Devices that use the Live API |
| [Live Object Model](https://appdocs.cycling74.com/apiref/lom) | Live Object Model |
| [live.object](https://docs.cycling74.com/reference/live.object) | Perform operations on Live objects |
| [live.observer](https://docs.cycling74.com/reference/live.observer) | Monitor changes in Live objects |
| [live.remote~](https://docs.cycling74.com/reference/live.remote~) | Realtime control of parameters in Ableton Live and Max for Live. |

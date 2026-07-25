---
type: max
name: "node.codebox"
summary: "Control a local Node.js process from Max"
signal: false
url: "https://docs.cycling74.com/reference/node.codebox/"
package: "Node for Max"
see_also: ["node.script", "v8", "v8ui", "v8.codebox"]
---
# node.codebox

Control a local Node.js process from Max

## Description

Control a local Node.js process from Max, using a UI object for display and editing of Javascript. Messages preceded by  script
control the lifecycle of the Node script (start to start, stop to stop). Other messages will be sent
to the process directly.

#### Discussion

Node is a JavaScript framework for writing applications. To learn more about Node,
visit their [website](https://nodejs.org/).

Some Max patchers will want to do things that are difficult to do from Max. For example, it might be desirable to
pull some data from a web address, then parse and analyze that data to generate synthesis parameters. Or, one might
want to watch a local folder for files, triggering some action inside Max when the contents of that folder change.
For these kinds of long-running tasks, which may require some kind of complex, persistent state, Node can be a very
useful tool.

Another reason to use Node is to take advantage of the wealth of open source modules registered with the Node Package
Manager (NPM). These packages contain libraries of JavaScript code for doing everything from parsing dates, to training
neural nets, to running a web server, to writing chord progressions and much more. Node for Max helps make these resources
available to Max programmers.

To communicate with Max, the Node script uses the "max-api" Node module. This set of functions simplifies the process
of sending data between the Node application and Max. This API can attach handlers to Max messages; parse Max dictionaries
into JSON objects; and read, update and set named dictionaries within Max. For examples on how to use this API, see the
code examples included with the Node for Max package, as well as the API documentation at
[https://docs.cycling74.com/apiref/nodeformax](https://appdocs.cycling74.com/apiref/nodeformax)

The [node.script](https://docs.cycling74.com/reference/node.script) object refers to a JavaScript source file, so it has some overlap with the [js](https://docs.cycling74.com/reference/js) object. However, there
are some important differences. Unlike [js](https://docs.cycling74.com/reference/js), [node.script](https://docs.cycling74.com/reference/node.script) runs in a separate process. This has some benefits when
it comes to parallelization, since Max and the Node script can run on separate cores. The Node script is a full application, which
means that once it's started it has its own run loop, and has total freedom with respect to what code it can run when. It responds to
events just like any other application, and can even have its own Graphical User Interface (GUI). Messages sent to the Node script will
be executed asynchronously, since Node and Max are running in separate processes. Finally, scripts running with [node.script](https://docs.cycling74.com/reference/node.script) have
access to the full Node library for network communication, file I/O and more.

## Arguments

### script[symbol] optional

Entry point for your Node application. Send [node.script](https://docs.cycling74.com/reference/node.script) the  start  message to start running
this script.

## Attributes

### bgcolor[4 floats]

Sets the color for the object's background frame.

### linenumbers[int]: 1

Show lefthand column containing line numbers for non empty lines.

### linenumberwidth[int32]: 20

Set the width of lefthand line number column in pixels.

### margin[int32]: 4

Set the width of the left and righthand margin in pixels

### textcolor[4 floats]

The default textcolor (typically overridden by syntax coloring)

### args[16 atoms]

Arguments to be passed to the Node script on launch. Note that this attribute is only meaningful in conjunction
with the autostart attribute. Otherwise, node.script will use the arguments supplied with the
 start  message.

### autostart[int]

Start the Node script automatically, without  script start

### defer[int]

When false (the default), messages from Node will be processed on the scheduler thread,
at the same priority as other Max messages. Activating defer will move processing to the back of
the low priority queue, same as the defer attribute on [metro](https://docs.cycling74.com/reference/metro)

### log\_path[symbol]

Debug only: specify a path to which a debug log will be written, for example ~/Documents/debug.txt

### node\_bin\_path[symbol]

Override the built in Node executable. Optional. Only use this attribute if you'd like to use a different
Node executable from the one included with Max for Node (possibly you want to use an older version for
compatibility reasons).

### npm\_bin\_path[symbol]

Override the built in NPM executable. Optional. Only use this attribute if you'd like to use a different NPM
executable from the one included with Max for Node (possibly you want to use an older version for
compatibility reasons).

### pm\_path[symbol]

Debug only: specify the path to the process manager script

### restart[int]: 1

When restart is enabled (default) [node.script](https://docs.cycling74.com/reference/node.script) will restart automatically after a node code
crash inside a handler callback. If restart is disabled, automatic restarts are suppressed.

### running[int] read-only

Read only: 1 if there is a running Node process, 0 otherwise

### watch[int]

True if [node.script](https://docs.cycling74.com/reference/node.script) should relaunch the Node script automatically when the source file changes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Send a bang message to the running Node script

### anything

Send a message of any length to the running Node script. Can also be used to send dictionaries, which will automatically
be converted to JSON.

Arguments:

- anything
  [list]

### api

Launch the JS documentation

### (mouse)

Double-click to reveal the Node script

### reveal

Reveal the Node script in Finder or Explorer

### script

Messages beginning with the symbol  script  are used to start, stop and query the Node process. The symbol
following  script  determines how the message will be handled. Subsequent arguments are passed to that handler, if applicable.

npm - Interface with the Node Package Manager (npm). If the node script is in a node package, then this message can be used
to (for example) install module dependencies listed in package.json into node\_modules. The npm message assumes that
package.json is in the same folder as the script specified as the first argument to node.script. Symbols following npm will be
sent as arguments to npm (for example  script npm install  will run `npm install`).

processStatus - Get a dictionary describing the status of the running Node process (if any)

reboot - Rarely used. Reboot the Node process manager if it has crashed.

running - Returns 1 if there is a running node process, and 0 otherwise

status - Returns a dictionary with information about the installed version of Node

start - Start running the Node script with the given (optional) arguments. Arguments following  start  will be
available as command line arguments to the Node script.

stop - Stop running the Node script

Arguments:

- arguments
  [list]

### stdin

Send a character stream directly to stdin. Anything sent to [node.script](https://docs.cycling74.com/reference/node.script) after  stdin  will be sent
directly to standard input of the running node script. Note that Max will add a newline character to the end
of whatever message is sent.

Arguments:

- stream
  [list]

## See Also

| Name | Description |
| --- | --- |
| [node.script](https://docs.cycling74.com/reference/node.script) |  |
| [v8](https://docs.cycling74.com/reference/v8) | Execute Javascript (Modern Engine) |
| [v8ui](https://docs.cycling74.com/reference/v8ui) | Javascript user interfaces and graphics (Modern Engine) |
| [v8.codebox](https://docs.cycling74.com/reference/v8.codebox) | Execute Javascript (Modern Engine) |

---
type: jitter
name: "jit.polymovie"
summary: "Manage multiple jit.movie objects"
signal: false
url: "https://docs.cycling74.com/reference/jit.polymovie/"
package: "Jitter Tools"
see_also: ["jit.movie", "jit.playlist"]
---
# jit.polymovie

Manage multiple jit.movie objects

## Description

jit(.gl).polymovie manages multiple [jit.movie](https://docs.cycling74.com/reference/jit.movie) instances and allows for fast file switching
by preloading the files. Use jit.polymovie for matrix output and jit.gl.polymovie for texture output.

## Arguments

### drawto[message] optional

The named drawing context in which to draw (default = none). A named drawing context
is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) or [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) object. If no argument is
provided the object will find a context
[implicitly.](https://docs.cycling74.com/documentation/jitter_gl_contexts.maxvig.xml)

## Attributes

### autorestart[int]

Enable automatic restart to the loop in point when toggling instance playback (default = 0).
When disabled playback continues from last played position.

### cachemode[int]

(EXPERIMENTAL) Enable auto cache feature when viddll is the video engine.

### cache\_sizeauto[float]

(EXPERIMENTAL) Set the auto cache\_size when cachemode is enabled (default = 5)

### cache\_size[float]

Set the cache\_size for all movie instances when viddll is the video engine (default = 0.5).

### drawto[symbol]

Named drawing context used for texture output

### target[int]

The polymovie target-instance that will receive subsequent [jit.movie](https://docs.cycling74.com/reference/jit.movie) messages.
For example  *target 2, play 0*  will tell the second target to play
the first movie file. Targets are activated dynamically by the target attribute.
Active targets will add their movie output name (texture or matrix) to the polymovie
output list. If 3 targets are activated the movie output list will contain 3 matrix or texture names,
e.g.  *jit\_gl\_texture texname1 texname2 texname3* . Sending  *target 0*  will deactivate
all targets except the first.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

Get and set [jit.movie](https://docs.cycling74.com/reference/jit.movie) attributes on the active movie instance. See  play  for more info.

### appendfolder

Load all movie files found from the the folder at path and append to the current movie list.

Arguments:

- path
  [symbol]

### appendmovie

Append movie at path to the end of the movie list.

Arguments:

- path
  [symbol]

### clear

Remove and release resources for all loaded files.

### getdict

Output the movie state dictionary out the third outlet. This dictionary
contains the full list of currently loaded movie files, as well as any
[jit.movie](https://docs.cycling74.com/reference/jit.movie) attributes modified after loading.
See also  readdict  and  writedict .

### play

Play the movie at index (0 based). Playing an instance makes it active and
the recepient of any attributes or playback messages (e.g.  start  and  stop ).

Arguments:

- index
  [int]

### readdict

Read the movie list contents from a dictionary at path.
If no path is given a file dialog is opened.
See  getdict  for more info on polymovie dictionary usage.

Arguments:

- path
  [symbol]

### readfolder

Load all movie files found from the the folder at path, replacing the currently loaded movie list.

Arguments:

- path
  [symbol]

### scrub

Scrub the the active movie playhead. See  play  for more info. The position arg
is between 0 (movie start ) and 1 (movie end).

Arguments:

- position
  [float]

### sendmovies

Set [jit.movie](https://docs.cycling74.com/reference/jit.movie) attributes on all loaded instances.

### start

Start playback on the active movie instance. See  play  for more info.

### stop

Stop playback on the active movie instance. See  play  for more info.

### writedict

Write the movie list contents to a dictionary at path.
If no path is given a file dialog is opened.
See  getdict  for more info on polymovie dictionary usage.

Arguments:

- path
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [jit.movie](https://docs.cycling74.com/reference/jit.movie) | Play a movie file |
| [jit.playlist](https://docs.cycling74.com/reference/jit.playlist) | Play video files |

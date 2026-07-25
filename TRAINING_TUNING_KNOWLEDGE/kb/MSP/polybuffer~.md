---
type: msp
name: "polybuffer~"
summary: "Manage multiple  buffer~ objects"
signal: true
url: "https://docs.cycling74.com/reference/polybuffer~/"
package: "MSP"
see_also: ["buffer~"]
---
# polybuffer~

Manage multiple [buffer~](https://docs.cycling74.com/reference/buffer~) objects

## Description

[polybuffer~](https://docs.cycling74.com/reference/polybuffer~) lets you operate with a group of [buffer~](https://docs.cycling74.com/reference/buffer~) objects. Each [buffer~](https://docs.cycling74.com/reference/buffer~) will be named after [polybuffer~](https://docs.cycling74.com/reference/polybuffer~) first argument and an index (aka for a  polybuffer~ toto  object, each [buffer~](https://docs.cycling74.com/reference/buffer~) will be named toto.N where N is the index).

## Arguments

### name[symbol] optional

Sets the name of the [polybuffer~](https://docs.cycling74.com/reference/polybuffer~) and defines the names of the [buffer~](https://docs.cycling74.com/reference/buffer~). For instance, if the [polybuffer~](https://docs.cycling74.com/reference/polybuffer~) object's name is  *toto* , the [buffer~](https://docs.cycling74.com/reference/buffer~) will be named  *toto.1* ,  *toto.2* ,  *toto.3* .... [polybuffer~](https://docs.cycling74.com/reference/polybuffer~) objects with the same name share the same [buffer~](https://docs.cycling74.com/reference/buffer~).

## Attributes

### embed[int]: 0

Save the buffer references in the patcher, on save. Note: empty buffers will be stored as empty buffer: their size and number of channels will be saved, but not the contents.

### quiet[int]: 0

Suppress the warning when loading multiple patches with [polybuffer~](https://docs.cycling74.com/reference/polybuffer~) with the same name.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (drag)

Drag a sound file and a buffer~ will be added to the list. Drag a folder and the sound files contained in the folder will be loaded in [buffer~](https://docs.cycling74.com/reference/buffer~) objects.

### append

Display a dialog box to choose a sound file to add to [polybuffer~](https://docs.cycling74.com/reference/polybuffer~) or load the sound file specified in argument.

Arguments:

- filename
  [list]

### appendempty

Adds an empty [buffer~](https://docs.cycling74.com/reference/buffer~) of the specified length and channels.

Arguments:

- length ()
  [float]
- channels
  [int]

### clear

Delete every [buffer~](https://docs.cycling74.com/reference/buffer~).

### (mouse)

Double-click on the [polybuffer~](https://docs.cycling74.com/reference/polybuffer~) object in a locked patcher to open a window where you can see information about the buffers.

### dump

Outputs list with the following information: index, buffer name, path of the sound file, length, channel and sampling rate.

### getbufferlist

Outputs the message  bufferlist  followed by the name of the [buffer~](https://docs.cycling74.com/reference/buffer~). When every [buffer~](https://docs.cycling74.com/reference/buffer~) name has been sent out the outlet, the  done  message is sent.

### getcount

Outputs the message  count , followed by the number of [buffer~](https://docs.cycling74.com/reference/buffer~) objects contained in the [polybuffer~](https://docs.cycling74.com/reference/polybuffer~) object.

### getshortname

Outputs the [buffer~](https://docs.cycling74.com/reference/buffer~) name followed by the sound files name without the extension. Outputs  done  when the iteration is finished.

### getsize

Outputs the memory size used by [polybuffer~](https://docs.cycling74.com/reference/polybuffer~) in Bytes.

### open

Open [polybuffer~](https://docs.cycling74.com/reference/polybuffer~) object's window see information about the buffers.

### readfolder

Loads multple sound files from the specified folder. If no argument is provided a dialog box will show up.

Arguments:

- name
  [list]

### send

Sends messages to the [buffer~](https://docs.cycling74.com/reference/buffer~) objects. The index corresponds to the [buffer~](https://docs.cycling74.com/reference/buffer~) index, and an index of 0 send the message to every [buffer~](https://docs.cycling74.com/reference/buffer~). For instance,  send 0 clear  sends the message clear to every [buffer~](https://docs.cycling74.com/reference/buffer~) contained in this [polybuffer~](https://docs.cycling74.com/reference/polybuffer~).

Arguments:

- index
  [int]
- anything
  [list]

### wclose

Close the window editor

### writetofolder

Writes every [buffer~](https://docs.cycling74.com/reference/buffer~) in a folder. If no argument is provided a dialog box will show up.

Arguments:

- name
  [list]

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |

---
type: msp
name: "buffer~"
summary: "Store audio samples"
signal: true
url: "https://docs.cycling74.com/reference/buffer~/"
package: "MSP"
see_also: ["2d.wave~", "buffir~", "cycle~", "groove~", "info~", "lookup~", "peek~", "play~", "poke~", "polybuffer~", "record~", "sfplay~", "sfrecord~", "stretch~", "wave~"]
---
# buffer~

Store audio samples

## Description

Use the [buffer~](https://docs.cycling74.com/reference/buffer~) object as a buffer of memory in which samples are stored to be saved, edited, or referenced.

#### Discussion

The [buffer~](https://docs.cycling74.com/reference/buffer~) object is used in conjunction with many different objects, including [play~](https://docs.cycling74.com/reference/play~) / [groove~](https://docs.cycling74.com/reference/groove~) (plays the buffer), [record~](https://docs.cycling74.com/reference/record~) (records into the buffer), [info~](https://docs.cycling74.com/reference/info~) (reports information about the buffer), [peek~](https://docs.cycling74.com/reference/peek~) (writes into/reads from the buffer like the [table](https://docs.cycling74.com/reference/table) object), [lookup~](https://docs.cycling74.com/reference/lookup~) (uses the buffer for waveshaping), [cycle~](https://docs.cycling74.com/reference/cycle~) (specifies a 512-point waveform), and [wave~](https://docs.cycling74.com/reference/wave~) (specifies a waveform).

## Arguments

### name[symbol] optional

The first argument is a name used by other objects to refer to the [buffer~](https://docs.cycling74.com/reference/buffer~) to access its contents.

For information about using named objects in Max for Live, click [here](https://docs.cycling74.com/userguide/m4l/live_symbols).

### filename[symbol] optional

After the [buffer~](https://docs.cycling74.com/reference/buffer~) object's name, you may type the name of an audio file to load when the [buffer~](https://docs.cycling74.com/reference/buffer~) is created.

### duration[number]ms optional

After the optional filename argument, a duration may be provided, in milliseconds, to set the size of the [buffer~](https://docs.cycling74.com/reference/buffer~), which limits the amount of sound that will be stored in it. (A new duration can be specified as part of a  read  message, however.) If no duration is typed in, the [buffer~](https://docs.cycling74.com/reference/buffer~) has no sample memory. It does not, however, limit the size of an audio file that can be read in.

### channels[int] optional

After the duration, an additional argument may be typed in to specify the number of audio channels to be stored in the [buffer~](https://docs.cycling74.com/reference/buffer~). (This is to tell [buffer~](https://docs.cycling74.com/reference/buffer~) how much memory to allocate initially; however, if an audio file with more channels is read in, [buffer~](https://docs.cycling74.com/reference/buffer~) will allocate more memory for the additional channels.) buffer~ may have an arbitrary number of channels, only limited by the amount of RAM available. By default, [buffer~](https://docs.cycling74.com/reference/buffer~) has one channel.

## Attributes

### chans[int]

The number of channels in the [buffer~](https://docs.cycling74.com/reference/buffer~).

### dither[int]: 0

Enable triangular dithering when writing PCM (integer) files.

Possible values:

0 = 'Off'
(
Apply no dithering when writing PCM files
)
1 = 'Dither'
(
Apply triangular dither (TPDF) when writing PCM files
)
2 = 'Dither + Noise Shaping'
(
Apply triangular dither with noise shaping (HP-TPDF) when writing PCM files
)

### file[symbol]

Alias:
audiofile

Sets the name of the audio file used in the [buffer~](https://docs.cycling74.com/reference/buffer~) object. When the attribute is set, the file will be located and, if found, its contents will be read according to the current size or duration. In other words, setting the file attribute is the same as sending the  read  message rather than the  replace  message.

### filetype[symbol]

The audio file format used by the [buffer~](https://docs.cycling74.com/reference/buffer~) object. The default file type is AIFF.

Possible values:

'aiff'
(
Apple Interchange File Format (default)
)
'wave'
(
WAVE
)
'raw'
(
raw
)
'au'
(
NeXT/Sun
)

### format[symbol]

The bit depth or sample type of the buffer on disk

For backward compatibility, the following numeric valus can be used to set format, in addition to the symbolic names below:

8 - 8-bit integer

16 - 16-bit integer

24 - 24-bit integer

32 - 32-bit integer

Possible values:

'int8'
(
8-bit integer
)
'int16'
(
16-bit integer (default)
)
'int24'
(
24-bit integer
)
'int32'
(
32-bit integer
)
'float32'
(
32-bit floating-point
)
'float64'
(
64-bit floating-point
)
'mulaw'
(
8-bit mu-law encoding
)
'alaw'
(
8-bit a-law encoding
)

### quantization[int]: 0

Select the quantization rule when writing PCM (integer) files.

Possible values:

0 = 'Round'
(
Round when quantizing to integer values.
)
1 = 'Floor'
(
Floor when quantizing to integer values.
)

### samps[int]

The length of the buffer~ expressed in samples.

### size[float]

The length of the buffer~ expressed in milliseconds.

### sr[float]

The sampling rate of the [buffer~](https://docs.cycling74.com/reference/buffer~), in samples per second (Hz). By default, the sampling rate is the current output sampling rate, or the sampling rate of the most recently loaded audio file.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Redraws the contents of the [buffer~](https://docs.cycling74.com/reference/buffer~) object's waveform display window. You can open the display window by double-clicking on the [buffer~](https://docs.cycling74.com/reference/buffer~) object.

### (remote)

The contents of [buffer~](https://docs.cycling74.com/reference/buffer~) can be altered by the [peek~](https://docs.cycling74.com/reference/peek~) and [record~](https://docs.cycling74.com/reference/record~) objects or referenced/played-back by the [2d.wave~](https://docs.cycling74.com/reference/2d.wave~), [play~](https://docs.cycling74.com/reference/play~), [wave~](https://docs.cycling74.com/reference/wave~), [groove~](https://docs.cycling74.com/reference/groove~), [buffir~](https://docs.cycling74.com/reference/buffir~), [cycle~](https://docs.cycling74.com/reference/cycle~), and [lookup~](https://docs.cycling74.com/reference/lookup~) objects.

### (drag)

When an audio file is dragged from the Max File Browser to a [buffer~](https://docs.cycling74.com/reference/buffer~) object, the file will be loaded.

### apply

The word  apply , followed by list consisting of one to three symbols or numbers, will apply a windowing function to the current contents of a [buffer~](https://docs.cycling74.com/reference/buffer~).

The word  apply , followed by a single symbol that designates a windowing function, will apply that function to the current contents of the [buffer~](https://docs.cycling74.com/reference/buffer~). Supported functions include triangle, hamming, hanning, blackman, welch, and kaiser. An additional second symbol argument of  half  (e.g.  apply blackman half ) will calculate the function and apply only the second half to the whole [buffer~](https://docs.cycling74.com/reference/buffer~).

Note: The kaiser function requires a second floating point argument that specifies the beta parameter and precedes an optional  half  argument (e.g.  apply kaiser 4.5 half ).

The word  apply , followed by the word  gain  and a floating-point number that specifies a gain value, will scale every sample by the gain coefficient.  offset  and a floating-point number that specifies a constant value that will be added to every sample in the buffer~.

The word  apply , followed by the word  getdeltas , will replace every sample value with the a new value representing the difference from the previous sample.

Arguments:

- function-and-parameters
  [list]

### clear

Erases the contents of [buffer~](https://docs.cycling74.com/reference/buffer~).

### clearlow

Erases the contents of the buffer like the  clear  message, but performs the clear as a low-priority task.

### crop

The  crop  message, followed by two numbers that specify start and end time in milliseconds, will trim the audio data in the buffer. It resizes the buffer~ to the selection length.

Arguments:

- start and end times
  [list]

### (mouse)

Double-clicking on [buffer~](https://docs.cycling74.com/reference/buffer~) opens a display window where you can view the contents of the [buffer~](https://docs.cycling74.com/reference/buffer~). When the user clicks or drags with the mouse in the [buffer~](https://docs.cycling74.com/reference/buffer~) object's editing window, the cursor's time location in the [buffer~](https://docs.cycling74.com/reference/buffer~), in milliseconds, is sent out the outlet.

### duplicate

The word  duplicate , followed by a symbol that specifies the name of a [buffer~](https://docs.cycling74.com/reference/buffer~), will import the contents of the named buffer.

Arguments:

- buffer-name
  [symbol]

### enumerate

Posts information in the Max Console identifying all [buffer~](https://docs.cycling74.com/reference/buffer~) objects which reference the same data stored in the [buffer~](https://docs.cycling74.com/reference/buffer~) object which received the  enumerate  message.(The labelling information: "(this one)", will appear next to the address of the [buffer~](https://docs.cycling74.com/reference/buffer~) object which received the  enumerate  message).

### fill

The word  fill , followed by list consisting of one to three symbols or numbers, specifies how the contents of a [buffer~](https://docs.cycling74.com/reference/buffer~) object will be filled.

The word  fill , followed by a single floating-point number, will set every sample in the [buffer~](https://docs.cycling74.com/reference/buffer~) to that value.

The word  fill , followed by a symbol that designates a function, will fill the [buffer~](https://docs.cycling74.com/reference/buffer~) with one cycle of that function. Supported functions include sin (sine), cos, (cosine), and sinc. An optional second argument (e.g.  fill sin 2 ) can be used to define the number of cycles of the function used to fill the [buffer~](https://docs.cycling74.com/reference/buffer~). An additional optional third argument defines a rational number of cycles with which to fill the [buffer~](https://docs.cycling74.com/reference/buffer~) (e.g.  fill cos 1 4  will fill a [buffer~](https://docs.cycling74.com/reference/buffer~) with a quarter cycle of the cosine function).

Note: the sinc function requires two  int  arguments that specify the number of zero crossings and an additional flag that toggles starting the function at zero (e.g.  fill sinc 4 1 ).

Arguments:

- constant/function
  [list]

### import

The word  import , followed by a filename, reads that file into [buffer~](https://docs.cycling74.com/reference/buffer~) immediately if it exists in Max's search path without opening the Open Document dialog box. Without a filename, import brings up an Open Document dialog box allowing you to choose a file. The imported file retains the sampling rate and word size of the original file, but looping points and markers are not imported. The filename may be followed by a float indicating a starting time in the file, in milliseconds, to begin reading. (The beginning of the file is 0.)

The starting time may be followed by a second argument - a floating point value that specifies the duration of sound, in milliseconds, to be read into [buffer~](https://docs.cycling74.com/reference/buffer~). This duration overrides the current size of the object's sample memory. If the duration is specified by a negative value, [buffer~](https://docs.cycling74.com/reference/buffer~) reads in the entire file and resizes its sample memory and adjusts the number of channels in the file accordingly.

The duration may be followed by a third argument that specifies the number of channels to be read in. If the number of channels is not specified (i.e., if the message includes only offset and duration information), [buffer~](https://docs.cycling74.com/reference/buffer~) reads in the number of channels indicated in the header of the audio file.

If only two arguments are specified, [buffer~](https://docs.cycling74.com/reference/buffer~) imports the number of channels indicated in the header of the audio file. If three arguments are specified, [buffer~](https://docs.cycling74.com/reference/buffer~) imports the number of channels specified by the third argument. If the third argument is 0, [buffer~](https://docs.cycling74.com/reference/buffer~) imports the number of channels indicated in the header of the audio file.

Arguments:

- filename
  [list]

### importreplace

The word  importresize , followed by a filename, reads that file into [buffer~](https://docs.cycling74.com/reference/buffer~) immediately if it exists in Max's search path without opening the Open Document dialog box. Without a filename, import brings up an Open Document dialog box allowing you to choose a file. The imported file retains the sampling rate and word size of the original file, but looping points and markers are not imported. The  importreplace  is functionally identical to the  import  message, except that imports are performed with automatic duration and channel resizing enabled by default. Unless otherwise specified, the duration and channel count of the imported file will be used to resize the buffer's internal sample memory.

Arguments:

- filename
  [list]

### name

The word  name , followed by a  symbol , changes the name by which other objects such as [cycle~](https://docs.cycling74.com/reference/cycle~), [groove~](https://docs.cycling74.com/reference/groove~), [lookup~](https://docs.cycling74.com/reference/lookup~), [peek~](https://docs.cycling74.com/reference/peek~), [play~](https://docs.cycling74.com/reference/play~), [record~](https://docs.cycling74.com/reference/record~), and [wave~](https://docs.cycling74.com/reference/wave~) can refer to the [buffer~](https://docs.cycling74.com/reference/buffer~). Objects that were referring to the [buffer~](https://docs.cycling74.com/reference/buffer~) under its old name lose their connection to it. Every [buffer~](https://docs.cycling74.com/reference/buffer~) object should be given a unique name; if you give a [buffer~](https://docs.cycling74.com/reference/buffer~) object a name that already belongs to another [buffer~](https://docs.cycling74.com/reference/buffer~), that name will no longer be associated with the [buffer~](https://docs.cycling74.com/reference/buffer~) that first had it.

Arguments:

- buffer-name
  [symbol]

### normalize

The word  normalize , followed by a floating point number, will scale the sample values in the [buffer~](https://docs.cycling74.com/reference/buffer~) object so that the highest peak matches the value given by the argument. This can cause either amplification or attenuation of the audio, but in either case, every value is scaled.

Arguments:

- normalization\_factor
  [list]

### open

Opens the [buffer~](https://docs.cycling74.com/reference/buffer~) sample display window or brings it to the front if it is already open.

### printmodtime

Posts information in the Max Console about when the [buffer~](https://docs.cycling74.com/reference/buffer~) was last modified (i.e. written into, or modified in attributes).

### read

Reads an AIFF, Next/Sun, or WAV file into the sample memory of the [buffer~](https://docs.cycling74.com/reference/buffer~). The word  read , followed by a filename, reads that file into [buffer~](https://docs.cycling74.com/reference/buffer~) immediately if it exists in Max's search path without opening the Open Document dialog box. Without a filename,  read  brings up an Open Document dialog box allowing you to choose a file. The imported file retains the sampling rate and word size of the original file, but looping points and markers are not imported. The filename may be followed by a float indicating a starting time in the file, in milliseconds, to begin reading. (The beginning of the file is 0.)

The starting time may be followed by a second argument - a floating point value that specifies the duration of sound, in milliseconds, to be read into [buffer~](https://docs.cycling74.com/reference/buffer~). This duration does not override the current size of the object's sample memory. It clears the current buffer~ data, then fills the requested amount at the beginning of the buffer~. However, if the duration is specified by a negative value, [buffer~](https://docs.cycling74.com/reference/buffer~) reads in the entire file and resizes its sample memory.

The duration may be followed by a third integer argument that specifies the number of channels to be read in.

If only two arguments are specified, [buffer~](https://docs.cycling74.com/reference/buffer~) reads in only the number of channels that the [buffer~](https://docs.cycling74.com/reference/buffer~) currently has. If the audio file has more channels than the [buffer~](https://docs.cycling74.com/reference/buffer~) currently has, the audio from all channels will be summed. If three arguments are specified, [buffer~](https://docs.cycling74.com/reference/buffer~) reads the number of channels specified by the third argument. If the third argument is 0, [buffer~](https://docs.cycling74.com/reference/buffer~) reads in the number of channels indicated in the header of the audio file.

Arguments:

- filename
  [list]

### readagain

Reads sound data from the most recently loaded file (specified in a previous  read  or  replace  message).

Arguments:

- filename
  [list]

### readraw

Reads the contents of an arbitrary file on disk, interpreting the data as audio into the [buffer~](https://docs.cycling74.com/reference/buffer~) object. The arguments determine how [buffer~](https://docs.cycling74.com/reference/buffer~) interprets the data in the file.

The optional arguments are:

- filename : a filename or filepath to read into [buffer~](https://docs.cycling74.com/reference/buffer~) (default = open file dialog)
- sample-rate : the sample-rate of the data to be read (default =  44100. )
- channels : the number of channels of the data to be read (default =  1 )
- format : the format to read; one of  int8 ,  int16 ,  int24 ,  int32  or  float32  (default =  float32 )
- byte-offset : the byte offset in the file where reading should begin (default =  0 )
- duration-in-frames : the total number of samples to read per channel, a value of  0  reads from  byte-offset  to the end of the file (default =  0 )
- little-endian-flag : whether to read samples using big-endian ( 0 ) or little-endian ( 0 ) byte order (default =  0 )

Arguments:

- filename
  [symbol]
- sample-rate
  [float]
- channels
  [int]
- format
  [symbol]
- byte-offset
  [int]
- duration-in-frames
  [int]
- little-endian-flag
  [int]

### replace

The  replace  message is equivalent to the  read  message with a negative duration argument.

Arguments:

- filename
  [list]

### samptype

In left inlet: The word  samptype , followed by a symbol, specifies the sample type to use when interpreting an audio file's sample data (thus overriding the audio file's actual sample type). This is sometimes called "header munging."

The following types of sample data are supported:

 int8 - 8-bit integer

 int16 - 16-bit integer

 int24 - 24-bit integer

 int32 - 32-bit integer

 float32 - 32-bit floating-point

 float64 - 64-bit floating-point

 mulaw - 8-bit "mu"-law encoding

 alaw - 8-bit a-law encoding

Arguments:

- sample-type
  [symbol]

### set

The word  set , followed by a  symbol , changes the name by which other objects such as [cycle~](https://docs.cycling74.com/reference/cycle~), [groove~](https://docs.cycling74.com/reference/groove~), [lookup~](https://docs.cycling74.com/reference/lookup~), [peek~](https://docs.cycling74.com/reference/peek~), [play~](https://docs.cycling74.com/reference/play~), [record~](https://docs.cycling74.com/reference/record~), and [wave~](https://docs.cycling74.com/reference/wave~) can refer to the [buffer~](https://docs.cycling74.com/reference/buffer~). Objects that were referring to the [buffer~](https://docs.cycling74.com/reference/buffer~) under its old name lose their connection to it. Every [buffer~](https://docs.cycling74.com/reference/buffer~) object should be given a unique name; if you give a [buffer~](https://docs.cycling74.com/reference/buffer~) object a name that already belongs to another [buffer~](https://docs.cycling74.com/reference/buffer~), that name will no longer be associated with the [buffer~](https://docs.cycling74.com/reference/buffer~) that first had it.

Arguments:

- buffer-name
  [symbol]

### setsize >= 7.0.0

Sets the length of the sample memory of the buffer in milliseconds. Optional second argument sets the number of channels in the buffer. This limits the amount of data that can be stored, unless this size limitation is overridden by a replace message or a duration argument in a read message.

Arguments:

- buffer-size-in-milliseconds
  [float]
- number-of-channels
  [int]

### sizeinsamps

The word  sizeinsamps , followed by a duration in samples, sets the size of the [buffer~](https://docs.cycling74.com/reference/buffer~) object's sample memory. This limits the amount of data that can be stored, unless this size limitation is overridden by a  replace  message or a duration argument in a  read  message.

Arguments:

- buffer-duration
  [int]
- number-of-channels
  [int]

### wclose

Closes the [buffer~](https://docs.cycling74.com/reference/buffer~) sample display window if it is open.

### write

Saves the contents of [buffer~](https://docs.cycling74.com/reference/buffer~) into an audio file. A standard file dialog is opened for naming the file unless the word  write  is followed by a symbol, in which case the file is saved in the current default folder, using the symbol as the filename. Unless you change the format with the Format pop-up menu in the standard Save As dialog box, the file will be saved in the format specified by the filetype attribute, or the file type of the most recently opened audio file. By default, [buffer~](https://docs.cycling74.com/reference/buffer~) saves in AIFF format.

Arguments:

- filename
  [symbol]

### writeaiff

Saves the contents of the [buffer~](https://docs.cycling74.com/reference/buffer~) as an AIFF file. A standard Save As dialog is opened for naming the file unless the word  writeaiff  is followed by a symbol, in which case the file is saved in the current default folder, using the symbol as the filename.

Arguments:

- filename
  [symbol]

### writeflac

Saves the contents of the [buffer~](https://docs.cycling74.com/reference/buffer~) into a FLAC file. A standard Save As dialog is opened for naming the file unless the word  writeflac  is followed by a symbol, in which case the file is saved in the current default folder, using the symbol as the filename.

Arguments:

- filename
  [symbol]

### writeraw

Saves the contents of the [buffer~](https://docs.cycling74.com/reference/buffer~) as a raw file with no header. The default sample format is 16-bit, but the output sample format can be set with the  samptype  message. A standard Save As dialog is opened for naming the file unless the word  writeraw  is followed by a symbol, in which case the file is saved in the current default folder, using the symbol as the filename.

The optional arguments are:

- filename : a filename or filepath to save the raw file (default = open save dialog)
- format : the format to write; one of  int8 ,  int16 ,  int24 ,  int32  or  float32  (default =  float32 )
- duration-in-frames : the total number of samples to write per channel (number of channels is determined by the contents of the [buffer~](https://docs.cycling74.com/reference/buffer~) object. A value of  0  writes the entire buffer to disk (default =  0 )
- little-endian-flag : whether to write samples using big-endian ( 0 ) or little-endian ( 1 ) byte order (default =  0 )

Arguments:

- filename
  [symbol]
- format
  [symbol]
- duration-in-frames
  [int]
- little-endian-flag
  [int]

### writewave

Saves the contents of the [buffer~](https://docs.cycling74.com/reference/buffer~) into a WAV file. A standard Save As dialog is opened for naming the file unless the word  writewave  is followed by a symbol, in which case the file is saved in the current default folder, using the symbol as the filename.

Arguments:

- filename
  [symbol]

## Output

### bang

Right outlet: A bang is sent out the right outlet of [buffer~](https://docs.cycling74.com/reference/buffer~) when the file read or file write operation is completed.

### float

Left outlet: When the user clicks or drags with the mouse in the [buffer~](https://docs.cycling74.com/reference/buffer~) object's editing window, the cursor's time location in the [buffer~](https://docs.cycling74.com/reference/buffer~), in milliseconds, is sent out the left outlet.

## See Also

| Name | Description |
| --- | --- |
| [2d.wave~](https://docs.cycling74.com/reference/2d.wave~) | Two-dimensional wavetable |
| [buffir~](https://docs.cycling74.com/reference/buffir~) | buffer-based FIR filter |
| [cycle~](https://docs.cycling74.com/reference/cycle~) | Sinusoidal oscillator |
| [groove~](https://docs.cycling74.com/reference/groove~) | Variable-rate looping sample playback |
| [info~](https://docs.cycling74.com/reference/info~) | Report information about a sample |
| [lookup~](https://docs.cycling74.com/reference/lookup~) | Transfer function lookup table |
| [peek~](https://docs.cycling74.com/reference/peek~) | Read and write sample values |
| [play~](https://docs.cycling74.com/reference/play~) | Position-based sample playback |
| [poke~](https://docs.cycling74.com/reference/poke~) | Write sample values to a buffer by index |
| [polybuffer~](https://docs.cycling74.com/reference/polybuffer~) | Manage multiple buffer~ objects |
| [record~](https://docs.cycling74.com/reference/record~) | Record sound into a buffer |
| [sfplay~](https://docs.cycling74.com/reference/sfplay~) | Play audio file from disk |
| [sfrecord~](https://docs.cycling74.com/reference/sfrecord~) | Record to audio file on disk |
| [stretch~](https://docs.cycling74.com/reference/stretch~) | Ztx-based pitch/time modification of an audio buffer |
| [wave~](https://docs.cycling74.com/reference/wave~) | Variable size wavetable |

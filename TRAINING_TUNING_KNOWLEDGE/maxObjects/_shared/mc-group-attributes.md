---
type: reference
name: "Multichannel Group Attributes"
summary: "Multichannel Group Attributes — boilerplate shared by many objects"
---
### Multichannel Group Attributes

### chans[int]

The chans attribute sets the number of channels and instances in the MC wrapper object. To define a fixed number of channels regardless of what is connected to the object, set chans via a typed-in argument, for example typing  mc.cycle~ @chans 100  would create 100 instances of a [cycle~](https://docs.cycling74.com/reference/cycle~) object inside the MC wrapper. If chans is 0, the wrapper object will auto-adapt to the number of channels in its input multichannel signals (using the maximum of all connected signals). If an object does not have any multichannel signals connected to its inlets, the chans attribute will need to have a non-zero value if you want more than one instance.

If chans is changed while the audio is on, the number of instances will not change until audio is restarted. However, if chans is reduced while the audio is on, any extra channels will no longer process audio and will output a zero signal.

### initialvalues[list]

The initialvalues attribute only applies to object creation time so it must be set via a typed-in argument. initialvalues sets the first (and only the first) initial argument for successive instances in the MC wrapper. For example, typing  mc.cycle~ @chans 4 @initialvalues 50 60 70 80  would assign an initial frequency to the [cycle~](https://docs.cycling74.com/reference/cycle~) instances inside the wrapper. The first instance would be assigned a frequency of 50, the second a frequency of 60, the third 70, and the fourth 80. Note that initialvalues does not determine the actual instance count; this can be done using the chans attribute. If there are more instances than elements for the initialvalues attribute, those instances are instantiated with the default value.

To set a default value of an argument for all instances, type it as an argument before any typed-in attributes. For example, modifying our example above:  mc.cycle~ 100 @chans 10 @initialvalues 50 60 70 80 . In this example, the first four instances are set as before, but the next six are created with a frequency argument of 100.

To change instance values or attributes after the wrapper object has been created, use the  setvalue ,  applyvalues , or  replicatevalues  messages.

### values[list]

You can use values as an alternate name for the initialvalues attribute.

### replicate[int]

When replicate is enabled, input single-channel or multichannel signals containing fewer channels than the number instances in the MC wrapper object are repeated to fill all input channels. For example, when replicate is enabled and you connect a two-channel multichannel signal to the input of an MC wrapper object with four instances, channel 1 of the input will be repeated to channel 3, and channel 2 of the input will be repeated to channel 4. If replicate were disabled, channels 3 and 4 of the input would be set to zero.

### target[int]

The target attribute sets an index for targeting specific wrapper instances. Subsequent messages are directed to an individual instance instead of all instances. It is strongly recommended you use the more reliable  setvalue  message instead of the target attribute. The voice index of  setvalue  will override the current setting of target. When target is 0, incoming messages are sent to all instances. When target is -1, incoming messages do nothing. Note that target only affects messages, not setting attribute values.

### usebusymap[int]

When usebusymap is enabled, the MC wrapper controls whether individual instances process audio using a  *busy map*  maintained by either an [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) or [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) object. When a channel in the busy map is marked as "free" or "released" no audio processing occurs by any instance on the channel corresponding to the voice index. When usebusymap is disabled, instances in the MC wrapper process audio at all times. This will also be true if usebusymap is enabled and there is no local or named busy map available. (See the busymapname attribute for a description of local and named busy maps). For brevity the name bz can also be used.

### zero[int]

When the zero attribute is enabled, channels in the MC wrapper due to the use of a busy map output zero signals. To save a small amount of CPU at the risk of loud and unpleasant noises due to uncleared signal data, you can disable zero. In this case, disabled channels in the MC wrapper do nothing to their output channels. If usebusymap is disabled or there is no active local or named busy map available, the setting of the zero attribute has no effect.

Conveniently, when usebusymap is enabled in [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) object, disabled channels are not mixed to the output. When unused signals from wrapped objects with zero disabled feed into [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~), they will be ignored, reducing the risk of unpleasantness getting past the mix output.

### busymapname[symbol]

When the usebusymap attribute is enabled, an MC wrapper object uses the local busy map of any [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) or [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) in the same patcher by default. To use a named global busy map instead, set the busymapname attribute to the desired name. For brevity the name @bzname can also be used.

### op[symbol]

Sets the function that will be used when the  generate  message is set. If you use [attrui](https://docs.cycling74.com/reference/attrui) set to edit the op attribute, you can see a handy menu of the 40+ possible functions, so you don't have to memorize their names.

### voiceprob[float]

The voiceprob attribute is used when employing the $ or \* arguments to the  setvalue  message. It determines the probability that the  setvalue  message will be sent. For example, if voiceprob is 0.9, there is a 90% chance the setvalue message will be sent to a randomly chosen voice.

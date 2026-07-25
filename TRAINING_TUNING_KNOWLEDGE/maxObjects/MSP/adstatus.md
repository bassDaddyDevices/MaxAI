---
type: msp
name: "adstatus"
summary: "Report and control audio driver settings"
signal: false
url: "https://docs.cycling74.com/reference/adstatus/"
package: "MSP"
see_also: ["dspstate~", "adoutput~"]
---
# adstatus

Report and control audio driver settings

## Description

Use the [adstatus](https://docs.cycling74.com/reference/adstatus) object to control Max audio settings.

## Arguments

### Controllable-settings:[symbol] optional

The first argument is a symbol that specifies the setting to be controlled by the [adstatus](https://docs.cycling74.com/reference/adstatus) object. Some settings require an additional integer argument. The possible settings are:

cpu: Reports current CPU utilization.

cpulimit: Reports and sets the CPU utilization limit as a percentage from 0-100.

driver: Lists the available audio drivers and allows the current one to be changed.

info: Reports the number of function calls and signals used in the top level

input (Requires an additional argument specifying a logical channel number (used by the [adc~](https://docs.cycling74.com/reference/adc~) object) between 1 and 512): Lists the available audio driver input channels and allows the current setting to be changed.

iovs: Reports the available I/O vector sizes of the current audio driver and

latency: If supported by the audio driver, reports the input and output latencies of the driver in samples.

numinputs: Reports the number of input channels of the current audio driver.

numoutputs: Reports the number of output channels of the current audio driver.

option (Requires an additional argument specifying the option number (starting at 1): If the current audio driver uses the numbered option, reports the available choices for setting the value of the option.

optionname (Requires an additional argument specifying the option number (starting at 1): If the current audio driver uses the numbered option, the name of the option is reported.

output (Requires an additional argument specifying a logical channel number (used by the [dac~](https://docs.cycling74.com/reference/dac~) object) between 1 and 512): Lists the available audio driver output channels and allows the current setting to be changed.

overdrive: Controls the setting of overdrive mode (where the scheduler runs in a

sigvs: Reports the available signal vector sizes and allows the current signal vector size setting to be changed.

sr: Reports the available sampling rates and allows the current sampling rate setting to be changed.

switch: Turns the DSP on or off.

takeover: Controls the setting of scheduler in audio interrupt mode.

timecode: If supported by the audio driver, reports the current timecode value.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Reports the current state of the setting. In many cases, messages are sent out the [adstatus](https://docs.cycling74.com/reference/adstatus) object's left outlet to set a pop-up menu object to display the current setting with a  set  message. In these cases, the numerical value of the setting is sent out the [adstatus](https://docs.cycling74.com/reference/adstatus) object's right outlet. The exact behaviors are listed in the Output section below.

### int

In left inlet: Changes the setting. In most cases, the number will correspond to the index of the menu item whose value was set by the  bang  message to [adstatus](https://docs.cycling74.com/reference/adstatus).

Arguments:

- input
  [int]

### (inlet1)

In right inlet: If the [adstatus](https://docs.cycling74.com/reference/adstatus) object is used with the input, iovs, output, sigvs, sr settings, an int in the right inlet sets the value numerically rather than by using a menu index (see the  reset  or  loadbang  messages). For all other settings, a number in the right inlet behaves identically to one in the left inlet.

Arguments:

- input
  [int]

### float

In left inlet: Changes the setting. In most cases, the number will correspond to the index of the menu item whose value was set by the  bang  message to [adstatus](https://docs.cycling74.com/reference/adstatus).

Arguments:

- input
  [float]

### loadbang

In left inlet: Outputs messages for [umenu](https://docs.cycling74.com/reference/umenu) setup, and reports the state of the setting upon loading the patch.  clear  and  append  messages are sent out the left outlet in order to set up a [umenu](https://docs.cycling74.com/reference/umenu) object with a list of possible values, followed by a  set  message to set the [umenu](https://docs.cycling74.com/reference/umenu) to the corresponding index. The numerical value of the setting is sent out the [adstatus](https://docs.cycling74.com/reference/adstatus) object's right outlet. The exact behaviors are listed in the Output section below.

### override

In left inlet: The word  override , followed by a 1, turns on override mode for the setting associated with the object. When override mode is enabled, any change to the setting is not saved in the MSP Preferences file. The message  override 0  turns override mode off. By default, override is off for all settings. However, some settings are specific to audio drivers and may not be saved by the driver.

Arguments:

- flag
  [int]

### set

In left inlet: The word  set , followed by a number between 1 and 512, changes the logical channel associated with an [adstatus](https://docs.cycling74.com/reference/adstatus) input or [adstatus](https://docs.cycling74.com/reference/adstatus) output object. The current real audio driver input or output channel set for the new logical channel is sent out the object's outlets.

Arguments:

- logical-channel-number
  [int]

### update

In left inlet: The word  update  gets the current state of the setting.

## Output

### cpu

Reports CPU utilization as a percentage (normally from 0 to 100).

### cpulimit

Reports the current CPU utilization limit.

### driver

Lists all current audio driver choices.

### float

Out left outlet: For objects that don't use a menu-style output, the current value of the setting is sent out the left outlet. Here are details for specific settings:

### float

Out right outlet: Here are the objects that output something out the value outlet of the object:

### info

Reports the number of function calls used in the top-level DSP chain.

### info

Reports the number of signals used in the top-level DSP chain.

### input

Lists audio input channels for the audio driver currently in use.

### input

Reports the current input channel for the specified logical channel.

### int

Out left outlet: For objects that don't use a menu-style output, the current value of the setting is sent out the left outlet. Here are details for specific settings:

### int

Out right outlet: Here are the objects that output something out the value outlet of the object:

### iovs

Lists I/O vector sizes for the audio driver currently in use.

### iovs

Reports the current I/O vector size.

### latency

If supported by the audio driver, reports the input latency of the audio driver.

### numinputs

Reports the number of inputs in the current audio driver.

### numinputs

Reports the number of inputs in the current audio driver (same as left outlet).

### numoutputs

Reports the number of outputs in the current audio driver.

### numoutputs

Reports the number of outputs in the current audio driver (same as left outlet).

### option

Creates a list of choices for the specified option.

### option

Reports the menu item index of the option's current value.

### optionname

Sets a menu that names the specified option. Intended for use with a pop-up menu object in label mode.

### output

Lists audio output channels for the audio driver currently in use.

### output

Reports the current output channel for the specified logical channel.

### overdrive

Creates an On/Off menu for use with this setting.

### overdrive

Reports the current on/off setting of overdrive mode.

### overdrive

Reports the current on/off setting of overdrive mode.

### set

Out left outlet: When a  bang  message is received or when the value of the setting that has a menu-style output is changed, the word  set , followed by a number with a menu item index (starting at 0) is sent out. Here are details of outputs from the left outlet for specific settings with menu-style outputs:

### sigvs

Lists signal vector sizes for the audio driver currently in use.

### sigvs

Reports the current signal vector size.

### sr

Lists sampling rates available for the audio driver currently in use.

### sr

Reports the current sampling rate.

### switch

Creates an On/Off menu for turning the DSP on and off.

### switch

Reports the current on/off setting of the DSP.

### takeover

Creates an On/Off menu for switching scheduler in audio interrupt mode.

### takeover

Reports the current on/off setting of takeover mode.

### timecode

If supported by the audio driver, reports the current timecode as a list in the following format:

1. time code sample count most significant word

2. time code sample count least significant word

3. time code subframes

4. time code flags

5. time code frame rate

### various

Out left outlet: For many settings, a series of messages intended to set up a pop-up menu object are sent out the left outlet when the reset or loadbang message is received by [adstatus](https://docs.cycling74.com/reference/adstatus). See the  reset  message in the Input section for more details.

The following settings have a menu-style output:  driver ,  input ,  iovs ,  output ,  sigvs ,  sr ,  switch , and  takeover .

## See Also

| Name | Description |
| --- | --- |
| [dspstate~](https://docs.cycling74.com/reference/dspstate~) | Report current DSP settings |
| [adoutput~](https://docs.cycling74.com/reference/adoutput~) | Access audio driver output channel |

---
type: mc
name: "mc.snowphasor~"
summary: "Control a Population of Phasors"
signal: true
url: "https://docs.cycling74.com/reference/mc.snowphasor~/"
package: "MC"
see_also: ["change~", "line~", "phasor~", "snowfall~", "updown~"]
---
# mc.snowphasor~

Control a Population of Phasors

## Description

The [mc.snowphasor~](https://docs.cycling74.com/reference/mc.snowphasor~) object generates phasor ramps in multiple audio channels according to global controls such as an average rate. The object can also trigger ramps from a multi-channel audio signal.

## Arguments

None.

## Attributes

### busymapname[symbol]

Alias:
bzname

If the Use Busy Map (usebusymap) attribute is set, the busymapname specifies a named busy map other than the default global busy map.

### chans[int]

Sets the number of output channels. If the value of chans is 0, the number of outputs auto-adapts to the number of channels in a multi-channel signal connected to the object's inlet. If the value of chans is non-zero, the number of channels in the multi-channel output are fixed and do not auto-adapt to the input.

### interval[float]

When the mode attribute is set to  Utilization  (0), interval sets the time between updates of the population density of output phasors per unit time. New phasors will be started only during one of these updates.

When the mode attribute is set to  Rate  (1), interval sets time between updates of the average rate per unit time of phasors. New phasors will only be started during one of these updates. Even if the rate is effectively faster than the interval, phasors will not be generated closer together in time than the interval specifies. When the rate would generate multiple phasors in the time of an interval they are started simultaneously. When the mode attribute is set to  Audio  (3), interval is ignored. When the mode attribute is set to  Interval  (2), interval sets the time between phasor triggers and the rate is ignored.

### intervalcycle[int]

Sets the number of intervals after which the mean interval time (as specified by the interval attribute) is restored. The time interval used by [mc.snowphasor~](https://docs.cycling74.com/reference/mc.snowphasor~) is not necessarily the value of the interval attribute if the intervaldev attribute is set to a non-zero value and creates variation in the intervals calculated. As an example, say the interval is set to 100 ms but the last interval (due to a non-zero intervaldev) was 90. If the intervalcycle attribute is set to 2, the next interval used will be 110, in order that over the space of two intervals, the mean is maintained to be 100. If the intervalcycle attribute is set to 10, nine intervals will be generated before the tenth interval is adjusted to maintain the mean interval time. In the rare event that the prior intervals already exceed the mean interval time before the last interval of the cycle is calculated, the resulting correction interval will be 1 ms. In general, the larger the interval cycle the "wider" the interval variatons can be with larger values of intervaldev.

### intervaldev[float]

Sets the proportion of the current value of the interval attribute that is allowed to vary randomly (above or below). An intervaldev value of 0 will produce no random variation in the interval.

### mode[int]

Determines how new phasor ramps are triggered

Possible values:

0 = 'utilization'
(
Utilization Mode
)
Maintains a proportion of the total available time and space (channels) with active phasor ramps, as set by the prob attribute. The interval attribute sets the time between updates of the utilization and triggering of new phasors. As the interval becomes larger, phasors will be triggered simtaneously to maintain the utilization level (more like a metronome). When the interval is small, the phasor triggering will be more distributed and it will be less likely that phasors will be triggered simultaeously.

1 = 'rate'
(
Rate Mode
)
Attempts to maintain a rate of new phasor triggerings (births) per unit time for each channel, as set by the rate attribute. However, if the interval attribute is to a time value that is slower than the rate there may be more simultanous triggerings further apart.

As an example, if the interval is 50 ms and the rate is 4, one phasor will be started roughly every 250 ms, because [mc.snowphasor~](https://docs.cycling74.com/reference/mc.snowphasor~) will check whether it's time to start a phasor every 50 ms. However, if the interval is 2000 ms, you'll hear as many as 20 phasors starting together every 2000 ms, because [mc.snowphasor~](https://docs.cycling74.com/reference/mc.snowphasor~) only checks whether to start new phasors every 2000 ms. The effective rate of phasor starting at any momment may be further affected by the ratedev, prob, probdev, and intervaldev attributes.

2 = 'interval'
(
Interval Mode
)
Maintains a constant interval between phasor triggerings, as set by the interval and intervaldev attributes. The prob attribute determines the probability of a phasor being triggered at any particular interval. The rate attribute has no effect in this mode.

3 = 'audio'
(
Audio Mode
)
Triggers new phasors when audio-channels sample values exceed the signal input threshold (set by the threshold attribute). The rate and interval attributes have no effect in this mode.

### perchantriggers[int]

When the perchantriggers is set, zero to non-zero transitions on input audio channels only trigger corresponding output channels. When perchantriggers is 0, triggers are applied to any available output channel. perchantriggers is only applicable when the mode is set to  Audio  (3).

### prob[float]

When the mode attribute is set to  Utilization  (0), the prob attribute sets the percentage of time across all audio output channels occupied by phasor ramps. As the  decaytime  attribute value is increased, the average number of new ramps (births) per unit time will be lower.

When the mode attribute is set to  Rate  (1), the value of prob reduces the average rate (the actual rate will be the value of the rate multiplied by the prob). For example if the prob is 0.5 and it is time to start a new phasor according to the rate, it will only happen half the time based on a random decision.

When the mode attribute is set to  Interval  (2), the prob determines whether a phasor is actually generated at the specified interval. If the value of prob is 1.0, the phasor will always be generated. If the value of prob is 0.5, the phasor will be generated half the time based on a random decision.

When the mode attribute is set to  Audio  (3), prob has no effect.

### probdev[float]

Sets the proportion of the current value of the prob attribute that is allowed to vary randomly (above or below). An probdev value of 0 will produce no random variation in the utilization probability.

### rampdev[float]

Alias:
decaydev

Sets the proportion of the current value of the ramptime attribute that is allowed to vary randomly (above or below). A rampdev value of 0 will produce no random variation in the ramp time.

### ramptime[float]

Alias:
decaytime

Sets the duration in milliseconds of a phasor ramp produced by [mc.snowphasor~](https://docs.cycling74.com/reference/mc.snowphasor~).

### rate[float]

When the mode attribute is set to  Rate  (1), the rate attribute sets the rate per second of phasor ramps triggerings (births). When the mode attribute is set to other values, the rate attribute has no effect.

### ratedev[float]

Sets the proportion of the current value of the rate attribute that is allowed to vary randomly (above or below). An rate value of 0 will produce no random variation in the ramp birth rate.

### threshold[float]

Sets the minimum sample value for a ramp trigger in Audio Mode.

### usebusymap[int]

Alias:
bz

When the usebusymap attribute is set, [mc.snowphasor~](https://docs.cycling74.com/reference/mc.snowphasor~) incorporates the busy map into its voice allocation algorithm and sets channels in the busy map to be busy when triggering ramps.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

In left inlet: When the Trigger Mode (mode) attribute of [mc.snowphasor~](https://docs.cycling74.com/reference/mc.snowphasor~) is set to  Audio  (3), a new phasor ramp is started. If the perchantriggers attribute is set, the ramp occurs only on a non-busy output channel corresponding to any channel where a sample exceeds the current signal input threshold. If there are more input audio channels than output channels -- the output channel count is set by the chans attribute -- the additional input channels are ignored. If perchantriggers is 0, the next available (non-busy) output channel is used.

In right inlet: A signal connected to the right inlet sets the ramp duration, overriding the value of the decaytime attribute. If a multi-channel signal is connected, the channel of the input corresponding to the channel of the output ramp is used for the duration.

## See Also

| Name | Description |
| --- | --- |
| [change~](https://docs.cycling74.com/reference/change~) | Report signal direction |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [snowfall~](https://docs.cycling74.com/reference/snowfall~) | Phasor-Driven Particle |
| [updown~](https://docs.cycling74.com/reference/updown~) | Trapezoidal Function Generator With Constant Attack and Release |

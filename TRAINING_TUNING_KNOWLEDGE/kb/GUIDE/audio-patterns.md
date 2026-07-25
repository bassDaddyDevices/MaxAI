---
type: guide
name: "Audio Processing Patterns and Examples"
summary: "LFOs, envelope followers, sample and hold, filters, and complete worked device examples"
source: "SKILL.md (Max/M4L development guide)"
---

# Audio Processing Patterns and Examples

## Audio Processing Patterns

### Modulation Systems

**LFO Template**:
```
[live.dial @range 0.01 20 @parameter_enable 1]  // Rate
|
[phasor~]      // Ramp 0-1
|
[*~ 6.28318]   // 0 to 2π
|
[cos~]         // Sine wave LFO
|
[*~ 0.5]       // Scale -0.5 to 0.5
|
[+~ 0.5]       // Offset to 0-1
```

**Envelope Follower**:
```
[inlet~]
|
[abs~]         // Rectify
|
[slide~ 10 1000] // Attack 10ms, release 1000ms
|
[outlet~]
```

**Sample and Hold**:
```
[inlet~]       // Audio signal
[inlet]        // Trigger
|              |
[sah~]         // Sample-and-hold
|
[outlet~]
```

### Filters

**One-Pole Lowpass**:
```
[live.dial @range 0 1]  // Cutoff coefficient
|
[*~ -1]
[+~ 1]
|              |
[inlet~]----[*~]
           |
           [+~]
           |
           [History (feedback)]
           |
           [outlet~]
```

For more complex filters, use `[biquad~]` or Gen~ implementations.

## Example Workflows

### Simple Gain Device

```
[plugin~ 1]              [plugin~ 2]
|                        |
[live.dial @range -48 12 @parameter_enable 1]
|
[dbtoa]                  // Convert dB to linear
|
[sig~]                   // To signal rate
|
[line~ 10]               // 10ms smoothing
|            |
[*~]         [*~]        // Apply gain
|            |
[plugout~ 1] [plugout~ 2]
```

### LFO to Parameter

```
[live.dial Rate @range 0.1 10]
|
[phasor~]
|
[*~ 6.28318]
|
[cos~]
|
[*~ 0.5]
|
[+~ 0.5]                 // 0-1 range
|
[snapshot~ 100]          // To message rate
|
[scale 0 1 20 2000]      // Target range
|
[send to-filter-freq]    // Send to parameter
```

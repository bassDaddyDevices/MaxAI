---
type: guide
name: "Max for Live Fundamentals"
summary: "M4L vs standalone Max, device types, live.* objects, audio and MIDI I/O patterns, Live API basics, parameter exposure"
source: "SKILL.md (Max/M4L development guide)"
---

# Max for Live Fundamentals

## M4L vs Standalone Max

**Key Differences**:

| Function | Standalone Max | Max for Live |
|----------|---------------|--------------|
| Audio input | `[adc~]` | `[plugin~]` |
| Audio output | `[dac~]` | `[plugout~]` |
| MIDI input | `[notein]`, `[ctlin]` | `[midiin]` → `[midiparse]` |
| MIDI output | `[noteout]`, `[ctlout]` | `[midiformat]` → `[midiout]` |
| Start/stop transport | `[transport]` | Live's transport (auto) |
| Tempo sync | `[tempo]` | Live's tempo (auto) |
| Parameter automation | Inspector settings | `@parameter_enable 1` |

## M4L Device Types

**Audio Effect** (`plugin~` / `plugout~`):
- Processes audio from Live tracks
- Inserted on audio tracks
- Can be mono, stereo, or multi-channel
- Use `[plugin~]` for inputs, `[plugout~]` for outputs

**MIDI Effect** (`midiin` / `midiout`):
- Processes MIDI from Live tracks
- Inserted before instruments
- Use `[midiin]` + `[midiparse]` for input
- Use `[midiformat]` + `[midiout]` for output

**Instrument** (`midiin` + audio output):
- Receives MIDI, generates audio
- Hybrid: MIDI input + audio output
- Use `[midiin]` for MIDI, `[plugout~]` for audio

**MIDI/Audio Effect**:
- Processes both MIDI and audio
- Use all: `[plugin~]`, `[plugout~]`, `[midiin]`, `[midiout]`

## M4L-Specific Objects

**Live Integration**:
```
[live.thisdevice]      // Device info/control
[live.path]            // Navigate Live's object model
[live.object]          // Access Live objects (tracks, devices, etc.)
[live.observer]        // Watch for property changes
[live.remote~]         // Parameter modulation
```

**UI/Parameters** (always use these for M4L):
```
[live.dial]            // Rotary control
[live.slider]          // Linear slider
[live.numbox]          // Number box
[live.menu]            // Dropdown menu
[live.toggle]          // On/off button
[live.button]          // Momentary button
[live.text]            // Multi-state text button
[live.tab]             // Tab selector
[live.gain~]           // Gain control with meter
[live.meter~]          // Audio level meter
```

**Why use `live.*` objects**:
- Automatic parameter exposure to Live
- Consistent look with Live's interface
- Built-in automation support
- Undo/redo integration
- Preset system compatibility

## Context-Aware Behavior

**M4L devices automatically inherit**:
- Live's sample rate (no need to query)
- Live's tempo and transport state
- Live's buffer size
- Color scheme from Live preferences

**Don't use in M4L** (standalone Max only):
```
[dac~]                 // Use [plugout~] instead
[adc~]                 // Use [plugin~] instead
[ezdac~]               // M4L doesn't need this
[ezadc~]               // M4L doesn't need this
```

## Audio I/O Patterns

**Stereo Audio Effect**:
```
[plugin~ 1]            // Left input
[plugin~ 2]            // Right input
|                      |
[your processing here]
|                      |
[plugout~ 1]           // Left output
[plugout~ 2]           // Right output
```

**Mono to Stereo**:
```
[plugin~ 1]            // Mono input
|
[your processing]
|       \
|        \
[plugout~ 1] [plugout~ 2]  // Stereo output
```

**Multi-channel** (8 channels):
```
[plugin~ 1-8]          // All 8 inputs
|
[mc.gen~]              // Multi-channel processing
|
[plugout~ 1-8]         // All 8 outputs
```

## MIDI I/O Patterns

**MIDI Effect**:
```
[midiin]
|
[midiparse]            // Splits to note, CC, program, etc.
|
[your processing]
|
[midiformat]           // Recombines MIDI messages
|
[midiout]
```

**Note Processing**:
```
[midiin]
|
[midiparse]
|
[unpack 0 0 0]         // pitch velocity channel
|   |   |
[process notes here]
|   |   |
[pack 0 0 0]
|
[midiformat]
|
[midiout]
```

**CC Processing**:
```
[midiin]
|
[midiparse]
         |
         [route cc]
         |
         [unpack 0 0 0]  // controller value channel
         |   |   |
         [process CCs]
         |   |   |
         [pack 0 0 0]
         |
         [midiformat]
         |
         [midiout]
```

## Live API Basics

**Get track name**:
```
[live.path live_set tracks 0]
|
[live.object]
|
[get name]
|
[print Track_Name]
```

**Observe tempo changes**:
```
[live.path live_set]
|
[live.object]
|
[observe tempo]
|
[route tempo]
|
[print Current_Tempo]
```

**Fire clip**:
```
[live.path live_set tracks 0 clip_slots 0]
|
[live.object]
|
[fire]                 // Trigger the clip
```

## When Standalone Max Concepts Apply

**These work the same in M4L**:
- Gen~ / RNBO coding
- JavaScript for Max
- DSP algorithms
- pattrstorage presets
- Data structures (dict, coll)
- File I/O
- Subpatchers
- Abstractions

**These are M4L-specific**:
- Audio/MIDI I/O objects
- Parameter automation
- Live API access
- Device placement context
- Transport sync

## Max for Live Specifics

### Device Structure

**Basic M4L Device**:
1. `[live.thisdevice]` - Device info/control
2. Parameter exposure via `[live.dial]`, `[live.menu]`, etc.
3. `[plugin~]` or `[plugout~]` for audio I/O (in audio effects)
4. `[midiin]`/`[midiout]` for MIDI I/O (in MIDI effects)

**Audio Effect Template**:
```
[plugin~ 1]   // Left input
[plugin~ 2]   // Right input
|             |
[process]     |
|             |
[plugout~ 1]  // Left output
[plugout~ 2]  // Right output
```

**MIDI Effect Template**:
```
[midiin]
|
[midiparse]   // Split into note/CC/etc
|
[process]
|
[midiformat]  // Recombine
|
[midiout]
```

### Parameter Exposure

Use Live-specific UI objects for proper automation:

```
[live.dial @parameter_enable 1]
// @parameter_enable 1 - Expose to Live
// @automation_name - Automation lane name
// @range 0. 127. - Min/max values
// @unit_style - Display format (int, float, Hz, etc)
```

**Best Practices**:
- Always use `@parameter_enable 1` for automatable controls
- Set meaningful `@automation_name` attributes
- Choose appropriate `@unit_style` for context
- Set reasonable `@range` min/max values
- Use `@initial_enable 1` for default values

### Live API

Access Live's object model via `live.path` and `live.object`:

```
[live.path]
|
[@path live_set tracks 0 devices 0]
|
[live.object]
|
[get parameters]  // Query device parameters
```

**Common Live API Patterns**:
- Query track/device/parameter properties
- Trigger actions (arm track, fire clip)
- Navigate Live's hierarchy
- Observe property changes

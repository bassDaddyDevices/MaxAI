---
name: max-for-live
description: Max for live and Max MSP, gen~ and rnbo~
metadata:
  author: Chris Connelly
  version: "1.0.0"
  category: coding, DSP
  keywords: "DSP"
---

# Max for Live Development

Expert assistance for Max for Live device development in Ableton Live, covering M4L fundamentals through advanced topics like Gen~, RNBO, and JavaScript integration. Prioritizes M4L-specific workflows and objects.

## Core Capabilities

- **Max/MSP Patching**: Object usage, signal flow, message routing, data structures
- **M4L Integration**: Device creation, Live API, parameter exposure, automation
- **Gen~ Development**: Codebox syntax, operators, optimization patterns
- **RNBO**: Export workflows, patching differences, hardware targets
- **JavaScript for Max**: jsui, custom logic, data processing
- **Audio/MIDI Processing**: DSP fundamentals, timing, latency management
- **UI/UX Design**: Interface objects, presentation mode, user experience
- **Performance Optimization**: CPU efficiency, memory management, threading
- **Debugging**: Common issues, troubleshooting strategies, testing methods

## When to Use This Skill

**Primary Focus: Max for Live (M4L) development** - Building devices that run inside Ableton Live.

Trigger this skill when the user mentions or asks about:
- "Max for Live", "M4L", "Max/MSP", "Max patch"
- "Gen~", "gen codebox", "RNBO"
- Device development, audio processing, MIDI routing
- Modulation systems, LFOs, envelopes
- Live API, Ableton integration
- JavaScript for Max, jsui, custom UI
- Preset management, pattrstorage
- Performance issues, CPU optimization
- Max object names (e.g., "live.dial", "mc.gen~", "poly~")
- M4L-specific: "plugin~", "plugout~", "midiin", "midiout"

## Documentation Strategy

**Auto-fetch official documentation** when:
- User asks about specific Max objects
- Gen~ operators or syntax questions arise
- RNBO-specific features are discussed
- Uncertainty about API methods or parameters
- Need to verify current best practices

**Primary Documentation Sources**:
- Max 8 Reference: `https://docs.cycling74.com/max8/refpages/`
- Gen~ Overview: `https://docs.cycling74.com/max8/vignettes/gen_overview`
- RNBO Learn: `https://rnbo.cycling74.com/learn`
- Max Tutorials: `https://docs.cycling74.com/max8/tutorials/`

Use `web_fetch` to retrieve documentation when providing technical guidance about specific objects or features.

---

## Max for Live Focus

**IMPORTANT**: This skill prioritizes **Max for Live (M4L)** development over standalone Max/MSP. M4L devices run inside Ableton Live and use Live-specific objects.

### M4L vs Standalone Max

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

### M4L Device Types

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

### M4L-Specific Objects

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

### Context-Aware Behavior

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

### Audio I/O Patterns

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

### MIDI I/O Patterns

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

### Live API Basics

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

### When Standalone Max Concepts Apply

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

---

## Development Workflow

### 1. Understand Requirements
- What does the device need to do?
- Audio, MIDI, or both?
- Modulation sources/targets?
- UI requirements?
- Performance constraints?

### 2. Architecture Planning
- Signal flow diagram (audio path)
- Message routing (control flow)
- Data structures (storage needs)
- Modulation matrix (if applicable)

### 3. Implementation
- Start with core functionality
- Build signal chain first
- Add control logic
- Implement UI last

### 4. Optimization
- Profile CPU usage
- Minimize redundant calculations
- Use appropriate audio rate objects
- Implement efficient DSP

### 5. Testing
- Edge cases (extreme parameters)
- CPU load under stress
- Preset recall accuracy
- Automation behavior

---

## Max/MSP Fundamentals

### Object Types

**Audio Objects** (tilde `~` suffix):
```
[cycle~]     // Sine wave oscillator
[*~]         // Audio multiplication
[plugin~]    // Audio input (M4L - from Live track)
[plugout~]   // Audio output (M4L - to Live track)
[dac~]       // Audio output (Standalone Max only)
[adc~]       // Audio input (Standalone Max only)
```

**Control Objects** (no tilde):
```
[metro]      // Metronome/timer
[counter]    // Count events
[pack]       // Combine values
[route]      // Route messages by first element
```

**UI Objects**:
```
[live.dial]  // Knob with automation
[live.menu]  // Dropdown menu
[live.toggle] // On/off button
```

### Signal vs Message Rate

**Signal Rate** (~): 
- Audio rate (typically 44.1-192 kHz)
- Continuous sample-by-sample processing
- Use for audio, fast modulation
- Connected with patch cords

**Message Rate** (no ~):
- Event-driven, asynchronous
- Discrete value changes
- Use for UI, MIDI, control
- Connected with patch cords

**Key Rule**: Don't convert unnecessarily between domains. Keep audio in audio rate, control in message rate.

### Common Patterns

**Audio Signal Processing**:
```
[inlet~]
|
[*~ 0.5]      // Scale/mix
|
[clip~ -1. 1.] // Safety limiter
|
[outlet~]
```

**Parameter Smoothing**:
```
[live.dial]
|
[line~]       // Smooth jumps, prevent clicks
|
[*~]
```

**Bang-Driven Updates**:
```
[metro 100]   // 10 times per second
|
[random 100]  // Generate value
|
[scale 0 100 -1. 1.] // Map range
```

---

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

---

## Gen~ Basics

Gen~ compiles to optimized machine code for maximum performance.

### When to Use Gen~

**Use Gen~ for**:
- CPU-intensive DSP (filters, distortion, oscillators)
- Sample-accurate timing requirements
- Per-sample conditional logic
- Custom synthesis algorithms

**Don't Use Gen~ for**:
- Simple signal math (regular `[*~]`, `[+~]` is fine)
- Message rate logic
- File I/O or external communication
- When regular Max is fast enough

### Gen~ Codebox Basics

**Operators** (different from Max objects):
```
// Math
+ - * / %         // Arithmetic
sin() cos() tan() // Trigonometry
abs() clip()      // Utilities
pow() sqrt()      // Power functions

// Logic
< > <= >= == !=   // Comparisons
&& || !           // Boolean logic

// Audio
sample()          // Read from buffer
peek()            // Read at index
poke()            // Write to buffer
```

**Variables**:
```
History h(0);     // Single-sample delay, init to 0
Param freq(440);  // User parameter
```

**Basic Codebox Example** (Simple filter):
```
History h(0);
Param cutoff(0.5);

out1 = in1 + (h - in1) * cutoff;
h = out1;
```

### Gen~ Best Practices

- Use `History` for feedback/memory
- Declare `Param` for user controls
- Minimize branching (`if` statements)
- Use `@index` attribute for polyphony
- Profile with `@optimize 1` vs `@optimize 0`

---

## Gen~ Expression Syntax (genexpr)

`genexpr` allows inline Gen~ code without opening a codebox. Critical for quick DSP operations.

### Expression Family Overview

**Three expression objects**:
- `[expr~]` - Basic math expressions (Max native, NOT Gen~)
- `[genexpr]` - Gen~ expressions (compiles to machine code)
- `[rnboexpr]` - RNBO expressions (for RNBO export compatibility)

**When to Use Which**:

| Use Case | Object | Why |
|----------|--------|-----|
| Simple math (add, multiply) | Max objects (`[*~]`, `[+~]`) | Fastest for simple ops |
| Complex inline formula | `[genexpr]` | Compiles, no separate file |
| Need Gen~ operators | `[genexpr]` | Access to full Gen~ operator set |
| Multiple expressions | `[gen~]` codebox | Better organization |
| Complex algorithms | `[gen~]` codebox | Multi-line, variables, loops |
| RNBO export target | `[rnboexpr]` | Ensures export compatibility |
| Legacy/compatibility | `[expr~]` | Older patches, simple cases |

### genexpr Basic Syntax

**Single Expression**:
```
[genexpr in1 * 0.5 + sin(in2 * 6.28318)]
//        ↑    ↑      ↑   ↑
//        input multiply function input
```

**Multiple Inputs**:
```
[genexpr in1 * in2 + in3]
//       in1  in2  in3 (left to right)
```

**Multiple Outputs** (use semicolons):
```
[genexpr out1 = in1 * 2; out2 = in1 * 0.5]
//       output1        output2
```

### Operator Reference

**Arithmetic**:
```
+ - * / %           // Basic math
                    // Note: % is modulo, NOT percentage
```

**Comparison** (returns 0 or 1):
```
< > <= >= == !=     // Standard comparisons
```

**Logical** (returns 0 or 1):
```
&& || !             // AND, OR, NOT
```

**Mathematical Functions**:
```
abs(x)              // Absolute value
sign(x)             // Returns -1, 0, or 1
min(a, b)           // Minimum of two values
max(a, b)           // Maximum of two values
clip(x, lo, hi)     // Clamp x between lo and hi
clamp(x, lo, hi)    // Same as clip
wrap(x, lo, hi)     // Wrap x between lo and hi
fold(x, lo, hi)     // Fold x between lo and hi (reflects)
scale(x, inLo, inHi, outLo, outHi)  // Linear scaling
```

**Trigonometry** (radians):
```
sin(x)              // Sine
cos(x)              // Cosine
tan(x)              // Tangent
asin(x)             // Arc sine
acos(x)             // Arc cosine
atan(x)             // Arc tangent
atan2(y, x)         // Two-argument arc tangent
sinh(x)             // Hyperbolic sine
cosh(x)             // Hyperbolic cosine
tanh(x)             // Hyperbolic tangent
```

**Exponential/Logarithmic**:
```
exp(x)              // e^x
exp2(x)             // 2^x
log(x)              // Natural log (ln)
log10(x)            // Base-10 log
log2(x)             // Base-2 log
pow(x, y)           // x^y
sqrt(x)             // Square root
rsqrt(x)            // Reciprocal square root (1/sqrt(x))
```

**Rounding**:
```
floor(x)            // Round down
ceil(x)             // Round up
round(x)            // Round to nearest
trunc(x)            // Truncate (towards zero)
fract(x)            // Fractional part (x - floor(x))
```

**Conditional** (ternary):
```
condition ? value_if_true : value_if_false

// Example:
in1 > 0 ? in1 : 0   // Rectifier (half-wave)
```

### Parameter Access

**Using Param objects**:
```
[param cutoff @min 0 @max 1 @default 0.5]
|
[genexpr in1 + (history(in1) - in1) * param("cutoff")]
```

**Syntax**:
- `param("name")` - Access parameter by name
- Name must match param object's name
- Parameters are message-rate (not per-sample)

### History (Feedback/Memory)

**Single-sample delay**:
```
[genexpr out1 = in1 + history(in1 * 0.5)]
//              ↑     ↑
//              current  previous output
```

**Multiple history taps**:
```
[genexpr out1 = in1 + history(in1, 1) * 0.5 + history(in1, 2) * 0.25]
//                    ↑                        ↑
//                    1 sample ago            2 samples ago
```

**Named history** (for clarity):
```
// In codebox (not genexpr):
History fb(0);
out1 = in1 + fb * 0.5;
fb = out1;
```

**Important**: `history()` in genexpr creates implicit feedback. Can't name it like `History` in codebox.

### Common Patterns

**Soft Clipping (Waveshaping)**:
```
[genexpr tanh(in1 * 2)]
// Smooth saturation
```

**Hard Clipping**:
```
[genexpr clip(in1, -1, 1)]
// Brick-wall limiting
```

**Crossfade (Linear Mix)**:
```
[genexpr in1 * (1 - in3) + in2 * in3]
// in1 = A, in2 = B, in3 = mix (0-1)
```

**Rectifier (Half-Wave)**:
```
[genexpr max(in1, 0)]
// Positive values only
```

**Full-Wave Rectifier**:
```
[genexpr abs(in1)]
// Absolute value
```

**Lowpass Filter (One-Pole)**:
```
[genexpr in1 + (history(out1) - in1) * in2]
// in1 = input, in2 = coefficient (0-1)
// Higher in2 = lower cutoff
```

**Highpass Filter (One-Pole)**:
```
[genexpr in1 - (in1 + (history(out1) - in1) * in2)]
// Invert lowpass response
```

**Sample & Hold**:
```
[genexpr in2 > 0 ? in1 : history(out1)]
// in1 = signal, in2 = trigger (hold when > 0)
```

**Ring Modulation**:
```
[genexpr in1 * in2]
// Classic ring mod (amplitude modulation with no DC offset)
```

**Frequency Shift** (single-sideband):
```
[genexpr in1 * cos(phasor(in2) * 6.28318) - hilbert(in1) * sin(phasor(in2) * 6.28318)]
// in2 = shift amount in Hz
// Requires hilbert transform (use codebox for this)
```

**Slew Limiter** (Rate limiting):
```
[genexpr min(max(in1, history(out1) - in2), history(out1) + in2)]
// in1 = input, in2 = max change per sample
```

### Performance Tips

**Efficient**:
```
[genexpr in1 * 0.5 + 0.5]     // Single expression
```

**Less Efficient**:
```
[genexpr in1]
|
[genexpr out1 * 0.5]
|
[genexpr out1 + 0.5]
```

**Rule**: Combine operations in one `genexpr` when possible. Each object has overhead.

**Expensive Operations** (use sparingly):
- `pow()` - Very expensive
- `exp()`, `log()` - Expensive
- `sin()`, `cos()` - Moderate cost
- `sqrt()` - Moderate cost
- Division (`/`) - Moderate cost

**Cheap Operations**:
- `+`, `-`, `*` - Very fast
- `abs()`, `min()`, `max()` - Fast
- Conditionals (`?:`) - Fast
- `clip()`, `clamp()` - Fast

### Limitations

**Cannot do in genexpr**:
- Multi-line code (use codebox)
- Named variables like `History h(0)` (use history() function)
- Named parameters like `Param freq(440)` (use param() function)
- Loops (for, while)
- Buffer access (peek, poke, sample)
- Complex algorithms

**Must use gen~ codebox for**:
- Algorithms requiring multiple statements
- Buffer operations (wavetable lookup, delay lines)
- Complex state management
- Clear variable naming
- Comments and documentation

---

## RNBO Expression Syntax (rnboexpr)

`rnboexpr` is similar to `genexpr` but ensures RNBO export compatibility.

### Key Differences from genexpr

| Feature | genexpr | rnboexpr |
|---------|---------|----------|
| Export to RNBO | ❌ May not work | ✅ Guaranteed |
| Operator set | Full Gen~ | RNBO-compatible subset |
| Parameters | `param("name")` | `in2`, `in3` (use inlets) |
| Syntax | Gen~ style | Simplified |
| Use case | Max-only devices | RNBO export targets |

### Basic rnboexpr Syntax

**Same as genexpr for simple math**:
```
[rnboexpr in1 * 0.5 + sin(in2 * 6.28318)]
```

**Multiple outputs**:
```
[rnboexpr out1 = in1 * 2; out2 = in1 * 0.5]
```

### Parameter Handling in RNBO

**Don't use** `param()` function in rnboexpr.

**Instead, use inlets**:
```
[param cutoff @min 0 @max 1]
|
[rnboexpr in1 + (history(in1) - in1) * in2]
//                                      ↑
//                                   parameter via inlet
```

### RNBO-Compatible Operators

**Guaranteed to work**:
```
// Arithmetic
+ - * / %

// Comparison
< > <= >= == !=

// Logical
&& || !

// Math functions
abs() min() max() clip()
floor() ceil() round()
sin() cos() tan()
exp() log() pow() sqrt()
```

**May not work** (check RNBO docs):
```
// Advanced functions (verify compatibility)
atan2() sinh() cosh() tanh()
wrap() fold() scale()
rsqrt() exp2() log2()
```

### When to Use rnboexpr

**Use rnboexpr when**:
- Planning to export to VST/AU via RNBO
- Targeting web audio deployment
- Building for hardware (Raspberry Pi, etc.)
- Need guaranteed cross-platform compatibility

**Use genexpr when**:
- Max for Live device only (no export)
- Need full Gen~ operator set
- More complex expressions possible
- Better parameter integration with `param()`

### RNBO Export Workflow

**1. Development (can use genexpr)**:
```
[genexpr in1 * param("drive") + 0.5]
```

**2. Pre-export (convert to rnboexpr)**:
```
[param drive @min 0 @max 10]
|
[rnboexpr in1 * in2 + 0.5]
```

**3. Validate**:
- Test in RNBO patcher
- Check for unsupported operators
- Verify all parameters accessible

### Common RNBO Patterns

**Waveshaper (RNBO-safe)**:
```
[rnboexpr tanh(in1 * in2)]
// in1 = audio, in2 = drive amount
```

**Crossfade**:
```
[rnboexpr in1 * (1 - in3) + in2 * in3]
```

**Filter (One-Pole)**:
```
[rnboexpr in1 + (history(out1) - in1) * in2]
```

**Soft Clip (Piecewise)**:
```
[rnboexpr in1 < -1 ? -0.66 : (in1 > 1 ? 0.66 : in1 - (in1 * in1 * in1) / 3)]
// Smooth cubic saturation
```

### Debugging Expression Syntax

**Common errors**:

```
// WRONG: Missing operator
[genexpr in1 in2]

// RIGHT: Explicit operation
[genexpr in1 * in2]
```

```
// WRONG: Assignment without semicolon for multi-output
[genexpr out1 = in1 * 2 out2 = in1 * 0.5]

// RIGHT: Semicolon separator
[genexpr out1 = in1 * 2; out2 = in1 * 0.5]
```

```
// WRONG: Integer constants ambiguous
[genexpr in1 * 2]

// RIGHT: Float constants explicit
[genexpr in1 * 2.]
```

**Testing strategy**:
1. Test simple expression first
2. Add complexity incrementally
3. Verify output with `[scope~]`
4. Check for numerical issues (NaN, Inf)
5. Profile CPU usage

### Expression Cookbook

**DC Blocker (High-pass)**:
```
[genexpr in1 - history(in1) + 0.995 * history(out1)]
```

**Slew Rate Limiter**:
```
[genexpr clip(in1, history(out1) - 0.01, history(out1) + 0.01)]
// Limits change to ±0.01 per sample
```

**Soft Knee Compressor (Threshold)**:
```
[genexpr abs(in1) > 0.5 ? in1 * 0.5 : in1]
// Simple threshold at 0.5, 2:1 ratio above
```

**Exponential Decay**:
```
[genexpr in1 > 0 ? in1 : history(out1) * 0.999]
// Trigger in1, decays exponentially
```

**Sample-accurate Gate**:
```
[genexpr in1 * (in2 > 0)]
// in2 controls gate (0 = closed, >0 = open)
```

**Cheap Distortion**:
```
[genexpr in1 / (1 + abs(in1 * in2))]
// in2 = drive amount
```

---

## RNBO Overview

RNBO exports Max/Gen~ patches to C++, plugins, or hardware.

### Key Differences from Gen~

- Uses `[rnbo.in~]` / `[rnbo.out~]` instead of `[in~]` / `[out~]`
- Parameters via `[param]` object
- More flexible I/O configuration
- Supports message I/O alongside audio

### RNBO Export Targets

- **VST/AU Plugins**: Standalone plugins for DAWs
- **Web Audio**: JavaScript web applications
- **C++ Source**: For embedded systems
- **Raspberry Pi**: Hardware devices
- **Max**: Use as regular Max objects

### Basic RNBO Patch

```
[rnbo.in~ 1]
|
[gen~]  // Your DSP code
|
[rnbo.out~ 1]

[param cutoff @min 0 @max 1] // Exposed parameter
```

---

## JavaScript for Max

Use JavaScript for complex logic, data processing, or custom UI.

### When to Use JavaScript

**Good Use Cases**:
- Complex conditional logic
- Data structure manipulation (arrays, objects)
- String processing
- File I/O and parsing
- Mathematical sequences
- Custom UI drawing (jsui)

**Bad Use Cases**:
- Audio rate processing (too slow)
- Simple message routing (use Max objects)
- When Max objects exist for the task

### Basic JavaScript Object

```javascript
// In .js file:
inlets = 1;
outlets = 2;

function msg_int(v) {
    outlet(0, v * 2);        // Double the input
    outlet(1, "value is " + v); // Send message
}

function bang() {
    outlet(0, Math.random());
}
```

**In Max**:
```
[js myfile.js]
```

### jsui for Custom UI

```javascript
// In jsui code editor:
var value = 0;

function paint() {
    // Draw custom graphics
    with (sketch) {
        glclearcolor(0, 0, 0, 1);
        moveto(0, value * mgraphics.size[1]);
        lineto(mgraphics.size[0], value * mgraphics.size[1]);
        glcolor(1, 1, 1, 1);
    }
}

function onclick(x, y) {
    value = y / mgraphics.size[1];
    outlet(0, value);
    mgraphics.redraw();
}
```

---

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

---

## Preset Management

### Using pattrstorage

**Setup**:
```
[pattrstorage preset-name]
|
[autopattr @autoname 1]  // Auto-connect parameters
```

**Manual Parameter Registration**:
```
[live.dial @varname freq]  // @varname creates the link
|
[pattrstorage]
```

**Store/Recall**:
```
[1(  [2(  [3(  // Preset numbers
|    |    |
[pattrstorage]
|
[live.menu]  // Display presets
```

**Save to File**:
```
[write presets.json(  // Export
[read presets.json(   // Import
|
[pattrstorage]
```

### JSON File I/O

**Write JSON**:
```
[dict mydata]
|
[write path/to/file.json]
```

**Read JSON**:
```
[dict mydata]
|
[read path/to/file.json]
```

Use JavaScript for complex JSON manipulation.

---

## Max Patch JSON Interchange

Max patches (.maxpat, .maxhelp, .amxd) are stored as JSON, making them ideal for sharing and collaborative analysis.

### Sharing Patches for Analysis

**IMPORTANT**: Use full patch JSON, **NOT snippets**.

**IMPORTANT**: Do not refference objects, **IE OBJ-23**. Use the name of the object

**Correct - Full Patch JSON**:
- File → Save As... → .maxpat
- Share entire file contents
- Contains complete patch structure
- Human-readable object graph
- Easy to analyze, modify, suggest improvements

**Incorrect - Snippets** (avoid):
- Copy/paste compressed snippets from Max
- Base64 encoded, not human-readable
- Difficult to parse or analyze programmatically
- Cannot easily extract specific sections

**How to Share**:
```
1. Save your patch as .maxpat
2. Open in text editor
3. Copy entire JSON contents
4. Share for analysis
```

### Max Patch JSON Structure

**Top-Level Structure**:
```json
{
  "patcher": {
    "fileversion": 1,
    "appversion": {
      "major": 8,
      "minor": 6
    },
    "boxes": [ /* All objects */ ],
    "lines": [ /* All patch cords */ ],
    "parameters": { /* Exposed parameters */ }
  }
}
```

### Providing Valid Patch JSON

**CRITICAL**: When providing Max patch JSON modifications or examples, **ALWAYS include the complete valid structure** with required wrappers.

**Required Top-Level Fields**:
```json
{
  "patcher": { ... },
  "classnamespace": "box",
  "appversion": {
    "major": 8,
    "minor": 6,
    "revision": 2
  }
}
```

**Minimum Valid Patch** (empty but complete):
```json
{
  "patcher": {
    "fileversion": 1,
    "appversion": {
      "major": 8,
      "minor": 6,
      "revision": 2
    },
    "rect": [100.0, 100.0, 640.0, 480.0],
    "boxes": [],
    "lines": []
  },
  "classnamespace": "box",
  "appversion": {
    "major": 8,
    "minor": 6,
    "revision": 2
  }
}
```

**Why This Matters**:
- Without `classnamespace`: Max won't recognize it as valid
- Without `appversion`: Can't determine compatibility
- Without proper nesting: Copy-paste won't work
- User can't directly paste into Max/M4L

**When Providing Patch Modifications**:
1. **Include full valid wrapper** - Don't just show `patcher.boxes` contents
2. **Use current Max version** - `8.6.2` for Live 12, `8.5.x` for Live 11
3. **Test copy-paste** - Ensure structure is complete
4. **Preserve existing data** - Don't remove unrelated sections

**Good Example** (complete and valid):
```json
{
  "patcher": {
    "fileversion": 1,
    "appversion": {
      "major": 8,
      "minor": 6,
      "revision": 2
    },
    "rect": [100.0, 100.0, 640.0, 480.0],
    "boxes": [
      {
        "box": {
          "maxclass": "live.dial",
          "varname": "frequency",
          "parameter_enable": 1,
          "patching_rect": [100, 200, 50, 50],
          "id": "obj-1",
          "numinlets": 1,
          "numoutlets": 2
        }
      }
    ],
    "lines": []
  },
  "classnamespace": "box",
  "appversion": {
    "major": 8,
    "minor": 6,
    "revision": 2
  }
}
```

**Bad Example** (incomplete, won't paste):
```json
{
  "boxes": [
    {
      "box": {
        "maxclass": "live.dial",
        "varname": "frequency"
      }
    }
  ]
}
```

### Partial Modifications vs Full Patches

**When suggesting modifications**:
- Provide the **specific changes** conceptually
- Then provide a **complete valid JSON** showing the full patch with changes
- User should be able to copy entire JSON and paste into .maxpat file

**Example Workflow**:
```
User: "Add a lowpass filter to this patch"

Response:
1. Explain what to add (conceptual)
2. Provide complete valid JSON with:
   - Full patcher wrapper
   - classnamespace
   - appversion
   - All existing boxes + new filter boxes
   - All existing lines + new connections
```

**Box (Object) Structure**:
```json
{
  "box": {
    "maxclass": "live.dial",
    "varname": "frequency",
    "parameter_enable": 1,
    "patching_rect": [100, 200, 50, 50],
    "presentation_rect": [10, 10, 50, 50],
    "id": "obj-42",
    "numinlets": 1,
    "numoutlets": 2
  }
}
```

**Line (Connection) Structure**:
```json
{
  "patchline": {
    "source": ["obj-1", 0],  // [object_id, outlet_index]
    "destination": ["obj-2", 1]  // [object_id, inlet_index]
  }
}
```

### Analyzing Patch Structure

**Finding Objects by Type**:
```javascript
// In analysis context
const liveObjects = patcher.boxes.filter(
  box => box.maxclass && box.maxclass.startsWith('live.')
);

const genObjects = patcher.boxes.filter(
  box => box.maxclass === 'gen~'
);
```

**Mapping Signal Flow**:
```javascript
// Build connection graph
const connections = patcher.lines.map(line => ({
  from: line.patchline.source[0],
  fromOutlet: line.patchline.source[1],
  to: line.patchline.destination[0],
  toInlet: line.patchline.destination[1]
}));

// Find all connections from a specific object
const outputsFrom = (objId) => connections.filter(
  c => c.from === objId
);
```

**Finding Parameters**:
```javascript
// All automatable parameters
const automatable = patcher.boxes.filter(
  box => box.parameter_enable === 1
);

// Parameters missing varnames
const needsVarname = automatable.filter(
  box => !box.varname
);
```

### Common Analysis Tasks

**1. Identify Audio Rate Bottlenecks**
Look for:
- Multiple `[poly~]` objects without voice limiting
- Gen~ objects without `@optimize 1`
- Redundant audio rate calculations
- Missing `[line~]` for parameter smoothing

**2. Find Signal Flow Issues**
Check for:
- Dead ends (objects with no outputs)
- Orphaned objects (no inputs or outputs)
- Circular dependencies (without proper delays)
- Mixed signal/message rate connections

**3. Validate Parameter Exposure**
Verify:
- All UI objects have `@parameter_enable 1`
- Meaningful `@varname` attributes set
- Appropriate `@automation_name` for user clarity
- Consistent `@range` and `@unit_style`

**4. Check Presentation Mode**
Look for:
- Objects with `presentation_rect` defined
- Logical layout (x/y coordinates)
- Overlapping UI elements
- Missing labels or comments

**5. Detect Performance Issues**
Search for:
- `[snapshot~]` with very fast rates (< 10ms)
- Audio rate objects that could be message rate
- Large buffer sizes without `@embed 0`
- Excessive use of `[delay]` vs `[pipe]`

### Collaborative Workflow

**When Sharing Patches**:
1. Save as .maxpat (not .amxd if seeking general advice)
2. Include comments explaining intent
3. Note specific issues or questions
4. Mention performance constraints
5. Share full JSON, not snippets

**When Receiving Analysis**:
1. Review suggested object changes
2. Check proposed connection modifications
3. Validate parameter recommendations
4. Test suggested optimizations incrementally
5. Profile before/after CPU usage

**Modifying Patches Programmatically**:
```javascript
// Example: Add @varname to all live.dial objects
patcher.boxes.forEach(box => {
  if (box.maxclass === 'live.dial' && !box.varname) {
    // Suggest varname based on automation_name
    box.varname = box.automation_name
      .toLowerCase()
      .replace(/\s+/g, '_');
  }
});
```

### Extract Specific Sections

**Find a Subpatcher**:
```javascript
const subpatchers = patcher.boxes.filter(
  box => box.maxclass === 'newobj' && 
         box.text && box.text.startsWith('p ')
);

// Subpatcher contents are in box.patcher
const subpatchContents = subpatchers[0].patcher;
```

**Isolate Gen~ Code**:
```javascript
const genPatches = patcher.boxes.filter(
  box => box.maxclass === 'gen~'
);

// Gen~ code is in box.gen_codebox or box.patcher
const genCode = genPatches[0].gen_codebox;
```

**Export pattrstorage Data**:
```javascript
const presetStorage = patcher.boxes.find(
  box => box.maxclass === 'pattrstorage'
);

// Stored presets are in box.saved_object_attributes.data
const presets = presetStorage.saved_object_attributes.data;
```

### Best Practices for JSON Patches

**DO**:
- Share complete .maxpat files for analysis
- Include context about the patch's purpose
- Use descriptive varnames and object names
- Add comments for complex sections
- Keep presentation mode organized
- **Always provide complete, valid JSON with classnamespace and appversion**
- **Ensure JSON is copy-paste ready into .maxpat files**

**DON'T**:
- Use compressed snippets for collaboration
- Manually edit JSON (use Max interface)
- Remove comments before sharing
- Share .amxd files if .maxpat is more appropriate
- Nest too deeply without documentation
- **Provide incomplete JSON structures missing required wrappers**
- **Show only partial patcher contents without full document structure**

### JSON Validity Checklist

Before providing Max patch JSON, verify:
- [ ] Includes `"classnamespace": "box"` at root level
- [ ] Includes `"appversion"` object at root level
- [ ] Includes complete `"patcher"` object
- [ ] All boxes have proper `"box"` wrapper
- [ ] Can be copied directly into a .maxpat file
- [ ] Max version specified (8.6.2 for Live 12, 8.5.x for Live 11)

### Troubleshooting JSON Issues

**Invalid JSON**:
- Max sometimes creates malformed JSON on crash
- Validate with `python -m json.tool patch.maxpat`
- Common issues: trailing commas, unescaped strings

**Missing Objects After Load**:
- Referenced external objects not installed
- Check `maxclass` fields for unknown types
- Look for `[newobj]` with unresolved text

**Performance Degradation**:
- Large patch files (> 1MB) load slowly
- Consider breaking into subpatchers
- Use `[poly~]` for repeated structures

---

## Performance Optimization

### CPU Efficiency

**Profile First**:
- Use Audio Status Window (Cmd+B / Ctrl+B)
- Monitor CPU % per object
- Identify bottlenecks before optimizing

**Optimization Strategies**:
1. **Reduce Audio Rate Calculations**: Move to control rate when possible
2. **Use poly~**: Parallelize identical processes
3. **Gen~ for Hot Loops**: Compile critical DSP
4. **Minimize Branching**: Avoid conditionals in audio rate
5. **Downsample**: Use `[downsamp~]` / `[upsamp~]` for slower processes
6. **Event Rate**: Use `[edge~]` to trigger from audio only on changes

**Example - Throttle Updates**:
```
[live.dial]
|
[change]      // Only pass when value changes
|
[line~]       // Smooth output
```

### Memory Management

- Clear buffers when not in use
- Limit polyphony voices
- Release `[coll]` and `[dict]` data when done
- Use `@embed 0` for large files

---

## Debugging Strategies

### Common Issues

**No Audio Output**:
- In M4L: Verify `[plugin~]` and `[plugout~]` are connected
- In standalone Max: Check `[dac~]` is on (Audio Status Window)
- Verify signal path with `[meter~]` or `[scope~]`
- Ensure proper signal rate (`~`) throughout chain
- Check volume/gain stages
- Verify track is armed/playing in Live (M4L context)

**Clicks/Pops**:
- Add `[line~]` for parameter smoothing
- Use `[selector~]` or `[gate~]` with ramps for switching
- Check block size (`@blocksize` in `[gen~]`)

**CPU Spikes**:
- Profile with Audio Status Window
- Look for redundant calculations
- Move logic to message rate if possible
- Consider `[defer]` for expensive operations

**Preset Recall Issues**:
- Verify `@parameter_enable 1` on all controls
- Check `pattrstorage` client list
- Use `@varname` for explicit naming
- Test preset recall in plugin host

### Testing Tools

```
[print]        // Debug messages to console
[meter~]       // Visual audio level
[scope~]       // Waveform display
[spectroscope~] // Frequency display
[message]      // Display current value
```

---

## UI/UX Best Practices

### Presentation Mode

Create clean, professional interfaces:
1. **Patching Mode**: Full development view
2. **Presentation Mode**: User-facing UI only

**Enable for UI Objects**:
```
Inspector → Appearance → Include in Presentation
```

**Positioning**:
- Grid alignment (Cmd+Y / Ctrl+Y for grid snap)
- Consistent spacing
- Logical grouping (group related controls)

### UI Object Recommendations

**For Parameters**:
- `[live.dial]` - Continuous values, automation support
- `[live.menu]` - Discrete choices
- `[live.toggle]` - Binary on/off
- `[live.numbox]` - Numeric entry

**For Display**:
- `[live.meter~]` - Audio level
- `[live.scope~]` - Waveform
- `[live.gain~]` - Level control with meter
- `[comment]` - Labels and instructions

**For Organization**:
- `[panel]` - Visual grouping/backgrounds
- `[comment]` - Section headers
- Consistent colors for signal types

### User Experience

- **Clear Labeling**: Every control needs context
- **Logical Layout**: Left-to-right, top-to-bottom signal flow
- **Visual Hierarchy**: Important controls prominent
- **Safe Defaults**: Device should sound good immediately
- **Tooltips**: Use Inspector → Help → Tooltip for guidance

---

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

---

## Additional Resources

When in doubt, fetch official documentation:
- **Max Object Reference**: Specific object behavior
- **Gen~ Vignettes**: Operator details and patterns  
- **RNBO Guides**: Export-specific workflows
- **Max Tutorials**: Step-by-step learning paths

Use `web_fetch` to retrieve current documentation when providing specific technical guidance.

---

## Skill Expansion Areas

This skill provides broad, shallow coverage. Future iterations can deepen:
- Advanced Gen~ optimization techniques
- Complex modulation matrix architectures
- Multi-channel (mc) processing
- Jitter video processing integration
- Advanced Live API automation
- Commercial device deployment
- Cross-platform compatibility
- Hardware control integration (OSC, MIDI, HID)

Let the user's needs guide which areas to expand.

---

## Device Release Checklist

Use this checklist before releasing M4L devices commercially or publicly. Essential for ensuring compatibility, performance, and professional quality.

### Pre-Release Validation

**1. Dependency Check**
- [ ] All external objects are bundled or documented
- [ ] No references to personal file paths
- [ ] All `[js]` files included in device
- [ ] All abstractions (.maxpat files) included
- [ ] All `[coll]` and `[dict]` data files included
- [ ] No `[bpatcher]` references to external files
- [ ] All Gen~ export dependencies included
- [ ] Check for `[poly~]` subpatchers - all included?

**How to check dependencies in JSON**:
```javascript
// Find all external file references
const externalRefs = patcher.boxes.filter(box => {
  // JS files
  if (box.maxclass === 'js' && box.filename) return true;
  // Abstractions
  if (box.maxclass === 'newobj' && box.text && !box.text.includes('[')) return true;
  // Bpatchers
  if (box.maxclass === 'bpatcher' && box.name) return true;
  // Colls/Dicts
  if ((box.maxclass === 'coll' || box.maxclass === 'dict') && box.saved_object_attributes?.embed === 0) return true;
  return false;
});

// List all dependencies
externalRefs.forEach(ref => {
  console.log(`Dependency: ${ref.maxclass} - ${ref.filename || ref.text || ref.name}`);
});
```

**2. Max/Live Version Compatibility**

**Current Ableton Live Versions** (as of Feb 2025):
- **Live 12**: Ships with Max 8.6.2
- **Live 11**: Ships with Max 8.1.5 → 8.5.6 (varies by update)
- **Live 10**: Ships with Max 8.0.0 → 8.1.11 (end of life)

**Version Check Strategy**:
```javascript
// Check minimum required Max version
const patchVersion = patcher.appversion;
console.log(`Patch requires Max ${patchVersion.major}.${patchVersion.minor}.${patchVersion.revision || 0}`);

// Warning flags:
// - Max 8.6+ features won't work in Live 11
// - Max 8.5+ features won't work in older Live 11 versions
// - Gen~ codebox features vary by version
```

**Compatibility Checklist**:
- [ ] Target Live version identified (11, 12, or both)
- [ ] Max version noted in documentation
- [ ] No Max 8.6 features if supporting Live 11
- [ ] Gen~ operators compatible with target version
- [ ] JavaScript API calls compatible (check mgraphics, etc)
- [ ] No recent Max objects that don't exist in older versions

**Common Version-Specific Objects**:
- `[mc.*]` objects - Max 8.1+ (Live 11.1+)
- `[dict]` improvements - Max 8.0+
- `[live.path]` enhancements - Max 8.5+
- Gen~ `@optimize 2` - Max 8.5+

**3. Performance Validation**
- [ ] CPU usage tested at 44.1kHz and 96kHz
- [ ] Device works properly at all sample rates
- [ ] No audio dropouts under stress
- [ ] Automation performs smoothly
- [ ] Multiple instances don't cause issues
- [ ] Tested in frozen/flattened tracks
- [ ] Buffer sizes tested (64, 128, 256, 512, 1024)

**4. Parameter Configuration**
- [ ] All controls have `@parameter_enable 1`
- [ ] Meaningful `@varname` on every parameter
- [ ] Clear `@automation_name` for users
- [ ] Appropriate `@range` values set
- [ ] Correct `@unit_style` (float, int, Hz, dB, %)
- [ ] Default values are musical/useful
- [ ] `@initial_enable 1` for preset defaults
- [ ] No duplicate varnames

**Validate parameters in JSON**:
```javascript
// Find parameter issues
const params = patcher.boxes.filter(box => box.parameter_enable === 1);

const issues = params.map(p => {
  const problems = [];
  if (!p.varname) problems.push('Missing varname');
  if (!p.automation_name) problems.push('Missing automation_name');
  if (!p.range) problems.push('Range not set');
  return { id: p.id, name: p.varname || 'unnamed', problems };
}).filter(p => p.problems.length > 0);

console.log('Parameter Issues:', issues);
```

**5. Preset System**
- [ ] `[pattrstorage]` properly configured
- [ ] Factory presets included
- [ ] Preset recall works correctly
- [ ] No clicks/pops on preset change
- [ ] Preset names are descriptive
- [ ] Presets demonstrate device range
- [ ] `@savemode` set appropriately (0, 1, or 2)

**6. Presentation Mode**
- [ ] Clean, professional layout
- [ ] All controls properly sized
- [ ] Labels/comments clear and helpful
- [ ] No overlapping elements
- [ ] Grid-aligned (looks polished)
- [ ] Consistent visual style
- [ ] Device name/version visible
- [ ] Tooltips on key controls
- [ ] Proper sizing (reasonable width/height)

**7. Audio/MIDI I/O**
- [ ] Correct number of inputs/outputs
- [ ] `[plugin~]` and `[plugout~]` properly configured
- [ ] No DC offset introduced
- [ ] Proper gain staging (no unexpected level changes)
- [ ] Stereo width maintained (if applicable)
- [ ] MIDI channels handled correctly
- [ ] MIDI clock/transport handled if needed

**8. Error Handling**
- [ ] No Max window errors on load
- [ ] No errors on parameter changes
- [ ] No errors on preset recall
- [ ] Handles missing files gracefully
- [ ] Invalid input ranges handled
- [ ] No crashes under extreme settings
- [ ] `[loadbang]` executes properly

**9. File Preparation**
- [ ] Save as .amxd (Max for Live Device)
- [ ] `@embed 1` for all internal files
- [ ] Remove development comments (or keep useful ones)
- [ ] Clean up unused objects
- [ ] Delete unused subpatchers
- [ ] File size reasonable (< 5MB preferred)
- [ ] Device name follows convention (no spaces in filename)

**How to check file size and embedded content**:
```bash
# Check .amxd file size
ls -lh MyDevice.amxd

# Extract and inspect contents
unzip -l MyDevice.amxd
# Look for: code/, data/, media/ folders
# Verify all dependencies are included
```

**10. Documentation**
- [ ] README or manual included
- [ ] Parameter descriptions clear
- [ ] Example use cases provided
- [ ] Known limitations noted
- [ ] System requirements listed (Min Live version, etc.)
- [ ] Contact/support information
- [ ] Version number and date
- [ ] License terms (if commercial)

**11. Testing Matrix**

Test on multiple configurations:

| Platform | Live Version | Sample Rate | Buffer Size | Result |
|----------|-------------|-------------|-------------|--------|
| macOS | 12 | 44.1kHz | 128 | ✓ |
| macOS | 11 | 48kHz | 256 | ✓ |
| Windows | 12 | 96kHz | 512 | ✓ |

- [ ] Tested on macOS
- [ ] Tested on Windows
- [ ] Tested in Live 11 (if supporting)
- [ ] Tested in Live 12
- [ ] Multiple sample rates verified
- [ ] Various buffer sizes tested

**12. Commercial Release Extras**
- [ ] Version number in device (visible to user)
- [ ] Copyright/branding present
- [ ] License activation (if applicable)
- [ ] Update mechanism (if applicable)
- [ ] Demo/trial limitations working
- [ ] Purchase/unlock information clear
- [ ] Support email/website included

### Quick Dependency Scan Script

Save this as `check_dependencies.py`:

```python
import json
import sys

def check_dependencies(patch_file):
    with open(patch_file, 'r') as f:
        patch = json.load(f)
    
    issues = []
    patcher = patch.get('patcher', {})
    boxes = patcher.get('boxes', [])
    
    # Check for external references
    for box in boxes:
        box_obj = box.get('box', {})
        maxclass = box_obj.get('maxclass', '')
        
        # JS files
        if maxclass == 'js' and box_obj.get('filename'):
            issues.append(f"External JS: {box_obj['filename']}")
        
        # Colls/Dicts not embedded
        if maxclass in ['coll', 'dict']:
            embed = box_obj.get('saved_object_attributes', {}).get('embed', 1)
            if embed == 0:
                issues.append(f"Non-embedded {maxclass}: {box_obj.get('id')}")
        
        # Bpatchers
        if maxclass == 'bpatcher' and box_obj.get('name'):
            issues.append(f"External bpatcher: {box_obj['name']}")
    
    # Check Max version
    appversion = patcher.get('appversion', {})
    max_version = f"{appversion.get('major', '?')}.{appversion.get('minor', '?')}"
    print(f"\nMax Version: {max_version}")
    
    if float(f"{appversion.get('major', 8)}.{appversion.get('minor', 0)}") >= 8.6:
        print("⚠️  WARNING: Max 8.6+ - Not compatible with Live 11")
    
    # Report issues
    if issues:
        print("\n🚨 DEPENDENCY ISSUES FOUND:")
        for issue in issues:
            print(f"  - {issue}")
        return False
    else:
        print("\n✅ No external dependencies found")
        return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python check_dependencies.py patch.maxpat")
        sys.exit(1)
    
    check_dependencies(sys.argv[1])
```

**Usage**:
```bash
python check_dependencies.py MyDevice.maxpat
```

### Release Workflow

1. **Development Complete** → Run through checklist items 1-8
2. **Save as .amxd** → Embed all dependencies
3. **Run dependency scan** → Verify no external references
4. **Testing Phase** → Complete testing matrix (item 11)
5. **Documentation** → Write user guide (item 10)
6. **Final Validation** → One more pass through full checklist
7. **Version Control** → Tag release version
8. **Distribution** → Upload to store/website
9. **Support Ready** → Monitor for issues

### Version Numbering

Use semantic versioning: `MAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes (different presets, UI overhaul)
- **MINOR**: New features (additional parameters, modes)
- **PATCH**: Bug fixes, small improvements

Example: `SubArchitect v2.1.3`

### Post-Release Monitoring

- [ ] User feedback collected
- [ ] Bug reports tracked
- [ ] Performance issues logged
- [ ] Compatibility issues noted
- [ ] Update roadmap planned

---

## Skill Expansion Areas
Claude
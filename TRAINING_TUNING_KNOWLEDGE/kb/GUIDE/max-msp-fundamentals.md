---
type: guide
name: "Max/MSP Fundamentals and Workflow"
summary: "Object types, signal vs message rate, common patching patterns, and the requirements-to-testing development workflow"
source: "SKILL.md (Max/M4L development guide)"
---

# Max/MSP Fundamentals and Workflow

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

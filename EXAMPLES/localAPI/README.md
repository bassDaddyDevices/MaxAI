# LOCAL API EXAMPLE 

In this example, I am using a simple set up to serve a local MLX model. Basically the model will output thispatcher scripting messages to build out patches. Without using JSON, NODE or any other depencies other than the model itself. 

## SETUP 

### SERVER

If you are using local models like Ollama or MLX-LM, line 9 to whatever your local host port is 

```javascript
http://127.0.0.1:1337/v1/chat/completions
```

Then copy the three files into your .amxd or use the file I have included. Load the index.html via jweb and you should auto connect. 

### AGENT 

For best results I suggest loading your model into a GUI like openGUI or Osaurus. I have had almost perfect results with this set up. I am currently using [Qwen AgentWorld 35B A3B JANG_4M](https://huggingface.co/OsaurusAI/Qwen-AgentWorld-35B-A3B-JANG_4M). This model is designed for apple silicone

Whichever agent you use, take the .MD files from the Max Objects Folder, upload them into the models knowlegde base and, if you'd like use the the prompt and new skill I have provided. 

## RESULTS 

```text
Create a stereo audio mute switch. Include a live.text button acting as a toggle, two gate~ objects to interrupt the left and right audio signals, Make sure the toggle controls both gates simultaneously. use plugin~ and plugout~ objetcs so signal flows through the patch
```

```text
script newdefault mute_toggle 50 50 live.text toggle,
script newdefault gate_left 150 50 gate~,
script newdefault gate_right 150 100 gate~,
script newdefault plugin_in 50 150 plugin~,
script newdefault plugin_out 50 250 plugout~,
script connect mute_toggle 0 gate_left 1,
script connect mute_toggle 0 gate_right 1,
script connect plugin_in 0 gate_left 0,
script connect plugin_in 1 gate_right 0,
script connect gate_left 0 plugin_out 0,
script connect gate_right 0 plugin_out 1
```
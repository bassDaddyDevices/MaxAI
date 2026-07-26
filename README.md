# MaxAI

## Overview
MaxAI is a project that explores the intersection of AI and the Max/MSP environment. This project aims to enhance the capabilities of AI in handling visual programming tasks, particularly within the Max/MSP ecosystem.

## Key Findings

### AI Coding Assistance

 AI can assist with writing codebox code and genExpr scripts. If you are using the Claude skill files, Claude SHOULD dluble check the codebox docs and pretty much nail complex DSP. Sometimes Claude might still make up objects but I have been fine tuning the skil file which helps a lot. 
 
 AI excels at handling JavaScript-based tasks, including JSUi and V8UI. Getting Claude to handle in patch JS works very well. 

### Visual Programming Challenges
 AI struggles with understanding and executing visual patches, when you copy a patch from Max into an AI model it includes everything from the project that that the AI needs to parse and even small patches quickly end up being 10,000 line of JSON. 
 
 Best practices include breaking down patches into sections or starting from scratch.
 
 That being said Claude (code or desktop) and Copilot (in VSCODE) but handle parsing these files pretty well. 

### Alternative Tools
 Claude is preferred for conversational programming, offering a more intuitive approach compared to anything else. 
 
 The problem is that the desktop app will stop the conversation once the context gets out of control so I would suggest creating a project if you are using the desktop app for each patch. This allows you to wave way bigger files. 

## Skill Files 

The skill files in claudeSkills and generailAI are the same files. Just in different formats for Claude. 

The original Max skill was almost 50,000 character and even though it was very thuro and worked great after doing some research, I decided to chop it up into 7 documents and put into the knowledge base for local AI. If you are using Claude desktop the skill file will work just fine for you without slowing things down to bad. 

## Roadmap

### Local API
 I had some luck with local API models and creating patches and I think I will be able to transfer this over to Claude as well. In the examples folder there is an example of a local server and set up for either MLX or Ollama. I would suggest using open web ui or something similar to build an agent and I have left instructions in the folder on how to do it.

### User Feedback

 Continuously gather and incorporate user feedback to improve the project.

## Community and Support

I encourage users to share their experiences, ask questions, and suggest improvements. Your input is invaluable to the development of MaxAI.

## Get Involved

If you are interested in contributing to MaxAI, please feel free to reach out. We welcome anyone who wants to learn more about AI and Max/MSP.

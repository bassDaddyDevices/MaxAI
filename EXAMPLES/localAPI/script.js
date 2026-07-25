sendBtn.addEventListener('click', async () => {
    const text = userInput.value.trim();
    if (!text) return;

    chatOutput.innerHTML += `<div><b>You:</b> ${text}</div>`;
    userInput.value = '';

    try {
        const response = await fetch('http://127.0.0.1:1337/v1/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'OsaurusAI/Qwen-AgentWorld-35B-A3B-MXFP8', // verify exact active string name
                messages: [{ role: 'user', content: text }],
                temperature: 0.25 // Matching your chosen setting
            })
        });

        const data = await response.json();
        let reply = data.choices[0].message.content.trim(); // Standard OpenAI fallback path

        // 🛡️ AGENT PROTECTION: Remove any markdown if the agent slips up
        reply = reply.replace(/```[a-zA-Z]*/gi, '');
        reply = reply.replace(/```/g, '');

        // 🛡️ ANCHOR CLEANUP: Ensure the string starts exactly at the first "script " command
        const scriptIndex = reply.toLowerCase().indexOf("script ");
        if (scriptIndex !== -1) {
            reply = reply.substring(scriptIndex);
        }

        reply = reply.trim();

        // Display interface elements
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = `
            <b>oMLX Suggested Command:</b> 
            <pre style="background:#eee; padding:8px; margin:5px 0; font-family:monospace; white-space:pre-wrap;">${reply}</pre>
            <button class="approve-btn" style="background:#28a745; color:white; border:none; padding:6px 12px; cursor:pointer; border-radius:4px;">Approve & Send to Max</button>
        `;

        messageDiv.querySelector('.approve-btn').addEventListener('click', () => {
            if (typeof window.max !== 'undefined') {
                window.max.set_outlet_value(reply);
            } else {
                alert("Not running inside a Max jweb object!");
            }
        });

        chatOutput.appendChild(messageDiv);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    } catch (error) {
        chatOutput.innerHTML += `<div style="color: red;">Error connecting to AgentWorld model</div>`;
    }
});

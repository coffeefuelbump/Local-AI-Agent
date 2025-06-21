# Local AI Agent

A React-based local AI agent interface with an animated robot icon and multi-line command input. Commands are sent to a Zapier webhook, enabling seamless automation and integration with over 7,000 apps.

# Step 1: Clone the Repo

<img width="1156" alt="Local Agent" src="https://github.com/user-attachments/assets/bd345fcc-8879-47e4-a60f-ab67cf61c05a" />


## 🎬 Setup Video

To get started, watch this quick walkthrough:

👉 https://www.youtube.com/@Corbin_Brown

## 🚀 Clone & Run

```bash
git clone https://github.com/coffeefuelbump/Local-AI-Agent.git
cd Local-AI-Agent
npm install
npm start
```

# Step 2: Create Your Zapier AI Agent

1. Go to [Zapier Agents](https://zapier.com/agents)  
2. Enter the following **Prompt**:

   > **You will receive an Agent Input Message, follow its command.**  
   >  
   > **Here are the actions you can execute:**  
   > - Any Zapier app (e.g. Gmail, Slack, Trello…)  
   > - Google Search  
   > - Visit website  
   > - …and more

<img width="820" alt="Zap Agent" src="https://github.com/user-attachments/assets/f737f020-27df-41ee-a31e-83c0e67acc4b" />


3. Save your Agent.

# Step 3: Create Your Zapier Automation

1. **Trigger**  
   - App & Event: **Webhooks by Zapier → Catch Hook**  
   - Copy the generated webhook URL.

2. **Action**  
   - Action: **Zapier Agent**  
   - In the “Set up action” section, map the incoming payload (e.g. `{{command}}`) into the Agent’s **Agent Input Message** field.

3. Turn your Zap **ON**.

<img width="796" alt="Zap Auto" src="https://github.com/user-attachments/assets/d44e08a7-c645-448c-8616-5afc8137f013" />

# Local AI Agent

A React-based local AI agent interface with an animated robot icon and multi-line command input. Commands are sent to a Zapier webhook, enabling seamless automation and integration with over 7,000 apps.

# Step 1: Clone the Repo

A React-based local AI agent interface with an animated robot icon and multi-line command input. Commands are sent to a Zapier webhook, enabling seamless automation and integration with over 7,000 apps.

## 🎬 Setup Video

To get started, watch this quick walkthrough:

👉 https://www.youtube.com/@Corbin_Brown

## 🚀 Clone & Run

```bash
git clone https://github.com/coffeefuelbump/Local-AI-Agent.git
cd Local-AI-Agent
npm install
npm start
'''

# Step 2: Create Your Zapier AI Agent

1. In your Zapier dashboard, click **Create → AI Agent**  
2. Enter the following **Prompt**:

   > **You will receive an Agent Input Message, follow its command.**  
   >  
   > **Here are the actions you can execute:**  
   > - Any Zapier app (e.g. Gmail, Slack, Trello…)  
   > - Google Search  
   > - Visit website  
   > - …and more

3. Save your Agent.

# Step 3: Create Your Zapier Automation

1. **Trigger**  
   - App & Event: **Webhooks by Zapier → Catch Hook**  
   - Copy the generated webhook URL.

2. **Action**  
   - App & Event: **Agents → Run Agent**  
   - In the “Set up action” section, map the incoming payload (e.g. `{{command}}`) into the Agent’s **Command** field.

3. Turn your Zap **ON**.
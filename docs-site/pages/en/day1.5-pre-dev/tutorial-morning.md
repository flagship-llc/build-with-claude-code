# Tutorial: Build a Morning Notification Tool

In this tutorial, you'll build a tool that sends you daily notifications at 8am with your schedule and weather forecast.
You'll learn how to integrate with Google Calendar and Slack/Email.

---

## Final Result

Every morning at 8am, you'll receive a Slack (or email) notification like this:

```
Good morning! Here's your schedule and weather for today.

【Today's Schedule】
- 10:00-11:00 Team Meeting
- 14:00-15:00 Client Meeting
- 16:00-17:00 1-on-1

【Weather】
🏠 Home (Shibuya): Sunny, High 18°C / Low 8°C
🏢 Office (Minato): Sunny, High 17°C / Low 7°C
☂️ No umbrella needed today

Have a great day!
```

---

## Time Required

1-2 hours

---

## Prerequisites

1. Environment setup is complete
2. Google account (for Calendar integration)
3. Slack workspace access (if using Slack notifications)

---

## Step 1: Create Project Folder

### Open Folder in VS Code

1. Launch VS Code
2. From the menu, select "File" → "Open Folder"
3. Create and open a new folder called `~/projects/morning-notify`

### Open Claude Code

Click the **Claude icon** in VS Code's left sidebar to open the chat panel.

---

## Step 2: Create Weather Fetching Feature

Let's start simple by building the weather information retrieval.

### Tell Claude

```
Create a Python script that fetches weather forecasts.

Features:
- Use OpenWeatherMap API (has free tier)
- Get weather for 2 locations
  - Location 1: Shibuya, Tokyo (home)
  - Location 2: Minato, Tokyo (office)
- Get today's weather, high/low temperature, precipitation chance
- Determine if an umbrella is needed

Output example:
🏠 Home (Shibuya): Sunny, High 18°C/Low 8°C, 10% chance of rain
🏢 Office (Minato): Sunny, High 17°C/Low 7°C, 15% chance of rain
☂️ No umbrella needed

Name the file weather.py.
Load API key from environment variables.
```

### Get OpenWeatherMap API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/)
2. Create a free account
3. Get your key from the API Keys page

### Set Environment Variables

```
Create a .env file to store the API key.
Also create .gitignore so .env won't be published.
```

---

## Step 3: Google Calendar Integration

Next, add the feature to get today's schedule.

### Tell Claude

```
Create a script to get today's events from Google Calendar.

Features:
- Use Google Calendar API
- Get today's events in chronological order
- Display event title, start time, and end time

Name the file calendar.py.
Read credentials from credentials.json and save token to token.json.
```

### Google Calendar API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Go to "APIs & Services" → "Library" and enable "Google Calendar API"
4. Go to "Credentials" → "Create Credentials" → "OAuth Client ID"
5. Select "Desktop App"
6. Download `credentials.json` and place it in your project folder

### Test Run

```
Run calendar.py and get today's schedule
```

A browser authentication window will open on first run.

---

## Step 4: Create Notification Feature (Slack)

Add the feature to send notifications to Slack.

### Tell Claude

```
Create a script to send notifications to Slack.

Features:
- Use Slack Incoming Webhook
- Post messages to a Slack channel

Name the file notify_slack.py.
Load Webhook URL from environment variables.
```

### Slack Webhook Setup

1. Go to [Slack API](https://api.slack.com/apps)
2. Click "Create New App" → "From scratch"
3. Enter app name and select workspace
4. Enable "Incoming Webhooks"
5. Click "Add New Webhook to Workspace" and select the channel
6. Copy the Webhook URL and add it to `.env`

---

## Step 5: Integrate Everything

Combine weather, calendar, and Slack notification into one script.

### Tell Claude

```
Integrate weather.py, calendar.py, and notify_slack.py
into a single morning notification script.

Name the file morning_notify.py.

Flow:
1. Fetch weather information
2. Get today's schedule
3. Compose the message
4. Send to Slack

Message format:
---
Good morning! Here's your schedule and weather for today.

【Today's Schedule】
- [time] [event name]
...

【Weather】
🏠 Home (Shibuya): [weather] High °C/Low °C
🏢 Office (Minato): [weather] High °C/Low °C
☂️ [umbrella advice]

Have a great day!
---
```

---

## Step 6: Set Up Scheduled Execution

Configure automatic execution every morning at 8am.

### For Mac (launchd)

```
Create a launchd configuration file to run morning_notify.py every morning at 8am
```

### For GitHub Actions (Cloud Execution)

```
Create a GitHub Actions workflow to run morning_notify.py every day at 8am (local time).
Also explain how to set the required environment variables in Secrets.
```

---

## If You Want Email Notifications Instead

You can also send notifications via email instead of Slack.

### Tell Claude

```
Change from Slack notification to sending email via Gmail.
Send to my own email address.
Use Gmail API.
```

---

## Troubleshooting

### Google Calendar Authentication Error

```
Delete token.json and re-run calendar.py
```

Re-authentication in the browser will be required.

### Can't Get Weather

Check if the API key is set correctly:
```
Check the contents of .env and verify OPENWEATHER_API_KEY is set
```

### Can't Post to Slack

```
Verify the Webhook URL is correct.
Try sending a test message.
```

---

## Advanced Challenges (If Time Permits)

### Clothing Advice Based on Weather

```
Add clothing advice based on temperature.
Example: Below 10°C suggest "Don't forget your coat"
```

### Train Delay Information

```
Add delay information for commuter train lines
```

### Multiple Calendar Integration

```
Integrate and display both work and personal calendars
```

---

## Checklist

- [ ] Opened Claude Code's chat panel in VS Code
- [ ] Successfully fetched weather information
- [ ] Retrieved schedule from Google Calendar
- [ ] Sent notification to Slack (or email)
- [ ] Created the integrated script
- [ ] (Optional) Set up scheduled execution

---

## Next Steps

- [Excel Data Tool](./tutorial-excel) - Try business data analysis
- [Sample Templates](./templates) - Explore other ideas

Use the API integration knowledge from this tutorial to build your own tools!

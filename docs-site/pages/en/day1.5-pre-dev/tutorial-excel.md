# Tutorial: Build an Excel Data Tool

In this tutorial, you'll build a tool that reads your own Excel or Google Sheets data and performs analysis, visualization, and report generation.

---

## Final Result

```
【Sales Data Analysis Report】
Period: January - March 2024

【Monthly Sales】
January: $12,345 (+5.2% MoM)
February: $13,456 (+9.0% MoM)
March: $14,567 (+8.3% MoM)

【Product Rankings】
1st: Product A - $5,678
2nd: Product B - $4,567
3rd: Product C - $3,456

【Charts】
[Sales trend graph displayed]
```

---

## Time Required

1-2 hours

---

## Prerequisites

1. Environment setup is complete
2. Excel file or Google Sheets access for analysis

### If You Don't Have Sample Data

The tutorial will create sample data, so you can proceed without having data on hand.

---

## Step 1: Create Project

### Open Folder in VS Code

1. Launch VS Code
2. From the menu, select "File" → "Open Folder"
3. Create and open a new folder called `~/projects/excel-analyzer`

### Open Claude Code

Click the **Claude icon** in the left sidebar to open the chat panel.

---

## Step 2: Create Sample Data

First, let's create sample data for practice.

### Tell Claude

```
Create a sample Excel file with sales data.

Filename: sales_data.xlsx

Columns:
- Date
- Product Name
- Category
- Quantity
- Unit Price
- Sales Amount
- Sales Rep
- Region

Data:
- 3 months from January to March 2024
- About 100 rows of realistic data
- About 5 different products
- About 3 sales reps
- Regions: East, West, Central

Use openpyxl to create it.
```

### Verify

```
Check if sales_data.xlsx was created. Display the first 10 rows.
```

---

## Step 3: Read and Display Data

Create a basic script to read the Excel file.

### Tell Claude

```
Create a Python script to read and display sales_data.xlsx.

Filename: analyzer.py

Features:
- Read Excel file with pandas
- Display basic info (row count, column list)
- Show first 10 rows

Usage: python analyzer.py sales_data.xlsx
```

---

## Step 4: Add Basic Analysis Features

Add data aggregation and analysis features.

### Tell Claude

```
Add analysis features to analyzer.py.

Features to add:
1. Monthly sales totals
2. Product sales ranking (top 5)
3. Sales by sales rep
4. Sales by region

Format results for easy reading.
```

---

## Step 5: Visualize with Charts

Visualize the analysis results with charts.

### Tell Claude

```
Add chart display features to analyzer.py.

Charts to create:
1. Bar chart of monthly sales
2. Pie chart of sales by product
3. Line chart of daily sales

Use matplotlib.
Enable Japanese text display.
Save charts as PNG images.
```

---

## Step 6: Auto-Generate Reports

Output analysis results as a report file.

### Tell Claude

```
Add a feature to output analysis results as a Markdown report.

Report contents:
- Title (data filename and date)
- Summary (total sales, count, period)
- Monthly sales
- Product rankings
- Sales rep analysis
- Regional analysis
- Embedded chart images

Filename: report_YYYYMMDD.md
```

---

## Using Google Sheets

Steps if you want to use Google Sheets instead of Excel.

### Tell Claude

```
Modify to read data from Google Sheets.

Features:
- Use Google Sheets API
- Specify spreadsheet ID as argument
- Allow sheet name specification (default to first sheet)

Use service account for authentication.
```

### Google Sheets API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable "Google Sheets API" in "APIs & Services" → "Library"
3. Create a service account in "Credentials"
4. Download the service account key (JSON)
5. Share the target sheet with the service account's email address in Google Sheets

---

## Try with Your Own Data

Once the tutorial works, try it with your own business data.

### Prepare Your Data

- Sales data
- Customer lists
- Inventory data
- Attendance data
- Expense data

Copy the Excel file you want to analyze to the `excel-analyzer` folder.

### Customize the Analysis

```
@your-file.xlsx Analyze this file.
Check the column structure and suggest what can be analyzed.
```

Claude will automatically analyze the data structure and suggest appropriate analyses.

---

## Advanced Challenges (If Time Permits)

### Add a Web UI

```
Add a web interface to this tool.
- Upload a file
- Click analyze button
- Display results and charts
Use Flask or Streamlit.
```

### Automated Weekly Reports

```
Add a feature to automatically generate last week's sales report
every Monday and post it to Slack.
```

### Compare Multiple Files

```
Add a feature to compare two Excel files and show the differences.
Example: Compare last month's and this month's sales
```

### PDF Output

```
Make it possible to output reports in PDF format as well
```

---

## Troubleshooting

### "openpyxl is not installed"

```
Install openpyxl
```

### Japanese Characters Are Garbled

```
Check the Excel file's character encoding.
Specify UTF-8 when reading.
```

### Japanese Text Shows as Boxes in Charts

```
Set up Japanese fonts for matplotlib.
Use Hiragino Kaku Gothic for Mac, Meiryo for Windows.
```

### Google Sheets Authentication Error

```
Check the path to the service account credentials file.
Verify the sheet is shared with the service account.
```

---

## Checklist

- [ ] Opened Claude Code's chat panel in VS Code
- [ ] Created sample data (sales_data.xlsx)
- [ ] Read data with analyzer.py
- [ ] Performed basic analysis (monthly, by product, etc.)
- [ ] Generated charts
- [ ] Output a report
- [ ] (Optional) Analyzed with your own data

---

## Next Steps

- [Morning Notification Tool](./tutorial-morning) - Try API integration
- [Sample Templates](./templates) - Explore other ideas

Use the data processing knowledge from this tutorial to build business efficiency tools!

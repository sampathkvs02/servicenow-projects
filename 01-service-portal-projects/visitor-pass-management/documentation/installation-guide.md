# 📦 Import the Update Set

## 🥇 Step 1: Log In

🌐 Log in to your target ServiceNow instance using an account with the required administrator permissions.

```text
🔐 ServiceNow Instance
        ↓
👤 Enter Username
        ↓
🔑 Enter Password
        ↓
✅ Log In
````

---

## 🥈 Step 2: Open Retrieved Update Sets

In the ServiceNow Application Navigator, search:

```text
System Update Sets
```

Then navigate to:

```text
⚙️ System Update Sets
       ↓
📥 Retrieved Update Sets
```

📍 Navigation path:

```text
All
 → System Update Sets
   → Retrieved Update Sets
```

---

## 🥉 Step 3: Import the XML File

Click:

```text
📥 Import Update Set from XML
```

Select the project file:

```text
📦 visitor-pass-update-set.xml
```

Then click:

```text
⬆️ Upload
```

### 🔄 Import Flow

```text
📁 Select XML File
        ↓
⬆️ Upload File
        ↓
⚙️ ServiceNow Processes the Update Set
        ↓
📥 Update Set Appears in Retrieved Update Sets
```

> ⚠️ **Important:** Wait until the upload is completed before opening the imported Update Set.

---

# 🔍 Preview the Update Set

## Step 4: Open the Imported Update Set

After the XML file is uploaded:

1. Open **Retrieved Update Sets**.
2. Search for:

```text
🎫 Visitor Pass Update Set
```

3. Open the imported Update Set record.

---

## Step 5: Preview the Update Set

Click:

```text
🔍 Preview Update Set
```

ServiceNow checks the update set before committing the changes.

### Preview Process

```text
📦 Imported Update Set
          ↓
🔍 Preview Update Set
          ↓
🧩 Check Project Components
          ↓
⚠️ Check Conflicts
          ↓
✅ Ready to Commit
```

During preview, ServiceNow checks items such as:

* 🧩 Service Portal Widget
* 🌐 Portal Configuration
* 📄 Portal Page
* 🗄️ Custom Table
* 📝 Custom Fields
* 💻 Client Controller
* ⚙️ Server Script
* 🎨 CSS
* 🧱 HTML
* 🔐 Roles and Permissions

---

## ⚠️ Resolve Preview Problems

If ServiceNow shows preview problems:

```text
⚠️ Preview Problems Found
          ↓
🔍 Open the Problem Record
          ↓
🛠️ Review the Issue
          ↓
✅ Resolve or Skip the Conflict
          ↓
🔄 Run Preview Again
```

Common preview issues:

| Symbol | Problem                  | Recommended Action                          |
| :----: | ------------------------ | ------------------------------------------- |
|   ⚠️   | Existing record conflict | Review both versions                        |
|   🔁   | Duplicate update         | Check whether the component already exists  |
|   🧩   | Missing dependency       | Install or create the required component    |
|   🔐   | Permission issue         | Verify roles and access                     |
|    ❌   | Invalid configuration    | Correct the configuration before committing |

> 🚨 Do not commit the Update Set until important preview problems are reviewed.

---

# ✅ Commit the Update Set

## Step 6: Commit

After the preview is successful, click:

```text
✅ Commit Update Set
```

### Commit Flow

```text
🔍 Preview Completed
        ↓
✅ No Critical Problems
        ↓
🚀 Commit Update Set
        ↓
⚙️ ServiceNow Applies Changes
        ↓
🎉 Project Installation Completed
```

Wait until the commit process is completed.

---

# 🧪 Verify the Project

After committing the Update Set, verify every project component.

## 🗄️ Step 1: Verify the Custom Table

Navigate to:

```text
System Definition
 → Tables
   → u_visitors_table
```

Verify that the visitor table is available.

Expected table:

```text
🗄️ u_visitors_table
```

Verify the required fields:

| Symbol | Field Label      | Example           |
| :----: | ---------------- | ----------------- |
|   👤   | Name             | John Kumar        |
|   💼   | Designation      | Software Engineer |
|   📱   | Mobile Number    | 9876543210        |
|   📍   | Place            | Visakhapatnam     |
|   🎯   | Purpose of Visit | Business Meeting  |
|   🆔   | Visitor ID       | VIS123456789      |
|   📅   | Date             | Current Date      |

---

## 🧩 Step 2: Verify the Widget

Navigate to:

```text
Service Portal
 → Widgets
   → Visitor Pass
```

Verify the following sections:

```text
🧱 HTML Template
🎨 CSS
💻 Client Controller
⚙️ Server Script
```

---

## 🌐 Step 3: Open the Portal

Navigate to:

```text
Service Portal
 → Portals
 → VSK Software Private Limited Portal
```

Open the Visitor Pass page.

Expected result:

```text
🌐 Portal Opens
       ↓
📝 Visitor Registration Form Displays
       ↓
✍️ User Enters Visitor Details
       ↓
🟢 Click Generate Visitor Pass
       ↓
🎫 Visitor Card Displays
```

---

## 📝 Step 4: Test Visitor Registration

Enter test information:

| Field            | Sample Value       |
| ---------------- | ------------------ |
| 👤 Name          | Test Visitor       |
| 💼 Designation   | Software Engineer  |
| 📱 Mobile Number | 9876543210         |
| 📍 Place         | Visakhapatnam      |
| 🎯 Purpose       | Project Discussion |

Click:

```text
🟢 Generate Visitor Pass
```

Expected result:

```text
✅ Visitor record is created
✅ Unique Visitor ID is generated
✅ Current date is displayed
✅ Visitor card is displayed
✅ Visitor details are shown correctly
```

---

## 🖨️ Step 5: Test Print Function

Click:

```text
🖨️ Print Pass
```

Verify:

* 🖨️ Print preview opens
* 🎫 Visitor pass is visible
* 📄 Visitor information is displayed correctly
* ✅ Visitor pass can be printed

---

# 🧪 Installation Testing Checklist

Use this checklist after installation:

* [ ] ☁️ ServiceNow instance is accessible
* [ ] 📦 Update Set XML is imported
* [ ] 🔍 Update Set preview is completed
* [ ] ⚠️ Preview problems are resolved
* [ ] ✅ Update Set is committed
* [ ] 🗄️ Custom visitor table is available
* [ ] 📝 Visitor fields are available
* [ ] 🧩 Visitor Pass widget is available
* [ ] 🌐 Portal page is available
* [ ] ✍️ Visitor form is displayed
* [ ] 💾 Visitor record is created
* [ ] 🆔 Visitor ID is generated
* [ ] 🎫 Visitor card is displayed
* [ ] 🖨️ Print functionality works

---

# 🛠️ Troubleshooting

<details>

<summary><b>❌ Visitor card is not displayed</b></summary>

<br>

Check the Server Script:

```javascript
data.showCard = true;
```

Check the HTML:

```html
<div ng-if="c.data.showCard">
```

Check the Client Controller:

```javascript
c.server.get({
  action: "save"
}).then(function(response) {
  c.data = response.data;
});
```

Also verify:

* 🔍 Browser console errors
* ⚙️ Server Script errors
* 💻 Client Controller response
* 🧩 Widget configuration

</details>

---

<details>

<summary><b>❌ Visitor record is not created</b></summary>

<br>

Check:

* 🗄️ Table name
* 📝 Field names
* ⚙️ Server Script
* 🔐 User permissions
* 🧩 Table access controls

Correct:

```javascript
var gr = new GlideRecord("u_visitors_table");
```

Incorrect:

```javascript
var gr = new gliderecord("u_visitors_table");
```

> ⚠️ `GlideRecord` is case-sensitive. Use a capital **G** and capital **R**.

</details>

---

<details>

<summary><b>❌ Visitor ID is not displayed</b></summary>

<br>

Check:

```javascript
gr.u_user_id =
  "VIS" + new GlideDateTime().getNumericValue();
```

After inserting the record, return the value:

```javascript
data.userid =
  gr.getValue("u_user_id");
```

</details>

---

<details>

<summary><b>❌ Place value is empty</b></summary>

<br>

The Client Controller sends:

```javascript
city: c.data.city
```

Therefore, the Server Script should use:

```javascript
gr.u_place = input.city;
```

Do not use:

```javascript
gr.u_place = input.place;
```

unless the Client Controller sends:

```javascript
place: c.data.place
```

</details>

---

<details>

<summary><b>❌ Update Set is not visible after import</b></summary>

<br>

Check:

```text
System Update Sets
 → Retrieved Update Sets
```

Verify:

* 📦 The correct XML file was selected
* ⬆️ Upload completed successfully
* 🔍 The list is not filtered
* 🔄 Refresh the Retrieved Update
# 🎉 Installation Complete

## ✅ Visitor Pass Management Portal Is Ready!

```text
📦 Update Set Imported
          ↓
🔍 Preview Completed
          ↓
✅ Update Set Committed
          ↓
🧩 Widget Verified
          ↓
🌐 Portal Tested
          ↓
🎫 Visitor Pass Generated
```

### 🚀 Your ServiceNow Visitor Pass Project is ready to use!



<div align="center">

  <h1>Syncfusion® React Pivot Table – Next.js Server Quick Start</h1>

  <p>
    A production-ready quick start that connects the <strong>Syncfusion® React Pivot Table</strong> to a <strong>Next.js</strong> backend using built-in <strong>API Routes</strong> — enabling remote data binding and full CRUD operations over REST endpoints.
  </p>

  <p>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19%2B-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"></a>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16.3-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></a>
    <a href="https://www.syncfusion.com/react-components/react-pivot-table"><img src="https://img.shields.io/badge/Syncfusion-EJ2-FF9C00?style=for-the-badge&logo=syncfusion&logoColor=white" alt="Syncfusion"></a>
    <a href="https://github.com/SyncfusionExamples/syncfusion-react-pivot-with-nextjs-server/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"></a>
  </p>
</div>

---

## 📑 Table of Contents

- [🚀 Quick Overview](#-quick-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Prerequisites](#-prerequisites)
- [📂 Project Structure](#-project-structure)
- [⚙️ Installation & Setup](#-installation--setup)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Set Up the Data Source](#3-set-up-the-data-source)
  - [4. Configure the API Route](#4-configure-the-api-route)
  - [5. Configure the Pivot Table](#5-configure-the-pivot-table)
- [▶️ Running the Application](#-running-the-application)
- [🧪 Testing CRUD Operations](#-testing-crud-operations)
- [🔧 Troubleshooting](#-troubleshooting)
- [📖 API Reference](#-api-reference)
- [🤝 Contributing](#-contributing)
- [📜 License & Support](#-license--support)
- [📚 Related Resources](#-related-resources)

---

## 🚀 Quick Overview

This project demonstrates how to bind the **Syncfusion® React Pivot Table** to a remote **Next.js** backend using built-in **API Routes** (App Router). A single `/api` route handles data retrieval along with create, update, and delete operations through standard HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`).

| Component          | Technology                         | Purpose                                              |
| ------------------ | ---------------------------------- | ---------------------------------------------------- |
| 🎨 Frontend        | React 19 + Next.js 16 + Syncfusion® EJ2 | Render the interactive Pivot Table UI          |
| ⚙️ Backend         | Next.js API Routes (App Router)    | Serve data, perform CRUD, return JSON responses      |
| 🔌 API Style       | REST (`GET`/`POST`/`PUT`/`DELETE`) | Standard HTTP verbs map to CRUD actions              |
| 📊 Sample Data     | In-memory `productDetails` (from `app/data.ts`) | Simulate product sales records for the Pivot Table |

> 💡 Next.js API Routes are ideal when you want a single full-stack codebase that contains both the React client and the backend. The App Router (`app/` directory) is required because the sample data and API route live in `app/data.ts` and `app/api/route.ts`.

---

## ✨ Key Features

- 📊 **Remote Data Binding** – Connects the Pivot Table to a Next.js API route over HTTP using the native `fetch` API.
- 🔄 **Full CRUD Support** – Insert, update, and delete records directly from the Pivot Table drill-through grid.
- ⚙️ **Built-in API Routes** – Uses Next.js App Router route handlers (`app/api/route.ts`) — no separate backend project required.
- 🗂️ **Standardized Response Format** – Returns data as `{ result, count }` for the read endpoint, keeping responses predictable.
- 🔑 **Primary Key Configuration** – Uses `ProductID` as the primary key for unique record identification during update and delete operations.
- 🎨 **Tailwind 3 Theme** – Preconfigured with the Syncfusion Tailwind 3 theme for a modern Pivot Table look and feel.
- ⚡ **Drill-Through Editing** – Double-click a pivot cell to add, edit, or delete underlying records in a pop-up grid.
- 🛡️ **Robust Error Handling** – API route returns meaningful HTTP status codes (`400`, `404`) and clear error messages.
- 📦 **Ready-to-Run** – Clone, install, and start — no database setup required (in-memory sample data).

---

## 🛠️ Prerequisites

Make sure the following software and packages are installed on your machine before running the project.

| Software / Package            | Version       | Purpose                                              |
| ----------------------------- | ------------- | ---------------------------------------------------- |
| 🟢 Node.js                    | 20.19+ or 22.12+ | Runtime for the Next.js application                 |
| 📦 npm / yarn / pnpm          | Latest stable | Package manager                                      |
| ⚛️ React                      | 19.x or later | Build the Pivot Table client                         |
| ⚡ Next.js                     | 14.x or later (App Router) | React framework, file-based routing, and API routes |
| 📘 TypeScript                 | 5.x or later  | Supports TypeScript (`.tsx`) examples used in the application |
| 📦 @syncfusion/ej2-react-pivotview | 33.1.45+ | React Pivot Table component                          |
| 📦 @syncfusion/ej2-pivotview  | 33.1.45+      | Base Syncfusion® package used for shared Pivot Table types |
| 📦 @syncfusion/ej2-data       | 33.1.45+      | Provides the `DataManager` and `Query` classes       |
| 📦 @syncfusion/ej2-tailwind3-theme | 33.1.45+ | Tailwind 3 theme styles for the Pivot Table          |

---

## 📂 Project Structure

```text
syncfusion-react-pivot-with-nextjs-server/
├── 📁 nextjs_pivot/                            # Next.js application (client + API)
│   ├── 📁 app/                                 # App Router root
│   │   ├── data.ts                             # In-memory product sample data
│   │   ├── globals.css                         # Global styles + Syncfusion Tailwind 3 theme
│   │   ├── layout.tsx                          # Root layout
│   │   ├── page.tsx                            # Pivot Table page (client component)
│   │   └── 📁 api/
│   │       └── route.ts                        # API route: GET / POST / PUT / DELETE
│   ├── 📁 public/                              # Static assets
│   ├── eslint.config.mjs
│   ├── next.config.ts
│   ├── package.json                            # Dependencies & scripts
│   ├── postcss.config.mjs
│   └── tsconfig.json
│
├── 📄 README.md                                # You are here
└── 📄 next-js-server.md                        # UG documentation source for this sample
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/SyncfusionExamples/syncfusion-react-pivot-with-nextjs-server.git
cd syncfusion-react-pivot-with-nextjs-server
```

### 2. Install Dependencies

Navigate to the `nextjs_pivot/` folder and install the npm dependencies.

```bash
cd nextjs_pivot
npm install
```

Install the Syncfusion packages required by the Pivot Table:

```bash
npm install @syncfusion/ej2-react-pivotview @syncfusion/ej2-data @syncfusion/ej2-tailwind3-theme
```

**Package descriptions:**

- **@syncfusion/ej2-react-pivotview** – React Pivot Table component and supporting services.
- **@syncfusion/ej2-data** – Provides the `DataManager` and `Query` classes used by the API route for paging.
- **@syncfusion/ej2-tailwind3-theme** – Tailwind 3 theme styles for the Pivot Table.

### 3. Set Up the Data Source

The data source lives inside the Next.js project at `nextjs_pivot/app/data.ts`. It contains an in-memory `productDetails` array that the API route uses to satisfy read and CRUD requests.

Create a file named `data.ts` inside the `app/` folder and add the following code:

````typescript
// filepath: nextjs_pivot/app/data.ts
import { IDataSet } from "@syncfusion/ej2-react-pivotview";

export const productDetails: IDataSet[] = [
  {
    "ProductID": 10001,
    "ProductName": "Smartwatch",
    "Category": "Electronics",
    "MRP": 100.0,
    "Discount": 1.02
  },
  {
    "ProductID": 10002,
    "ProductName": "Smartwatch",
    "Category": "Accessories",
    "MRP": 110.0,
    "Discount": 1.12
  },
  {
    "ProductID": 10003,
    "ProductName": "Smartwatch",
    "Category": "Home Appliances",
    "MRP": 120.0,
    "Discount": 1.22
  },
  {
    "ProductID": 10004,
    "ProductName": "Smartwatch",
    "Category": "Gadgets",
    "MRP": 130.0,
    "Discount": 1.32
  }
  // ... (16 product records in the full sample)
];
````

| Field         | Data type | Description                                |
| ------------- | --------- | ------------------------------------------ |
| `ProductID`   | `number`  | Unique product identifier (primary key)    |
| `ProductName` | `string`  | Name of the product                        |
| `Category`    | `string`  | Category to which the product belongs      |
| `MRP`         | `number`  | Maximum Retail Price of the product        |
| `Discount`    | `number`  | Discount value applied to the product      |

> 📝 The `Discount` field is included for completeness and can be used as an additional value field in the Pivot Table. The minimal report in this sample summarizes only the `MRP` field, so `Discount` does not appear in `dataSourceSettings`.

> ⚠️ **Persistence:** `productDetails` is an in-memory array. Runtime CRUD changes are kept only in memory and are discarded when the server restarts. To persist changes, replace the in-memory array with file or database storage.

### 4. Configure the API Route

Next.js route handlers let you create server-side API endpoints directly within the application. These endpoints can process requests, retrieve data, and return the required response to the Pivot Table.

Create a new file named `route.ts` inside the `app/api/` folder:

```text
app
 └─ api
     └─ route.ts
```

Add the following `GET`, `POST`, `PUT`, and `DELETE` methods to `route.ts`. Each method handles a specific operation from the Pivot Table drill-through grid.

````typescript
// filepath: nextjs_pivot/app/api/route.ts
import { NextResponse, NextRequest } from "next/server";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { productDetails } from '../data';

// GET - Retrieve all data
export async function GET(request: NextRequest) {
    const pivotStateParam = new URL(request.url).searchParams.get('pivotState');
    if (!pivotStateParam) {
        return NextResponse.json(
            { error: 'pivotState parameter is required', result: [], count: 0 },
            { status: 400 }
        );
    }
    const pivotState = JSON.parse(decodeURIComponent(pivotStateParam));
    const query = new Query();

    // Execute query on data
    let result: object[] = new DataManager(productDetails).executeLocal(query);
    let count: number = result.length;

    // Paging
    if (pivotState.take && pivotState.take > 0) {
        const skip = pivotState.skip || 0;
        const take = pivotState.take;
        query.page(skip / take + 1, take);
        result = new DataManager(result).executeLocal(query);
    }
    return NextResponse.json({ result, count });
}

// POST - Create a new product
export async function POST(request: NextRequest) {
    const body = await request.json();
    if (body.action === 'add') {
        const newProduct: any = {
            ProductID: body.ProductID,
            ProductName: body.ProductName,
            Category: body.Category,
            MRP: body.MRP,
            Discount: body.Discount
        };
        productDetails.push(newProduct);
        return NextResponse.json(newProduct, { status: 201 });
    }
}

// PUT - Update an existing product
export async function PUT(request: NextRequest) {
    const body = await request.json();
    if (body.action === 'edit') {
        const productIndex = productDetails.findIndex(u => u.ProductID === body.ProductID);
        if (productIndex === -1) {
            return NextResponse.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }
        productDetails[productIndex] = {
            ...productDetails[productIndex],
            ProductID: body.ProductID || productDetails[productIndex].ProductID,
            ProductName: body.ProductName || productDetails[productIndex].ProductName,
            Category: body.Category || productDetails[productIndex].Category,
            MRP: body.MRP || productDetails[productIndex].MRP,
            Discount: body.Discount || productDetails[productIndex].Discount
        };
        return NextResponse.json(productDetails[productIndex]);
    }
}

// DELETE - Delete a product
export async function DELETE(request: NextRequest) {
    const body = await request.json();
    if (body.action === 'delete') {
        const productID = body[0].ProductID;
        const productIndex = productDetails.findIndex(u => u.ProductID === productID);
        if (productIndex === -1) {
            return NextResponse.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }
        const deletedProduct = productDetails[productIndex];
        productDetails.splice(productIndex, 1);
        return NextResponse.json({ message: "Product deleted successfully" });
    }
}
````

**API method summary:**

| Method     | Action payload                                                       | Purpose                                       |
| ---------- | -------------------------------------------------------------------- | --------------------------------------------- |
| `GET`      | _(query: `pivotState`)_                                              | Retrieve product records                      |
| `POST`     | `{ "action": "add", ... }`                                           | Insert a new product                          |
| `PUT`      | `{ "action": "edit", "ProductID": ..., ... }`                        | Update an existing product (matched by `ProductID`) |
| `DELETE`   | `{ "action": "delete", [ { "ProductID": ... } ] }`                   | Delete a product by primary key               |

### 5. Configure the Pivot Table

#### 5.1 Add Pivot Table styles

After installing the packages, import the required Tailwind 3 theme styles for the Pivot Table. Open the `app/globals.css` file and add the following import:

````css
/* filepath: nextjs_pivot/app/globals.css */
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pivotview/index.css';
````

#### 5.2 Add the Syncfusion React Pivot Table

Open the `app/page.tsx` file, remove any existing content if needed, and add the following code. The component is marked as a Client Component (`'use client'`) because it uses React hooks, refs, and event handlers.

````typescript
// filepath: nextjs_pivot/app/page.tsx
'use client';

import React, { useEffect } from 'react';
import { PivotViewComponent, Inject, FieldList } from '@syncfusion/ej2-react-pivotview';
import type { DataSourceSettingsModel, CellEditSettings, BeginDrillThroughEventArgs } from '@syncfusion/ej2-react-pivotview';

export default function ProductPivotGrid() {
  const pivotObj = React.useRef<PivotViewComponent>(null);

  // Fetch data from server with current state
  const fetchData = async (pivotState: any) => {
    const response = await fetch(`/api?pivotState=${encodeURIComponent(JSON.stringify(pivotState))}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const res: any = await response.json();
    return res;
  };

  // Load initial data when component mounts
  useEffect(() => {
    if (pivotObj.current) {
      const initialState = {
        skip: 0,
        take: 16,
      };
      fetchData(initialState).then((data) => {
        if (pivotObj.current) {
          pivotObj.current.dataSourceSettings.dataSource = data.result;
        }
      });
    }
  }, []);

  // Handle CRUD operations
  const handleActionComplete = async (args: any) => {
    try {
      if (!args || !args.requestType) {
        return;
      }

      const sanitizeItem = (item: any) => {
        if (!item || typeof item !== 'object') {
          return item;
        }
        const sanitized = { ...item };
        delete sanitized.__index;
        return sanitized;
      };

      let url = '/api';
      let method = 'POST';
      let body: any = {};

      if (args.action === 'add') {
        const item = sanitizeItem(args.data);
        method = 'POST';
        body = { ...item, action: 'add' };
      } else if (args.action === 'edit') {
        const item = sanitizeItem(args.data);
        method = 'PUT';
        body = { ...item, action: 'edit' };
      } else if (args.requestType === 'delete') {
        const item = sanitizeItem(args.data);
        method = 'DELETE';
        body = { ...item, action: 'delete' };
      } else {
        return;
      }

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const result = await response.json();
        args?.endEdit?.();
      } else {
        console.error('Request failed', await response.text());
      }
    } catch (err) {
      console.error(err);
    }
  };

  const dataSourceSettings: DataSourceSettingsModel = {
    dataSource: [],
    expandAll: true,
    rows: [{ name: 'ProductName' }],
    columns: [{ name: 'Category' }],
    values: [{ name: 'MRP' }],
    filters: [],
  };

  // Enable editing functionality
  const editSettings: CellEditSettings = {
    allowEditing: true,    // Enables the Edit button and allows users to modify existing records.
    allowAdding: true,     // Enables the Add button and allows users to create new records.
    allowDeleting: true,   // Enables the Delete button and allows users to remove records.
    mode: 'Normal'         // Uses Normal mode; other options: 'Dialog', 'Batch'.
  };

  // Configure beginDrillThrough event to set the primary key for CRUD operations
  function beginDrillThrough(args: BeginDrillThroughEventArgs) {
    // Iterate through all columns in the drill-through grid
    for (let i = 0; i < args.gridObj.columns.length; i++) {
      // Check if the current column is the primary key column
      if (args.gridObj.columns[i].field === "ProductID") {
        args.gridObj.columns[i].visible = true;
        // Mark this column as the primary key
        // This tells DataManager to use this column's value to uniquely identify records
        args.gridObj.columns[i].isPrimaryKey = true;
      }
    }
    const gridObj = args.gridObj;
    if (gridObj) {
      gridObj.addEventListener('actionComplete', (event: any) => {
        handleActionComplete(event);
      });
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Portal</h1>
      <PivotViewComponent
        ref={pivotObj}
        id='PivotView'
        height={350}
        width={700}
        dataSourceSettings={dataSourceSettings}
        showFieldList={true}
        editSettings={editSettings}
        beginDrillThrough={beginDrillThrough}
      >
        <Inject services={[FieldList]} />
      </PivotViewComponent>
    </div>
  );
}
````

**Code explanation:**

- **fetchData** – Sends a `GET` request to `/api` with the current Pivot Table state (skip/take) and returns the JSON response.
- **useEffect** – Runs once when the page is loaded, calls `fetchData`, and assigns the returned data to the Pivot Table data source.
- **handleActionComplete** – Inspects the `actionComplete` event from the drill-through grid, sanitizes the record, and dispatches the correct HTTP request (`POST`/`PUT`/`DELETE`) to `/api`. Calls `endEdit()` after a successful response.
- **dataSourceSettings** – Defines the Pivot Table report layout:
  - `rows` – Displays **ProductName** values as row headers.
  - `columns` – Displays **Category** values as column headers.
  - `values` – Summarizes the **MRP** field.
- **editSettings** – Enables add, edit, and delete operations on the drill-through grid.
- **beginDrillThrough** – Marks the `ProductID` column as the primary key (`isPrimaryKey = true`) and wires the `actionComplete` event so CRUD actions are forwarded to the API route.
- **FieldList** – Displays the Field List and allows fields to be rearranged across rows, columns, values, and filters.

---

## ▶️ Running the Application

From inside the `nextjs_pivot/` folder, start the Next.js development server:

```bash
npm run dev
```

The application will be available at **http://localhost:3000** by default.

**Verify it works:**

- 🌐 Open `http://localhost:3000` in your browser.
- 🔌 Open `http://localhost:3000/api?pivotState=%7B%22skip%22%3A0%2C%22take%22%3A16%7D` to verify the API route directly — you should see a JSON response containing the product records as `{ result, count }`.
- ✅ You should see the Pivot Table populated with aggregated **MRP** values, grouped by **ProductName** (rows) and **Category** (columns).

**Sample response from the API route:**

```json
{
  "result": [
    { "ProductID": 10001, "ProductName": "Smartwatch", "Category": "Electronics", "MRP": 100.0, "Discount": 1.02 },
    { "ProductID": 10002, "ProductName": "Smartwatch", "Category": "Accessories", "MRP": 110.0, "Discount": 1.12 }
  ],
  "count": 16
}
```

### ✅ Verify in the Browser

1. Open `http://localhost:3000` in your browser.
2. You should see the Pivot Table populated with aggregated **MRP** values, grouped by **ProductName** (rows) and **Category** (columns).
3. Open the browser's **Developer Tools** (F12) → **Network** tab.
4. Reload the page.
5. You should see a `GET` request to `http://localhost:3000/api?pivotState=...` with status `200` and a JSON response containing the product records.
6. The Pivot Table renders the aggregated data automatically.

---

## 🧪 Testing CRUD Operations

The Pivot Table supports full CRUD through its built-in **drill-through editing** grid. All CRUD operations are performed in the drill-through grid that opens when you double-click any value cell in the Pivot Table.

| Step | Action                                                                                                  | Expected Request to `/api`                         |
| ---- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 1️⃣  | **Double-click** any pivot cell to open the drill-through grid showing underlying source records.       | `GET /api?pivotState=...` (initial read)           |
| ➕ 2️⃣ | Click **Add**, fill in the new row fields, then click **Update**.                                       | `POST /api` with `action: "add"`                   |
| ✏️ 3️⃣ | Click **Edit** on an existing row, change a field, then click **Update**.                                | `PUT /api` with `action: "edit"`                   |
| 🗑️ 4️⃣ | Click **Delete** on a row to remove it.                                                                  | `DELETE /api` with `action: "delete"`              |
| 🔁 5️⃣ | The Pivot Table automatically refreshes to display the updated aggregated data from the backend.        | `GET /api?pivotState=...` (refresh read)           |

> 🔑 The `ProductID` column is automatically marked as the primary key inside the `beginDrillThrough` event, so update and delete operations know which record to target.

> ⚠️ Because `productDetails` is an in-memory array, any CRUD changes made at runtime are kept only in memory and are discarded when the server is restarted. This is expected behavior for the sample.

---

## 🔧 Troubleshooting

| ❓ Issue                                | 🔍 Symptom                                                                                                       | ✅ Resolution                                                                                                                |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 🚫 Empty Pivot Table                    | Pivot loads with no errors but no rows or values appear.                                                          | Verify that the Next.js API route returns data and that the response contains both the `result` and `count` properties. Ensure the field names returned by the API match the fields configured in `dataSourceSettings` (case-sensitive). |
| 🐍 500 Internal Server Error            | The Pivot Table fails and the browser shows a server error.                                                      | Check the Next.js terminal/console for error messages. Verify that `app/data.ts` exists, contains valid data, and can be imported by the API route. |
| 404 Not Found                           | Updating or deleting a record returns a `404` error.                                                              | Verify that the `ProductID` sent in the request matches an existing record and that the record has not already been deleted. |
| 🔄 CRUD operation ignored / falls back to read | A record is added, updated, or deleted, but the backend always returns the full product list.                | Verify that the request payload includes the correct `action` value (`add`, `edit`, or `delete`) and that the client is using the correct HTTP method. |
| 💾 CRUD operations not saving           | The edit dialog closes but changes are not reflected in the data.                                                | Verify editing is enabled through `editSettings` and that `ProductID` is configured as the primary key in the `beginDrillThrough` event. |
| 🧹 Changes lost after server restart     | Records added, updated, or deleted earlier disappear when the Next.js dev server is restarted.                  | This is expected with the sample backend; `productDetails` is in-memory by design. To persist changes, implement file/database writes in the API route. |
| 🔄 Changes not reflected in Pivot Table | A CRUD operation completes successfully, but the Pivot Table still shows the old data.                            | Verify the API route processed the request successfully and returned updated data. Check the browser's Network tab for failed requests. If needed, call `pivotObj.current?.refresh();` after an operation. |
| 🔤 Property casing mismatch             | Pivot appears empty or shows "field not found" even though the API returns data.                                 | Ensure field names in the API response match the Pivot Table's `dataSourceSettings` (e.g., `ProductID`, `ProductName`). |
| 📦 Missing npm packages                 | The application fails to start with module resolution errors.                                                    | Ensure `npm install` has been run inside the `nextjs_pivot/` folder and that the Syncfusion packages listed in the prerequisites have been installed. |
| 🔁 Invalid JSON response                | Data cannot be loaded even though the request succeeds.                                                           | Verify the API route returns a valid JSON response whose structure matches the expected `{ result, count }` format. |
| 🚪 Port already in use                  | The Next.js application fails to start because the port is unavailable.                                          | Stop the process using the current port (default `3000`) or run the application on a different port using `npm run dev -- -p <port>`. |
| 🔑 Syncfusion license warning           | A license validation message appears in the browser console.                                                     | Complete the Syncfusion® license registration process and restart the application. |

If issues persist, use the browser's **Developer Tools** (**F12**) to inspect the **Network** and **Console** tabs.

---

## 📖 API Reference

The backend is exposed through the Next.js App Router route handler at `app/api/route.ts`. The Pivot Table client issues requests to the single `/api` endpoint; the HTTP method and the `action` property in the request body determine which operation is performed.

| Method     | Route                          | Action payload                                                       | Purpose                                       | Response                                  |
| ---------- | ------------------------------ | -------------------------------------------------------------------- | --------------------------------------------- | ----------------------------------------- |
| `GET`      | `/api?pivotState=...`          | _(query: `pivotState` JSON)_                                         | Retrieve product records (read from Pivot Table) | `{ result: [...], count: n }`         |
| `POST`     | `/api`                         | `{ "action": "add", "ProductID": ..., "ProductName": ..., ... }`     | Insert a new product                           | The newly added product record            |
| `PUT`      | `/api`                         | `{ "action": "edit", "ProductID": ..., "ProductName": ..., ... }`    | Update an existing product (matched by `ProductID`) | The updated product record |
| `DELETE`   | `/api`                         | `{ "action": "delete", [ { "ProductID": ... } ] }`                   | Delete a product by primary key                | `{ message: "Product deleted successfully" }` |

The `productDetails` data source exposes the following fields:

| Field         | Type    | Description                                |
| ------------- | ------- | ------------------------------------------ |
| `ProductID`   | `number` | Unique product identifier (primary key)    |
| `ProductName` | `string` | Name of the product                        |
| `Category`    | `string` | Category to which the product belongs      |
| `MRP`         | `number` | Maximum Retail Price of the product        |
| `Discount`    | `number` | Discount value applied to the product      |

---

## 🤝 Contributing

Contributions are welcome and appreciated! 💖

1. 🍴 **Fork** the repository.
2. 🌿 **Create** a feature branch: `git checkout -b feature/my-awesome-change`
3. 💾 **Commit** your changes: `git commit -m "Add my awesome change"`
4. 📤 **Push** to your branch: `git push origin feature/my-awesome-change`
5. 🔁 **Open** a Pull Request describing the change and its motivation.

### 📋 Contribution Guidelines

- Follow the existing code style in the Next.js project.
- Keep changes focused — one feature or fix per pull request.
- Update or add documentation (`README.md`, `next-js-server.md`) when behavior changes.
- Test your changes locally against the dev server before submitting.

---

## 📜 License & Support

### 📄 License

This project is released under the **MIT License**. You are free to use, modify, and distribute the code in personal and commercial projects. See the `LICENSE` file for full text.

### 🛟 Support

- 📘 **Documentation:** [Syncfusion® React Pivot Table Docs](https://ej2.syncfusion.com/react/documentation/pivotview/getting-started)
- 💬 **Community forum:** [Syncfusion® Community](https://www.syncfusion.com/forums)
- 🐛 **Bug reports & feature requests:** [GitHub Issues](https://github.com/SyncfusionExamples/syncfusion-react-pivot-with-nextjs-server/issues)
- 📧 **Direct support:** [Syncfusion® Support Portal](https://www.syncfusion.com/support) (for licensed users)
- 📖 **Editing Guide:** [PivotTable Editing](https://ej2.syncfusion.com/react/documentation/pivotview/editing)
- 📖 **Drill-Through Guide:** [PivotTable Drill-Through](https://ej2.syncfusion.com/react/documentation/pivotview/drill-through)
- ⚡ **Next.js Reference:** [Next.js Documentation](https://nextjs.org/)
- 📘 **Next.js App Router:** [App Router Documentation](https://nextjs.org/docs/app)

> ⭐ If this project helped you, please consider giving it a **star** on GitHub — it helps others discover it!

---

## 📚 Related Resources

- 🔗 [Syncfusion® React Pivot Table – Getting Started](https://ej2.syncfusion.com/react/documentation/pivotview/getting-started)
- 📘 [PivotTable Data Binding](https://ej2.syncfusion.com/react/documentation/pivotview/data-binding)
- 📘 [DataManager Getting Started](https://ej2.syncfusion.com/react/documentation/data/getting-started)
- 📘 [PivotTable Editing](https://ej2.syncfusion.com/react/documentation/pivotview/editing)
- 📘 [PivotTable Drill-Through](https://ej2.syncfusion.com/react/documentation/pivotview/drill-through)
- 📘 [Next.js App Router](https://nextjs.org/docs/app)
- 📘 [Next.js Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

---

<div align="center">
  <sub>Built with ❤️ using <a href="https://react.dev/">React</a>, <a href="https://nextjs.org/">Next.js</a>, and <a href="https://www.syncfusion.com/">Syncfusion®</a> by the <a href="https://www.syncfusion.com/">Syncfusion®</a> team.</sub>
</div>


'use client';

import React, { useEffect } from 'react';
import { PivotViewComponent, Inject, FieldList } from '@syncfusion/ej2-react-pivotview';
import type { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

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
  const editSettings: any = {
    allowEditing: true,    // Enables the Edit button and allows users to modify existing records.
    allowAdding: true,     // Enables the Add button and allows users to create new records.
    allowDeleting: true,   // Enables the Delete button and allows users to remove records.
    mode: 'Normal'         // Uses Normal mode (popup dialog) for editing; other options: 'Dialog', 'Batch', 'CommandColumn'.
  };


  // Configure beginDrillThrough event to set the primary key for CRUD operations
  function beginDrillThrough(args: any) {
    // Iterate through all columns in the drill-through grid
    for (var i = 0; i < args.gridObj.columns.length; i++) {
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
      <PivotViewComponent ref={pivotObj} id='PivotView' height={350} width={700} dataSourceSettings={dataSourceSettings} showFieldList={true} editSettings={editSettings} beginDrillThrough={beginDrillThrough}>
        <Inject services={[FieldList]} />
      </PivotViewComponent>
    </div>
  );
}

import { NextResponse, NextRequest } from "next/server";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { productDetails } from '../data.ts';

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
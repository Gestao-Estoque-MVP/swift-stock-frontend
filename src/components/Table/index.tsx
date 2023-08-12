"use client"

import { MaterialReactTable } from 'material-react-table'
import { useMemo } from 'react'
import { type MRT_ColumnDef } from 'material-react-table'
import Button from '../Button/Button'

type TableProps = {
    columns: any
    data: any
}

interface ITable {
    id: number
    name : string
    price: number
    stock: number
    description: string
    image: string    
}

export const Table = () => {
    const data: ITable[] = [];

    for (let i = 1; i <= 1000; i++) {
        data.push({
            id: i,
            name: `Product ${i}`,
            price: i * 100,
            stock: i * 10,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://avatars.githubusercontent.com/u/69609025?v=4"
        });
    }

const columns = useMemo<MRT_ColumnDef <ITable>[]>(
    () => [
        {
            header: "ID",
            accessorKey: "id"
        },
        {
            header: "Name",
            accessorKey: "name"
        },
        {
            header: "Price",
            accessorKey: "price"
        },
        {
            header: "Stock",
            accessorKey: "stock"
        },
        {
            header: "Description",
            accessorKey: "description"
        },
        {
            header: "Image",
            accessorKey: "image",
            Cell: ( value ) => <img src={value.renderedCellValue} alt="product" style={{ width: '100px', height: '100px' }} />
        },
    ],
    [],
)

    return (
        <MaterialReactTable
        columns={columns}
        data={data}
        enableDensityToggle={false}
        enableFullScreenToggle={false}
        />
    )
}
"use client"

import { MaterialReactTable } from 'material-react-table'
import { useMemo } from 'react'
import { type MRT_ColumnDef } from 'material-react-table'
import Button from '../Button/Button'

import ProductStatus from './ProductStatus'

type TableProps = {
    columns: any
    data: any
}

interface ITable {
    infor: object


    categoria: string
    entrada: string
    sku: string
    qtd: number
    stock: number
    estoque: string


}



const states = [
    "Completo","Baixo","Vazio","Médio"
]




export const Table = () => {
    const data: ITable[] = [];

    for (let i = 1; i <= 100; i++) {
        data.push({
            infor: { name: "Item Name " + i, imageUrl: "https://avatars.githubusercontent.com/u/139462945?s=200&v=4" },
            categoria: `Acessório ${i}`,
            entrada: "10/07/2023",
            sku: `0000${i % 9}`,
            qtd: i * 100,
            stock: i * 10,
            estoque: states[i % 4],

        });
    }

    const columns = useMemo<MRT_ColumnDef<ITable>[]>(
        () => [
            {
                header: "Nome",
                accessorKey: "infor",
                Cell: (value) => <div className="flex items-center gap-4 font-bold">
                    <img src={value.renderedCellValue.imageUrl} className="rounded-[14px]" alt="product" style={{ width: '49px', height: '49px' }} />
                    <h1>{value.renderedCellValue.name}</h1>
                </div>
            },
            {
                header: "Categoria",
                accessorKey: "categoria",
                Cell: (value) => <h1>{value.renderedCellValue}</h1>
            },
            {
                header: "SKU",
                accessorKey: "sku"
            },
            {
                header: "Entrada",
                accessorKey: "entrada"
            },
            {
                header: "Qtd.",
                accessorKey: "qtd"
            },
            {
                header: "Estoque",
                accessorKey: "estoque",

                Cell: (value) => <>
                    <ProductStatus> {value.renderedCellValue} </ProductStatus>
                </>
            }
        ],
        [],
    )

    return (
        <div className="max-w-[1200px] m-auto max-w-full">
            <h1 className='font-bold ml-[18px]'>Lista de produtos</h1>
            <MaterialReactTable
                columns={columns}
                data={data}
                enableDensityToggle={false}
                enableFullScreenToggle={false}
            />

        </div>

    )
}



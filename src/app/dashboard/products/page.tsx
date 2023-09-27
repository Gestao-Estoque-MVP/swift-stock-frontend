import { Table } from "@/components/Table"

import ProductCard from "../../../components/ProductCard"

const Products = () => {


    const itens = []

    for (let i = 1; i <= 100; i++) {

        let item = {
            name: "Item Name " + i, 
            imageUrl: "https://avatars.githubusercontent.com/u/139462945?s=200&v=4" ,
            categoria: `Acessório ${i}`,
            entrada: "10/07/2023",
            sku: `0000${i % 9}`,
            qtd: i * 100,
            stock: i * 10,
            estoque: "completo"
        }
        if ( i == 2 ){item.estoque="vazio"};
        if ( i == 5 ){item.estoque="baixo"};

        itens.push(item);
    }



    return (
        <>
            <div className="p-24 max-w-full mx-auto max-h-[100vh] overflow-auto">
                <h1 className="text-brand-400">Dashboard Page</h1>
                <div className="flex space-x-8 justify-between">
                    <ProductCard productCount={1000} bad={true} />
                    <ProductCard productCount={4000} bad={true} />
                    <ProductCard productCount={100} bad={true} />
                    <ProductCard productCount={2000} bad={false} />

                </div>

                <div className="mt-[38px]">
                    <Table itens={itens} state={""} />
                </div>
            </div>



        </>
    )
}

export default Products
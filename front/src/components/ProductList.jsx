import { useEffect, useState } from "react"
import { getAllProducts } from "../api/product.api";
import { ProductCard } from "./ProductCard"
export function ProductList () {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        async function loadProducts() {
            const res = await getAllProducts();
            setProducts(res.data);
            console.log(res);
        }
        loadProducts();
    }, []);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(search.toLowerCase()) || 
        product.barcode.includes(search)
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar por título o código de barras"
                value={search}
                onChange={handleSearchChange}
                className="bg-zinc-500 p-3 rounded-lg block mb-3 w-full"
            />
            <div className="grid grid-cols-3 gap-3">
                {filteredProducts.map(product => (
                    <ProductCard key={product.barcode} product={product} />
                ))}
            </div>
        </div>
    )
} 
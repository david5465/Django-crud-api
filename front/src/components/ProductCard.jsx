import { useNavigate } from 'react-router-dom'
export function ProductCard ({product}) {
    const navigate = useNavigate()
    return (
        <div className="bg-zinc-600 p-3 hover:bg-zinc-500 hover:cursor-pointer rounded-lg"
            onClick={() => {
                navigate(`/products/${product.id}`)
            }}
        >
            <h1> {product.barcode} </h1>
            <p> {product.title} </p>
            <p> {product.description} </p>
        </div>
    );
}
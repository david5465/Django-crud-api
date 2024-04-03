export function ProductCard ({product}) {
    return (
        <div>
            <h1> {product.barcode} </h1>
            <p> {product.description} </p>
            <hr/>
        </div>
    );
}
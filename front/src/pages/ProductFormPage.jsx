import { useForm } from "react-hook-form"
import { createProduct, deleteProduct, updateProduct, getProduct} from "../api/product.api"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

export function ProductFormPage(){
    const {register, handleSubmit, formState: 
        { errors },
        setValue
    } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateProduct(params.id,data)
            toast.success('Product updated', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        } else {
            await createProduct(data);
            toast.success('Product created', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        }
        navigate("/products");
    })

    useEffect(() => {
        async function loadProduct(){
            if (params.id) {
                console.log('Obteniendo datos')
                const res = await getProduct(params.id);
                setValue('title', res.data.title)
                setValue('sku', res.data.sku)
                setValue('barcode', res.data.barcode)
                setValue('brand', res.data.brand)
                setValue('description', res.data.description)
                setValue('cost_price', res.data.cost_price)
                setValue('sale_price', res.data.sale_price)
                setValue('cantidad', res.data.cantidad)
                setValue('supplier', res.data.supplier)
                setValue('category', res.data.category)
                setValue('tax', res.data.tax)
                setValue('available', res.data.available)
            }
        }
        loadProduct();
    }, []);

    return (
        <div className="max-w-xl mx auto">
            <form onSubmit={onSubmit}>
                <input
                    type="sku"
                    placeholder="sku"
                    {...register("sku", {required: true})}
                    className="bg-zinc-500 p-3 rounded-lg block mb-3 w-full"
                    />
                    {errors.sku && <span>sku required</span>}
                <input
                    type="barcode"
                    placeholder="barcode"
                    {...register("barcode", {required: true})}
                    className="bg-zinc-500 p-3 rounded-lg block mb-3 w-full"/>
                    {errors.barcode && <span>barcode required</span>}
                <input
                    type="title"
                    placeholder="Title"
                    {...register("title", {required: true})}
                    className="bg-zinc-500 p-3 rounded-lg block mb-3 w-full"/>
                    {errors.title && <span>title required</span>}
                <input
                    type="brand"
                    placeholder="Brand"
                    {...register("brand", {required: false})}
                    className="bg-zinc-500 p-3 rounded-lg block mb-3 w-full"/>
                    {errors.brand && <span>brand required</span>}
                <textarea
                    rows="1" 
                    placeholder="Description"
                    {...register("description", {required: true})}
                    className="bg-zinc-500 p-3 rounded-lg block mb-3 w-full"></textarea>
                <input
                    type="number"
                    placeholder="Cost Price"
                    step="0.01"
                    {...register("cost_price", { required: true, maxLength: 12 })}
                    className="bg-zinc-500 p-3 rounded-lg block mb-3 w-full"/>
                    {errors.cost_price && <span>Cost Price required</span>}
                <input
                    type="number"
                    placeholder="Sale Price"
                    step="0.01"
                    {...register("sale_price", { required: true, maxLength: 12 })}
                    className="bg-zinc-500 p-3 rounded-lg block mb-3 w-full"/>
                    {errors.sale_price && <span>Sale Price required</span>}
                <input
                    type="number"
                    placeholder="Cantidad"
                    step="0.01"
                    {...register("cantidad", { required: true, maxLength: 12 })}
                    className="bg-zinc-500 p-3 rounded-lg block mb-3 w-full"/>
                    {errors.sale_price && <span>cantidad required</span>}
                <input
                    type="checkbox"
                    defaultChecked
                    {...register("available")}
                    className="bg-zinc-500 p-3 rounded-lg block mb-3 w-full"/>
                    {errors.available && <span>available required</span>}
                <input
                    type="supplier"
                    placeholder="supplier"
                    {...register("supplier", {required: false})}
                    className="bg-zinc-500 p-3 rounded-lg block mb-3 w-full"/>
                    {errors.supplier && <span>supplier required</span>}
                <input
                    type="category"
                    placeholder="category"
                    {...register("category", {required: false})}
                    className="bg-zinc-500 p-3 rounded-lg block mb-3 w-full"/>
                    {errors.category && <span>category required</span>}
                <input
                    type="number"
                    placeholder="Tax"
                    step="0.01"
                    {...register("tax", { required: false, maxLength: 12 })}
                    className="bg-zinc-500 p-3 rounded-lg block mb-3 w-full"/>
                    {errors.tax && <span>tax required</span>}
                <button className="bg-indigo-500 p-3 rounded-lc block w-full mb-3">Save</button>
            </form>
            {params.id && <button className="bg-red-500 p-3 rounded-lg w-full mt-3" onClick={async () => {
                const accepted = window.confirm('Are you sure?')
                if (accepted) {
                    await deleteProduct(params.id);
                    toast.error('Product deleted', {
                        position: "bottom-right",
                        style: {
                            background: "#101010",
                            color: "#fff"
                        }
                    })
                    navigate("/products")
                }
            } }>Delete</button>}
        </div>
    )
}
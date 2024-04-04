import { useForm } from "react-hook-form"

export function ProductFormPage(){
    const {register, handleSubmit} = useForm();
    const onSubmit = handleSubmit(data => {
        console.log(data)
    })
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="sku"
                    placeholder="sku"
                    {...register("SKU", {required: true})}/>
                    <input
                    type="barcode"
                    placeholder="barcode"
                    {...register("Barcode", {required: true})}/>
                    <input
                    type="title"
                    placeholder="Title"
                    {...register("title", {required: true})}/>
                    <input
                    type="brand"
                    placeholder="Brand"
                    {...register("brand", {required: false})}/>
                <textarea rows="3" placeholder="Description"{...register("description", {required: true})}></textarea>
                <input
                    type="number"
                    placeholder="Cost Price"
                    step="0.01"
                    {...register("cost_price", { required: true, maxLength: 12 })}/>
                <input
                    type="number"
                    placeholder="Sale Price"
                    step="0.01"
                    {...register("sale_price", { required: true, maxLength: 12 })}/>
                <button>Save</button>
            </form>
        </div>
    )
}
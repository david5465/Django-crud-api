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
                    {...register("sku", {required: true})}/>
                    <input
                    type="barcode"
                    placeholder="barcode"
                    {...register("barcode", {required: true})}/>
                    <input
                    type="title"
                    placeholder="title"
                    {...register("title", {required: true})}/>
                <textarea rows="3" placeholder="Description"{...register("description", {required: true})}></textarea>
                <button>Save</button>
            </form>
        </div>
    )
}
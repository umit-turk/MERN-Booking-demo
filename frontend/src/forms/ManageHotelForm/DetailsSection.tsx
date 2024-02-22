import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm"

const DetailsSection = () => {
    const { register, formState: { errors } } = useFormContext<HotelFormData>()
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold mb-3">Add Hotel</h1>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Name
                <input
                    type="text"
                    className={`border rounded w-full py-1 px-2 font-normal ${errors.name ? "border-red-500" : ""
                        }`}
                    {...register("name", { required: "This field is required" })}
                />
                {errors.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                )}
            </label>

            <div className="flex gap-4">
            <label className="text-gray-700 text-sm font-bold flex-1">
                City
                <input
                    type="text"
                    className={`border rounded w-full py-1 px-2 font-normal ${errors.city ? "border-red-500" : ""
                        }`}
                    {...register("city", { required: "This field is required" })}
                />
                {errors.city && (
                    <span className="text-red-500">{errors.city.message}</span>
                )}
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Country
                <input
                    type="text"
                    className={`border rounded w-full py-1 px-2 font-normal ${errors.country ? "border-red-500" : ""
                        }`}
                    {...register("country", { required: "This field is required" })}
                />
                {errors.country && (
                    <span className="text-red-500">{errors.country.message}</span>
                )}
            </label>
            </div>
        </div>
    )
}

export default DetailsSection
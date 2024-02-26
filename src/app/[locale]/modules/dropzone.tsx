"use client"
import { AppDropzone } from "@/components/dropzone"
import { useGetMeQuery } from "@/store/api-slices/auth"

export const DropzoneModule = () => {
    const { data } = useGetMeQuery(1)
    return (
        <div>
            <AppDropzone type="image" />
        </div>
    )
}

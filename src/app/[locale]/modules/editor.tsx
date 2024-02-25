"use client"
import { useState } from "react"
import { AppTextEditor } from "@/components"

export const EditorFormModule = () => {
    const [value, setValue] = useState<string | undefined>('<p> </p>')

    const handleOnClick = (html?: string) => {
        setValue(html)
    }

    return (
        <div>
            <AppTextEditor handleClick={handleOnClick} value={value} />
        </div>
    )
}

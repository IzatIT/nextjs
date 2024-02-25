import { AxiosProgressEvent } from "axios"
import { nprogress } from "@mantine/nprogress"

export const showProgressing = (progressEvent: AxiosProgressEvent) => {
    if (progressEvent.total) {
        const { total, loaded } = progressEvent
        const progressPercent = loaded / total * 100
        nprogress.set(parseFloat(progressPercent.toFixed()))
        if (total === loaded) {
            nprogress.reset()
        }
    }
}
"use client"
import axios from 'axios'
import { Button, Flex } from "@mantine/core";
import { showProgressing } from '@/utils';

export const ProgressModule = () => {

    const handleDownlaod = async () => {
        try {
            const { data } = await axios("https://picsum.photos/800/800", {
                responseType: "blob",
                onDownloadProgress: showProgressing,
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Flex my={20}>
            <Button onClick={handleDownlaod}>Download</Button>
        </Flex>
    )
}

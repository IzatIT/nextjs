"use client"
import { Box, Button, Flex, } from "@mantine/core";
import { notify } from '@/utils';

export const NotificationModule = () => {

    const handleNotifySuccess = () => {
        notify(true, "Success", "Messssage")
    }
    const handleNotifyError = () => {
        notify(false, "Success", "Messssage")
    }
    return (
        <Box my={20}>
            <Flex>
                <Button onClick={handleNotifyError}>Notify Error</Button>
                <Button onClick={handleNotifySuccess}>Notify Success</Button>
            </Flex>
        </Box>
    )
}

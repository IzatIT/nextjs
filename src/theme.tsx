import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

export const AppMantineProvider = ({ children }: Props) => {
    return (
        <MantineProvider theme={theme}>
            <Notifications />
            {children}
        </MantineProvider>
    )
}

const theme = createTheme({

})
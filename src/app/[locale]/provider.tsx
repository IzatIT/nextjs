"use client"
import { ReactNode } from "react"
import { Provider } from "react-redux"
import { AbstractIntlMessages, NextIntlClientProvider, useLocale } from "next-intl"
import { AppMantineProvider } from "@/theme"
import { AppProgress } from "@/components"
import { store } from "@/store/store"
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/code-highlight/styles.css';
interface Props {
    children: ReactNode;
    messages: AbstractIntlMessages;
}

export default function Providers({ children, messages }: Props) {
    const locale = useLocale()
    return (
        <Provider store={store}>
            <AppMantineProvider>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
                <AppProgress />
            </AppMantineProvider>
        </Provider>
    )
}
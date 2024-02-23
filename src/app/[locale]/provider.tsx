"use client"
import { ReactNode } from "react"
import { Provider } from "react-redux"
import { AbstractIntlMessages, NextIntlClientProvider, useLocale, useMessages } from "next-intl"
import { store } from "@/store"

interface Props {
    children: ReactNode;
    messages: AbstractIntlMessages;
}

export default function Providers({ children, messages }: Props) {
    const locale = useLocale()
    return (
        <Provider store={store}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                {children}
            </NextIntlClientProvider>
        </Provider>
    )
}
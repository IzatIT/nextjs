"use client";
import { redirect } from "next/navigation";
import { useLocalStorage } from "@/hooks";
import { useLocale } from "next-intl";

export default function withAuth(Component: any) {
    return function IsAuth(props: any) {
        const locale = useLocale()
        const [value] = useLocalStorage<IProfile>("profile");
        if (!value) {
            return redirect(`/${locale}/login`);
        }
        return <Component {...props} />
    };
}
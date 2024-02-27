import generateMetaTags from "@/utils/generate-meta-datas";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";


interface Props {
    children: React.ReactNode;
    params: { locale: string };
}

export async function generateMetadata({ params }: { params: LocaleType }): Promise<Metadata> {
    const t = await getTranslations({ locale: params.locale });
    const metaData = generateMetaTags(t("titles.admin"), t("descriptions.admin"), "/")
    return metaData
}

export default function LocaleLayout({ children }: Props) {
    return children
}
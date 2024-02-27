import { Flex, Paper, Title } from "@mantine/core";
import { LoginModule } from "./modules";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import generateMetaTags from "@/utils/generate-meta-datas";

export async function generateMetadata({ params }: { params: LocaleType }): Promise<Metadata> {
    const t = await getTranslations({ locale: params.locale });
    const metaData = generateMetaTags(t("titles.login"), t("descriptions.login"), "/")
    return metaData
}

export default function LoginPage() {
    const t = useTranslations()
    return (
        <Flex align="center" justify="center" h="100vh" w="100vw" bg="gray">
            <Paper miw={300} p={32}>
                <Title fz="xl" ta="center" mb={30}>{t("titles.login")}</Title>
                <LoginModule />
            </Paper>
        </Flex>
    )
}
import { Box } from "@mantine/core";
import { DropzoneModule } from "./modules/dropzone";
import generateMetaTags from "@/utils/generate-meta-datas";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: LocaleType }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale });
  const metaData = generateMetaTags(t("titles.main"), t("descriptions.main"), "/")
  return metaData
}


export default function Page() {
  return (
    <Box>
      <DropzoneModule />
    </Box>
  );
}

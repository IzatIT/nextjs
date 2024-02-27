import { useMessages } from "next-intl";
import Providers from "./provider";
import { Suspense } from "react";
import Loading from "./loading";
import "@/styles/globals.scss"
import "@/styles/variables.scss"
interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale }
}: Props) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <Providers messages={messages}>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
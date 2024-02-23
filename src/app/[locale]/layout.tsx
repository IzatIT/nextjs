import { useMessages } from "next-intl";
import Providers from "./provider";
import "@/styles/globals.scss"

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
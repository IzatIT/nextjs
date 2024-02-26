import { Metadata } from "next";

type FuncType = (title: string, description: string, link: string) => Metadata;

const generateMetaTags: FuncType = (title, description, link) => {
    const slicedTitle = title.slice(0, 50);
    const slicedDesc = description.slice(0, 150);
    return {
        title: slicedTitle,
        description: slicedDesc,
        twitter: {
            card: "summary_large_image",
            images: "/logo.png",
            description: slicedDesc,
            title: slicedTitle
        },
        openGraph: {
            url: link,
            type: "website",
            title: slicedTitle,
            description: slicedDesc,
            images: "/logo.png"
        },
        // manifest: "/manifest.json",
        icons: "/logo.png",
        keywords: "keywords",
        alternates: {
            canonical: link,
            languages: {
                ru: `${link}/ru`,
                kg: `${link}/kg`,
            },
        }
    };
};

export default generateMetaTags;

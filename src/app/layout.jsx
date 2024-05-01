import { Inter } from "next/font/google";
import '../app/globals.css';
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
const APP_DEFAULT_TITLE = APP_NAME;
const APP_TITLE_TEMPLATE = `%s - ${process.env.NEXT_PUBLIC_APP_TITLE_TEMPLATE}`;
const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION;

export const metadata = {
    applicationName: APP_NAME,
    title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: APP_DEFAULT_TITLE,
        // startUpImage: [],
    },
    formatDetection: {
        telephone: false,
    },
    openGraph: {
        type: "website",
        siteName: APP_NAME,
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
    twitter: {
        card: "summary",
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
};

export const viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }) {

    return (
        <html>
            <body>  
                <div className={`${inter.className} main-app`}>
					<Providers>
						{children}
					</Providers>
				</div>
            </body>
        </html>
        
    );
}

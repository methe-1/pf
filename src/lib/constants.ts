import { Caveat, Comfortaa, Indie_Flower, Inter } from "next/font/google";

export const basePath = process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? '' : '/pf';

export const withBasPath = (path: string) => `${basePath}${path}`


export const profileImage = withBasPath('/assets/profile.jpg');
export const aboutImage = withBasPath('/assets/about.jpg');

export const logo = withBasPath('/logo.png');

export const en_resume_pdf = '/assets/Resume_Ezzitouni_Med.pdf';
export const fr_resume_pdf = '/assets/CV_Ezzitouni_Med.pdf';

// sections start points
export const aboutStartPoint = 839;
export const projectsStartPoint = 1678;
// navigation

export type Nav = { url: string, name: string };

export const nav: Record<string, Nav> = {
    home: {
        url: "#home",
        name: "home",
    },
    about: {
        url: "#about",
        name: "about",
    },
    projects: {
        url: "#projects",
        name: "projects",
    },
    contact: {
        url: "#contact",
        name: "contact",
    }
}

// localization

export const langs: Record<string, { nativeName: string; switchTo: string; switchToKey: string }> = {
    'en-US': {
        nativeName: "English",
        switchTo: "French",
        switchToKey: "fr-FR"
    },
    'fr-FR': {
        nativeName: "Français",
        switchTo: "Anglais",
        switchToKey: "en-US"
    },
};

// fonts

export const inter = Inter({ subsets: ["latin"] });

export const caveat = Caveat({
    weight: "400",
    subsets: ["latin"],
});

export const indie = Indie_Flower({
    weight: "400",
    subsets: ["latin"],
});

export const rubic = Comfortaa({
    weight: "600",
    subsets: ["latin"],
});

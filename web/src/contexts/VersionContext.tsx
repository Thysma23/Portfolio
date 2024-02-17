import { useState, createContext, useEffect } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import { PHONESIZE } from "@/data/const";

type VersionContextType = {
    version: "simplified" | "full";
    setVersion: (version: "simplified" | "full") => void;
};

export const VersionContext = createContext<VersionContextType | null>(null);

export const VersionProvider = ({ children }: { children: React.ReactNode }) => {
    const windowWidth = useWindowWidth();

    const initLocalStorageVersion = () => {
        localStorage.setItem("version", "full");
    }

    const getLocalStorageVersion = () => {
        const item = localStorage.getItem("version");
        if (item === null) {
            initLocalStorageVersion();
        }
        return item as "simplified" | "full";
    }

    const [version, setVersion] = useState<"simplified" | "full">(getLocalStorageVersion());

    useEffect(() => {
        localStorage.setItem("version", version);
    }, [version]);

    return (
        <VersionContext.Provider value={
            windowWidth > PHONESIZE
                ? { version, setVersion }
                : { version: "simplified", setVersion: () => { } }
        }>
            {children}
        </VersionContext.Provider>
    );
};

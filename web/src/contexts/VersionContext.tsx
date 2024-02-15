import { useState, createContext, useEffect } from "react";

type VersionContextType = {
    version: "simplified" | "full";
    setVersion: (version: "simplified" | "full") => void;
};

export const VersionContext = createContext<VersionContextType | null>(null);

export const VersionProvider = ({ children }: { children: React.ReactNode }) => {
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
        <VersionContext.Provider value={{ version, setVersion }}>
            {children}
        </VersionContext.Provider>
    );
};

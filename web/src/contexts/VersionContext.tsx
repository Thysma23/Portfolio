import { useState, createContext } from "react";

type VersionContextType = {
    version: "simplified" | "full";
    setVersion: (version: "simplified" | "full") => void;
};

export const VersionContext = createContext<VersionContextType | null>(null);

export const VersionProvider = ({ children }: { children: React.ReactNode }) => {
    const [version, setVersion] = useState<"simplified" | "full">("full");
    
    return (
        <VersionContext.Provider value={{ version, setVersion }}>
            {children}
        </VersionContext.Provider>
    );
};

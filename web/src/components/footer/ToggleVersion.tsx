import useVersion from "@/hooks/useVersion";

export default function ToggleVersion() {
    const { setVersion } = useVersion();

    return (
        <button className="hover:underline" onClick={() => setVersion("full")}>
            Passez à la version complète
        </button>
    );
};

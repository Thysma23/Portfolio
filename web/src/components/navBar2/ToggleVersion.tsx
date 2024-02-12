import useVersion from "@/hooks/useVersion";

export default function ToggleVersion() {
    const { setVersion } = useVersion();

    return (
        <div className="mt-auto text-slate-200 mx-auto hover:underline" onClick={() => setVersion("simplified")}>
            Passez à la version simplifié
        </div>
    );
}

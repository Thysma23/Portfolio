import useVersion from "@/hooks/useVersion";
import useWindowWidth from "@/hooks/useWindowWidth";
import { PHONESIZE } from "@/data/const";

export default function ToggleVersion() {
    const { setVersion } = useVersion();
    const windowWidth = useWindowWidth();

    return (
        windowWidth > PHONESIZE ?
            <button className="mt-auto text-slate-200 mx-auto hover:underline" onClick={() => setVersion("simplified")}>
                Passez à la version simplifié
            </button>
            : null

    );
}

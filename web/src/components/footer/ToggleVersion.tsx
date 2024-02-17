import useVersion from "@/hooks/useVersion";
import useWindowWidth from "@/hooks/useWindowWidth";
import { PHONESIZE } from "@/data/const";

export default function ToggleVersion() {
    const { setVersion } = useVersion();
    const windowWidth = useWindowWidth();

    return (
        windowWidth > PHONESIZE
            ? <button className="hover:underline" onClick={() => setVersion("full")}>
                Passez à la version développée
            </button>
            : null
    );
};

import { Toggle } from "@/components/ui/toggle"

interface Props {
    children?: string;
}

export default function LoggedOutLayout({ children }: Props) {
    return (
        <>
            <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">
                {children}
            </div>
            <Toggle className="fixed top-[calc(50%-12px)] right-2"/>
        </>
    )
}
import { ReactNode, useTransition } from "react";

const TabButton = ({ isActive,children, onClick, className }: {
    isActive:boolean,
    children: ReactNode,
    onClick: () => void,
    className: string
}) => {
    const [isPending, startTransition] = useTransition();
    const handleClick = ()=>startTransition(()=>{
        onClick();
    })
    return <button disabled={isPending} style={{ opacity: isPending && isActive ? "0.5" : "1" }} className={className} onClick={handleClick}>
        {children}
    </button>;
}
export default TabButton;
import { ReactNode, useTransition } from "react";

const TabButton = ({ isActive,children, onClick, className }: {
    isActive:boolean,
    children: ReactNode,
    onClick: () => void,
    className: string
}) => {
    //const [isPending, startTransition] = useTransition();
    // const handleClick = ()=>startTransition(()=>{
    //     onClick();
    // })
    return <button className={className} onClick={onClick}>
        {children}
    </button>;
}
export default TabButton;
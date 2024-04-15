import Link from "next/link";
import { ReactNode } from "react";
import styles from "@/styles/layout.module.scss"
const Layout = ({ children }: { children?: ReactNode }) => {
    return <>
        <header className={styles.header}>
            <nav>
                {/* <Link href={"/test/tabs"}>
                    Simple Tabs
                </Link>
                <Link href={"/test/react-kod"}>
                    React Kod Tabs
                </Link> */}
            </nav>
        </header>
        <main className={styles.main}>
            <h1>Welcome to Test:</h1>
            <section>
                {children}
            </section>
        </main>
    </>;
}
export default Layout;
import styles from "./Header.module.css";

import igniteLogo from "../images/Ignite simbol.svg"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do ignite"/>
            <storng className={styles.header}>Ignite Feed</storng>
        </header>
    );
}

import { PencilLine } from "phosphor-react"
import styles from "./Sidebar.module.css";
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
                alt="user image"
            />
            <div className={styles.profile}>
                <img src="https://avatars.githubusercontent.com/u/72900664?v=4" className={styles.avatar} />
                <strong>Marcelo Victor</strong>
                <span>Dev Java | React.Js</span>
            </div>

            <footer>
                <a href="" className="">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
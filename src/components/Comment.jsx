import styles from "./Comment.module.css"
import {ThumbsUp, Trash} from "phosphor-react";
export function Comment () {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/CR3WDev.png" alt=""/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="19 de Janeiro às  09:52" dateTime="2023-01-19 09:52:30"></time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👋👋</p>
                </div>

                <footer>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </footer>
            </div>
        </div>
    )
}
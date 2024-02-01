import { Link } from "react-router-dom";
import styles from "./css/notfound.module.css"

export function NotFound() {

    interface ErrorPage {
        title_error: string,
        text_error: string;
    }

    const notFound:ErrorPage[] = [
        {
            title_error: 'Oops...',
            text_error: 'There is no such page, go back to the '
        }
    ]

    return (
        <div className={styles.block__info__error}>
            {notFound.map((notFound) => (
                <h3 className={styles.title__error}>{notFound.title_error}</h3>
            ))}
            {notFound.map((notFound) => (
                <p className={styles.text__error}>{notFound.text_error}<Link to="/" className={styles.error__bth}>home page</Link></p>
            ))}
        </div>
    )
}
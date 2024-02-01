import styles from "./css/home.module.css"
import { Information } from "./interface/descriptiopage"

export function HomePage() {

    const info:Information[] = [
        {
            title_page: 'Home', text_page: ''
        }
    ]
    
    return (
        <>
            {info.map((info) => (
                <h3 className={styles.title_site}>{info.title_page}</h3>
            ))}
            
            <h3 className={styles.title_site}></h3>
            <div className={styles.wrapper}>
                <div className={styles.hello__content}>
                    
                </div>
            </div>
        </>
    )
}
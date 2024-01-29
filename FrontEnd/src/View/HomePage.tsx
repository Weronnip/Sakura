import styles from "./css/home.module.css"

export function HomePage() {
    
    interface Information {
        title_page: string;
        text_page: string;
    }

    const infoSite:Information[] = [
        {
            title_page: 'Home',
            text_page: ''
        }
    ]

    return (
        <>
            {infoSite.map((infoSite) => (
                <h3 className={styles.title_site}>{infoSite.title_page}</h3>
            ))}

            <div className={styles.wrapper}>
                <div className={styles.hello__content}>
                    
                </div>
            </div>
        </>
    )
}
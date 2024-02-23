import { UserMenu } from "./components/list_components/user_menu.tsx"
import styles from "./css/profile.module.css"

export function ProfilePage() {
    return (
        <>
            <div className={styles.main__content}>
                <div className={styles.profile__content}>

                    {/* user content */}
                    <div className={styles.user__information}>
                        <img src="https://rudos.ru/loadfiles/moduls/doska/bigfoto/4ba9a45a0f3bb49507c3c824769a9f7b.webp" alt="profile img" className={styles.profile__img}/>
                        <h3 className={styles.user__name}>Alexey Kuriganov</h3> 
                    </div>

                    <div className={styles.user__menu}>
                        <UserMenu />
                    </div>
                </div>
            </div>
        </>
    )
}
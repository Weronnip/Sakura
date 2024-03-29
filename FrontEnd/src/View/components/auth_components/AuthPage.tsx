import { BthAuth } from "./bth_components/bth_auth"
import styles from "./auth.module.css";

export function UserLogin() {
    interface windowLogin {
        nameEmail: string;
        namePassword: string;

    }

    const nameLabel: windowLogin[] = [
        { 
            nameEmail: "Почта: ", 
            namePassword: "Пароль: "
        }
    ]

    return (
        <div className={styles.wallpaper}>
            <h2 className={styles.title__window}>Authorization</h2>
                <hr className={styles.horizontal__line}/>
                <div className={styles.user_input_data}>
                    <form action="" method="post">
                        <div className={styles.form__auth}>
                            {nameLabel.map((nameInput) => (
                                <label htmlFor="email_user" className={styles.label__Input}>{nameInput.nameEmail}</label>
                            ))}
                            <input type="email" name="user_email" id="user_email" className={styles.input_data}/>
                            
                            {nameLabel.map((nameInput) => (
                                <label htmlFor="email_user" className={styles.label__Input}>{nameInput.namePassword}</label>
                            ))}
                            <input type="email" name="user_email" id="user_email" className={styles.input_data}/>
                            
                            <BthAuth />
                            
                        </div>
                    </form>
                </div>
        </div>
    );
}
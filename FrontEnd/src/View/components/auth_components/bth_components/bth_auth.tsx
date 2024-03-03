import styles from "./bth.module.css";

function LoginBth() {
    interface bthLogin {
        nameLogin: string;
        urlLogin: string;
    }
    
    const login:bthLogin[] = [
        {
            nameLogin: 'Login',
            urlLogin: '/profile/login',
        }
    ]

    return (
        <>
            {login.map((login) => (
                <form action={login.urlLogin} method="get">
                    <button className={styles.bth__auth}>{login.nameLogin}</button>
                </form>
            ))}
        </>
    );
}

export function RegistrationBth() {
    interface bthReg {
        nameReg: string;
        urlReg: string;
    }
    
    const reg:bthReg[] = [
        {
            nameReg: 'Registration',
            urlReg: '/profile/registration',
        }
    ]

    return (
        <>
            {reg.map((reg) => (
                <form action={reg.urlReg} method="get">
                    <button className={styles.bth__auth}>{reg.nameReg}</button>
                </form>
            ))}
        </>
    );
}

function BthAuth() {
    return (
        <div className={styles.wallpaper}>
            <div className={styles.grid__div}>
                <LoginBth />
                <RegistrationBth />
            </div>
        </div>
    );
}

export { BthAuth }
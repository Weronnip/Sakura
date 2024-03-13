import styles from "./admin_panel.module.css";

export function AdminPanel() {

    return (
        
        <>
            <div className={styles.wallpaper}>
                <h3 className={styles.title_block}>Админ Панель</h3>
                <div className={styles.add_menu}>
                    <form action="http://localhost:3000/api/new_foods" method="post">
                        <input type="text" placeholder="ссылка на изображение" className={styles.input_data}/>
                        <input type="number" placeholder="Вид блюда" className={styles.input_data}/>
                        <input type="number"placeholder="Номер блюда" className={styles.input_data}/>
                        <input type="text" placeholder="Имя блюда" className={styles.input_data}/>
                        <input type="text" placeholder="О блюде" className={styles.input_data}/>
                        <input type="number" placeholder="Цена" className={styles.input_data}/>

                        <button type="submit" className={styles.bth_push}>Создать блюдо</button>
                    </form>
                </div>
            </div>
        </>
    );
}

import styles from "./filterCP.module.css"

function FilterBlock() {

    return (
        <div className={styles.filter__panel}>
            <h3 className={styles.title__filter}>Фильтр</h3>
            <div className={styles.type__filter}>
                <select name="ViewFood" id="view_Food" className={styles.FilterBlock}>
                    <option value="none" className={styles.listFilter}>Выберите вид блюда</option>
                    <option value="1" className={styles.listFilter}>Первое блюдо</option>
                    <option value="2" className={styles.listFilter}>Второе блюдо</option>
                    <option value="3" className={styles.listFilter}>Третье блюдо</option>
                </select>
            </div>
        </div>
    );
}

export { FilterBlock }
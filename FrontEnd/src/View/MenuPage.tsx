import { FilterBlock } from "./components/filter_component/filterComponent"
import { MenuFood } from "./components/food_componets/MenuComponent"
import styles from "./css/menu.module.css"

export function MenuPage() {
    return (
        <div className={styles.wallpaper}>
            <FilterBlock />
            <MenuFood /> 
        </div>
    )
}
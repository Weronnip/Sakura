import { BiFoodMenu, BiHomeAlt2, BiInfoCircle, BiRestaurant, BiSolidUserAccount } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom"
import styles from  "./layout.module.css"
import { ReactNode } from "react";


// Menu website
export function Layout() {

    interface mainInfo {
        Name_Site: string,
        Icon_Site: ReactNode,
        About_Site: string;
    }

    interface bth_Link {
        link_name: string,
        icon_link: ReactNode
        bthLink: string;
    }

    const info: mainInfo[] = [
        {
            Name_Site: 'Sakura',
            Icon_Site: <BiRestaurant />,
            About_Site: ''
        },
    ]

    const listBth: bth_Link[] = [
        { link_name: 'Главная', icon_link: <BiHomeAlt2/>, bthLink: '/home' },
        { link_name: 'Меню', icon_link: <BiFoodMenu/>, bthLink: '/menu' },
        { link_name: 'О нас', icon_link: <BiInfoCircle/>, bthLink: '/about' },
        { link_name: 'Профиль', icon_link: <BiSolidUserAccount/>, bthLink: '/profile' },
    ]

    return (
        <div className={styles.wallpaper}>

            <div className={styles.content_layout}>
                
                {info.map((info) => (
                    <h3 className={styles.title_site} key={info.Name_Site}>
                        <i className={styles.icon_site}>
                        {info.Icon_Site}</i> {info.Name_Site}</h3>
                ))}

                <ul className={styles.nav_list}>
                    {listBth.map((listBth) => (
                        <li className={styles.li_nav} key={listBth.bthLink}>
                            <Link to={listBth.bthLink} className={styles.bthLink}><i className={styles.icons_link}>{listBth.icon_link}</i>{listBth.link_name}</Link>
                        </li>
                    ))}

                </ul>
            </div>
            <Outlet />
        </div>

    )
}

import { BiBasket, BiEdit, BiExit, BiMenu } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./bth.module.css";
import { ReactNode } from "react";

function UserMenu() {
  interface information_bth {
    link_name: string;
    link_url: string;
    link_icon: ReactNode;
  }

  const bth_link: information_bth[] = [
    {
    link_name: "Настройки",
    link_url: "/profile/user/:id/setting",
    link_icon: <IoSettings className={styles.icon_link} />,
    },
    {
      link_name: "История",
      link_url: "/profile/user/:id/history",
      link_icon: <BiMenu className={styles.icon_link} />
    },
    {
      link_name: "Заказы",
      link_url: "/profile/user/:id/basket",
      link_icon: <BiBasket className={styles.icon_link} />,
    },
    {
      link_name: "Изменить",
      link_url: "/profile/user:/id/edit_user",
      link_icon: <BiEdit className={styles.icon_link} />,
    },
    {
      link_name: "Выход",
      link_url: "/profile/user:/id/exit",
      link_icon: <BiExit className={styles.icon_link}/>
    }
  ];

    return (
        <ul className={styles.list__menu}>
            {bth_link.map((bth_link) => (
            <li className={styles.list__bth}>
                <Link to={bth_link.link_url} className={styles.link__bth}>
                <i>{bth_link.link_icon}</i>
                {bth_link.link_name}
                </Link>
            </li>
            ))}
        </ul>
    )
}

export { UserMenu }
import styles from "./Navitem.module.sass"

import Link from "next/link"

export interface navItemInterface {
    url: string,
    label: string,
    isActive?: boolean
}

function Navitem(props: navItemInterface) {
    return (
        <li className={styles.nav_item}>
            <Link href={props.url} className={styles.nav_link}>{props.label}</Link>
        </li>
    )
}

export default Navitem

// className={`${props.isActive ? `${styles.active}` : ""}`}

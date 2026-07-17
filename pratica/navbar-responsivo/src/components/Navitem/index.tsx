import Link from "next/link"

export interface navItemInterface {
    url: string,
    label: string,
    isActive?: boolean
}

function Navitem(props: navItemInterface) {
    return (
        <li>
            <Link href={props.url}>{props.label}</Link>
        </li>
    )
}

export default Navitem

// className={`${props.isActive ? `${styles.active}` : ""}`}

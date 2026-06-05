import styles from "./Sidebar.module.sass"

import Link from "next/link"

function Sidebar() {
    return (
        <section className={styles.sidebar}>
            <section className={styles.Subscriptions}>
                <h2>Subscriptions</h2>

                <ul className={styles.Subscriptions_list}>
                    <li>
                        <Link href="/channel/alanzoka">Alanzoka</Link>
                    </li>
                    <li>
                        <Link href="/channel/mano-dayvin">Mano Dayvin</Link>
                    </li>
                    <li>
                        <Link href="/channel/peter-aqui">Peter Aqui</Link>
                    </li>
                    <li>
                        <Link href="/channel/gaveta">Gaveta</Link>
                    </li>
                </ul>
            </section>

            <section className={styles.you}>
                <h2>You</h2>

                <ul className={styles.you_list}>
                    <li>
                        <Link href="/feed/history">History</Link>
                    </li>
                    <li>
                        <Link href="/feed/playlists">Playlists</Link>
                    </li>
                </ul>
            </section>
        </section>
    )
}

export default Sidebar

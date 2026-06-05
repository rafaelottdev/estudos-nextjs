import styles from "./Topbar.module.sass"

function Topbar() {
    return (
        <section className={styles.topbar_container}>
            <ul className={styles.topbar_list}>
                <li>All</li>
                <li>Music</li>
                <li>Gaming</li>
                <li>Computer programming</li>
                <li>Comedy</li>
                <li>Films</li>
                <li>Watched</li>
                <li>New</li>
                <li>Live</li>
                <li>Podcast</li>
            </ul>
        </section>
    )
}

export default Topbar

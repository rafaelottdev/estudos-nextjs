import styles from "./Home.module.sass"

import Topbar from "./Topbar/Topbar"

function Home() {
    return (
        <section className={styles.home}>
            <Topbar />

            <section></section>
        </section>
    )
}

export default Home

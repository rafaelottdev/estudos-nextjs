import styles from "./Home.module.sass"

import Topbar from "./Topbar/Topbar"

function Home() {
    return (
        <section className={styles.home}>
            <Topbar />

            <section className={styles.videos_container}>
                <div className={styles.video_card}></div>
                <div className={styles.video_card}></div>
                <div className={styles.video_card}></div>
                <div className={styles.video_card}></div>
                <div className={styles.video_card}></div>
                <div className={styles.video_card}></div>
            </section>
        </section>
    )
}

export default Home

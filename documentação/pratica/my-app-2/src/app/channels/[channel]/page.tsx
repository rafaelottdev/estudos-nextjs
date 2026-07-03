import Link from "next/link";
import styles from "./page.module.sass"

import { CiSearch } from "react-icons/ci";

export async function generateStaticParams() {
    return [
        { slug: "alanzoka" },
        { slug: "mano-dayvin" },
        { slug: "peter-aqui" },
        { slug: "gaveta" },
    ]
}

async function Page({ params }: {params: Promise<{ channel: string }>}) {
    const { channel } = await params

    return (
        <section className={styles.channel_page}>
            <div className={styles.perfil_container}>
                <div className={styles.banner}></div>

                <div className={styles.perfil_info}>
                    <div className={styles.perfil_img}></div>

                    <div className={styles.info}>{channel}</div>
                </div>

                <ul className={styles.opt_video}>
                    <li>Home</li>
                    <li>Videos</li>
                    <li>Live</li>
                    <li>Playlists</li>
                    <Link href="/">Voltar</Link>
                    <li>
                        <CiSearch />
                    </li>
                </ul>
            </div>

            <div className={styles.videos_container}>
                <h2>For You</h2>

                <ul className={styles.video_list}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
            </div>
        </section>
    )
}

export default Page

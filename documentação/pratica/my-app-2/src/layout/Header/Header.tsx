import { MdOutlineMenu } from "react-icons/md";
import { SiYoutubetv } from "react-icons/si";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { MdMicNone } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

import styles from "./Header.module.sass"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left_side}>
                <button className={styles.menu_wrapp}>
                    <MdOutlineMenu />
                </button>

                <div className={styles.logo_wrapp}>
                    <FaYoutube />

                    <p>Youtube</p>
                </div>
            </div>

            <div className={styles.mid_side}>
                <div className={styles.search_wrapp}>
                    <input type="text" placeholder="Search" />

                    <button>
                        <CiSearch />
                    </button>
                </div>

                <button className={styles.mic_wrapp}>
                    <MdMicNone />
                </button>
            </div>

            <div className={styles.right_side}>
                <div className={styles.create_wrapp}>
                    <FaPlus />
                    <p>Create</p>
                </div>

                <div className={styles.notification_wrapp}>
                    <CiBellOn />
                </div>

                <div className={styles.current_user}>R</div>
            </div>
        </header>
    )
}

export default Header

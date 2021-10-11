import Style from "./styles/NavBar.module.css"
import Link from "next/Link"

export default function NavBar() {
    return (
        <div className={Style.NavBarContent}>
            <div className={Style.S3rbvnTextContainer}>
                <Link href={"/"}>
                    <a className={Style.S3rbvnText}>S3RBVN</a>
                </Link>
            </div>
            <div className={Style.LinksContainer}>
                <Link href={"/about"}>
                    <a className={Style.LinkText}>About Me</a>
                </Link>

                <Link href={"/"}>
                    <a className={Style.LinkText}>My Work</a>
                </Link>

                <Link href={"/"}>
                    <a className={Style.LinkText}>Contact Me</a>
                </Link>
            </div>
        </div>
    )
}

import Style from "./styles/NavBar.module.css"

export default function NavBar() {
    return (
        <div className={Style.NavBarContent}>
            <div className={Style.S3rbvnTextContainer}>
                <a href={"/"} className={Style.S3rbvnText}>S3RBVN</a>
            </div>
            <div className={Style.LinksContainer}>
                <a href={"/about"} className={Style.LinkText}>About Me</a>

                <a href={"/projects"} className={Style.LinkText}>My Work</a>

                <a href={"/contact"} className={Style.LinkText}>Contact Me</a>
            </div>
        </div>
    )
}

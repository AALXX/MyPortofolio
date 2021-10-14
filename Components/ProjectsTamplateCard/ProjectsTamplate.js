import styles from './styles/ProjectTamplate.module.css'
import Link from "next/Link"

export default function ProjectsTamplate(props) {
    return (
        <>
            <Link href={`${props.Repo}`} >
                <div className={styles.CardBackground}>
                    <div className={styles.ProjectTextBox}>
                        <h1 className={styles.CardText}>{props.ProjectTitle}</h1>
                    </div>
                    <div className={styles.HorizontalLine} />
                    <div className={styles.DescriptionTextBox}>
                        <h1 className={styles.CardText}>{props.ProjectDescription}</h1>
                    </div>
                    <div className={styles.HorizontalLine} />

                    <div className={styles.LanguageTextBox}>
                        <h1 className={styles.CardText}>{props.ProjectLanguage}</h1>
                    </div>
                </div>
            </Link>
        </>
    )
}

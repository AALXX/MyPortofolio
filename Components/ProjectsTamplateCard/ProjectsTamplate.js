import styles from './styles/ProjectTamplate.module.css'

export default function ProjectsTamplate(props) {
    return (
        <>
                <div className={styles.CardBackground}>
                    <div className={styles.ProjectTextBox}>
                        <a href={`${props.Repo}`} className={styles.CardText}>{props.ProjectTitle}</a>
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
        </>
    )
}

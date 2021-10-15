import styles from "../styles/Peojects.module.css"
import ProjectsTamplate from "../Components/ProjectsTamplateCard/ProjectsTamplate"


export default function Projects() {



    return (
        <div className={styles.PageContainer}>
            <h1 className={styles.HeadText}> Some of My Projects </h1>
            <br />
            <div className={styles.ProjectsContainer}>
                <ProjectsTamplate
                    ProjectTitle="PcController"
                    ProjectDescription="a project design to controll other computers from a web interface"
                    ProjectLanguage="typescript"
                    Repo="https://github.com/AALXX/PcController"
                />

                <ProjectsTamplate
                    ProjectTitle="HighlightsHub"
                    ProjectDescription="a gaem highlights media sharing web platoform"
                    ProjectLanguage="javascript"
                    Repo="https://github.com/AALXX/GameHighlightsWebApp"
                />


                <ProjectsTamplate
                    ProjectTitle="Elena OS"
                    ProjectDescription="an operating system"
                    ProjectLanguage="c++"
                    Repo="https://github.com/AALXX/ElenaOs"
                />


            </div>
        </div>
    )
}

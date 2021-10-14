import style from '../styles/About.module.css'

export default function About() {
    return (
        <div className={style.PageContainer}>
            <div className={style.HeadContainer}>
                <h1 className={style.HeadLine}>Hi, I ‘m a 16 y.o full stack web. As languages I know and use mainly javascript,</h1>
                <h1 className={style.HeadLine}>typescript but i am a bit familiar with c++, python, c#, java</h1>

            </div>
            <div className={style.CardsContainer}>
                <div className={style.Card}>
                    <h1 className={style.CardTitle}> Frontend Technologies That I Use: </h1>
                    <br />
                    <h1 className={style.CardSimpleText}>React.js</h1>
                    <h1 className={style.CardSimpleText}>Next.js</h1>
                    <h1 className={style.CardSimpleText}>Javascript</h1>
                    <h1 className={style.CardSimpleText}>Typescript</h1>
                </div>
                <div className={style.Card}>
                    <h1 className={style.CardTitle}> Backend Technologies That I Use: </h1>
                    <br />
                    <h1 className={style.CardSimpleText}>Node.js</h1>
                    <h1 className={style.CardSimpleText}>Express.js</h1>
                    <h1 className={style.CardSimpleText}>Sql</h1>
                </div>
            </div>
        </div>
    )
}

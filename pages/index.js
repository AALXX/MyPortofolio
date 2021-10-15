import style from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={style.PageContainer}>
      <h1 className={style.HelloBackGround}>HELLO</h1>
      <div className={style.ForegroundHeadLine}>
        <div className={style.TextContainer}>
          <h1 className={style.HeadLineForegroundText}> I ‘m Alex</h1>
          <h1 className={style.HeadLineForegroundText}> Self Thought Full Stack Web Developer</h1>

        </div>
      </div>

      <div className={style.IconsContainer}>
        <a href="https://www.fiverr.com/alexx_s" target="_blank" rel="noreferrer">
          <img src='/assets/fiverrIco.svg' alt='AccountImageButton' className={style.FiverrIcon} />
        </a>
        <a href="https://www.instagram.com/s3rbvn/" target="_blank" rel="noreferrer">
          <img src='/assets/instagramIco.svg' alt='AccountImageButton' className={style.InstaIcon} />
        </a>
      </div>

    </div>
  )
}

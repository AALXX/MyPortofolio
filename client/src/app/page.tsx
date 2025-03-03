const AboutMe = () => {
    return (
        <div className="3xl:p-11 flex h-full flex-col justify-between overflow-y-auto px-4 pb-8 sm:p-6 md:p-8">
            <div className="flex flex-col">
                <h1 className="font-monda text-2xl font-bold text-white sm:text-3xl md:text-4xl">Some things about me</h1>
                <div className="mt-4 h-1 w-1/3 bg-gradient-to-r from-white to-transparent" />
                <p className="mt-4 text-white sm:text-lg md:text-xl">
                    Hello, world! My name is Serban Alexandru, and I am an indie software developer and tech enthusiast with a passion for creating innovative digital things. You can find me either creating web
                    applications or fidgeting with low-level programming. I love solving complex problems and pushing the boundaries of my technology knowledge.
                </p>
            </div>

            <div className="my-8 flex flex-col items-end md:my-12">
                <h1 className="font-monda text-2xl font-bold text-white sm:text-3xl md:text-4xl">My Coding Journey (so far)</h1>
                <div className="mt-4 h-1 w-1/3 bg-gradient-to-l from-white to-transparent" />
                <p className="mt-4 text-right text-white sm:text-lg md:text-xl">
                    My love for coding began with video games—what started as a fascination with interactive experiences soon led me to dive into game development, graphics programming, and rendering pipelines. Along the
                    way, I dipped my feet into web development, where I fell in love, focusing on fast, responsive, and intuitive applications. My interest in systems programming pushed me to experiment with Assembly and
                    C++, even attempting to build my own OS. More recently, AI and machine learning have captured my attention, and while I'm still learning, I'm excited about the endless possibilities they offer.
                </p>
            </div>

            <div className="flex flex-col">
                <h1 className="font-monda text-2xl font-bold text-white sm:text-3xl md:text-4xl">Key Ideals & Philosophy</h1>
                <div className="mt-4 h-1 w-1/3 bg-gradient-to-r from-white to-transparent" />
                <p className="mt-4 text-white sm:text-lg md:text-xl">
                    In a field that evolves rapidly, I believe that adaptability and continuous learning are key to staying ahead. I see every challenge as an opportunity to grow, whether it's mastering a new programming
                    language, exploring the latest frameworks, or diving into academic research. Above all, I value clean, efficient code, user-focused design, and the power of technology to create meaningful and
                    impactful experiences. My goal is to keep pushing myself, sharing and gaining knowledge, and building projects that make a difference.
                </p>
            </div>
        </div>
    )
}

export default AboutMe

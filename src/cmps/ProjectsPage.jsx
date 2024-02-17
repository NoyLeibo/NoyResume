export function ProjectsPage() {
    return (
        <section className="projects-page divider flex column align-center">
            <div className="fs32 underline">My-Projects</div>
            <div className="project-cards flex row">

                <div className="project-card-one flex column">
                    <img src="/img/AirBin.png" />
                    <div className="project-text flex column ">
                        <h1 className="underline bold">Air-Bin</h1>
                        <div className="fs14"><span className="underline bold fs16">My final project.</span><br />an innovative marketplace app inspired by Airbnb, designed to connect guests with unique homes and experiences around the globe.<br />
                            Using Javascript, React, Scss, MongoDB. <br /><span className="underline bold fs16">FULL-STACK APP</span>
                        </div>
                        <div className="bold">
                            <span> - </span>
                            <span onClick={() => window.open('https://github.com/NoyLeibo/AirBin')} className="underline pointer">Open Git</span>
                            <span> - </span>
                            <span onClick={() => window.open('https://airbin.onrender.com/')} className="underline pointer">Open App</span>
                            <span> - </span>
                        </div>
                    </div>
                </div>

                <div className="project-card-two flex column">
                    <img src="/img/My-Resume.png" />
                    <div className="project-text flex column ">
                        <h1 className="underline bold">My-Resume</h1>
                        <div className="fs14">
                            Visit my responsive portfolio at <span onClick={() => alert("You're already in!")} className="underline pointer">Click Me!</span> , crafted with React and SCSS, highlighting my software development journey and passion.<br /> A gateway for potential employers to explore my projects and connect with me for opportunities.<br /><span className="underline bold fs16">FROND-END APP</span>
                        </div>
                        <div className="bold">
                            <span> - </span>
                            <span onClick={() => window.open('https://github.com/NoyLeibo/NoyResume')} className="underline pointer">Open Git</span>
                            <span> - </span>
                            <span onClick={() => alert('This is the app')} className="underline pointer">Open App</span>
                            <span> - </span>
                        </div>
                    </div>
                </div>

                <div className="project-card-three flex column">
                    <img src="/img/Meme-Magic.png" />
                    <div className="project-text flex column ">
                        <h1 className="underline bold">Meme-Magic</h1>
                        <div className="fs14">My second project in Javascript. <br /><span className="underline bold fs16">FROND-END APP</span>
                        </div>
                        <div className="bold">
                            <span> - </span>
                            <span onClick={() => window.open('https://github.com/NoyLeibo/Meme-Proj')} className="underline pointer">Open Git</span>
                            <span> - </span>
                            <span onClick={() => window.open('https://noyleibo.github.io/Meme-Proj/')} className="underline pointer">Open App</span>
                            <span> - </span>
                        </div>
                    </div>
                </div>

                {/* <div className="project-card-four"></div> */}
            </div>
        </section>
    )
} 
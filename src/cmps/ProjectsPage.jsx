export function ProjectsPage() {
    return (
        <section className="projects-page divider flex column align-center">
            <div className="fs32 underline">My-Projects</div>
            <div className="project-cards flex row">

                <div className="project-card-one flex column">
                    <img src="/img/AirBin.png" />
                    <div className="project-text flex column ">
                        <h1 className="underline bold">Air-Bin</h1>
                        <div className="fs14"><span className="underline bold fs16">My end project at the bootcamp.</span><br />an innovative marketplace app inspired by Airbnb, designed to connect guests with unique homes and experiences around the globe.<br />
                            Using Javascript, React, Scss, MongoDB, Express, NodeJS. <br /><span className="underline bold fs16">Full-stack application</span>
                        </div>
                        <div className="bold fs12">
                            <span> - </span>
                            <span onClick={() => window.open('https://github.com/NoyLeibo/AirBin')} className="underline pointer">Open Git Front-End and Back-End</span>
                            <span> - </span>
                            <span onClick={() => window.open('https://airbin.onrender.com/')} className="underline pointer">Open App</span>
                            <span> - </span>
                        </div>
                    </div>
                </div>

                <div className="project-card-four flex column">
                    <img src="/img/InstaStory.png" />
                    <div className="project-text flex column ">
                        <h1 className="underline bold">InstaStory</h1>
                        <div className="fs14">
                            InstaStory is a personal coding project inspired by Instagram, aimed at enhancing coding skills and personal enjoyment. It replicates Instagram's seamless experience, allowing users to share, view, and interact with posts in a vibrant online community, through a streamlined interface. <br />
                            <span className="fs14">Using JavaScript,TypeScript, React, Scss, MongoDB, Express, NodeJS</span><br /><span className="underline bold fs16">Full-stack application</span>
                        </div>
                        <div className="bold fs12">
                            <span> - </span>
                            <span onClick={() => window.open('https://github.com/NoyLeibo/InstaStory-Frontend')} className="underline pointer" >Open Git Front-End</span>
                            <span> - </span>
                            <span onClick={() => window.open('https://github.com/NoyLeibo/InstaStory-Backend')} className="underline pointer" >Open Git Back-End</span>
                            <span> - </span>
                            <span onClick={() => window.open('https://www.myinstastory.com/')} className="underline pointer">Open App</span>
                            <span> - </span>
                        </div>
                    </div>
                </div>

                <div className="project-card-two flex column">
                    <img src="/img/My-Resume.png" />
                    <div className="project-text flex column ">
                        <h1 className="underline bold">My-Resume</h1>
                        <div className="fs14">
                            Visit my responsive portfolio at <span onClick={() => alert("You're already in!😁😂")} className="underline pointer">Click Me!</span> , crafted with React and SCSS, highlighting my software development journey and passion.<br /> A gateway for potential employers to explore my projects and connect with me for opportunities.<br /><span className="underline bold fs16">Front-end application</span>
                        </div>
                        <div className="bold fs12">
                            <span> - </span>
                            <span onClick={() => window.open('https://github.com/NoyLeibo/NoyResume')} className="underline pointer">Open Git</span>
                            <span> - </span>
                            <span onClick={() => alert('This is the app🈸')} className="underline pointer">Open App</span>
                            <span> - </span>
                        </div>
                    </div>
                </div>

                <div className="project-card-three flex column">
                    <img src="/img/Meme-Magic.png" />
                    <div className="project-text flex column ">
                        <h1 className="underline bold">Meme-Magic</h1>
                        <div className="fs14">My second project in Javascript vanilla. <br />Create memes and save them!<br /><span className="underline bold fs16">Front-end application</span>
                        </div>
                        <div className="bold fs12">
                            <span> - </span>
                            <span onClick={() => window.open('https://github.com/NoyLeibo/Meme-Proj')} className="underline pointer">Open Git</span>
                            <span> - </span>
                            <span onClick={() => window.open('https://noyleibo.github.io/Meme-Proj/')} className="underline pointer">Open App</span>
                            <span> - </span>
                        </div>
                    </div>
                </div>


            </div>
        </section >
    )
} 
export function SkillsPageTwo() {
    return (
        <section className="skills-page-two divider">
            <div className="flex justify-center" >
                <img src="/img/My-Tech-Logo.png" />
            </div>
            <section className="skills-cards flex align-center divider">
                <div className="card-one flex column align-center">
                    <img src="/img/front-end-developer.png" />
                    <span>
                        JavaScript | TypeScript | HTML | CSS | React | Vue | Angular | JQuery | Python
                    </span>
                </div>
                <div className="card-two flex column align-center">
                    <img src="/img/back-end-developer.png" />
                    <span>
                        JavaScript | TypeScript | API | Sockets
                    </span>
                </div>
                <div className="card-three flex column align-center">
                    <img src="/img/Data.png" />
                    <span>
                        MongoDB | JSON | Git
                    </span>
                </div>
            </section>
        </section>
    )
}
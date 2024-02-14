export function SkillsPageTwo() {
    return (
        <section className="skills-page-two">
            <div className="flex justify-center" >
                <img src="/img/My-Tech-Logo.png" />
            </div>
            <section className="skills-cards flex align-center">
                <div className="card-one flex column align-center">
                    <img src="/img/front-end-developer.png" />
                    JavaScript | HTML | CSS | React | Vue | Angular
                </div>
                <div className="card-two flex column align-center">
                    <img src="/img/back-end-developer.png" />
                    Text
                </div>
                <div className="card-three flex column align-center">
                    <img src="/img/Data.png" />
                    MongoDB | JSON
                </div>
            </section>
        </section>
    )
}

// import { SkillsOnWeb } from './SkillsOnWeb.jsx';
// import { SkillsOnMobile } from './SkillsOnMobile.jsx';


export function SkillsPage() {

    const skills = [
        { name: 'JavaScript', level: 100, icon: '/img/js-icon.png' },
        { name: 'HTML&CSS', level: 100, icon: '/img/html5-css3-icon.png' },
        { name: 'React', level: 100, icon: '/img/React-icon.png' },
        { name: 'Angular', level: 100, icon: '/img/angular-icon.png' },
        { name: 'Vue', level: 100, icon: '/img/vue-icon.png' },
        { name: 'Node.js', level: 100, icon: '/img/node-icon.png' },
    ];

    return (
        // <section>
        <section className='skills-page'>
            <img className="my-skills-logo" src="/img/my-skills-logo.png" />
            <section className="skills">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-bar">
                        <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
                        <div className="skill-info">
                            <div className="skill-name underline">{skill.name}</div>
                            <div className="skill-progress" style={{ width: `$100%` }}>{skill.name}</div>
                        </div>
                    </div>
                ))}
            </section>
            {/* </section> */}
            {/* <SkillsOnWeb /> */}
            {/* <SkillsOnMobile /> */}
            {/* <ChartTwo /> */}
        </section>
    );
}

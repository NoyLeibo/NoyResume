export function SkillsOnWeb() {
    const skills = [
        { name: 'JavaScript', level: 100, icon: '/img/js-icon.png' },
        { name: 'HTML5 & CSS3', level: 100, icon: '/img/html5-css3-icon.png' },
        { name: 'React', level: 100, icon: '/img/React-icon.png' },
        { name: 'Angular', level: 100, icon: '/img/angular-icon.png' },
        { name: 'Vue', level: 100, icon: '/img/vue-icon.png' },
        { name: 'Node.js', level: 100, icon: '/img/node-icon.png' },
    ];

    return (
        <section className='test'>
            <h2 className="underline">My-Skills</h2>
            <section className="skills-page">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-bar">
                        <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
                        <div className="skill-info">
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    );
}

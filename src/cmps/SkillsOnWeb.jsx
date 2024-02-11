import { useState } from 'react';
import { ChartOne } from './ChartOne';
import { ChartTwo } from './ChartTwo';

export function SkillsOnWeb() {
    const [clicked, setClicked] = useState(null);

    const handleClick = (id) => {
        setClicked(clicked === id ? null : id);
        setTimeout(() => {
            setClicked(null)
        }, 400);
        setClicked(clicked === id ? null : id);
    };
    return (
        <section className='test'>
            <section className="skills-page">
                {['angular-icon.png', 'node-icon.png', 'React-icon.png', 'vue-icon.png', 'html5-css3-icon.png', 'js-icon.png'].map((icon, index) => (
                    <img
                        key={icon}
                        src={`./public/img/${icon}`}
                        className={`${clicked === index ? 'clicked' : ''}`}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </section>
        </section>
        // {/* <ChartOne /> */}
        // {/* <ChartTwo /> */}
    );
}


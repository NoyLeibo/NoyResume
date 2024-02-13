import { useState } from 'react';
import { ChartOne } from './ChartOne';
import { ChartTwo } from './ChartTwo';
import angularIcon from '../../public/img/angular-icon.png';
import nodeIcon from '../../public/img/node-icon.png';

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
                {[angularIcon, nodeIcon, 'React-icon.png', 'vue-icon.png', 'html5-css3-icon.png', 'js-icon.png'].map((icon, index) => (
                    <img
                        key={icon}
                        src={`../public/img/${icon}`}
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


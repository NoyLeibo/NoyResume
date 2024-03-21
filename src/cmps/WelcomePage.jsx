import { TypeAnimation } from 'react-type-animation';

export function WelcomePage() {
    return (
        <section className="welcome-page whitetxt flex align-center">
            <div>
                <div className="fs30">Hello, my name is</div>
                <div className="fs60 bold underline">Noy Leibovich</div>
                <div className="typeanimation-home">
                    And I'm a {' '}
                    <TypeAnimation
                        sequence={["Programmer", 1000, "Developer", 1000]}
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
                {/* <button className="hireme-btn fs24">Contact me</button> */}
            </div>
            <img src="https://res.cloudinary.com/dysh9q6ir/image/upload/v1706788350/%D7%9C%D7%9C%D7%90_%D7%A9%D7%9D_ngeib7.png" className="avatar" />
        </section>
    )
}
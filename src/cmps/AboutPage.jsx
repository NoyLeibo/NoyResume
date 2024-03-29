import { TypeAnimation } from 'react-type-animation';
import { MovingComponent } from 'react-moving-text';

export function AboutPage() {
    const Letters = ['About me']

    const downloadFile = () => {
        window.open("https://api.cloudinary.com/v1_1/dysh9q6ir/image/download?api_key=967872262144161&attachment=true&audit_context=eyJhY3Rvcl90eXBlIjoidXNlciIsImFjdG9yX2lkIjoiNGVjZjhhMWRmNmQzM2FkN2VhNmE1NTM2ZTU0MTdmNGEiLCJ1c2VyX2V4dGVybmFsX2lkIjoiYTM3OTRhYTRjN2MzNmYzOWM4NjU4MGM3NjcyOTIzIiwidXNlcl9jdXN0b21faWQiOiJub3lsZWlibzcwQGdtYWlsLmNvbSIsImNvbXBvbmVudCI6ImNvbnNvbGUifQ%3D%3D&public_id=Noy_Leibovich_-_Full_Stack_Developer_13_1_evspsu&signature=9adb997e70bf93ea023e8e3c8aa57faa4d94bcb2&source=ml&target_filename=Noy_Leibovich_-_Full_Stack_Developer_13_1_evspsu&timestamp=1706965668&type=upload", "_blank");
        console.log('Download initiated');
    }


    return (
        <section className="about-page divider flex row align-center">
            <div className='fs22 about-details flex column'>
                {Letters.map((letter, index) =>
                    <MovingComponent
                        key={index}
                        className='fs32 underline bold'
                        type="effect3D"
                        duration="2000ms"
                        direction="normal"
                        timing="ease"
                        iteration="infinite"
                        fillMode="none">
                        {letter}
                    </MovingComponent>)}
                <p>I am Noy Leibovich,
                    <span className='about-me-web'>a full-stack {" "}
                        <TypeAnimation
                            className='underline'
                            sequence={["programmer,", 2000, "developer,", 2000]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </span>
                </p>
                <p className='about-me-mobile hidden'>a full-stack {" "}<TypeAnimation
                    className='underline'
                    sequence={["programmer,", 2000, "developer,", 2000]}
                    speed={50}
                    repeat={Infinity}
                /></p>
                <p>with proficiency in modern web technologies including JavaScript, React, Vue, Angular, Node.js, and Python. My coding journey is marked by a continuous learning process and applying technology to solve real-world problems.</p>
                <a className='downloadcv bold fs16' href="/files/NoyLeibovichResume.pdf" download="NoyLeibovichResume.pdf">My Reseume</a>
                {/* <button onClick={downloadFile} className='downloadcv bold fs16'>Download CV</button> */}
            </div>
        </section >
    )
}
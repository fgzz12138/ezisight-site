import Image from "next/image";
export default function About() {
    return (
        <section className="about">
            <div className="container about-inner">

                <div className="about-image">
                    <Image
                        src="/images/EzisightHero2.avif"
                        alt="About image"
                        fill
                        className="about-image-tag"
                    />
                </div>

                <div className="about-content">
                    <p className="section-label">ABOUT</p>
                    <h2>Smart Technology Solutions</h2>
                    <p>
                        Ultimate Sustainable Living provides practical and modern technology
                        solutions designed for commercial and residential spaces.
                    </p>
                    <p>
                        This React version will focus on recreating the layout, spacing, and
                        visual style first, then we can refine the content and image details
                        step by step.
                    </p>
                </div>
            </div>
        </section>
    );
}
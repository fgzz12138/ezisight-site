// src/components/AboutHighlight.tsx
export default function AboutHighlight() {
    return (
        <section className="about-highlight">
            <div className="container about-highlight-grid">
                <div className="about-highlight-left">
                    <h2>
                        Smart
                        <br />
                        Technology
                        <br />
                        Solutions
                    </h2>
                </div>

                <div className="about-highlight-right">
                    <p>
                        Ultimate sustainable living solution, a key player in the technology
                        industry, is part of a group of AI infrastructure companies.
                        Specializing in smart solutions for luxury homes, hotels, and
                        commercial buildings, Ultimate sustainable living solution
                        collaborates with global companies including TP-link, Gigabyte,
                        Supermicro, and Konke.
                    </p>

                    <p>
                        With a strong presence in Indonesia, Singapore, Malaysia and
                        Australia, Ultimate sustainable living solution leads the way in
                        cutting-edge AI Smart innovations.
                    </p>

                    <div className="about-highlight-card">
                        <div className="about-highlight-google">G</div>
                        <div className="about-highlight-stars">★★★★★</div>
                    </div>

                    <div className="about-highlight-socials">
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/usl_solutions/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 
      5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 1 1 0 10 5 5 0 0 1 
      0-10zm6.5-.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 
      2.4 0zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/profile.php?id=61577840746101"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.3v-2.9h2.3V9.8
      c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1
      c-1.1 0-1.4.7-1.4 1.4v1.7h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12z"/>
                            </svg>
                        </a>

                        {/* YouTube */}
                        <a
                            href="https://www.youtube.com/@UltimAIteSmartLiving"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                            <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 
      0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 
      0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.7.6 9.4.6 9.4.6s7.7 
      0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 
      12a31.7 31.7 0 0 0-.5-5.8zM9.8 15.5v-7l6 3.5-6 3.5z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
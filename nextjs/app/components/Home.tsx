import Image from "next/image";

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">Hello, I&apos;m</span>
          <h1 className="home__name">Anmol Aditya Sinha</h1>
          <h3 className="home__education">
            Senior Frontend Developer/Aspiring Architect
          </h3>
          <div className="home__buttons">
            <a download="" href="assets/pdf/Adi-resume-pdf.pdf" className="button button__ghost">
              Download CV
            </a>
            <a href="#about" className="button">About me</a>
          </div>
        </div>
        <div className="home__handle">
          <Image src="/assets/img/prof__pic2.jpeg" alt="" className="home__img" width={800} height={600} />
        </div>
        <div className="home__social">
          <a href="https://www.linkedin.com/in/iamsinhaanmol/" target="_blank" className="home__social__link">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://github.com/anmolsinha1793/" target="_blank" className="home__social__link">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.facebook.com/Anmol.Sinha9/" target="_blank" className="home__social__link">
            <i className="bx bxl-facebook-square"></i>
          </a>
        </div>
        <a href="#about" className="home__scroll">
          <i className="bx bx-mouse home__scroll__icon"></i>
          <span className="home__scroll__name">Scroll Down</span>
        </a>
      </div>
    </section>
  );
}

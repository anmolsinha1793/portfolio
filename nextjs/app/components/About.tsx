import Image from "next/image";

export default function About() {
  return (
    <section className="about section" id="about">
      <span className="section__subtitle">My Intro</span>
      <h2 className="section__title">About Me</h2>
      <div className="about__container container grid">
        <Image src="/assets/img/profpic.jpg" alt="" className="about__img" width={800} height={600} />
        <div className="about__data">
          <div className="about__info">
            <div className="about__box">
              <i className="bx bx-award about__icon"></i>
              <h3 className="about__title">Experience</h3>
              <span className="about__subtitle">8+ Years Work Experience</span>
            </div>
            <div className="about__box">
              <i className="bx bx-briefcase-alt about__icon"></i>
              <h3 className="about__title">Completed</h3>
              <span className="about__subtitle">5+ Projects</span>
            </div>
            <div className="about__box">
              <i className="bx bx-book-open about__icon"></i>
              <h3 className="about__title">Courses Completed</h3>
              <span className="about__subtitle">10+</span>
            </div>
          </div>
          <p className="about__description">
            Frontend developer but also experienced in backend and deployment, I created complex web applications as per the different requirements of the customers,
            I have years of experience and many customers/clients are happy and appreciated me well with the projects carried out.
          </p>
          <a href="#contact" className="button">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

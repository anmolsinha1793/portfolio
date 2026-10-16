import Image from "next/image";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <span className="section__subtitle">My abilities</span>
      <h2 className="section__title">My Experience</h2>
      <div className="skills__container container grid">
        {/* Frontend Developer card */}
        <div className="skills__content">
          <h3 className="skills__title">Frontend Developer</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <em className="skills__data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills__name">Javascript</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </em>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills__name">Angular</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills__name">React</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Front End Design card */}
        <div className="skills__content">
          <h3 className="skills__title">Front End Design</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data"><i className="bx bxs-badge-check"></i><div><h3 className="skills__name">UI</h3><span className="skills__level">Basic</span></div></div>
              <div className="skills__data"><i className="bx bxs-badge-check"></i><div><h3 className="skills__name">UX</h3><span className="skills__level">Basic</span></div></div>
              <div className="skills__data"><i className="bx bxs-badge-check"></i><div><h3 className="skills__name">Figma</h3><span className="skills__level">Basic</span></div></div>
            </div>
            <div className="skills__group">
              <div className="skills__data"><i className="bx bxs-badge-check"></i><div><h3 className="skills__name">Design Systems</h3><span className="skills__level">Intermediate</span></div></div>
              <div className="skills__data"><i className="bx bxs-badge-check"></i><div><h3 className="skills__name">Project Management</h3><span className="skills__level">Intermediate</span></div></div>
              <div className="skills__data"><i className="bx bxs-badge-check"></i><div><h3 className="skills__name">Git</h3><span className="skills__level">Advanced</span></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

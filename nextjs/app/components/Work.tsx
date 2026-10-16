import Image from "next/image";

export default function Work() {
  return (
    <section className="work section" id="work">
      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">My Work</h2>

      <div className="work__container container grid">
        <div className="work__content">
          <figure className="work__img">
            <Image src="/assets/img/work1.jpg" alt="" className="work__img" width={800} height={600} />
            <span className="work__data">Photoshop</span>
            <span className="work__title">Portfolio Site</span>
            <a href="work-details.html" className="work__button">
              <i className="bx bx-plus"></i>
            </a>
          </figure>
        </div>
        {/* Repeat additional project cards here as needed */}
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { Swiper } from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import { asset } from '@/lib/asset';
import { CONTAINER, SECTION, SECTION_SUBTITLE, SECTION_TITLE } from './styles';

const TESTIMONIALS = [
  {
    image: asset('/assets/img/testimonial1.png'),
    name: 'Gabe',
    description:
      'A really good job, with respect to such a complex application, specially when it had to be started from scratch and the first milestone got delivered within 6 months.',
  },
  {
    image: asset('/assets/img/testimonial2.png'),
    name: 'Sasha',
    description:
      'Great job with initial pick up of the project and good efforts in keeping the timelines under check and focused on delivering quality code by always keeping an eye on code standards such as sonarqube, tslint, eslint, jest.',
  },
  {
    image: asset('/assets/img/testimonial3.png'),
    name: 'Andrew',
    description:
      'Really appreciate the efforts in thinking out of the box with respect to the initial design of the application and giving in extra hours with designers to come up with a viable option.',
  },
];

export default function Testimonial() {
  const containerRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const swiper = new Swiper(container, {
      spaceBetween: 24,
      loop: true,
      grabCursor: true,
      pagination: {
        el: paginationRef.current ?? '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        576: { slidesPerView: 2 },
        768: { slidesPerView: 2, spaceBetween: 48 },
      },
    });

    return () => swiper.destroy(true, true);
  }, []);

  return (
    <section className={SECTION} id="testimonial">
      <span className={SECTION_SUBTITLE}>My clients say</span>
      <h2 className={SECTION_TITLE}>Testimonial</h2>

      <div
        className={`testimonial__container swiper ${CONTAINER} lg:w-[750px]`}
        ref={containerRef}
      >
        <div className="swiper-wrapper">
          {TESTIMONIALS.map((testimonial) => (
            <div
              className="testimonial__card swiper-slide mb-12 rounded-3xl bg-container px-6 py-5 light:shadow-[0_2px_16px_hsla(var(--second-hue),48%,8%,0.1)] lg:px-8 lg:py-6"
              key={testimonial.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mb-4 w-[60px] rounded-[3rem]"
              />
              <h3 className="mb-1 text-normal font-medium">
                {testimonial.name}
              </h3>
              <p className="text-small">{testimonial.description}</p>
            </div>
          ))}
        </div>
        <div className="swiper-pagination" ref={paginationRef}></div>
      </div>
    </section>
  );
}

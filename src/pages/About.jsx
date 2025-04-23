import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import CTA from '../components/CTA';
import { experiences, skills } from '../constants';
import styles from "../components/Hero.module.css";
import character from "../assets/images/myImage.png"
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hey, I'm <span className="blue-gradient_text font-semibold drop-shadow">Linh Pham</span> 👋
      </h1>

      <div className="mt-5 flex flex-col lg:flex-row gap-8 items-center justify-between text-slate-500">
        <div className="flex-1">
          <p>
            Software Engineer based in Sweden. 🚀🚀🚀 I just really like building things that feel good
            to use — whether it’s a snappy web app, a chill automation, or a side project that spiraled
            out of control.
            <br />
            Let’s make something absurdly great together. 🚀
          </p>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={character}
            alt="Hero image of me"
            className={styles.heroImg}
          />
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map(skill => (
            <div className="block-container w-20 h-20 relative group" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
              <div
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
                        bg-black text-white text-xs px-2 py-1 rounded 
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 z-10 whitespace-nowrap"
              >
                {skill.name}
              </div>
            </div>
          ))}
          <img
            src={(character)}
            alt="Hero image of me"
            className={styles.heroImg}
          />
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Chronicles of My Journey 💼</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p></p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium text-base" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constant';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Udan Pramodaya</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I’m a passionate and dedicated web developer with a strong focus on backend development while also being comfortable working across the full stack. I enjoy building reliable, efficient, and scalable web applications that deliver real value.

          I have experience working on both front-end and back-end technologies, developing responsive websites, handling server-side logic, and integrating APIs. I follow best practices to ensure clean, maintainable, and high-quality code.

          I’m continuously learning and improving my skills, exploring new technologies, and taking on challenges that help me grow as a developer. Whether it’s building a system from scratch or improving an existing one, I’m committed to delivering effective and practical solutions.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex items-center justify-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>My Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I have worked on various web development projects, where I gained hands-on experience in both front-end and back-end technologies. My work includes building responsive websites, developing user-friendly interfaces, and contributing to complete web solutions.

            I have a solid understanding of core web development principles and best practices. I am continuously learning and adapting to new technologies to improve my skills.

            Through my projects, I’ve developed a flexible skill set that allows me to approach different development challenges and create effective, practical solutions.
          </p>
        </div>
      </div>

      <div className='mt-12 flex'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>
              }
              iconStyle={{ background: experience.iconBg }}
              contentStyle={{
                borderBottom: `8px solid ${experience.iconBg}`,
                boxShadow: 'none'
              }}
            >
              <div>
                <h3 className='text-black text-xl font-poppins font-semibold'>
                  {experience.title}
                </h3>
                <p className='text-slate-500 font-medium font-base' style={{ margin: 0 }}>
                  {experience.company_name}
                </p>
              </div>

              <ul className='my-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className='text-slate-500 font-normal pl-1 text-sm'
                    style={{ margin: 0 }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <hr className='border-slate-200 mt-20' />

      <CTA />
    </section>
  );
};

export default About;
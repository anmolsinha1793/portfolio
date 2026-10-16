import { CONTAINER, SECTION, SECTION_SUBTITLE, SECTION_TITLE } from './styles';

type Skill = { name: string; level: string };
type SkillCard = { title: string; groups: Skill[][] };

const SKILL_CARDS: SkillCard[] = [
  {
    title: 'AI Engineer',
    groups: [
      [
        { name: 'Claude API', level: 'Intermediate' },
        { name: 'Prompt Engineering', level: 'Intermediate' },
        { name: 'Agentic AI Orchestration', level: 'Intermediate' },
      ],
      [
        { name: 'Model Context Protocol', level: 'Intermediate' },
        { name: 'AI Agents & Subagents', level: 'Intermediate' },
        { name: 'Azure AI Services', level: 'Intermediate' },
      ],
    ],
  },
  {
    title: 'Frontend Developer',
    groups: [
      [
        { name: 'HTML', level: 'Intermediate' },
        { name: 'CSS', level: 'Advanced' },
        { name: 'Javascript', level: 'Advanced' },
      ],
      [
        { name: 'Angular', level: 'Advanced' },
        { name: 'React', level: 'Basic' },
        { name: 'GIT', level: 'Intermediate' },
      ],
    ],
  },
  {
    title: 'Backend Developer',
    groups: [
      [
        { name: 'Node JS', level: 'Basic' },
        { name: 'GraphQl', level: 'Basic' },
        { name: 'Firebase', level: 'Basic' },
      ],
    ],
  },
  {
    title: 'Devops Developer',
    groups: [
      [
        { name: 'Docker and Kubernetes', level: 'Basic' },
        { name: 'Azure', level: 'Intermediate' },
        { name: 'Github Pages', level: 'Intermediate' },
      ],
      [{ name: 'Gitlab', level: 'Intermediate' }],
      [{ name: 'Vercel', level: 'Intermediate' }],
    ],
  },
];

export default function Skills() {
  return (
    <section className={`skills ${SECTION}`} id="skills">
      <span className={SECTION_SUBTITLE}>My abilities</span>
      <h2 className={SECTION_TITLE}>My Experience</h2>

      <div className={`grid gap-5 ${CONTAINER}`}>
        {SKILL_CARDS.map((card) => (
          <div
            className="rounded-[1.25rem] bg-container p-6 light:shadow-[0_2px_16px_hsla(var(--second-hue),48%,8%,0.1)] sm:px-16 sm:py-8"
            key={card.title}
          >
            <h3 className="mb-6 text-center text-normal font-medium text-first">
              {card.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 [@media(max-width:320px)]:gap-x-4">
              {card.groups.map((group, groupIndex) => (
                <div className="grid content-start gap-y-4" key={groupIndex}>
                  {group.map((skill) => (
                    <div className="flex gap-x-2" key={skill.name}>
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="text-normal font-medium leading-[18px] [@media(max-width:320px)]:text-small">
                          {skill.name}
                        </h3>
                        <span className="text-tiny">{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

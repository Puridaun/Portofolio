import { TechnicalSkill } from "./TechnicalSkills";

const IntroSection = () => {
  return (
    <>
      <section className="intro-section std-section">
        <h1>From landing pages to full apps.</h1>
        <p>
          I'm a front-end developer passionate about building responsive,
          accessible, and visually polished web experiences. Whether it's a
          landing page or a full web app, I focus on performance, detail, and
          delivering intuitive user interactions.
        </p>
      </section>
      <TechnicalSkill />
    </>
  );
};

export default IntroSection;

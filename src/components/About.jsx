import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
           Enthusiastic Student with superior skills
           in working in both team-based and independent 
           capacities. Bringing strong work ethic and excellent
           organizational skills to any setting.

          </p>
        </article>
      </div>
    </section>
  );
};
export default About;

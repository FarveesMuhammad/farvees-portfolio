const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p className="animate-slide-in-right">
            I'm a <span className="text-foreground font-semibold">self-taught web developer</span> who 
            learned everything independently—no tutors, no courses, just pure determination and curiosity. 
            This journey has shaped my ability to <span className="text-foreground font-semibold">learn any 
            technology quickly</span> and adapt to new challenges with confidence.
          </p>
          
          <p className="animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
            What sets me apart is my unique combination of technical skills and 
            <span className="text-foreground font-semibold"> exceptional communication abilities</span>. 
            I don't just build websites—I understand your business requirements, translate them into 
            working solutions, and communicate the process in a way that makes sense to you.
          </p>
          
          <p className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            My 6-month experience as a <span className="text-foreground font-semibold">sales employee 
            at Highlight Business Park</span> taught me invaluable lessons in convincing customers, 
            handling pressure, and building trust through effective communication. These skills translate 
            directly into my ability to work with clients on technical projects.
          </p>
          
          <p className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            My background in <span className="text-foreground font-semibold">computer hardware and 
            software servicing</span> further enhanced my problem-solving skills and ability to explain 
            complex technical concepts to non-technical people—a crucial skill when working on client projects.
          </p>
          
          <p className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            I hold a <span className="text-foreground font-semibold">BA in Economics from Calicut 
            University (2020–2023)</span>, with 2 back papers pending completion. Throughout 2024–2025, 
            I've been freelancing with friends on website projects, building everything from login systems 
            to admin panels, constantly improving my understanding of real-world client needs.
          </p>
          
          <p className="animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
            I excel at <span className="text-foreground font-semibold">understanding what clients truly 
            need</span>, building strong professional relationships, and delivering solutions that work. 
            Whether it's convincing a customer, solving a technical problem, or explaining a complex 
            feature in simple terms—I've got you covered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, Zap, Heart, Wrench } from "lucide-react";

const About = () => {
  const timeline = [
    { year: "2021", event: "Founded with a vision to democratize precision tracking" },
    { year: "2022", event: "Launched Base model - 10K units sold in first year" },
    { year: "2023", event: "Expanded to Pro series with eSIM technology" },
    { year: "2024", event: "Introduced Ultra with satellite connectivity" },
    { year: "2025", event: "Global expansion - Now available in 50+ countries" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "Every tracker undergoes rigorous testing. No compromises on quality.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge GNSS and connectivity tech.",
    },
    {
      icon: Heart,
      title: "Privacy",
      description: "Your data belongs to you. End-to-end encryption as standard.",
    },
    {
      icon: Wrench,
      title: "Repairability",
      description: "Built to last. Designed to be repaired, not replaced.",
    },
  ];

  const team = [
    { name: "Alex Chen", role: "Founder & CEO", initials: "AC" },
    { name: "Maria Santos", role: "CTO", initials: "MS" },
    { name: "James Park", role: "Head of Design", initials: "JP" },
    { name: "Sarah Kim", role: "VP Engineering", initials: "SK" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 grain">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="headline sheen mb-6">Craft. Precision. Trust.</h1>
          <p className="subhead">
            Born from a refusal to accept mediocrity. Built by engineers who demand excellence. 
            Trusted by those who refuse to compromise.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="card text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted leading-relaxed">
              We believe tracking technology should be accessible, reliable, and respectful of privacy. 
              Every product we build embodies these principles—combining precision engineering with 
              uncompromising quality. We're not just building trackers; we're building trust.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="sheen">Journey</span>
          </h2>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

            <div className="stack-8">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8`}
                >
                  <div className="hidden md:block flex-1" />
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary ring-4 ring-background" />
                  <div className="flex-1 card ml-8 md:ml-0">
                    <span className="text-2xl font-bold text-primary">{item.year}</span>
                    <p className="text-muted mt-2">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="sheen">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="card-hover text-center">
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet the <span className="sheen">Team</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="card-hover text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-crimson to-violet flex items-center justify-center text-2xl font-bold">
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="card text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted mb-6">
              Questions? Partnerships? Just want to say hi? 
              <br />
              We're here 24/7.
            </p>
            <a href="mailto:support@aegistrack.example" className="btn-primary">
              Contact Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

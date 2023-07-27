import React from 'react';
import Layout from '../src/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6">{"About Nosh Diary"}</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{"Company Overview"}</h2>
          <p className="text-lg">
            {"At Nosh Diary, we believe that nutrition is the foundation of overall well-being. Our mission is to empower individuals to make informed choices about their nutrition by leveraging the power of AI and advanced data analytics. We strive to bridge the gap between scientific research and practical application, creating an intuitive platform that revolutionizes the way we approach nourishment."}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{"Values"}</h2>
          <ul>
            <li className="mb-4">
              <h3 className="text-lg font-semibold">{"Innovation"}</h3>
              <p className="text-base">{"We are driven by a passion for innovation, constantly pushing boundaries and exploring new frontiers in the field of nutrition. We believe that technology has the potential to unlock remarkable insights and transform the way we nourish our bodies."}</p>
            </li>
            <li className="mb-4">
              <h3 className="text-lg font-semibold">{"Personalization"}</h3>
              <p className="text-base">{"We recognize that each individual has unique nutritional requirements. Our approach is rooted in personalization, ensuring that you receive tailored recommendations based on your specific needs, goals, and preferences. No two bodies are the same, and neither should be their nutrition plans."}</p>
            </li>
            <li className="mb-4">
              <h3 className="text-lg font-semibold">{"Transparency"}</h3>
              <p className="text-base">{"We are committed to transparency in everything we do. We provide clear, evidence-based information and strive to demystify the complexities of nutrition. Our aim is to empower you with knowledge, enabling you to make informed choices about your health."}</p>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default About;

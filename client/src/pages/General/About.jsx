import React from "react";

function AboutUs() {
    return (
        <h1 className="text-6xl md:text-8xl font-extrabold text-white">
           About US
        </h1>
    );
}

export default AboutUs;


// import heroBackground from '../assets/hero-background.jpg';
// import missionIcon from '../assets/mission-icon.png';
// import visionIcon from '../assets/vision-icon.png';
// import integrityIcon from '../assets/values/integrity.png';
// import innovationIcon from '../assets/values/innovation.png';
// import excellenceIcon from '../assets/values/excellence.png';
// import teamMember1 from '../assets/team/jane-doe.jpg';
// import teamMember2 from '../assets/team/john-smith.jpg';
// import teamMember3 from '../assets/team/emily-johnson.jpg';
// import testimonial1 from '../assets/testimonials/michael-brown.jpg';
// import testimonial2 from '../assets/testimonials/sarah-lee.jpg';
// import achievement1 from '../assets/achievements/achievement1.png';
// import achievement2 from '../assets/achievements/achievement2.png';
// import achievement3 from '../assets/achievements/achievement3.png';

// function AboutUs() {
//   return (
//     <div className="bg-gray-100">
//       {/* Hero Section */}
//       <section
//         className="relative bg-cover bg-center h-screen flex items-center justify-center"
//         style={{ backgroundImage: `url(${heroBackground})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-60"></div>
//         <div className="relative z-10 text-center text-white px-4">
//           <h1 className="text-5xl md:text-7xl font-bold">About Us</h1>
//           <p className="mt-4 text-xl md:text-2xl">Building Digital Solutions with Passion and Precision</p>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-16 px-4 md:px-8 bg-white">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Mission */}
//           <div className="flex flex-col items-center text-center md:text-left">
//             <img src={missionIcon} alt="Our Mission" className="w-16 h-16 mb-4" />
//             <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
//             <p className="text-gray-600">
//               To empower businesses by delivering innovative and effective digital solutions that drive growth and success. We strive to exceed our clients' expectations through dedication, creativity, and unparalleled service.
//             </p>
//           </div>
//           {/* Vision */}
//           <div className="flex flex-col items-center text-center md:text-left">
//             <img src={visionIcon} alt="Our Vision" className="w-16 h-16 mb-4" />
//             <h2 className="text-3xl font-semibold mb-2">Our Vision</h2>
//             <p className="text-gray-600">
//               To be a global leader in web development and digital marketing, recognized for our commitment to excellence, innovation, and customer satisfaction. We envision a future where every business, regardless of size, can harness the power of digital technology to achieve their goals.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="py-16 px-4 md:px-8 bg-gray-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Story</h2>
//           <p className="text-gray-700 leading-relaxed">
//             Founded in 2015, ModularWebWorx began as a small team of passionate developers and designers committed to creating exceptional digital experiences. Our journey started with a simple mission: to bridge the gap between businesses and their online potential.
//             <br /><br />
//             Over the years, we've grown into a dynamic agency, collaborating with clients across various industries—from startups seeking their first digital footprint to established enterprises aiming to revamp their online presence. Our success is driven by our unwavering dedication to innovation, our collaborative spirit, and our relentless pursuit of excellence.
//             <br /><br />
//             Today, ModularWebWorx stands as a testament to what can be achieved when creativity meets technology. We're proud of our journey and excited for what the future holds as we continue to empower businesses to thrive in the digital landscape.
//           </p>
//         </div>
//       </section>

//       {/* Team Members */}
//       <section className="py-16 px-4 md:px-8 bg-white">
//         <div className="max-w-6xl mx-auto text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-semibold">Meet Our Team</h2>
//           <p className="text-gray-600 mt-4">A diverse group of professionals dedicated to delivering the best for our clients.</p>
//         </div>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Team Member 1 */}
//           <TeamMember
//             image={teamMember1}
//             name="Jane Doe"
//             position="Chief Executive Officer"
//             bio="Jane leads our team with over a decade of experience in digital marketing and business development. Her vision and leadership have been instrumental in driving the company's growth and success."
//           />
//           {/* Team Member 2 */}
//           <TeamMember
//             image={teamMember2}
//             name="John Smith"
//             position="Lead Developer"
//             bio="John is our technical guru, specializing in full-stack development and innovative web solutions. His expertise ensures that our projects are built on robust and scalable platforms."
//           />
//           {/* Team Member 3 */}
//           <TeamMember
//             image={teamMember3}
//             name="Emily Johnson"
//             position="Creative Director"
//             bio="Emily brings creativity and design excellence to our projects, ensuring they are not only functional but also aesthetically pleasing. Her keen eye for detail elevates our work to new heights."
//           />
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-16 px-4 md:px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-semibold">Our Core Values</h2>
//           <p className="text-gray-600 mt-4">The principles that guide us in everything we do.</p>
//         </div>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Value 1 */}
//           <div className="flex flex-col items-center text-center">
//             <img src={integrityIcon} alt="Integrity" className="w-16 h-16 mb-4" />
//             <h3 className="text-xl font-semibold">Integrity</h3>
//             <p className="text-gray-600 mt-2">
//               We uphold the highest standards of integrity in all our actions. Trust and honesty are at the core of our relationships with clients and partners.
//             </p>
//           </div>
//           {/* Value 2 */}
//           <div className="flex flex-col items-center text-center">
//             <img src={innovationIcon} alt="Innovation" className="w-16 h-16 mb-4" />
//             <h3 className="text-xl font-semibold">Innovation</h3>
//             <p className="text-gray-600 mt-2">
//               We embrace creativity and strive for continuous improvement. Our innovative approach ensures we deliver cutting-edge solutions tailored to our clients' needs.
//             </p>
//           </div>
//           {/* Value 3 */}
//           <div className="flex flex-col items-center text-center">
//             <img src={excellenceIcon} alt="Excellence" className="w-16 h-16 mb-4" />
//             <h3 className="text-xl font-semibold">Excellence</h3>
//             <p className="text-gray-600 mt-2">
//               We are committed to delivering superior products and services. Our dedication to excellence drives us to exceed expectations in every project we undertake.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Milestones/Achievements */}
//       <section className="py-16 px-4 md:px-8 bg-white">
//         <div className="max-w-6xl mx-auto text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-semibold">Our Achievements</h2>
//           <p className="text-gray-600 mt-4">Celebrating milestones that define our journey.</p>
//         </div>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Achievement 1 */}
//           <div className="flex flex-col items-center text-center">
//             <img src={achievement1} alt="Achievement 1" className="w-16 h-16 mb-4" />
//             <h3 className="text-xl font-semibold">100+ Projects Completed</h3>
//             <p className="text-gray-600 mt-2">
//               Successfully delivered over 100 web development and digital marketing projects for a diverse range of clients worldwide.
//             </p>
//           </div>
//           {/* Achievement 2 */}
//           <div className="flex flex-col items-center text-center">
//             <img src={achievement2} alt="Achievement 2" className="w-16 h-16 mb-4" />
//             <h3 className="text-xl font-semibold">Award-Winning Agency</h3>
//             <p className="text-gray-600 mt-2">
//               Recognized with multiple industry awards for excellence in web design, development, and digital marketing strategies.
//             </p>
//           </div>
//           {/* Achievement 3 */}
//           <div className="flex flex-col items-center text-center">
//             <img src={achievement3} alt="Achievement 3" className="w-16 h-16 mb-4" />
//             <h3 className="text-xl font-semibold">Trusted by 500+ Clients</h3>
//             <p className="text-gray-600 mt-2">
//               Built long-term relationships with over 500 satisfied clients who rely on us for their ongoing digital needs.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 px-4 md:px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-semibold">What Our Clients Say</h2>
//           <p className="text-gray-600 mt-4">Hear from those who have partnered with us.</p>
//         </div>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Testimonial 1 */}
//           <Testimonial
//             image={testimonial1}
//             name="Michael Brown"
//             title="CEO, Tech Innovators"
//             feedback="ModularWebWorx transformed our online presence. Their team is professional, creative, and highly skilled. We've seen a significant increase in our website traffic and customer engagement since partnering with them."
//           />
//           {/* Testimonial 2 */}
//           <Testimonial
//             image={testimonial2}
//             name="Sarah Lee"
//             title="Marketing Director, Creative Solutions"
//             feedback="Their innovative approach and attention to detail exceeded our expectations! ModularWebWorx delivered a website that not only looks stunning but also performs exceptionally well. Highly recommended!"
//           />
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 px-4 md:px-8 bg-pink-500 text-white text-center">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-semibold mb-4">Join Us on Our Journey</h2>
//           <p className="text-lg md:text-xl mb-6">
//             Whether you're looking to start a new project or need assistance with an existing one, we're here to help. Let's create something amazing together.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block px-6 py-3 bg-white text-pink-500 rounded-lg font-semibold hover:bg-gray-200 transition"
//           >
//             Contact Us Today
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default AboutUs;

// /* 
//   Sub-Components: TeamMember and Testimonial
//   These are defined within the same file for simplicity. 
//   You can extract them into separate files if desired.
// */

// const TeamMember = ({ image, name, position, bio }) => (
//   <div className="bg-gray-100 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
//     <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
//     <h3 className="text-xl font-semibold">{name}</h3>
//     <p className="text-gray-600">{position}</p>
//     <p className="text-gray-600 mt-2">{bio}</p>
//   </div>
// );

// const Testimonial = ({ image, name, title, feedback }) => (
//   <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex">
//     <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4 object-cover" />
//     <div>
//       <h3 className="text-xl font-semibold">{name}</h3>
//       <p className="text-gray-600">{title}</p>
//       <p className="text-gray-600 mt-2">"{feedback}"</p>
//     </div>
//   </div>
// );

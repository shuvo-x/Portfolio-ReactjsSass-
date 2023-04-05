import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Md.Shuvo"}
          feedback={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
        />

        <TestimonialCard
          name={"Md. Ronni"}
          feedback={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          }
        />

        <TestimonialCard
          name={"Mst Preeti"}
          feedback={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
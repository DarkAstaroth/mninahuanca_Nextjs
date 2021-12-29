import React from "react";

const SkillCarousel = () => {
  const langs = [
    { id: "1", name: "react" },
    { id: "2", name: "redux" },
    { id: "3", name: "gatsby" },
    { id: "4", name: "html5" },
    { id: "5", name: "css3" },
    { id: "6", name: "javascript" },
    { id: "7", name: "sass" },
    { id: "8", name: "bootstrap" },
    { id: "9", name: "flutter" },
    { id: "10", name: "mongodb" },
    { id: "11", name: "nodejs" },
  ];
  return (
    <>
      <section className="wrapper bg-light wrapper-border">
        <div className="container py-8 py-md-8">
          <div
            className="carousel owl-carousel clients mb-0"
            data-margin="30"
            data-loop="true"
            data-dots="false"
            data-autoplay="true"
            data-autoplay-timeout="3000"
            data-responsive='{"0":{"items": "2"}, "768":{"items": "4"}, "992":{"items": "5"}, "1200":{"items": "6"}, "1400":{"items": "7"}}'
          >
            {langs.map((e) => (
              <div  key={e.id} className="item px-5">
                <img src={`img/devIcons/${e.name}.svg`} alt="" width={50} height={50} />
              </div>
            ))}
            
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillCarousel;

import React from "react";

const IconCards = () => {
  const iconCards = [
    {
      icon: "fa-solid fa-gas-pump text-primary px-2",
      title: "Reliability",
      paragraph:
        "CloudNiine ensures that users can count on their booked gas slots being available when they arrive. Our system is designed to minimize overbooking and guarantee.",
    },
    {
      icon: "fa-regular fa-circle-up text-primary px-2",
      title: "Efficiency",
      paragraph:
        "Our streamlined booking process and advanced scheduling algorithms ensure that users spend less time waiting and more time on the road.",
    },
    {
      icon: "fa-solid fa-headset text-primary px-2",
      title: "Customer Support",
      paragraph:
        "CloudNiine offers real-time updates on gas station availability, wait times, and booking confirmations. This ensures users have the most accurate information.",
    },
    {
      icon: "fa-solid fa-shield text-primary px-2",
      title: "Safety and Hygiene",
      paragraph:
        "CloudNiine partners with gas stations that adhere to the highest safety and hygiene standards. This ensures a clean and secure environment for users.",
    },
    {
      icon: "fa-solid fa-globe text-primary px-2",
      title: "Wide Network",
      paragraph:
        "With a broad network of partnered gas stations, CloudNiine offers extensive coverage, ensuring users can find and book slots at convenient locations.",
    },
    {
      icon: "fa-solid fa-indian-rupee-sign text-primary px-2",
      title: "Transparent Pricing",
      paragraph:
        "CloudNiine offers transparent pricing, with no hidden fees or unexpected charges. Users can trust that the price they see is the price they pay.",
    },
  ];

  return (
    <div className="container mt-5 pt-5 mb-5 pb-5" id="service">
      <div className="row align-items-center justify-content-center">
        <div className="pb-5">
          <p className="display-6 text-center p-1 fw-normal text-violet">
            OUR STRENGTHS
          </p>
          <p className="text-center fs-5 fw-medium text-violet">
            Explore Our Key Strengths and Advantages
          </p>
        </div>
        {iconCards.map((element, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card shadow-lg h-100">
              <div className="card-body">
                <div className="card-title">
                  <p className="fs-3">
                    <i className={element.icon}></i> {element.title}
                  </p>
                </div>
                <hr />
                <p>{element.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconCards;

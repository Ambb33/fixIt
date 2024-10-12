"use client"
import React, { useState } from "react";
import styles, { layout } from "@/styles/style";
import { features, businessText } from "@/constants";
import Image from "next/image";
import { FeatredCardProps } from "@types";
import ContactWrapper from "./ContactWrapper";

interface FeatureCardProps extends FeatredCardProps {
  index: number;
}

const FeaturesCard: React.FC<FeatureCardProps> = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
      <Image src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px]">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{content}</p>
    </div>
  </div>
);

const Business: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <section id="features" className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {businessText.heading}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {businessText.paragraph}
        </p>
        <ContactWrapper/>
        {isVisible && (
          <div>
            <p>Your toggled content here</p>
          </div>
        )}
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeaturesCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;

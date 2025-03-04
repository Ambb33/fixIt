import { card } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Image from "next/image";
import ContactWrapper from "./ContactWrapper";
import { cardDealText } from "@/constants";

const CardDeal: React.FC = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        {cardDealText.heading}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {cardDealText.paragraph}
      </p>
      <ContactWrapper />
    </div>
    <div className={layout.sectionImg}>
      <Image
        src={card}
        alt="Credit card illustration"
        className="w-[100%] h-[100%]"
        layout="responsive" // Optionally use responsive layout for better control
      />
    </div>
  </section>
);

export default CardDeal;

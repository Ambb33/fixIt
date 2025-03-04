import { bill } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Image from "next/image";
import { billingText } from "@/constants";

const Billing: React.FC = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Image
        src={bill}
        alt="Billing illustration"
        className="w-[100%] h-[100%] relative z-[5]"
        loading="lazy"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} flex-col`}>
        {billingText.heading}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {billingText.paragraph}
      </p>
      {/* Uncomment when needed */}
      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Image
          src={apple}
          alt="Apple Store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <Image
          src={google}
          alt="Google Play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div> */}
    </div>
  </section>
);

export default Billing;

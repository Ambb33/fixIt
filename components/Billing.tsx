import { apple, bill, google } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Image from "next/image";
const Billing: React.FC = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Image
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Seamlessly access your <br className="sm:block hidden" />
        tech support & repair services.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Experience unparalleled service with our expert team. We specialize in providing comprehensive
        tech support tailored to your needs. From troubleshooting to repairs, we ensure that your
        technology runs smoothly, allowing you to focus on what matters most.
      </p>
      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Image
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <Image
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div> */}
    </div>
  </section>
);

export default Billing;

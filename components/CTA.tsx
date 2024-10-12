import styles from "@/styles/style";
import ToggleButtonContact from "./ToggleButton";
import ContactWrapper from "./ContactWrapper";
const CTA: React.FC = () => (
    <section id="CTA"
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>
                Solve It with Fix It!
            </h2>
            <div className={`${styles.paragraph}  mt-5`}>
                <p>Need help with tech issues? </p>
                <p>We've got you covered! Our expert team is here to keep you connected and solve any technical problems effortlessly. Don’t waste another moment—reach out to us now.</p>
                <p> Fill in the contact form, and we'll get back to you with the support you need.</p>
                <p> Your seamless tech experience starts here!
                </p>
            </div>
        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <ContactWrapper />
        </div>
    </section>
)

export default CTA;
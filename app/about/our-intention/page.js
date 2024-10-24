import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/about-us-content/AboutUs.module.css';
import Image from "next/image";


export default function OurIntensions() {
    return (
        <>
            <div className={styles.topic}>
                <h1>OUR INTENTIONS
                </h1>
            </div>

            <div className={styles.content}>
                <p className={styles.indent}><span className={styles.fairBoldText}>"WE BELIEVE IN THE POWER OF INTENTION."</span> We think your intentions can make a difference. Finding peace inside yourself in today’s world is not easy. By encourage a mindful way to life, we can take control of our power and act in ways that reflect our deepest values. Intentional living is more than just a concept; it's a practice of being aware in setting up life with purpose, joy, and fulfillment. It involves setting clear goals, making careful choices, and encouraging a deep connection between mind, body, and soul together as one entity. When we allow ourselves to be intentional with our actions, then this enables us to discover who we really are; leading lives that have purpose at their core. </p>
                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/our-intention/our-intention1.jpg"
                        alt="Description of image"
                        width={800}
                        height={500}
                        className={styles.centerImage}
                    />
                </div>
                <p className={styles.indent}>Our belief stands on this phrase <span className={styles.fairBoldBigText}>“We believe in the importance of community”.</span> Human beings are naturally social animals, and a strong sense of connection and belonging is associated with our overall well-being. We create a space where individuals can grow by upholding a supportive and inclusive community. Acknowledging our shared humanity and practicing acts of kindness, we build bridges that create understanding and empathy. Together, we can grow a world full of compassion, support, and mutual respect that makes everyone feel valued and connected. </p>
            </div>

            <DefaultFooter />
        </>
    );
}

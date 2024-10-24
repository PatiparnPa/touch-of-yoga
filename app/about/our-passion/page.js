import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/about-us-content/AboutUs.module.css';
import Image from "next/image";

export default function SizeGuide() {
    return (
        <>
            <div className={styles.topic}>
                <h1>OUR PASSION</h1>
            </div>

            <div className={styles.content}>
                <p className={styles.indent}><span className={styles.fairBoldText}>WE ARE PROUD TO PRESENT</span> the TouchofYoga collections after a long journey of design exploration and concept visualization. Each piece was created with the souls of our team, and we took calculated risks to stand out from the ordinary.</p>
                <p className={styles.indent}>We dared to be different; we chose a different path by defying the conventional and making this jewelry more than a simple accessory.</p>

                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/about/our-passion/our-passion1.png"
                        width={500}
                        height={350}
                        className={styles.image}
                    />
                </div>
                <p><span className={styles.fairText}>More than normal accessories,</span>these can be your buddies on the path of yoga-informed with meaning, and light up a sense of individuality. We hope that in our collection, you'll find a piece that speaks to your soul, evokes emotions, and empowers you to express yourself uniquely.
                    Every design is filled with true passion and dedication, we do hope you can feel the positive energy in every piece we create. More than that, we want you to take up yoga and self-discovery and have a TouchofYoga as a partner on that journey.</p>


                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/our-passion/our-passion2.png"
                        alt="Description of image"
                        width={800}
                        height={400}
                        className={styles.centerImage}
                    />
                </div>

                <p className={styles.centerText}>TouchofYoga collections are waiting for you.<br></br>
                    Explore, discover, and express yourself.</p>
                <p className={styles.centerBoldText}>Welcome to a world of yoga jewelry designed with meaning in mind.</p>


            </div>
            <DefaultFooter />
        </>
    );
}

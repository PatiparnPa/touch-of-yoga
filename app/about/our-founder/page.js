import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/about-us-content/AboutUs.module.css';
import Image from "next/image";

export default function OurFounder() {
    return (
        <>
            <div className={styles.topic}>
                <h2>Our Founder</h2>
                <h1>MEET OUR BRAND FOUNDER</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/our-founder/our-founder1.jpg"
                        alt="Description of image"
                        width={800}
                        height={461}
                        className={styles.centerImage}
                    />
                </div>

                <p className={styles.indent}><span className={styles.boldText}>“SYFON” IS HER NAME,</span> a Thai translation for "falling rain". In California's sun, she became known as <span className={styles.boldTextBigBig}>"Poppy",</span> the state flower. Her life has always been a mixture of East and West, a blend of Thai and Chinese culture. She was surrounded by the rich traditions of Eastern philosophy and the ancient wisdom of India that were part of her background.</p>

                <h1>Beyond Medicine, Seeking a Deeper Path</h1>
                <p className={styles.indent}>Her yoga journey began in 2007 when she was a high-ranking executive of an international bank in Thailand. The stress from her very demanding career led to persistent neck and back pain, which was like the mental stress she was carrying. Needing relief, so she went to a chiropractor for help and started a difficult healing journey. For five years, she went to the hospital every day, which showed how stubborn her illness was.</p>

                <h1>A Path to Healing, Yoga for Stress and Pain</h1>
                <p className={styles.indent}>One day, a little hope turned into a great hope.  She met a chiropractor who was also a yoga teacher—a person who analyzed symptoms deeper than just the physical imbalance in her. He introduced her to yoga, a practice that promised not just physical healing, but a path towards wholeness</p>

                <div className={styles.rightImageTextContainer}>
                    <Image
                        src="/images/about/our-founder/our-founder2.jpg"
                        width={300}
                        height={200}
                        className={styles.image}
                    />
                </div>
                <p className={styles.indent}>As she started with the practice of Asana, her physical pain slowly decreased. Like many of us, her first reason for practicing was more of the body than the mind.  But as she went deep into the practice, she realized that yoga is about more than just doing poses, and she also discovered into its philosophical and spiritual parts of yoga. With the help of an amazing yoga teacher, she practiced for more than ten years and ended up becoming a practitioner and a respectable teacher.</p>
                <div className={styles.divide}></div>

                <h1>Sharing Yoga's Essence</h1>
                <p className={styles.indent}>She also saw, however, that the real meaning of yoga was being lost, especially as it became more popular worldwide. The internet and social media, while spreading awareness, often presented yoga as just an exercise, fashion trends, and business, ignoring its deep meaning and purpose.</p>

                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/our-founder/our-founder3.jpg"
                        alt="Description of image"
                        width={800}
                        height={800}
                        className={styles.centerImage}
                    />
                </div>
                <p className={styles.indent}>This understanding made Poppy deeply concerned. She questioned why was this powerful gift from the East being undervalued and misunderstood? This idea stayed in her mind for years, making her want to share the true richness of yoga with the world.</p>

                <div className={styles.fairCenterText}>
                    <i className={styles.fairItalicBigCenter}>"I realized there was so much more to yoga than just physical benefits,"</i>

                </div>

                <p>She reflects, her eyes bright with the wisdom she learned over the years.</p>

                <h1>The Birth of TouchofYoga</h1>
                <div className={styles.nospace}>
                    <p className={styles.indent}>In 2012, her wish became a reality. Poppy started looking for unique jewelry that would reflect her inner journey and connect with her deep love for yoga. She browsed through the internet and local shops, but nothing seemed really genuine, speaking to her spirit. Her frustration and passion for yoga together created a spark of inspiration.</p>
                    <p className={styles.indent}>It was then that the idea for TouchofYoga was born. This was more in response to a need—to bridge the gap between ancient wisdom and the present modern world. She imagined jewelry that wasn't just a decorative accessory, but a reminder of the true meaning of yoga and how everything is connected.</p>
                </div>

                <h1>Jewelry with Meaning</h1>
                <div className={styles.fairCenterText}>
                    <i className={styles.fairItalicBigCenter}>"I wanted to create something that would help people realize the true values of yoga. Jewelry, like yoga, is not just about the physical. It's about connecting with ourselves, with others, with the world around us."</i>
                </div>

                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/about/our-founder/our-founder4.jpg"
                        width={400}
                        height={400}
                        className={styles.image}
                    />
                </div>
                <div className={styles.nospace}>
                    <p className={styles.indent}>While her vision for TouchofYoga goes beyond creating just beautiful jewelry, Poppy wants to create a community, a space for people to connect with the real essence of yoga, taking advantage of all it has to offer. She believes that jewelry, like yoga, can help people discover themselves, grow, and change.</p>
                    <h1>Keep in touch and let's spread the word!</h1>
                </div>
                <div className={styles.divide}></div>

                <div className={styles.centerText}>
                    <p><span className={styles.italicBold}>"Yoga means united," </span> she says <br></br>Together, let's go beyond the physical parts of yoga and jewelry, focusing on our souls. Let's work together to find the true meaning of yoga, enjoy everything yoga and jewelry have to offer, and make our lives better. TouchofYoga represents the spirit of yoga and connects us to our community.</p>
                </div>

                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/our-founder/our-founder5.png"
                        alt="Description of image"
                        width={800}
                        height={461}
                        className={styles.centerImage}
                    />
                </div>
                <div className={styles.centerText}>
                    <p><span className={styles.italicBold}>"I wish TouchofYoga can touch your heart" </span> Poppy said.</p>
                </div>

            </div >
            <div className={styles.topic}>
                <br></br>
                <h2>Let's join us, the TouchofYoga community.</h2>
            </div>
            <DefaultFooter />
        </>
    )
}


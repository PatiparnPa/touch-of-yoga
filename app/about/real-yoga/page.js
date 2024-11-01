import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/about-us-content/AboutUs.module.css';
import Image from "next/image";

export default function YogaJewelry() {
    return (
        <>
            <div className={styles.topic}>
                <div className={styles.H3}>Our Philosophy</div>
                <h2>REAL YOGA</h2>
            </div>

            <div className={styles.content}>
                <p className={styles.indent}><span className={styles.boldText}>WE'RE A GROUP OF PEOPLE</span> who believe that real success isn't about getting ahead, but about caring for your <span className={styles.fairMediumText}>mind, body, and soul.</span> We believe quite strongly that yoga can change your life, not just as an exercise, but as a way to live a meaningful and peaceful life.</p>
                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/real-yoga/real-yoga1.jpg"
                        alt="Description of image"
                        width={600}
                        height={400}
                        className={styles.centerImage}
                    />
                </div>
                <p><span className={styles.fairBoldMediumText}>We believe that true happiness comes from within:</span> No one can ever buy happiness or achieve it through external means. It is a mental activity built up through self-awareness, mindfulness, and a conscious connection with the inner self. We believe that yoga is a powerful tool to gain inner calmness and happiness as it focuses on breathing, dynamic movements, as well as on meditative practice.</p>
                <p><span className={styles.fairBoldMediumText}>We believe in the transformative power of yoga:</span> Yoga is a journey of self-discovery, inner peace, and a way of living that encourages us to connect with our bodies, minds, and spirits. More than just physical postures; yoga is really all about what happens off the mat, yoga helps us find balance, harmony, and well-being, which spills out into our relationships with others and the world around us.</p>

                <i className={styles.fairBoldMediumText}>“The path to self-discovery can be challenging, but the rewards are worth it”</i>
                <p className={styles.rightText}>- Gautama Buddha</p>

                <p className={styles.indent}>By paying attention to your body and breath, a person is able to go deep inside themselves and release their tension, stress, and negative thoughts. Essentially, Yoga is a journey of self-discovery. It's a space for self-reflection, where you can be kind to yourself and learn to accept who you are.</p>
                <p className={styles.indent}>Yoga offers a philosophy of life beyond the physical practice. The ancient wisdom in yoga can help you navigate life's challenges with grace and peace. From the ethical guidelines called <span className={styles.boldText}>“Yamas”</span>, to the proper observances, called <span className={styles.boldText}>“Niyamas”</span>, you can learn to be honest, compassionate, and self-disciplined through yoga.</p>


                <div className={styles.nospace}>
                    <div className={styles.leftImageTextContainer}>
                        <Image
                            src="/images/about/real-yoga/real-yoga2.jpg"
                            width={300}
                            height={150}
                            className={styles.image}
                        />
                    </div>
                    <p className={styles.indent}>Ultimately, yoga takes you on an incredible journey towards finding inner peace. It blends the body, mind, and spirit, leading to a deep feeling of calm and centeredness. It provides a basis for life filled with flexibility, happiness, and an inner peace connection with the world around us.</p>
                    <p className={styles.indent}>As yoga becomes increasingly popular in the world, people often misunderstand or oversimplify its true meaning. Most people only know yoga as a type of exercise or a trendy activity. They miss out on its deep teachings and principles, as well as all the other benefits it offers besides physical fitness.”</p>
                    <div className={styles.divide}></div>
                </div>

                <div className={styles.rightImageTextContainer}>
                    <Image
                        src="/images/about/real-yoga/real-yoga3.png"
                        width={300}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <p className={styles.indent}>An in-depth understanding of yoga can fully activate its power to transform lives and enhance well-being. This approach also empowers communities and contributes to a better world.</p>
                <i className={styles.fairMediumText}> “Finding a sense of community with like-minded individuals who value authenticity is more important than ever.”</i>
                <div className={styles.divide}></div>
                <p><span className={styles.fairBoldBigText}>We believe that every action, no matter how small, can create a ripple effect:</span>We are just one drop in this endless ocean of yoga, but we believe that even a single drop can create a ripple effect, inspiring others to embrace the transformative power of this ancient practice. Together, we can create a world where peace, purpose, and compassion drive people’s actions.</p>
                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/real-yoga/real-yoga4.png"
                        alt="Description of image"
                        width={600}
                        height={400}
                        className={styles.centerImage}
                    />
                </div>
                <p className={styles.indent}>Let's explore deeper into true core of yoga together, embracing its powerful teachings and principles. It will open up its transformational potential for personal growth, well-being, and empower our communities to make a difference towards creating a better world.</p>
<div className={styles.fairCenterText }>
    <p className={styles.fairBoldText}>Join us in exploring and practicing the whole range of yoga,<br></br>
Not only the physical but also to create a complete and mindful life.
</p>
</div>
            </div>


            <DefaultFooter />
        </>
    )
}
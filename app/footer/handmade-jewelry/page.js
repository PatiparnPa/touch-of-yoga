import styles from '/app/styles/footer-content/NormalFooter.module.css';
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SizeGuide() {
    return (
        <>
            <div className={styles.topic}>
                <h2>Need to know</h2>
                <h1>HANDMADE JEWELRY</h1>
            </div>

            <div className={styles.content}>
                <h1>Finding the Personal Touch</h1>
                <p className={styles.indent}><span className={styles.boldText}>IN TODAY'S FAST-PACED WORLD</span>, consumers are increasingly seeking products that are unique, personalized, and made with care. Handmade jewelry is becoming more popular because it's unique compared to factory-made jewelry.</p>
                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/footer-content/handmade-jewelry/handmade-jewelry1.jpg" // Update with your image path
                        alt="Description of image"
                        width={700} // Adjust width as needed
                        height={1000} // Adjust height as needed
                        className={styles.centerImage}
                    />
                </div>

                <h1>The Growing Use of "Handmade" in Advertising</h1>
                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/footer-content/handmade-jewelry/handmade-jewelry2.jpg" // Update with your image path
                        alt="Description of image"
                        width={400} // Adjust width as needed
                        height={300} // Adjust height as needed
                        className={styles.image}
                    />

                    <p><span className={styles.boldText}>WITH THE INCREASING INTEREST</span> in handmade jewelry, it's not surprising that a few brands have now begun to 'market' their mass-produced products as "handmade."  This can be confusing for customers who are looking for truly unique and ethically produced pieces.</p>
                    <p>Other brands might claim ‘handmade’ to convey that their jewelry is crafted by skilled artisans whereas in fact; it is manufactured by machines. Others may claim that their jewelry is "handmade" because it is put together manually at some point even though machines do almost all of the work. </p>
                </div>
                <div className={styles.divide}></div>

                <h1>Why is handmade jewelry so popular lately?</h1>
                <p className={styles.indent}>Handmade jewelry combines special skills, personal touches, and ethical choices, making it different from mass-produced pieces.</p>
                <h2>Here are some main reasons why people prefer handmade jewelry:</h2>
                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/footer-content/handmade-jewelry/handmade-jewelry3.jpg" // Update with your image path
                        alt="Description of image"
                        width={400} // Adjust width as needed
                        height={350} // Adjust height as needed
                        className={styles.image}
                    />

                    <p><span className={styles.boldText}>Uniqueness:</span> Each handmade piece is a one-of-a-kind creation, showing the artist’s personal style and abilities.  Thus, every handmade piece of jewelry is a very personal and special one.</p>
                    <p><span className={styles.boldText}>Quality Materials and Techniques:</span> Handmade jewelry usually uses higher-quality materials and traditional techniques aren't common in big factories. This attention to detail can result in a piece that is both beautiful and durable.</p>
                    <p><span className={styles.boldText}>Fair and Green Making:</span>Handmade jewelry can be produced ethically, following rules that help workers and use materials in a way that doesn't hurt the planet.  This makes sure the people making the jewelry are treated well and the environment is protected.</p>
                    <p><span className={styles.boldText}>Worth Keeping:</span>Handmade jewelry—especially those pieces by famous artisans or including rare or unique materials—can be considered good investments. Their unique qualities and craftsmanship can make them more valuable as time goes by.</p>

                </div>
                <div className={styles.divide}></div>

                <div className={styles.rightImageTextContainer}>
                    <Image
                        src="/images/footer-content/handmade-jewelry/handmade-jewelry4.jpg" // Update with your image path
                        alt="Description of image"
                        width={400} // Adjust width as needed
                        height={350} // Adjust height as needed
                        className={styles.image}
                    />

                    <p><span className={styles.boldText}>The relationship with the Artist can be defined as Storytelling:</span>Handmade jewelry often comes with a story or the identity of the artisan behind the piece. This connection can make the jewelry more meaningful and valuable. Also, several makers of handmade jewelry offer the ability to connect directly with the artist, learn how they make their pieces, and even ask for a custom design.</p>

                </div>
                <div className={styles.divide}></div>

                <h1>Identifying Handcrafted Jewelry</h1>
                <p className={styles.indent}>To prevent being misled by false advertising, consumers should know how to tell the difference between handmade and mass-produced jewelry. <span className={styles.boldTextBig}>Here are some important points to look for;</span></p>
                <p><span className={styles.boldTextBig}>Unique Character:</span> Handmade jewelry usually has a unique look and individual style that is hard to copy with mass production methods. Pay attention to small imperfections or differences in the design, materials, or finish, such as:</p>

                <ul className={styles.discList}>
                    <div className={styles.rightImageTextContainer}>
                        <Image
                            src="/images/footer-content/handmade-jewelry/handmade-jewelry5.jpg" // Update with your image path
                            alt="Description of image"
                            width={400} // Adjust width as needed
                            height={350} // Adjust height as needed
                            className={styles.image}
                        />
                        <li><span className={styles.boldText}>Unevenness and Imperfections:</span> Handmade pieces often have small imperfections or uneven parts due to being crafted by hand. These imperfections give the item a unique and special quality.</li>
                        <li><span className={styles.boldText}>Differences in Color and Texture:</span> The color and texture of the stones and metals used in a handmade piece may vary slightly. These differences in color and texture are what make them genuine.</li>

                    </div>
                    <div className={styles.divide}></div>
                </ul>

                <p><span className={styles.boldTextBig}>Attention to Detail:</span> Generally, handmade pieces are made with much more attention to detail. You will see more complicated patterns, precise settings, or unique finishes that can hardly be done through machined production, like;</p>
                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/footer-content/handmade-jewelry/handmade-jewelry6.jpg" // Update with your image path
                        alt="Description of image"
                        width={300} // Adjust width as needed
                        height={400} // Adjust height as needed
                        className={styles.image}
                    />
                </div>
                <ul className={styles.discList}>
                    <li><span className={styles.boldText}>Hand-Engraved Patterns:</span> Look for detailed designs or engravings that show signs of being done by hand, such as slightly uneven lines or small differences in depth.</li>
                    <li><span className={styles.boldText}>Handmade Settings:</span> Examine the settings for the stones. Handmade settings often look more natural and less perfectly compared to settings created by machines.</li>
                    <li><span className={styles.boldText}>Hand-Shaped Parts:</span> Look for parts like clasps, bails, and findings that seem to have been shaped by hand.</li>
                    <li><span className={styles.boldText}>Handmade Touches:</span> Look for signs of handmade craftsmanship, such as uneven edges, hand-stamped or engraved markings, or unique patterns and designs.</li>

                    <div className={styles.divide}></div>
                </ul>

                <p><span className={styles.boldTextBig}>Quality Materials:</span> In handmade jewelry, high-quality materials along with traditional techniques are used, which is difficult to manage in mass production.</p>
                <div className={styles.rightImageTextContainer}>
                    <Image
                        src="/images/footer-content/handmade-jewelry/handmade-jewelry7.jpg" // Update with your image path
                        alt="Description of image"
                        width={300} // Adjust width as needed
                        height={250} // Adjust height as needed
                        className={styles.image}
                    />
                </div>
                <ul className={styles.discList}>
                    <li><span className={styles.boldText}>Natural Materials:</span> Handmade jewelry often uses natural materials like gemstones, precious metals, and leather. These materials might have small differences or marks that show they are natural.</li>
                    <li><span className={styles.boldText}>High-Quality Metals:</span> Look for hallmarks or stamps that indicate the purity of the metal used. Handmade jewelry usually uses higher­ quality metals compared to mass-produced pieces.</li>

                    <div className={styles.divide}></div>
                </ul>

                <p><span className={styles.boldTextBig}>Certification:</span> Some handmade jewelry brands might provide certificates to confirm the realness of their items</p>
                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/footer-content/handmade-jewelry/handmade-jewelry8.jpg" // Update with your image path
                        alt="Description of image"
                        width={300} // Adjust width as needed
                        height={200} // Adjust height as needed
                        className={styles.image}
                    />
                </div>
                <ul className={styles.discList}>
                    <li><span className={styles.boldText}>Artisan's Signature:</span> Search for a maker's mark or signature on the item. This may give some information about the artisan who created the jewelry.</li>
                    <li><span className={styles.boldText}>Certificate of Authenticity</span> If you can get one, a proof of authenticity can give you extra confidence about the item's realness and its history. </li>
                    <div className={styles.divide}></div>
                </ul>

                <p className={styles.indent}><span className={styles.boldText}>BY PAYING ATTENTION TO THESE DETAILS</span>, buyers can make smart choices and not get tricked by fake advertising. It has to be remembered that, handmade jewelry might cost more than mass-produced pieces, but the quality, uniqueness, and ethical production is often make it a good choice.</p>
            </div>
            <Footer />
        </>
    );
}

import styles from '/app/styles/footer-content/NormalFooter.module.css';
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SizeGuide() {
    return (
        <>
            <div className={styles.topic}>
                <h1>JEWELRY CARE</h1>
                <h3>Maintenance and Cleaning Tips You Should Know</h3>
            </div>

            <div className={styles.content}>
                <div className={styles.nospace}>
                    <p className={styles.indent}>We all love the way a piece of jewelry can elevate an outfit or a reminding of a special moment. However, just as with other valuables, proper care should be taken to maintain its beauty and shine.</p>
                    <p className={styles.indent}>Tarnished or dull pieces can detract from their charm. Let's explore some simple but efficient ways for keeping your jewelry sparkling and learning how to deal with oxidation-a natural process affecting many metals.</p>
                </div>

                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/footer-content/jewelry-care/jewelry-care1.png"
                        width={450}
                        height={700}
                        className={styles.image}
                    />
                </div>
                <h1>How to Keep Your Jewelry Looking Good</h1>
                <h2>Prevention is Key: </h2>
                <ul className={styles.discList}>
                    <li><span className={styles.underlineBoldText}>Avoid </span> contact with perfume, lotion, cleaning agent, hand sanitizer, soap, chlorine or any other chemicals. Thus, we recommend to take off your jewelry when washing hands, showering, doing household tasks, swimming or doing sports.</li>
                    <li>Avoid hard contact or abrasive surface to prevent scratches.</li>

                </ul>

                <h2>Store it Right: </h2>
                <ul className={styles.discList}>
                    <li><span className={styles.underlineBoldText}>Don't just throw</span> your jewelry in a drawer! Keep it in a jewelry box with individual sections or separate pouches avoid scratching against each other.</li>
                    <li>Use anti-tarnish pouches in the storage box to add a layer of protection.</li>

                </ul>
                <div className={styles.divide}></div>

                <h1>Fixing Tarnished Jewelry</h1>
                <p className={styles.indent}>Oxidation is a natural process where metals react with oxygen in the air, causing a discoloration or darkening<span className={styles.boldText}>Here's how you can deal with oxidation, depending on the type of jewelry:</span></p>
                <ul className={styles.discList}>
                    <div className={styles.rightImageTextContainer}>
                        <Image
                            src="/images/footer-content/jewelry-care/jewelry-care2.jpg"
                            width={200}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <li><span className={styles.boldText}>Silver Savior:</span> For any silver jewelry, a baking soda mixed with water paste is a classic solution for sterling silver jewelry. Use a soft cloth to apply the paste, then wash off thoroughly, and dry with a clean polishing cloth. If, by chance, some tarnish remains, a silver polish can be used according to the product instructions</li>
                    <div className={styles.divide}></div>

                    <div className={styles.rightImageTextContainer}>
                        <Image
                            src="/images/footer-content/jewelry-care/jewelry-care3.jpg"
                            width={200}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <li><span className={styles.boldText}>Golden Glow:</span> Gold vermeil will fade naturally over time when rubbing against other surfaces and with use and wear. Unless you like the way the tarnish makes the piece look unique and interesting, gold vermeil jewelry can be cleaned with a mild dish soap solution and brushed gently. Avoid strong chemicals or rough cleaners, as they can scratch the gold. Dry well with a soft cloth. You can also use the provided jewelry polishing cloth that comes with your package to rub gently on the surface.</li>
                    <div className={styles.divide}></div>

                    <p className={styles.redBoldText}>Due to the natural variation of individual body chemistry and its effect on plating wear, life-span expectancies of plating will differ. Please note that a fade of gold plating is therefore not considered a complaint.</p>

                    <div className={styles.rightImageTextContainer}>
                        <Image
                            src="/images/footer-content/jewelry-care/jewelry-care4.jpg"
                            width={200}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <li><span className={styles.boldText}>Gemstone Gentleness:</span> Many gemstones require special care. For everyday cleaning, a gentle dish soap solution and a soft brush are sufficient. Avoid strong chemicals, as they can damage some gemstones. For some gemstones like pearl or opal should not be exposed to acids that could be damaging to the surfaces.</li>
                    <div className={styles.divide}></div>

                </ul>

                <h1>DIY Cleaning Hacks: Fun and Effective Methods</h1>
                <p className={styles.indent}>We have highlighted the simple routine one should follow in caring for jewelry, however, for the more serious cleaning challenges or the simply curious, here are some interesting but useful ways of maintaining the shine of your jewelry:</p>

                <h2>Natural Wonders:</h2>

                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/footer-content/jewelry-care/jewelry-care5.jpg"
                        width={250}
                        height={150}
                        className={styles.image}
                    />
                </div>
                <ul className={styles.discList}>
                    <li><span className={styles.boldText}>Lemon Love (Silver):</span> Lemon juice contains citric acid, a mild chelator that can loosen and dissolve tarnish (usually silver sulfide) on the surface of silver jewelry. The salt acts as a gentle abrasive to help buff away the loosened tarnish.</li>
                    <p><span className={styles.redBoldText}>Caution with gemstones:</span>This method is not suitable for pearls or some gemstones (like opals) because the citric acid in lemon juice may be too intense for them and scratch their surfaces.</p>
                    <div className={styles.divide}></div>

                    <div className={styles.rightImageTextContainer}>
                        <Image
                            src="/images/footer-content/jewelry-care/jewelry-care6.jpg"
                            width={200}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <li><span className={styles.boldText}>Ketchup Kick (Silver):</span> Ketchup contains vinegar (acetic acid) which may act like citric acid-a mild chelator and thus helps in loosening the tarnish. The tomato paste in ketchup provides a slightly abrasive quality to buff away the loosened tarnish.</li>
                    <p><span className={styles.redBoldText}>Caution with gemstones:</span>The acidity in ketchup is a bit strong, so use occasionally and only on non-porous gemstones like sapphires or rubies. Avoid using it on softer gemstones like opals or turquoise.</p>
                    <div className={styles.divide}></div>

                    <div className={styles.rightImageTextContainer}>
                        <Image
                            src="/images/footer-content/jewelry-care/jewelry-care7.jpg"
                            width={200}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <li><span className={styles.boldText}>The Power of Pasta Water (Silver):</span> There is starch in the pasta water, which can trap tarnish particles during the polishing of the silver pieces. The warm water helps loosen any grime or dirt on the jewelry's surface.</li>
                    <div className={styles.divide}></div>

                </ul>

                <h2>Household Heroes:</h2>

                <ul className={styles.discList}>
                    <div className={styles.leftImageTextContainer}>
                        <Image
                            src="/images/footer-content/jewelry-care/jewelry-care8.jpg"
                            width={250}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <li><span className={styles.boldText}>Aluminum Foil Magic (Silver):</span> This method utilizes a scientific law called a reduction reaction. Since aluminum is more active metal than silver, it is able to force out the tarnish (silver sulfide) from the jewelry. The baking soda helps in chemically batching the tarnish and keeps the cleaning solution working effectively.</li>
                    <div className={styles.divide}></div>
                    <br></br>


                    <div className={styles.rightImageTextContainer}>
                        <Image
                            src="/images/footer-content/jewelry-care/jewelry-care9.jpg"
                            width={300}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <li><span className={styles.boldText}>The Toothpaste Trick (Silver):</span> Non-gel toothpaste generally includes mild abrasives such as baking soda or calcium carbonate. These can gently polish the silver and in lessening the effects of tarnish.</li>
                    <p><span className={styles.redBoldText}>Caution with gemstones:</span> Avoid using this method on gemstones that can be scratched by toothpaste, such as opals or emeralds. Softer gemstones may require a jeweler's cleaning solution.</p>
                    <div className={styles.divide}></div>

                    <div className={styles.leftImageTextContainer}>
                        <Image
                            src="/images/footer-content/jewelry-care/jewelry-care10.jpg"
                            width={200}
                            height={300}
                            className={styles.image}
                        />
                    </div>
                    <li><span className={styles.boldText}>Coca-Cola Caper (Silver):</span> Coca-Cola contains phosphoric acid, which is a stronger chelating agent than citric acid. This can be effective in removing stubborn tarnish, however, it is best used less often, as it is a little more caustic.</li>
                    <p><span className={styles.redBoldText}>Caution with gemstones:</span> Coca-Cola is not suitable for pearls or gemstones as the phosphoric acid can damage their surfaces. It may also take the brilliance away from some of the precious stones.</p>
                    <div className={styles.divide}></div>
                </ul>

                <h2>Hidden Tricks</h2>
                <ul className={styles.discList}>
                    <li><span className={styles.boldText}>Professional Help:</span> For heavily tarnished pieces or those with intricate details, consider seeking professional cleaning from your local jeweler, or simply send them to us, and we will take care of it.</li>
                    <li><span className={styles.boldText}>Regular Maintenance:</span> Make it a habit to clean your jewelry. A quick wipe with a soft cloth after each wear can prevent dirt and tarnish build-up, minimizing the need for frequent deep cleaning.</li>
                    <p className={styles.indent}>By reading these few recommendations, you can ensure your treasured jewelry pieces stay radiant for years to come. Remember, with a little Tender Loving Care (TLC) your jewelry can continue to be a source of beauty, confidence, and cherished memories.</p>
                </ul>

                <p className={styles.indent}><span className={styles.boldText}>Remember, these are alternative hacks and might not work for all kinds of jewelry.</span> It's always best to try them on a small, less noticeable part of your jewelry first, and if you're worried about damaging something valuable or fragile, it's best to ask a jeweler.</p>
                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/footer-content/jewelry-care/jewelry-care11.png"
                        width={800}
                        height={600}
                        className={styles.image}
                    />
                </div>

                <p className={styles.indent}>While proper care can extend the life and shine of our jewelry, there's a certain charm that comes with wear and tear. Jewelry is made to be worn, it meant to be part of your life, and not just something you keep hidden away in a box.</p>

                <p className={styles.indent}>The small scratches and slight tarnish tell a story. They are whispers of laughter shared with friends, quiet moments of thought, and exciting adventures. Each mark becomes a unique detail, a testament to a life well-lived and the experiences treasured.</p>

                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/footer-content/jewelry-care/jewelry-care12.jpg"
                        width={400}
                        height={400}
                        className={styles.image}
                    />
                </div>
                <p className={styles.indent}>Just as our favorite jacket, worn in and comfortable, or a book with underlined passages become special, jewelry that bears the marks of time becomes even more special. It transforms from an exclusive accessory into a valued friend that reminds you of your memories.
                    <p className={styles.indent}>The beauty of life is in its imperfections. They add depth and character, a reminder that true beauty sometimes it's not about the destination but about the journey. Wear your jewels with confidence, allowing it to grow older with you and appreciate the stories it tells through its scratches and imperfections. After all, these are the marks that make your jewelry truly yours - a treasured record of a life lived and loved.</p>
                </p>
                <div className={styles.divide}></div>

                <div className={styles.italicTextBold}>
                    <i>“Wear with Love, Let the Scars Tell Your Story”</i>

                </div>

            </div>
            <Footer />
        </>
    );
}

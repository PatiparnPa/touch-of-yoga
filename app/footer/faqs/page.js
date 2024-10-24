import styles from '/app/styles/footer-content/NormalFooter.module.css';
import Footer from "@/components/Footer";

/*<a href="https://www.shecodes.io/">click here</a>*/

export default function SizeGuide() {
    return (
        <>
            <div className={styles.topic}>
                <h3>FAQ</h3>
            </div>

            <div className={styles.content}>
                <h1>PRODUCT</h1>
                <h2>What materials are used in your collection?</h2>
                <p>All of our jewelry is made of authentic precious metals, precious and semi- precious stones. To learn more about our materials, please visit our <a href="/">Materials</a></p>

                <h2>Is the jewelry ethically sourced and produced?</h2>
                <p>Yes, the jewelry is ethically sourced and produced. We ensure that all materials are obtained through fair trade practices, supporting the livelihoods of workers. Additionally, we prioritize environmentally responsible methods, using sustainable processes to minimize our impact on the planet. </p>

                <h2>Where is the jewelry made?</h2>
                <p>Our jewelry is handcrafted in our studio in Thailand, where we focus on creating high-quality, ethically produced pieces with attention to detail and traditional craftsmanship</p>

                <h1>ORDERING</h1>
                <h2>Can I modify or cancel my order?</h2>
                <p>If you need to change or cancel your order, please contact us via <a href="/">support@touchofyoga.com</a> within 24 hours (business day) after the order has been submitted and we will make every attempt to honor your request. </p>

                <h2>Do you offer gift wrap?</h2>
                <p>Unfortunately, we do not have gift wrapping option available right now, but all of our items are beautifully packaged in in unique jewelry box  which makes a great first impression.</p>

                <h2>Can I include a personalized message with my order?</h2>
                <p>Yes, you can add a note to your order. Please write a small note at the checkout in notes section.</p>

                <h2>Do you sell individual pendants, chains or earrings?</h2>
                <p>We do not sell individual components or half-pairs of earrings. We also do not offer customized chain lengths. All jewelry is sold as is. In case you would like to have a custom-made jewelry, please check our bespoke service.</p>

                <h1>PAYMENT</h1>
                <h2>What methods of payment do you accept?</h2>
                <p>We accept most major credit cards including Visa, MasterCard, American Express, as well as PayPal and Stripe. Klarna is conveniently available to break your payment up into 4 interest-free payments. Customers that have received an e-gift card can also redeem them at the time of checkout</p>

                <h2>Do you have a buy now, pay later option?</h2>
                <p>Yes, you can pay via Klarna for buy now, pay later or installment.</p>

                <h1>SHIPPING</h1>
                <h2>Do you ship internationally?</h2>
                <p>Yes, we do! Even with prompt shipping, the average delivery time is between 10-15 business days, excluding any delays and customs checks. This is also the case for Express shipping. Taxes and fees are determined according to local import rules.</p>

                <h2>When will you ship my order?</h2>
                <p>Most orders are shipped within 3 business days. Once your order is shipped, we will notify you via email. Please note that during busy seasons, processing an order can take 5-7 business days.</p>

                <h2>What is the cost of shipping?</h2>
                <p>Shipping costs are calculated at checkout and vary depending on your item's weight and your shipping location. We strive to ensure shipping charges are affordable by partnering with our couriers.</p>

                <h2>How quickly will I receive my order?</h2>
                <p>Once we receive your order, we will process it within 3 business days if the jewelry is in stock. If the item is not available, it will be crafted upon receipt of your order, which will take approximately 14 business days.</p>

                <h2>Will I be a charged duty/tax fees?</h2>
                <p>All international orders are subject to these fees. Please contact your country's customs office for details.</p>

                <h2>Can you send my order without a receipt?</h2>
                <p>Yes, we can send your order without a receipt. Please leave us a message at the checkout in notes section.</p>

                <h1>RETURN/REPAIR</h1>
                <h2>Return and Repair Policy</h2>
                <p>We are dedicated to providing you with exceptional jewelry and want you to truly enjoy your purchase. If you are not satisfied due to any defects, under the warranty policy, we are happy to replace the same item or repair any unworn, unwashed, and undamaged items within 6 months of the delivery date. Please note that we cannot accept returns for refunds or exchanges for other items. Additionally, we reserve the right to void the warranty on any item that shows signs of modification, abuse, or damage beyond normal wear, as determined by our jewelry professionals.</p>
                <p className={styles.nospace}>Customers are responsible for shipping costs to return products to us, while we will cover the shipping cost for sending you a replacement or repaired products.</p>

                <h2>How do I submit a return request?</h2>
                <p>To initiate a return, please contact us at <span className={styles.boldText}>return@touchofyoga.com.</span> Our team will respond within 3-4 business days to assess the issue and provide you with a return request document. Once you receive the return request document, you may send the jewelry back to us. In case of replacement, since the jewelry is made to order, we will be able to send back the jewelry within 14 business days. </p>

                <h1>ABOUT TOUCHOFYOGA</h1>
                <h2>Can I visit TouchofYoga’s workshop?</h2>
                <p>Absolutely! We would be delighted to welcome you to our workshop in Bangkok, Thailand, where you can observe our crafting process and meet the talented artisans who create your jewelry.</p>

                <h2>I’m interest in reselling TouchofYoga jewelry, who do I contact?</h2>
                <p>Thank you for your interest in reselling TouchofYoga jewelry. To discuss partnership opportunities and get more information, please reach out to our B2B team at tassana@touchofyoga.com. We look forward to connecting with you!</p>

                <h2>Do you have a store location?</h2>
                <p>We are proud to partner with various yoga studios and retailers. To find the nearest store to your location, please visit our "Our Partners" page. This is a wonderful way to support local businesses in your community that share our values and are part of the same tribe. Alternatively, you are always welcome to visit our showroom in Bangkok at any time</p>

            </div>
            <Footer />
        </>
    );
}

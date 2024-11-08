import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/jpg.module.css';
import Image from "next/image";


export default function TheJourneyOfFineJewelry() {
    return (
        <>
            <div
                className={`${styles.container} flex flex-col items-center`}
                style={{
                    backgroundColor: "#FFF",
                    margin: "0 auto",
                    maxWidth: "800px", // Limit the width of the container
                    width: "100%",     // Full width within max-width constraint
                }}
            >
                {/* First Image */}
                <Image
                    src="/jpg-footer/the-journey-of-fine-jewelry/the-journey-of-fine-jewelry1.jpg"
                    alt="The Journey of Fine Jewelry 1"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg-footer/the-journey-of-fine-jewelry/the-journey-of-fine-jewelry2.jpg"
                    alt="The Journey of Fine Jewelry 2"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg-footer/the-journey-of-fine-jewelry/the-journey-of-fine-jewelry3.jpg"
                    alt="The Journey of Fine Jewelry 3"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg-footer/the-journey-of-fine-jewelry/the-journey-of-fine-jewelry4.jpg"
                    alt="The Journey of Fine Jewelry 4"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg-footer/the-journey-of-fine-jewelry/the-journey-of-fine-jewelry5.jpg"
                    alt="The Journey of Fine Jewelry 5"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg-footer/the-journey-of-fine-jewelry/the-journey-of-fine-jewelry6.jpg"
                    alt="The Journey of Fine Jewelry 6"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg-footer/the-journey-of-fine-jewelry/the-journey-of-fine-jewelry7.jpg"
                    alt="The Journey of Fine Jewelry 7"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg-footer/the-journey-of-fine-jewelry/the-journey-of-fine-jewelry8.jpg"
                    alt="The Journey of Fine Jewelry 8"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
            
            </div>
            <DefaultFooter />
        </>
    )
}
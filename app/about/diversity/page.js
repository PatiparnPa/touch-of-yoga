import DefaultFooter from '@/components/DefaultFooter';
import Image from 'next/image';
import styles from '/app/styles/about-us-content/AboutUs.module.css';
 
export default function Diversity() {
    return (
        <>
            <div
                className={`${styles.container} flex flex-col items-center`}
                style={{
                    backgroundColor: "#FFF",
                    padding: "20px",   // Padding around the container
                    margin: "0 auto",
                    maxWidth: "800px", // Limit the width of the container
                    width: "100%",     // Full width within max-width constraint
                }}
            >
                {/* First Image */}
                <Image
                    src="/jpg/diversity/Diversity1.jpg"
                    alt="Diversity Page 1"
                    layout="responsive"
                    width={800}       // Width of the image
                    height={1200}     // Height of the image (maintains the aspect ratio)
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }} // Remove space between images
                />
                {/* Second Image */}
                <Image
                    src="/jpg/diversity/Diversity2.jpg"
                    alt="Diversity Page 2"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginTop: "0" }} // Remove space between images
                />
            </div>
 
            <DefaultFooter />
        </>
    );
}
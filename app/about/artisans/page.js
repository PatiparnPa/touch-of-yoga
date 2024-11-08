import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/about-us-content/AboutUs.module.css';
import Image from "next/image";

export default function Artisans() {
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
                    src="/jpg/artisans/artisans1.jpg"
                    alt="Artisans Page 1"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                {/* Second Image */}
                <Image
                    src="/jpg/artisans/artisans2.jpg"
                    alt="Artisans Page 2"
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



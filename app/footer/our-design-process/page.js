import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/jpg.module.css';
import Image from "next/image";


export default function OurDesignProcess () {
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
                    src="/jpg-footer/our-design-process/our-design-process1.jpg"
                    alt="Our Design Process Page 1"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg-footer/our-design-process/our-design-process2.jpg"
                    alt="Our Design Process Page 2"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg-footer/our-design-process/our-design-process3.jpg"
                    alt="Our Design Process Page 3"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg-footer/our-design-process/our-design-process4.jpg"
                    alt="Our Design Process Page 4"
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
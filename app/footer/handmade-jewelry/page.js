import styles from '/app/styles/jpg.module.css';
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HandmadeJewelry() {
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
                    src="/jpg-footer/handmade-jewelry/handmade-jewelry1.jpg"
                    alt="Handmade Jewelry Page 1"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg-footer/handmade-jewelry/handmade-jewelry2.jpg"
                    alt="Handmade Jewelry Page 2"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg-footer/handmade-jewelry/handmade-jewelry3.jpg"
                    alt="Handmade Jewelry Page 3"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg-footer/handmade-jewelry/handmade-jewelry4.jpg"
                    alt="Handmade Jewelry Page 4"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg-footer/handmade-jewelry/handmade-jewelry5.jpg"
                    alt="Handmade Jewelry Page 5"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
            </div>
            <Footer />
        </>
    );
}

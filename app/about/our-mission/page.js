import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/jpg.module.css';
import Image from "next/image";

export default function OurMission() {
    return (
        <>
            <div
                className={`${styles.container} flex flex-col items-center`}
                style={{
                    backgroundColor: "#FFF",
                    margin: "0 auto",
                    maxWidth: "800px", 
                    width: "100%",    
                }}
            >
                {/* First Image */}
                <Image
                    src="/jpg/our-mission/our-mission1.jpg"
                    alt="Our Mission Page 1"
                    layout="responsive"
                    width={800}       
                    height={1200}   
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }} 
                />
                {/* Second Image */}
                <Image
                    src="/jpg/our-mission/our-mission2.jpg"
                    alt="Our Mission Page 2"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginTop: "0" }} 
                />
                <Image
                    src="/jpg/our-mission/our-mission3.jpg"
                    alt="Our Mission Page 3"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginTop: "0" }} 
                />
                <Image
                    src="/jpg/our-mission/our-mission4.jpg"
                    alt="Our Mission Page 4"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginTop: "0" }} 
                />
                <Image
                    src="/jpg/our-mission/our-mission5.jpg"
                    alt="Our Mission Page 5"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginTop: "0" }} 
                />
                <Image
                    src="/jpg/our-mission/our-mission6.jpg"
                    alt="Our Mission Page 6"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginTop: "0" }} 
                />
                <Image
                    src="/jpg/our-mission/our-mission7.jpg"
                    alt="Our Mission Page 7"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginTop: "0" }} 
                />
            </div>
 
            <DefaultFooter />
        </>
    );
}

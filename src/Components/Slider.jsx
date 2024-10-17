import React, { useState, useEffect } from "react";
import image1 from "../image/slider 1.jpg";
import image2 from "../image/slider 2.jpg";
import image3 from "../image/slider 3.jpg";
import image4 from "../image/slider 4.webp";
import image5 from "../image/slider 5.webp";

function Slider() {
    const images = [image2, image1, image3, image4, image5];
    const [update, setUpdate] = useState(0);

    const nextbtn = () => {
        setUpdate((prev) => (prev + 1) % images.length);
    };

    const backbtn = () => {
        setUpdate((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const intervalId = setInterval(nextbtn, 3000); // Change image every 3 seconds

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <>
            <div className="slider">
                <div className="image">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            className={i === update ? "active" : "d-none"}
                            alt={`Slide ${i + 1}`}
                        />
                    ))}
                </div>

                <div className="dots">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === update ? "active-dot" : ""}`}
                            onClick={() => setUpdate(i)}
                        ></span>
                    ))}
                </div>
            </div>
        </>
    );
}

export { Slider };

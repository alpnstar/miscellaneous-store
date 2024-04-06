import React, {useEffect, useState} from 'react';
import styles from "../../styles/Product.module.scss";

const ProductImages = ({images = []}) => {
    const [currentImage, setCurrentImage] = useState();
    useEffect(() => {
        if (!images.length) return;
        setCurrentImage(images[0]);
    }, [images]);

    return (
        <div className={styles.images}>
            <div
                className={styles.current}
                style={{backgroundImage: `url(${currentImage})`}}
            />
            <div className={styles["images-list"]}>
                {images.map((image, i) => (
                    <div
                        key={i}
                        className={styles.image}
                        style={{backgroundImage: `url(${image})`}}
                        onClick={() => setCurrentImage(image)}
                    />
                ))}
            </div>
        </div>

    );
};

export default ProductImages;
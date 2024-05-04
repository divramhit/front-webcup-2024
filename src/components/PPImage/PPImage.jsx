'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/utils/cn';

const PPImage = ({ wrapperClassName = '', ...imgProps }) => {
    const [isImageLoading, setIsImageLoading] = useState(true);
    const [onError, setOnError] = useState(false);

    // Use a ref to detect if the image is already cached
    const imgRef = useRef();

    useEffect(() => {
        console.log("Is Image Loading:", isImageLoading);
        console.log("Image Loaded:", imgProps?.src);

        // If the image is cached, the onLoad event won't trigger
        imgRef.current.src = imgProps?.src;
        if (imgRef.current.complete) {
            setIsImageLoading(false);
        }

    }, [imgProps?.src]);

    return (
        <div className={cn(`${ isImageLoading ? 'animate-pulse bg-slate-200' : '' } w-full h-full`, wrapperClassName)}>
            <img
                key={imgProps?.src}
                ref={imgRef}
                className={cn(`transition-opacity duration-300 ${ isImageLoading ? 'opacity-0' : 'opacity-100'} ${ onError ? 'hidden' : '' }`, imgProps.className)}
                onLoad={() => setIsImageLoading(false)}
                onError={() => setOnError(true)}
                alt={imgProps?.alt ?? 'Image Not Found'}
                { ...imgProps }
            />
        </div>
    )
}

export default PPImage;
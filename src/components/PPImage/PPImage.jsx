import React, { useState } from 'react';
import { cn } from '@/utils/cn';

const PPImage = ({ ...imgProps }) => {
    const [ isImageLoading, setIsImageLoading ] = useState(true);
    const [ onError, setOnError ] = useState(false);

    return (
        <div className={`${ isImageLoading ? 'animate-pulse bg-slate-200' : '' } w-full h-full`}>
            <img
                { ...imgProps }
                className={cn(`transition-opacity duration-300 ${ isImageLoading ? 'opacity-0' : 'opacity-100'} ${ onError ? 'hidden' : '' }`, imgProps.className)}
                onLoad={() => setIsImageLoading(false)}
                onError={() => setOnError(true)}
                alt={imgProps?.alt ?? 'Image Not Found'}
            />

        </div>
    )
}

export default PPImage;
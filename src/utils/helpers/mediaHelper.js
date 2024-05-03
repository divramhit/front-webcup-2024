/**
 * The function `getMediaOriginal` takes an array of media objects and a media name as input, and
 * returns the 'media_original' property of the matching media object if found, or undefined if not
 * found.
 * @param mediaArray - An array of media objects containing information about different types of media
 * such as movies, TV shows, music albums, etc. Each media object has properties like name,
 * media_original, genre, etc.
 * @param mediaName - The `mediaName` parameter is a string that represents the name of the media
 * object you want to retrieve from the `mediaArray`.
 * @returns The function `getMediaOriginal` returns the value of the property `media_original` from the
 * media object in the `mediaArray` that has a `name` matching the `mediaName` parameter. If a matching
 * media object is found, it returns the `media_original` value of that object. If no matching media
 * object is found, it returns `undefined`.
 */
export function getMediaOriginalUrl(mediaArray, mediaName) {
    // Find the media object by name
    const media = mediaArray.find(item => item.name === mediaName);
    
    // Return the 'media_original' if the media is found, otherwise return undefined
    return media ? media.media_original : undefined;
}
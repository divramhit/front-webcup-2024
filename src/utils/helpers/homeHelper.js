export function explodeWords(sentence) {
    // Remove punctuation using a regular expression and split the sentence into words
    const words = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(/\s+/);
    // Map each word to an object with a 'text' property
    return words.map(word => ({ text: word }));
}
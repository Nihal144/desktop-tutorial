export const formatTitle = (inputString) => {
    const words = inputString.split("-");
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const resultString = capitalizedWords.join(" ");
    return resultString
}

export const rearrangeArray = (images, url) => {
    const index = images.findIndex(image => image.url === url); // Find index of the given URL in the array
    if (index !== -1) { // If the URL is found in the array
        const image = images.splice(index, 1); // Remove the image object from the array
        images.unshift(image[0]); // Add the removed image object to the beginning of the array
    }
    return images; // Return the rearranged array
}
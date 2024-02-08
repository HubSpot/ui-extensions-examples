export const formatPrice = (price: number) => `$${price.toFixed(2)}`;
export const capitalizeFirstLetter = (string: string): string => {
    var splitStr = string.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
};

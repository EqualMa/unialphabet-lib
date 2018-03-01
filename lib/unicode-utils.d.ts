declare const unicodeUtils: {
    getFirstChar(str: any): {};
    toDec(c: any): any;
    toHex(c: any): any;
    fromDec(d: any): string;
    fromHex(h: any): string;
    getAllCharsBeteen(start: any, end: any): string;
    getCharsBetweenInGroup(start: any, end: any, stride?: number): any[];
};
export { unicodeUtils };

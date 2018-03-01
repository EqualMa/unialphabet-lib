declare const unicodeUtils: {
    getFirstChar(str: string): string;
    toDec(char: string): number;
    toHex(char: string): string;
    fromDec(dec: string | number): string;
    fromHex(hex: string): string;
    getAllCharsBetween(start: number, end: number): string;
    getCharArraysBetween(start: number, end: number, stride?: number): string[][];
};
export { unicodeUtils };

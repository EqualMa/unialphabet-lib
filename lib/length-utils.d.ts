declare const lengthUtils: {
    getLength(str: string): number;
    getToArrayLength(str: string): number;
    getNormalizedLength(str: string, form: "NFC" | "NFD" | "NFKC" | "NFKD"): number;
    getNormalizedToArrayLength(str: string, form: "NFC" | "NFD" | "NFKC" | "NFKD"): number;
    getNormalized(str: string, form: any): string;
    getAllLengths(str: string): {
        name: string;
        value: number;
    }[];
};
export { lengthUtils };

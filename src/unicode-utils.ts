const unicodeUtils = {
    getFirstChar(str: string): string {
        if (str == undefined || str == null || str == '')
            return null;
        return Array.from(str)[0];
    },

    toDec(char: string): number {
        if (char == undefined || char == null || char == '') return null;
        return char.codePointAt(0);
    },

    toHex(char: string): string {
        if (char == undefined || char == null || char == '') return null;

        return char.codePointAt(0).toString(16);
    },

    fromDec(dec: number | string): string {
        if (dec == undefined || dec == null || dec == '') return null;

        return String.fromCodePoint(typeof dec === "number" ? dec : Number.parseInt(dec));
    },

    fromHex(hex: string): string {
        if (hex == undefined || hex == null || hex == '') return null;

        return String.fromCodePoint(Number.parseInt(hex, 16));
    },

    getAllCharsBetween(start: number, end: number): string {
        if (start > end) return "";

        var a = new Array(end - start);

        for (let index = start; index <= end; index++) {
            a[index - start] = (index);
        }

        return String.fromCodePoint(...a);
    },

    getCharArraysBetween(start: number, end: number, stride: number = 0): string[][] {
        var allChars = [...unicodeUtils.getAllCharsBetween(start, end)];

        let groups: string[][] = [];

        let slc: string[];

        let i = 0;

        if (stride === 0) {
            groups.push(allChars)
        } else {
            while ((slc = allChars.slice(i, i + stride)).length != 0) {
                groups.push(slc);
                i += stride;
            }
        }

        return groups;
    },
};

export { unicodeUtils };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unicodeUtils = {
    getFirstChar(str) {
        if (str == undefined || str == null || str == '')
            return null;
        return Array.from(str)[0];
    },
    toDec(char) {
        if (char == undefined || char == null || char == '')
            return null;
        return char.codePointAt(0);
    },
    toHex(char) {
        if (char == undefined || char == null || char == '')
            return null;
        return char.codePointAt(0).toString(16);
    },
    fromDec(dec) {
        if (dec == undefined || dec == null || dec == '')
            return null;
        return String.fromCodePoint(typeof dec === "number" ? dec : Number.parseInt(dec));
    },
    fromHex(hex) {
        if (hex == undefined || hex == null || hex == '')
            return null;
        return String.fromCodePoint(Number.parseInt(hex, 16));
    },
    getAllCharsBetween(start, end) {
        if (start > end)
            return "";
        var a = new Array(end - start);
        for (let index = start; index <= end; index++) {
            a[index - start] = (index);
        }
        return String.fromCodePoint(...a);
    },
    getCharArraysBetween(start, end, stride = 0) {
        var allChars = [...unicodeUtils.getAllCharsBetween(start, end)];
        let groups = [];
        let slc;
        let i = 0;
        if (stride === 0) {
            groups.push(allChars);
        }
        else {
            while ((slc = allChars.slice(i, i + stride)).length != 0) {
                groups.push(slc);
                i += stride;
            }
        }
        return groups;
    },
};
exports.unicodeUtils = unicodeUtils;
//# sourceMappingURL=unicode-utils.js.map
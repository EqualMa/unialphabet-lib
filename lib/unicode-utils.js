"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unicodeUtils = {
    getFirstChar(str) {
        if (str == undefined || str == null || str == '')
            return null;
        return Array.from(str)[0];
    },
    toDec(c) {
        if (c == undefined || c == null || c == '')
            return null;
        return c.codePointAt(0);
    },
    toHex(c) {
        if (c == undefined || c == null || c == '')
            return null;
        return c.codePointAt(0).toString(16);
    },
    fromDec(d) {
        if (d == undefined || d == null || d == '')
            return null;
        return String.fromCodePoint(Number.parseInt(d));
    },
    fromHex(h) {
        if (h == undefined || h == null || h == '')
            return null;
        return String.fromCodePoint(Number.parseInt(h, 16));
    },
    getAllCharsBeteen(start, end) {
        if (start > end)
            return "";
        var a = new Array(end - start);
        for (let index = start; index <= end; index++) {
            a[index - start] = (index);
        }
        return String.fromCodePoint(...a);
    },
    getCharsBetweenInGroup(start, end, stride = 26) {
        var s = [...unicodeUtils.getAllCharsBeteen(start, end)];
        let i = 0;
        let sarr = [];
        let slc;
        while ((slc = s.slice(i, i + stride)).length != 0) {
            sarr.push(slc);
            i += stride;
        }
        return sarr;
    },
};
exports.unicodeUtils = unicodeUtils;
//# sourceMappingURL=unicode-utils.js.map
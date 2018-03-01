"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lengthUtils = {
    getLength(str) {
        return str.length;
    },
    getToArrayLength(str) {
        return Array.from(str).length;
    },
    getNormalizedLength(str, form) {
        return lengthUtils.getNormalized(str, form).length;
    },
    getNormalizedToArrayLength(str, form) {
        return lengthUtils.getToArrayLength(lengthUtils.getNormalized(str, form));
    },
    getNormalized(str, form) {
        if (form == undefined)
            return str.normalize();
        else
            return str.normalize(form);
    },
    getAllLengths(str) {
        var ls = [];
        ls[0] = { name: 'str.length', value: lengthUtils.getLength(str) };
        ls[1] = { name: 'Array.from(str).length', value: lengthUtils.getToArrayLength(str) };
        ls[2] = { name: 'str.normalize("NFC").length', value: lengthUtils.getNormalizedLength(str, 'NFC') };
        ls[3] = { name: 'str.normalize("NFD").length', value: lengthUtils.getNormalizedLength(str, 'NFD') };
        ls[4] = { name: 'str.normalize("NFKC").length', value: lengthUtils.getNormalizedLength(str, 'NFKC') };
        ls[5] = { name: 'str.normalize("NFKD").length', value: lengthUtils.getNormalizedLength(str, 'NFKD') };
        ls[6] = { name: 'Array.from(str.normalize("NFC")).length', value: lengthUtils.getNormalizedToArrayLength(str, 'NFC') };
        ls[7] = { name: 'Array.from(str.normalize("NFD")).length', value: lengthUtils.getNormalizedToArrayLength(str, 'NFD') };
        ls[8] = { name: 'Array.from(str.normalize("NFKC")).length', value: lengthUtils.getNormalizedToArrayLength(str, 'NFKC') };
        ls[9] = { name: 'Array.from(str.normalize("NFKD")).length', value: lengthUtils.getNormalizedToArrayLength(str, 'NFKD') };
        return ls;
    },
};
exports.lengthUtils = lengthUtils;
//# sourceMappingURL=length-utils.js.map
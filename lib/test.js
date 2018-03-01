"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function showLength(str, log_cb) {
    const ls = index_1.lengthUtils.getAllLengths(str);
    if (log_cb) {
        log_cb(`Different Lengths for "${str}"\n`);
        ls.forEach(length => {
            log_cb(`${length.name}\t=\t${length.value}\n`);
        });
    }
}
['cafe', 'café', '咖啡'].forEach(str => showLength(str, console.log));
//# sourceMappingURL=test.js.map
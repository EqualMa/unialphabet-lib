"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function startTest(name, log_cb) {
    if (log_cb)
        log_cb(`testing: ${name}\n`);
}
function doneTest(name, log_cb) {
    if (log_cb)
        log_cb(`testing done: ${name}\n********************\n`);
}
function test(name, action, log_cb) {
    startTest(name, log_cb);
    action(log_cb);
    doneTest(name, log_cb);
}
const tests = {
    lengthUtils(log_cb) {
        function showLength(str, log_cb) {
            const ls = index_1.lengthUtils.getAllLengths(str);
            if (log_cb) {
                log_cb(`Different Lengths for "${str}"\n`);
                ls.forEach(length => {
                    log_cb(`${length.name}\t=\t${length.value}\n`);
                });
            }
        }
        ['cafe', 'café', '咖啡'].forEach(str => showLength(str, log_cb));
    },
    unicodeUtils(log_cb) {
        log_cb(index_1.unicodeUtils.getAllCharsBetween(120146, 120171));
        log_cb(index_1.unicodeUtils.getCharArraysBetween(120172, 120223, 13).join('\n'));
    }
};
for (const key in tests) {
    if (tests.hasOwnProperty(key)) {
        test(key, tests[key], console.log);
    }
}
//# sourceMappingURL=test.js.map
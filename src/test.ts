import { lengthUtils, unicodeUtils } from "./index"

function startTest(name: string, log_cb?: (msg: string) => void): void {
    if (log_cb) log_cb(`testing: ${name}\n`);
}

function doneTest(name: string, log_cb?: (msg: string) => void): void {
    if (log_cb) log_cb(`testing done: ${name}\n********************\n`);
}

function test(name: string, action: (log_cb?: (msg: string) => void) => void, log_cb?: (msg: string) => void): void {
    startTest(name, log_cb);
    action(log_cb);
    doneTest(name, log_cb);
}

const tests = {
    lengthUtils(log_cb?: (msg: string) => void) {
        function showLength(str: string, log_cb?: (msg: string) => void): void {

            const ls = lengthUtils.getAllLengths(str);

            if (log_cb) {
                log_cb(`Different Lengths for "${str}"\n`);
                ls.forEach(length => {
                    log_cb(`${length.name}\t=\t${length.value}\n`)
                });
            }
        }

        ['cafe', 'café', '咖啡'].forEach(str => showLength(str, log_cb));
    },
    unicodeUtils(log_cb?: (msg: string) => void) {
        log_cb(unicodeUtils.getAllCharsBetween(120146, 120171));
        log_cb(unicodeUtils.getCharArraysBetween(120172, 120223, 13).join('\n'));
    }
};

for (const key in tests) {
    if (tests.hasOwnProperty(key)) {
        test(key, tests[key], console.log);

    }
}


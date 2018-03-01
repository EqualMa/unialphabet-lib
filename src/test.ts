import { lengthUtils, unicodeUtils } from "./index"

function showLength(str: string, log_cb?: (msg: string) => void): void {

    const ls = lengthUtils.getAllLengths(str);

    if (log_cb) {
        log_cb(`Different Lengths for "${str}"\n`);
        ls.forEach(length => {
            log_cb(`${length.name}\t=\t${length.value}\n`)
        });
    }
}

['cafe', 'café', '咖啡'].forEach(str => showLength(str, console.log));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CheckEmailAddress(email) {
    if (!email.includes('@')) {
        return { isValid: false };
    }
    else {
        const [address, domain] = email.split('@');
        const domainIndex = domain.indexOf('.');
        if (!domain.includes('.') || domain[domainIndex + 1] === undefined) {
            return { isValid: false };
        }
        else {
            return { isValid: true };
        }
    }
}
exports.default = CheckEmailAddress;

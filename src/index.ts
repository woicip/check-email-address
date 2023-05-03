import type { Result } from "..";

function CheckEmailAddress(email: string): Result {
    if(!email.includes('@')){
        return { isValid: false }
    } else {
        const [ address, domain ]: string[] = email.split('@');
        const domainIndex: number = domain.indexOf('.');

        if(!domain.includes('.') || domain[domainIndex+1] === undefined){
            return { isValid: false }
        } else {
            return { isValid: true }
        }
    }
}

export default CheckEmailAddress
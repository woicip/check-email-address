# check-email-address
Tiny library for checking email address whether it's valid or not <br/>
Support TypeScript

```javascript 
// CJS (Common JS)
const checkEmailAddress = require('check-email-address')

const emailAddr = 'myEmail@mail.com'
const { isValid } = checkEmailAddress(emailAddr)

if(isValid){
    console.log("Email valid")
} else {
    console.log("Email is not valid")
}
```

```typescript
// React App (TSX)
import checkEmailAddress from 'check-email-address'

export default function Component(props: any){
    ...
    const { isValid } = checkEmailAddress(email)
    ...
}
```

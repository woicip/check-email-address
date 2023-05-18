# check-email-address
Tiny library for checking email address whether it's valid or not with support of TypeScript <br/>
Support in CJS, ESM and React App
<br/>
### Installation
``` 
npm install check-email-address 
```
or 
``` 
yarn add check-email-address
```

### Usage 
- [Common JS](#common-js)
- [ES Modules](#es-modules)
- [React App](#react-app)

## Common JS
<a id="cjs"></a>

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

## ES Modules
<a id="esm"></a>

```javascript 
// ESM (ES Modules)
import checkEmailAddress from 'check-email-address'

const emailAddr = 'myEmail@mail.com'
const { isValid } = checkEmailAddress(emailAddr)

if(isValid){
    console.log("Email valid")
} else {
    console.log("Email is not valid")
}
```

## React App
<a id="react"></a>

```typescript
// React App (TSX)
import checkEmailAddress from 'check-email-address'

export default function Component(props: any){
    ...
    const { isValid }: { isValid: boolean } = checkEmailAddress(email)
    ...
}
```

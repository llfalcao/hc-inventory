Express GraphQL Server with Apollo Client and React as part of a challenge from the Hiring Coders' project.

Usage:

1. `yarn`
2. `yarn dev`

Per the requirements, sign-in data is [stored](https://github.com/llfalcao/hc-inventory/blob/a9acdcb574ebadb3a49ea0b33599832fcbffeb1d/client/src/pages/SignIn/SignIn.js#L10-L15) in localStorage, [clients](https://github.com/llfalcao/hc-inventory/blob/a9acdcb574ebadb3a49ea0b33599832fcbffeb1d/schema/Client/Client.js#L9-L15) have attributes such as name, email, and address. [Products](https://github.com/llfalcao/hc-inventory/blob/a9acdcb574ebadb3a49ea0b33599832fcbffeb1d/schema/Product/Product.js#L9-L15) have a name, price, quantity available in stock and so on.

All of these have unique ids and their attributes can be updated through their respective page sections.

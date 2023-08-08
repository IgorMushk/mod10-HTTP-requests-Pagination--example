"use strict";var BASE_URL="https://jsonplaceholder.typicode.com",result=null;fetch("".concat(BASE_URL,"/users?_sort=name&_limit=9")).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).then((function(t){result=t,console.log(t)})).catch(console.warn);
//# sourceMappingURL=fetch.e111fc3a.js.map

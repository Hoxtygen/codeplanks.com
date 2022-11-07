import { PostWithContent } from "../typedefs";

export const testPosts = {
  posts: [
    {
      id: "cl8yk3q4k2dn609ms76xbkexz",
      author: {
        bio: "Wasiu breaks down complex topics into smaller, simpler bits",
        name: "Wasiu Idowu",
        photo: {
          url: "https://media.graphassets.com/x1acQHzbTsivb1K1vieY",
        },
      },
      slug: "javascript-promises",
      title: "Promises",
      excerpt:
        "JavaScript promise is used for asynchronous programming, a successor to callback.",
      featuredImage: {
        url: "https://media.graphassets.com/zfNO9rUaTSWv46vUnqUw",
        height: 1080,
        width: 1920,
      },
      createdAt: "2022-10-07T14:02:00.818548+00:00",
      content: {
        raw: {
          children: [
            {
              type: "paragraph",
              children: [
                {
                  text: "A JavaScript Promise is created with the new ",
                },
                {
                  href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
                  type: "link",
                  children: [
                    {
                      text: "Promise constructor function",
                    },
                  ],
                  openInNewTab: true,
                },
                {
                  text: " - ",
                },
                {
                  code: true,
                  text: "new Promise()",
                },
                {
                  text: ". A promise will let you start some work that will be done asynchronously and let you get back to your regular work. When you create the promise, you must give it the code that will be run asynchronously. You provide this code as the argument of the constructor function:",
                },
              ],
            },
            {
              type: "code-block",
              children: [
                {
                  text: "new Promise(function () { \n   window.setTimeout(function createSundae(flavor = 'chocolate') { \n       const sundae = {}; \n }, Math.random() * 2000);\n});",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "This code creates a promise that will start in a few seconds after I make the request. Then there are a number of steps that need to be made in the ",
                },
                {
                  code: true,
                  text: "createSundae",
                },
                {
                  text: " function.",
                },
              ],
            },
            {
              type: "heading-six",
              children: [
                {
                  text: "Indicated a Successful Request or a Failed Request",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "But once that's all done, how does JavaScript notify us that it's finished and ready for us to pick back up? It does that by passing two functions into our initial function. Typically we call these ",
                },
                {
                  code: true,
                  text: "resolve",
                },
                {
                  text: " and ",
                },
                {
                  code: true,
                  text: "reject",
                },
                {
                  text: ".",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: 'The function gets passed to the function we provide the Promise constructor - typically the word "resolve" is used to indicate that this function should be called when the request completes successfully. Notice the ',
                },
                {
                  code: true,
                  text: "resolve",
                },
                {
                  text: " on the first line:",
                },
              ],
            },
            {
              type: "code-block",
              children: [
                {
                  text: "new Promise(function (resolve, reject) {    \n     window.setTimeout(function createSundae(flavor = 'chocolate') { \n     const sundae = {};       \n      resolve(sundae);   \n }, Math.random() * 2000);\n});",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "Now when the sundae has been successfully created, it calls the ",
                },
                {
                  code: true,
                  text: "resolve",
                },
                {
                  text: " method and passes it the data we want to return - in this case the data that's being returned is the completed sundae. So the ",
                },
                {
                  code: true,
                  text: "resolve",
                },
                {
                  text: " method is used to indicate that the request is complete and that it completed ",
                },
                {
                  text: "successfully",
                  italic: true,
                },
                {
                  text: ".",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "If there is a problem with the request and it couldn't be completed, then we could use the second function that's passed to the function. Typically, this function is stored in an identifier called \"reject\" to indicate that this function should be used if the request fails for some reason. Check out the ",
                },
                {
                  code: true,
                  text: "reject",
                },
                {
                  text: " on the first line:",
                },
              ],
            },
            {
              type: "code-block",
              children: [
                {
                  text: "new Promise(function (resolve, reject) {    \n   window.setTimeout(function createSundae(flavor = 'chocolate') {      \n   const sundae = {};        \n      if ( /* iceCreamConeIsEmpty(flavor) */ ) {           \n        reject(`Sorry, we're out of that flavor :-(`);  \n      }        \n      resolve(sundae);  \n  }, Math.random() * 2000);\n});",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "So the ",
                },
                {
                  code: true,
                  text: "reject",
                },
                {
                  text: " method is used when the request ",
                },
                {
                  text: "could not be completed",
                  italic: true,
                },
                {
                  text: ". Notice that even though the request fails, we can still return data - in this case we're just returning text that says we don't have the desired ice cream flavor.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "A Promise constructor takes a function that will run and then, after some amount of time, will either complete successfully (using the ",
                },
                {
                  code: true,
                  text: "resolve",
                },
                {
                  text: " method) or unsuccessfully (using the ",
                },
                {
                  code: true,
                  text: "reject",
                },
                {
                  text: "method). When the outcome has been finalized (the request has either completed successfully or unsuccessfully), the promise is now ",
                },
                {
                  text: "fulfilled",
                  italic: true,
                },
                {
                  text: " and will notify us so we can decide what to do with the response.",
                },
              ],
            },
            {
              type: "heading-two",
              children: [
                {
                  text: "Promises Return Immediately",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "The first thing to understand is that a Promise will immediately return an object.",
                },
              ],
            },
            {
              type: "code-block",
              children: [
                {
                  text: "const myPromiseObj = new Promise(function (resolve, reject) {   \n // sundae creation code\n});",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "That object has a ",
                },
                {
                  code: true,
                  text: ".then()",
                },
                {
                  text: " method on it that we can use to have it notify us if the request we made in the promise was either successful or failed. The ",
                },
                {
                  code: true,
                  text: ".then()",
                },
                {
                  text: " method takes two functions:",
                },
              ],
            },
            {
              type: "numbered-list",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "list-item-child",
                      children: [
                        {
                          type: "paragraph",
                          children: [
                            {
                              text: "the function to run if the request completed successfully",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "list-item-child",
                      children: [
                        {
                          type: "paragraph",
                          children: [
                            {
                              text: "the function to run if the request failed to complete",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "code-block",
              children: [
                {
                  text: "mySundae.then(function(sundae) {  \n  console.log(`Time to eat my delicious ${sundae}`);\n},\nfunction(msg) { \n   console.log(msg); \n   self.goCry(); // not a real method\n});",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "As you can see, the first function that's passed to ",
                },
                {
                  code: true,
                  text: ".then()",
                },
                {
                  text: " will be called and passed the data that the Promise's ",
                },
                {
                  code: true,
                  text: "resolve",
                },
                {
                  text: " function used. In this case, the function would receive the ",
                },
                {
                  code: true,
                  text: "sundae",
                },
                {
                  text: " object. The second function will be called and passed the data that the Promise's ",
                },
                {
                  code: true,
                  text: "reject",
                },
                {
                  text: ' function was called with. In this case, the function receives the error message "Sorry, we\'re out of that flavor :-(" that the ',
                },
                {
                  code: true,
                  text: "reject",
                },
                {
                  text: " function was called with in the Promise code above",
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "cl8yr3zqs6sm30bn1l59x0vgk",
      author: {
        bio: "Wasiu breaks down complex topics into smaller, simpler bits",
        name: "Wasiu Idowu",
        photo: {
          url: "https://media.graphassets.com/x1acQHzbTsivb1K1vieY",
        },
      },
      slug: "javascript-promises-part-2",
      title: "Promises-Part 2",
      excerpt:
        "JavaScript promise is used for asynchronous programming, a successor to callback.",
      featuredImage: {
        url: "https://media.graphassets.com/O2tkABqROSLPOn89Syic",
        height: 517,
        width: 880,
      },
      createdAt: "2022-10-07T17:18:10.60424+00:00",
      content: {
        raw: {
          children: [
            {
              type: "paragraph",
              children: [
                {
                  text: "A JavaScript Promise is created with the new ",
                },
                {
                  href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
                  type: "link",
                  children: [
                    {
                      text: "Promise constructor function",
                    },
                  ],
                  openInNewTab: true,
                },
                {
                  text: " - ",
                },
                {
                  code: true,
                  text: "new Promise()",
                },
                {
                  text: ". A promise will let you start some work that will be done asynchronously and let you get back to your regular work. When you create the promise, you must give it the code that will be run asynchronously. You provide this code as the argument of the constructor function:```",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  code: true,
                  text: "new Promise(function () {    window.setTimeout(function createSundae(flavor = 'chocolate') {        const sundae = {};        // request ice cream        // get cone        // warm up ice cream scoop        // scoop generous portion into cone!    }, Math.random() * 2000);});",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "This code creates a promise that will start in a few seconds after I make the request. Then there are a number of steps that need to be made in the ",
                },
                {
                  code: true,
                  text: "createSundae",
                },
                {
                  text: " function.",
                },
              ],
            },
            {
              type: "heading-six",
              children: [
                {
                  text: "Indicated a Successful Request or a Failed Request",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "But once that's all done, how does JavaScript notify us that it's finished and ready for us to pick back up? It does that by passing two functions into our initial function. Typically we call these ",
                },
                {
                  code: true,
                  text: "resolve",
                },
                {
                  text: " and ",
                },
                {
                  code: true,
                  text: "reject",
                },
                {
                  text: ".",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: 'The function gets passed to the function we provide the Promise constructor - typically the word "resolve" is used to indicate that this function should be called when the request completes successfully. Notice the ',
                },
                {
                  code: true,
                  text: "resolve",
                },
                {
                  text: " on the first line:",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  code: true,
                  text: "new Promise(function (resolve, reject) {    window.setTimeout(function createSundae(flavor = 'chocolate') {        const sundae = {};        // request ice cream        // get cone        // warm up ice cream scoop        // scoop generous portion into cone!        resolve(sundae);    }, Math.random() * 2000);});",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "Now when the sundae has been successfully created, it calls the ",
                },
                {
                  code: true,
                  text: "resolve",
                },
                {
                  text: " method and passes it the data we want to return - in this case the data that's being returned is the completed sundae. So the ",
                },
                {
                  code: true,
                  text: "resolve",
                },
                {
                  text: " method is used to indicate that the request is complete and that it completed ",
                },
                {
                  text: "successfully",
                  italic: true,
                },
                {
                  text: ".",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "If there is a problem with the request and it couldn't be completed, then we could use the second function that's passed to the function. Typically, this function is stored in an identifier called \"reject\" to indicate that this function should be used if the request fails for some reason. Check out the ",
                },
                {
                  code: true,
                  text: "reject",
                },
                {
                  text: " on the first line:",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  code: true,
                  text: "new Promise(function (resolve, reject) {    window.setTimeout(function createSundae(flavor = 'chocolate') {        const sundae = {};        // request ice cream        // get cone        // warm up ice cream scoop        // scoop generous portion into cone!        if ( /* iceCreamConeIsEmpty(flavor) */ ) {            reject(`Sorry, we're out of that flavor :-(`);        }        resolve(sundae);    }, Math.random() * 2000);});",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "So the ",
                },
                {
                  code: true,
                  text: "reject",
                },
                {
                  text: " method is used when the request ",
                },
                {
                  text: "could not be completed",
                  italic: true,
                },
                {
                  text: ". Notice that even though the request fails, we can still return data - in this case we're just returning text that says we don't have the desired ice cream flavor.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "A Promise constructor takes a function that will run and then, after some amount of time, will either complete successfully (using the ",
                },
                {
                  code: true,
                  text: "resolve",
                },
                {
                  text: " method) or unsuccessfully (using the ",
                },
                {
                  code: true,
                  text: "reject",
                },
                {
                  text: "method). When the outcome has been finalized (the request has either completed successfully or unsuccessfully), the promise is now ",
                },
                {
                  text: "fulfilled",
                  italic: true,
                },
                {
                  text: " and will notify us so we can decide what to do with the response.",
                },
              ],
            },
            {
              type: "heading-two",
              children: [
                {
                  text: "Promises Return Immediately",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "The first thing to understand is that a Promise will immediately return an object.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  code: true,
                  text: "const myPromiseObj = new Promise(function (resolve, reject) {    // sundae creation code});",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "That object has a ",
                },
                {
                  code: true,
                  text: ".then()",
                },
                {
                  text: " method on it that we can use to have it notify us if the request we made in the promise was either successful or failed. The ",
                },
                {
                  code: true,
                  text: ".then()",
                },
                {
                  text: " method takes two functions:",
                },
              ],
            },
            {
              type: "numbered-list",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "list-item-child",
                      children: [
                        {
                          type: "paragraph",
                          children: [
                            {
                              text: "the function to run if the request completed successfully",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "list-item-child",
                      children: [
                        {
                          type: "paragraph",
                          children: [
                            {
                              text: "the function to run if the request failed to complete",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  code: true,
                  text: "mySundae.then(function(sundae) {    console.log(`Time to eat my delicious ${sundae}`);}, function(msg) {    console.log(msg);    self.goCry(); // not a real method});",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "As you can see, the first function that's passed to ",
                },
                {
                  code: true,
                  text: ".then()",
                },
                {
                  text: " will be called and passed the data that the Promise's ",
                },
                {
                  code: true,
                  text: "resolve",
                },
                {
                  text: " function used. In this case, the function would receive the ",
                },
                {
                  code: true,
                  text: "sundae",
                },
                {
                  text: " object. The second function will be called and passed the data that the Promise's ",
                },
                {
                  code: true,
                  text: "reject",
                },
                {
                  text: ' function was called with. In this case, the function receives the error message "Sorry, we\'re out of that flavor :-(" that the ',
                },
                {
                  code: true,
                  text: "reject",
                },
                {
                  text: " function was called with in the Promise code above",
                },
              ],
            },
          ],
        },
      },
    },
  ],
};

export const singlePost: PostWithContent = {
  id: "cl8yk3q4k2dn609ms76xbkexz",
  author: {
    bio: "Wasiu breaks down complex topics into smaller, simpler bits",
    name: "Wasiu Idowu",
    photo: {
      url: "https://media.graphassets.com/x1acQHzbTsivb1K1vieY",
    },
  },
  slug: "javascript-promises",
  title: "Promises",
  excerpt:
    "JavaScript promise is used for asynchronous programming, a successor to callback.",
  comments: [
    {
      id: "cl9ptdgr712um0alp2qqae0rg",
      name: "Machiavelli",
      email: "nacuabjkj dfd",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ex commodi voluptatibus laboriosam est? Soluta, odio natus vel blanditiis mollitia impedit expedita temporibus sit cum dolores enim eveniet eaque dolorum repellat labore hic magnam non assumenda laboriosam.\n",
      createdAt: "2022-10-30T16:25:30.706593+00:00",
    },
  ],
  featuredImage: {
    url: "https://media.graphassets.com/zfNO9rUaTSWv46vUnqUw",
    height: 1080,
    width: 1920,
  },
  createdAt: "2022-10-07T14:02:00.818548+00:00",
  content: {
    raw: {
      children: [
        {
          type: "paragraph",
          children: [
            {
              text: "A JavaScript Promise is created with the new ",
            },
            {
              href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
              type: "link",
              children: [
                {
                  text: "Promise constructor function",
                },
              ],
              openInNewTab: true,
            },
            {
              text: " - ",
            },
            {
              code: true,
              text: "new Promise()",
            },
            {
              text: ". A promise will let you start some work that will be done asynchronously and let you get back to your regular work. When you create the promise, you must give it the code that will be run asynchronously. You provide this code as the argument of the constructor function:",
            },
          ],
        },
        {
          type: "code-block",
          children: [
            {
              text: "new Promise(function () { \n   window.setTimeout(function createSundae(flavor = 'chocolate') { \n       const sundae = {}; \n }, Math.random() * 2000);\n});",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "This code creates a promise that will start in a few seconds after I make the request. Then there are a number of steps that need to be made in the ",
            },
            {
              code: true,
              text: "createSundae",
            },
            {
              text: " function.",
            },
          ],
        },
        {
          type: "heading-six",
          children: [
            {
              text: "Indicated a Successful Request or a Failed Request",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "But once that's all done, how does JavaScript notify us that it's finished and ready for us to pick back up? It does that by passing two functions into our initial function. Typically we call these ",
            },
            {
              code: true,
              text: "resolve",
            },
            {
              text: " and ",
            },
            {
              code: true,
              text: "reject",
            },
            {
              text: ".",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: 'The function gets passed to the function we provide the Promise constructor - typically the word "resolve" is used to indicate that this function should be called when the request completes successfully. Notice the ',
            },
            {
              code: true,
              text: "resolve",
            },
            {
              text: " on the first line:",
            },
          ],
        },
        {
          type: "code-block",
          children: [
            {
              text: "new Promise(function (resolve, reject) {    \n     window.setTimeout(function createSundae(flavor = 'chocolate') { \n     const sundae = {};       \n      resolve(sundae);   \n }, Math.random() * 2000);\n});",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Now when the sundae has been successfully created, it calls the ",
            },
            {
              code: true,
              text: "resolve",
            },
            {
              text: " method and passes it the data we want to return - in this case the data that's being returned is the completed sundae. So the ",
            },
            {
              code: true,
              text: "resolve",
            },
            {
              text: " method is used to indicate that the request is complete and that it completed ",
            },
            {
              text: "successfully",
              italic: true,
            },
            {
              text: ".",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "If there is a problem with the request and it couldn't be completed, then we could use the second function that's passed to the function. Typically, this function is stored in an identifier called \"reject\" to indicate that this function should be used if the request fails for some reason. Check out the ",
            },
            {
              code: true,
              text: "reject",
            },
            {
              text: " on the first line:",
            },
          ],
        },
        {
          type: "code-block",
          children: [
            {
              text: "new Promise(function (resolve, reject) {    \n   window.setTimeout(function createSundae(flavor = 'chocolate') {      \n   const sundae = {};        \n      if ( /* iceCreamConeIsEmpty(flavor) */ ) {           \n        reject(`Sorry, we're out of that flavor :-(`);  \n      }        \n      resolve(sundae);  \n  }, Math.random() * 2000);\n});",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "So the ",
            },
            {
              code: true,
              text: "reject",
            },
            {
              text: " method is used when the request ",
            },
            {
              text: "could not be completed",
              italic: true,
            },
            {
              text: ". Notice that even though the request fails, we can still return data - in this case we're just returning text that says we don't have the desired ice cream flavor.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "A Promise constructor takes a function that will run and then, after some amount of time, will either complete successfully (using the ",
            },
            {
              code: true,
              text: "resolve",
            },
            {
              text: " method) or unsuccessfully (using the ",
            },
            {
              code: true,
              text: "reject",
            },
            {
              text: "method). When the outcome has been finalized (the request has either completed successfully or unsuccessfully), the promise is now ",
            },
            {
              text: "fulfilled",
              italic: true,
            },
            {
              text: " and will notify us so we can decide what to do with the response.",
            },
          ],
        },
        {
          type: "heading-two",
          children: [
            {
              text: "Promises Return Immediately",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "The first thing to understand is that a Promise will immediately return an object.",
            },
          ],
        },
        {
          type: "code-block",
          children: [
            {
              text: "const myPromiseObj = new Promise(function (resolve, reject) {   \n // sundae creation code\n});",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "That object has a ",
            },
            {
              code: true,
              text: ".then()",
            },
            {
              text: " method on it that we can use to have it notify us if the request we made in the promise was either successful or failed. The ",
            },
            {
              code: true,
              text: ".then()",
            },
            {
              text: " method takes two functions:",
            },
          ],
        },
        {
          type: "numbered-list",
          children: [
            {
              type: "list-item",
              children: [
                {
                  type: "list-item-child",
                  children: [
                    {
                      type: "paragraph",
                      children: [
                        {
                          text: "the function to run if the request completed successfully",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "list-item-child",
                  children: [
                    {
                      type: "paragraph",
                      children: [
                        {
                          text: "the function to run if the request failed to complete",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "code-block",
          children: [
            {
              text: "mySundae.then(function(sundae) {  \n  console.log(`Time to eat my delicious ${sundae}`);\n},\nfunction(msg) { \n   console.log(msg); \n   self.goCry(); // not a real method\n});",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "As you can see, the first function that's passed to ",
            },
            {
              code: true,
              text: ".then()",
            },
            {
              text: " will be called and passed the data that the Promise's ",
            },
            {
              code: true,
              text: "resolve",
            },
            {
              text: " function used. In this case, the function would receive the ",
            },
            {
              code: true,
              text: "sundae",
            },
            {
              text: " object. The second function will be called and passed the data that the Promise's ",
            },
            {
              code: true,
              text: "reject",
            },
            {
              text: ' function was called with. In this case, the function receives the error message "Sorry, we\'re out of that flavor :-(" that the ',
            },
            {
              code: true,
              text: "reject",
            },
            {
              text: " function was called with in the Promise code above",
            },
          ],
        },
      ],
    },
  },
};

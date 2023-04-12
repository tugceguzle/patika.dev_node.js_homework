// callback 
// const posts = [
//   { id: "1", content: "post-1" },
//   { id: "2", content: "post-2" },
//   { id: "3", content: "post-3" },
// ];

// const listPosts = () => {
//   posts.map((post) => {
//     console.log(post.content);
//   });
// };

// const addPost = (newPost, callback) => {
//   posts.push(newPost);
//   callback();
// };

// addPost({ id: "4", content: "post-4" }, listPosts);




// promise 
// const posts = [
//   { id: "1", content: "post-1" },
//   { id: "2", content: "post-2" },
//   { id: "3", content: "post-3" },
// ];
// const listPosts = () => {
//     posts.map((post) => {
//       console.log(post.content);
//     });
//   };
  
//   const addPost = (newPost) => {
//     const promise1 = new Promise((resolve, reject) => {
//       //posts.push(newPost);
//       reject('BIR HATA OLUSTU');
//     });
  
//     return promise1;
//   };
  
//   addPost({ id: "5", content: "post-5" })
//     .then(() => {
//       console.log("YENI LISTE");
//       listPosts();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
  
//   listPosts();




// async await 
const posts = [
      { id: "1", content: "post-1" },
      { id: "2", content: "post-2" },
      { id: "3", content: "post-3" },
    ];

  
  const listPosts = () => {
    posts.map((post) => {
      console.log(post.content);
    });
  };
  
  const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
      posts.push(newPost);
      resolve(posts);
      //reject('BIR HATA OLUSTU');
    });
  
    return promise1;
  };
  
  async function showPosts() {
    try {
      await addPost({ id: "6", content: "post-6" });
      listPosts();
    } catch (error) {
      console.log(error);
    }
  }
  
  showPosts();
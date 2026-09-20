const POSTS_KEY = "blogPosts";

export const getStoredPosts = () => {
  const storedPosts = localStorage.getItem(POSTS_KEY);

  return storedPosts ? JSON.parse(storedPosts) : [];
};

export const savePosts = (posts) => {
  localStorage.setItem(
    POSTS_KEY,
    JSON.stringify(posts)
  );
};

export const addPost = (post) => {
  const posts = getStoredPosts();

  const updatedPosts = [...posts, post];

  savePosts(updatedPosts);

  return updatedPosts;
};

export const initializePosts = (defaultPosts) => {
  const existingPosts = getStoredPosts();

  const updatedDefaultPosts = defaultPosts.map(
    (post) => ({
      ...post,
      status: post.status || "published",
    })
  );

  const mergedPosts = [...existingPosts];

  updatedDefaultPosts.forEach((defaultPost) => {
    const existingIndex = mergedPosts.findIndex(
      (post) => post.slug === defaultPost.slug
    );

    if (existingIndex === -1) {
      mergedPosts.push(defaultPost);
    } else {
      // Make sure existing default posts have a status
      if (!mergedPosts[existingIndex].status) {
        mergedPosts[existingIndex] = {
          ...mergedPosts[existingIndex],
          status: "published",
        };
      }
    }
  });

  savePosts(mergedPosts);
};
let rerenderEntireTree = ()=> {
  console.log('State changet');
  
}

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi i on STATE", likeCount: 1 },
      { id: 2, message: "Marina", likeCount: 40 },
      { id: 3, message: "Drigailo", likeCount: 500 },
      { id: 4, message: "Dostala", likeCount: 50 },
      { id: 5, message: "Menia", likeCount: 700 },
      { id: 6, message: "!!!!!!!", likeCount: 700 },
      { id: 7, message: "!!!!!!!", likeCount: 700 },
      { id: 8, message: "!!!!!!!", likeCount: 700 },
      { id: 9, message: "!!!!!!!", likeCount: 700 },
      { id: 10, message: "!!!!!!!", likeCount: 700 },
    ],
    newPostText: "tut pishi",
  },

  messagePage: {
    dialogs: [
      { id: 1, name: "Marina A" },
      { id: 2, name: "Anton" },
      { id: 3, name: "Sasha A" },
      { id: 4, name: "Viktoria" },
      { id: 5, name: "Max" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Marina" },
      { id: 3, message: "Drigailo" },
      { id: 4, message: "Dostala" },
      { id: 5, message: "Menia" },
    ],
  },

  FriendList: {
    friends: [
      { id: 1, name: "Marina A" },
      { id: 2, name: "Anton" },
      { id: 3, name: "Sasha A" },
      { id: 4, name: "Viktoria" },
      { id: 5, name: "Max" },
      { id: 6, name: "Andruha" },
    ],
  },
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = ''
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscibe = (observer)=> {
      rerenderEntireTree = observer
}

export default state;

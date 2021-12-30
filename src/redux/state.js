let store = {
    _state: {
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
        }
    },
    _callSubscriber () {
      console.log('State changet');
    },
    getState () {
        return this._state;
    },

    subscibe (observer) {
      this._callSubscriber = observer
    },

    dispatch (action) {
      if(action.type==='ADD-POST') {
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likeCount: 0,
        };
      
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
      } else if( action.type==='UPDATE-NEW-POST-TEXT') {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
      }
    }
    
}

export default store;
window.state = store;

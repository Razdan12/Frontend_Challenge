import create, { SetState } from "zustand";

interface StoreState {
  image: string | null;
  title: string | null;
  description: string | null;
  author: string | null;
  content: string | null;
 
}

interface StoreActions {
  setImage: (image: string | null) => void;
  setTitle: (title: string | null) => void;
  setDescription: (description: string | null) => void;
  setAuthor: (author: string | null) => void;
  setContent: (content: string | null) => void;
  removeImage: () => void;
  removeTitle: () => void;
  removeDescription: () => void;
  removeAuthor: () => void;
  removeContent: () => void;
}

const store = create<StoreState & StoreActions>(
  (set: SetState<StoreState & StoreActions>) => ({
    image: localStorage.getItem("image") || null,
    title: localStorage.getItem("title") || null,
    description: localStorage.getItem("description") || null,
    author: localStorage.getItem("author") || null,
    content: localStorage.getItem("content") || null,

    setImage: (image) => {
      if (image) {
        localStorage.setItem("image", image);
      } else {
        localStorage.removeItem("image");
      }
      set({ image });
    },
    setTitle: (title) => {
        if(title) {
            localStorage.setItem("title" , title);
        } else {
            localStorage.removeItem("title");
        }
        set({title})
    },
    setDescription: (description) => {
        if (description) {
            localStorage.setItem("description" , description);
        } else {
            localStorage.removeItem("description")
        }
        set({description})
    },
    setAuthor: (author) => {
        if (author) {
            localStorage.setItem("author" , author);
        } else {
            localStorage.removeItem("author")
        }
        set({author})
    },
    setContent: (content) => {
        if(content) {
            localStorage.setItem("content" , content);
        } else {
            localStorage.removeItem("content")
        }
        set({content})
    },
    removeImage: () => {
      localStorage.removeItem("image");
      set({ image: null });
    },
    removeTitle: () => {
        localStorage.removeItem("title");
        set({title: null});
    },
    removeDescription: () => {
        localStorage.removeItem("description");
        set({description: null})
    },
    removeAuthor: () => {
        localStorage.removeItem("author");
        set({author: null})
    },
    removeContent: () => {
        localStorage.removeItem("content")
        set({ content: null })
    },
  })
);

export const useStore = store;

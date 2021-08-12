import createDataContext from "./createDataContext";

const blogReducer = (
  state: Array<{ title: string }>,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    case "delete_blogpost":
    case "update_blogpost":
    default:
      return state;
  }
};

const addBlogPost = (dispatch: any) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);

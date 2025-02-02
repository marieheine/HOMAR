import { EditorState, ContentState, convertFromRaw } from "draft-js";

const covertDataFromRaw = data => {
  if (!data) {
    // console.log("Empty data string");
    return { EditorData: EditorState.createEmpty() };
  }
  let DataFromRaw = convertFromRaw(JSON.parse(data));
  let EditorData = EditorState.createWithContent(DataFromRaw);

  return {
    EditorData
  };
};

const displayableContentFromString = text => {
  return EditorState.createWithContent(ContentState.createFromText(text));
};

export const requestDisplayableContent = rawContent => {
  if (rawContent) {
    return {
      content: covertDataFromRaw(rawContent).EditorData
    };
  } else {
    let altContent = "Null content data 😿";
    EditorState.createWithContent(ContentState.createFromText(altContent));
  }
};

/* Used only in displaying posts */
// Refactor!
export const requestDisplayablePostByLanguage = (post, language) => {
  let postTitle;
  let postContent;
  let postSummary;
  let hasContent;

  if (post) {
    var dataSource;
    switch (language) {
      case "pl":
        dataSource = post.polish;
        break;
      case "en":
        // Check here if data isnt empty, itf is - fallback to polish version
        // Also could add a notification that its not available in english

        if (post.english.title !== "" && post.english.summary !== "") {
          dataSource = post.english;
        } 
        else {

          let altTitle = post.polish.title;
          let altSummary = "Not translated yet, sorry 😿";

          return {
            title: covertDataFromRaw(altTitle).EditorData,
            summary: displayableContentFromString(altSummary),
            content: EditorState.createEmpty(),
            hasContent: false
          };
        }
        break;
      default:
        dataSource = post.polish;
        break;
    }

    // console.log(dataSource);

    postTitle = covertDataFromRaw(dataSource.title).EditorData;
    postSummary = covertDataFromRaw(dataSource.summary).EditorData;
    postContent = covertDataFromRaw(dataSource.content).EditorData;

    hasContent = postContent.getCurrentContent().hasText();
  } else {
    postTitle = EditorState.createEmpty();
    postSummary = EditorState.createEmpty();
    postContent = EditorState.createEmpty();
  }

  return {
    title: postTitle,
    summary: postSummary,
    content: postContent,
    hasContent
  };
};

/* STEP 1 */
export const requestPostDataByLanguage = (post, language) => {
  if (post) {
    switch (language) {
      case "pl":
        return post.polish;
      case "en":
        return post.english;
      default:
        return null;
    }
  } else {
    return null;
  }
};

export const requestEditablePostContents = post => {
  let postTitle;
  let postContent;
  let postSummary;

  if (post) {
    postTitle = covertDataFromRaw(post.title).EditorData;
    postSummary = covertDataFromRaw(post.summary).EditorData;
    postContent = covertDataFromRaw(post.content).EditorData;
  } else {
    postTitle = EditorState.createEmpty();
    postSummary = EditorState.createEmpty();
    postContent = EditorState.createEmpty();
  }
  return {
    title: postTitle,
    summary: postSummary,
    content: postContent
  };
};

// DROP THIS
export const requestEditablePostByLanguage = (post, language) => {
  let postTitle;
  let postContent;
  let postSummary;

  // console.log("asdasd");
  // console.log(post);

  if (post) {
    var dataSource;
    switch (language) {
      case "pl":
        dataSource = post.polish;
        break;
      case "en":
        dataSource = post.english;
        break;
      default:
        dataSource = post.polish;
        break;
    }

    postTitle = covertDataFromRaw(dataSource.title).EditorData;
    postSummary = covertDataFromRaw(dataSource.summary).EditorData;
    postContent = covertDataFromRaw(dataSource.content).EditorData;
  } else {
    postTitle = EditorState.createEmpty();
    postSummary = EditorState.createEmpty();
    postContent = EditorState.createEmpty();
  }
  return {
    title: postTitle,
    summary: postSummary,
    content: postContent
  };
};

// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateBlog = `subscription OnCreateBlog {
  onCreateBlog {
    id
    name
    posts {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const onUpdateBlog = `subscription OnUpdateBlog {
  onUpdateBlog {
    id
    name
    posts {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const onDeleteBlog = `subscription OnDeleteBlog {
  onDeleteBlog {
    id
    name
    posts {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
    id
    title
    blog {
      id
      name
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
    id
    title
    blog {
      id
      name
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
    id
    title
    blog {
      id
      name
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
    id
    content
    post {
      id
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    id
    content
    post {
      id
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
    id
    content
    post {
      id
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const onCreatePricewatch = `subscription OnCreatePricewatch {
  onCreatePricewatch {
    id
    name
    url
    xpath
    posts {
      items {
        id
        date
        value
      }
      nextToken
    }
  }
}
`;
export const onUpdatePricewatch = `subscription OnUpdatePricewatch {
  onUpdatePricewatch {
    id
    name
    url
    xpath
    posts {
      items {
        id
        date
        value
      }
      nextToken
    }
  }
}
`;
export const onDeletePricewatch = `subscription OnDeletePricewatch {
  onDeletePricewatch {
    id
    name
    url
    xpath
    posts {
      items {
        id
        date
        value
      }
      nextToken
    }
  }
}
`;
export const onCreateWatchValue = `subscription OnCreateWatchValue {
  onCreateWatchValue {
    id
    date
    value
    values {
      id
      name
      url
      xpath
      posts {
        nextToken
      }
    }
  }
}
`;
export const onUpdateWatchValue = `subscription OnUpdateWatchValue {
  onUpdateWatchValue {
    id
    date
    value
    values {
      id
      name
      url
      xpath
      posts {
        nextToken
      }
    }
  }
}
`;
export const onDeleteWatchValue = `subscription OnDeleteWatchValue {
  onDeleteWatchValue {
    id
    date
    value
    values {
      id
      name
      url
      xpath
      posts {
        nextToken
      }
    }
  }
}
`;

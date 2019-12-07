// tslint:disable
// this is an auto generated file. This will be overwritten

export const createBlog = `mutation CreateBlog(
  $input: CreateBlogInput!
  $condition: ModelBlogConditionInput
) {
  createBlog(input: $input, condition: $condition) {
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
export const updateBlog = `mutation UpdateBlog(
  $input: UpdateBlogInput!
  $condition: ModelBlogConditionInput
) {
  updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = `mutation DeleteBlog(
  $input: DeleteBlogInput!
  $condition: ModelBlogConditionInput
) {
  deleteBlog(input: $input, condition: $condition) {
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
export const createPost = `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
export const updatePost = `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
export const deletePost = `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
export const createComment = `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
export const updateComment = `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
export const deleteComment = `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
export const createPricewatch = `mutation CreatePricewatch(
  $input: CreatePricewatchInput!
  $condition: ModelPricewatchConditionInput
) {
  createPricewatch(input: $input, condition: $condition) {
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
export const updatePricewatch = `mutation UpdatePricewatch(
  $input: UpdatePricewatchInput!
  $condition: ModelPricewatchConditionInput
) {
  updatePricewatch(input: $input, condition: $condition) {
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
export const deletePricewatch = `mutation DeletePricewatch(
  $input: DeletePricewatchInput!
  $condition: ModelPricewatchConditionInput
) {
  deletePricewatch(input: $input, condition: $condition) {
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
export const createWatchValue = `mutation CreateWatchValue(
  $input: CreateWatchValueInput!
  $condition: ModelWatchValueConditionInput
) {
  createWatchValue(input: $input, condition: $condition) {
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
export const updateWatchValue = `mutation UpdateWatchValue(
  $input: UpdateWatchValueInput!
  $condition: ModelWatchValueConditionInput
) {
  updateWatchValue(input: $input, condition: $condition) {
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
export const deleteWatchValue = `mutation DeleteWatchValue(
  $input: DeleteWatchValueInput!
  $condition: ModelWatchValueConditionInput
) {
  deleteWatchValue(input: $input, condition: $condition) {
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

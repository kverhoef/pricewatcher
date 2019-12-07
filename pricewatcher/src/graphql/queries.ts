// tslint:disable
// this is an auto generated file. This will be overwritten

export const echo = `query Echo($msg: String) {
  echo(msg: $msg)
}
`;
export const getBlog = `query GetBlog($id: ID!) {
  getBlog(id: $id) {
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
export const listBlogs = `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      posts {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      post {
        id
        title
      }
    }
    nextToken
  }
}
`;
export const getPricewatch = `query GetPricewatch($id: ID!) {
  getPricewatch(id: $id) {
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
export const listPricewatchs = `query ListPricewatchs(
  $filter: ModelPricewatchFilterInput
  $limit: Int
  $nextToken: String
) {
  listPricewatchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      url
      xpath
      posts {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getWatchValue = `query GetWatchValue($id: ID!) {
  getWatchValue(id: $id) {
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
export const listWatchValues = `query ListWatchValues(
  $filter: ModelWatchValueFilterInput
  $limit: Int
  $nextToken: String
) {
  listWatchValues(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      value
      values {
        id
        name
        url
        xpath
      }
    }
    nextToken
  }
}
`;

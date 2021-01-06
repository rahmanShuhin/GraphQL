import { gql } from "@apollo/client";
const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorID: ID!) {
    addBook(name: $name, genre: $genre, authorID: $authorID) {
      name
      id
    }
  }
`;

const getBookDetails = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export { getAuthorQuery, getBooksQuery, addBookMutation, getBookDetails };

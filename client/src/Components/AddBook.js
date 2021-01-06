import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  getAuthorQuery,
  addBookMutation,
  getBooksQuery,
} from "../Queries/Queries";
const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorQuery);
  const [addTodo, { data1 }] = useMutation(addBookMutation);
  // console.log(data);
  const handleAddBook = (e) => {
    e.preventDefault();
    addTodo({
      variables: {
        name: e.target[0].value,
        genre: e.target[1].value,
        authorID: e.target[2].value,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
    // console.log(details);
  };
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleAddBook}>
          <input type="text" placeholder="Books Name" required />
          <select name="genre" required>
            <option value="Romance">Romance</option>
            <option value="Education">Education</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
          <select name="author" required>
            <option>Select Author</option>
            {data?.authors &&
              data.authors.map((x) => (
                <option key={x.id} value={x.id}>
                  {x.name}
                </option>
              ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AddBook;

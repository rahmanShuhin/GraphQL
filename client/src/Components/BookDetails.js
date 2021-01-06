import React from "react";
import { useQuery } from "@apollo/client";
import { getBookDetails } from "../Queries/Queries";
const BookDetails = (props) => {
  const { loading, error, data } = useQuery(getBookDetails, {
    variables: { id: props.id },
  });
  console.log(data);
  return (
    <div>
      {props.id === "" ? (
        <h1>Nothing selected</h1>
      ) : (
        <div>
          {data && (
            <div>
              <h2>{data.book.name}</h2>
              <h5>{data.book.genre}</h5>
              <h3>Author Name : {data.book.author.name}</h3>
              <h4>Age : {data.book.author.age}</h4>
              <h4>Author Other Book List</h4>
              <ul>
                {data.book.author.books.map((x) => (
                  <li key={x.id}>{x.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookDetails;

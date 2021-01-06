import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../Queries/Queries";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState("");
  // console.log(data);
  return (
    <div>
      {loading && <p>Loading...</p>}
      <h1>Shuhin's Reading List of Books </h1>
      <ul>
        {data?.books &&
          data.books.map((x) => (
            <li key={x.id} onClick={() => setSelected(x.id)}>
              {x.name}
            </li>
          ))}
      </ul>
      <BookDetails id={selected}></BookDetails>
    </div>
  );
};

export default BookList;

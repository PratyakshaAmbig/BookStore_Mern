import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../Components/home/BooksTable";
import BooksCard from "../Components/home/BooksCard";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table')

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        console.log(response);
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4 bg-gray-100">
  <div className="flex justify-center items-center gap-x-4">
    <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => setShowType('table')}>Table</button>
    <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => setShowType('card')}>Card</button>
  </div>
  <div className="flex justify-between item-center">
    <h1 className="text-3xl my-8 text-blue-700 shadow-md">Books List</h1>
    <Link to="/books/create">
  <MdOutlineAddBox className="text-sky-800 text-4xl shadow-md" />
</Link>
  </div>
  {loading ? (<Spinner />) : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)}
</div>

  );
};

export default Home;

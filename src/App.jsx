import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Characters, LikedCharacters } from "./pages";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "./queries";

function App() {
  const [pages, setPages] = useState(1);
  const [countLikes, setCountLikes] = useState(null);

  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: pages },
  });
  const charList = data ? data.characters?.results : [];

  const charLikedList = charList.reduce((arr,el ) => {
    const charItem = localStorage.getItem(el.name);
     if(charItem) {
       arr.push(JSON.parse(charItem))
     }
     return arr
   }, []);

  useEffect(() => {
    if(charLikedList.length) setCountLikes(charLikedList.length)
  }, [charLikedList])
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Characters
            charList={charList}
            loading={loading}
            error={error}
            pages={pages}
            setPages={setPages}
            countLikes={countLikes}
            setCountLikes={setCountLikes}
          />
        }
      />
      <Route
        path="/LikedCharacters"
        element={
          <LikedCharacters
            charList={charLikedList}
            countLikes={countLikes}
            setCountLikes={setCountLikes}
          />
        }
      />
    </Routes>
  );
}

export default App;

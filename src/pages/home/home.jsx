import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Feeds from "../../components/Feeds/Feed";
import { GlobalContext } from "../../context/context";
import Loader from "../../components/cards/loader/loader";

const Home = () => {
  const [category, setCategory] = useState("top Trending latest");
  const { searchInput, setSearchInput ,loading,
    setLoading} = useContext(GlobalContext);
  
  useEffect(() => {
    setSearchInput("  ");
  }, [category]);
  return (
    <div>
      {loading && <Loader/>}
      <Navbar setCategory={setCategory} />
      <Feeds category={category} />
    </div>
  );
};

export default Home;

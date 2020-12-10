import React from "react";
import EventCard from "./eventCard";
import WorldMap from "./WorldMap";

function Home() {
  return (
    <>
      <WorldMap />
      <EventCard />
    </>
  );
}

export default Home;
//a link to eventCard breaks because data
{
  /* <Route exact path="/">
<Home />
</Route>
<Route path="/news">
<NewsFeed />
</Route> */
}

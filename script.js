console.log("hello worleziejid");

const handleClick = () => {
  console.log("clicked");
  var search = document.getElementById("search").value;
  var results = document.getElementById("results");
  results.innerHTML = search;
};

console.log("hello worleziejid");

const handleClick = () => {
  console.log("clicked");
  var search = document.getElementById("search").value;
  var el = document.getElementById("results");
  el.innerHTML = search;
};

console.log("hello worleziejid");

const handleClick = () => {
  console.log("clicked");
  var search = document.getElementById("search").value;
  var element = document.getElementById("results");
  element.innerHTML = search;
};

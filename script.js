console.log("hello world");

const handleClick = () => {
  console.log("clicked");
  var search = document.getElementById("search").value;
  var results = document.getElementById("results");
  results.innerHTML = "You searched for: " + search;
};

const fetchlist = async () => {
  const res = await fetch("/items");
  const data = await res.json();
  console.log(data);
};

fetchlist();

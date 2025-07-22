import { useState } from "react";
import { useEffect } from "react";

const Filter = () => {
  const [user, setuser] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setuser(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleOnchange = (e) => {
    setInputValue(e.target.value);
  };
  const FilterData = user.filter((ele) => {
    return ele.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={inputValue}
        onChange={handleOnchange}
      />
      <ul>
        {FilterData.map((ele, id) => {
          return <li key={ele.id}>{ele.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Filter;

import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchFood from "./components/SearchFood";

const BASE_URL = process.env.REACT_APP_API_URL;

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
        console.log(json);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
        const searchValue = e.target.value;
        console.log(searchValue);
        if(searchValue === ""){
          setFilteredData(null);
        }
        const filter = data?.filter((food) =>
          food.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredData(filter);
  };
  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if(error) return <div>{error}</div>
  if(loading) return <div>loading....</div>
  return (
    <>
    <MainContainer>
      <TopContainer>
        <div className="logo">
          <img src="/Foody Zone.svg" alt="logo" />
        </div>
        <div className="search">
          <input onChange={searchFood} placeholder="Search food" />
        </div>
      </TopContainer>
      <FilterContainer>
        {filterBtns.map((value) => (
            <Button
              isSelected={selectedBtn === value.type}
              key={value.name}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </Button>
          ))}
      </FilterContainer>
    </MainContainer>
     <SearchFood data={filteredData}/>
    </>
    
  );
}

export default App;

export const MainContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const TopContainer = styled.section`
  min-height:140px;
  display:flex;
  justify-content:space-between;
  padding:16px;
  align-items:center;
  .search{
    input {
      backgroud-color: transparent;
      border: 1px solid red;
      border-radius:5px;
      height:24px;
      font-size:16px;
      padding: 6px 12px;
      border:none;
    }
  }
`;
const FilterContainer = styled.section`
    display:flex;
    justify-content:center;
    gap:12px;
    padding-bottom: 40px;
`;
export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? "#f22f2f" : "#ff4343")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #f22f2f;
  }
`;


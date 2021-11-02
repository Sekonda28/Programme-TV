import "./App.css";
import data from "./assets/data.json";
import Header from "./components/Header";
import Content from "./components/Content";

const status = (elem) => {
  if (elem.isUnseen) {
    return <li>Inédit</li>;
  } else if (elem.direct) {
    return <li>Direct</li>;
  }
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        {data.map((elem, index) => {
          return (
            <Content
              key={index}
              time={elem.time}
              title={elem.title}
              type={elem.type}
              duration={elem.duration}
              image={elem.image}
              status={status(elem)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

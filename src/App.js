import './App.css';

let currDate= new Date(2023,9,18,13);
currDate=currDate.getHours();
let greeting='';
const cssStyle={};

if (currDate >=1&& currDate<12){
  greeting="Good Morning!!"
  cssStyle.color='green'
}else if(currDate>12 && currDate<16){
  greeting="Good Afternoon!!"
  cssStyle.color='Orange'
}
else{
  greeting=" Good Evening!!"
  cssStyle.color='violet'
}
function App() {
  return (
    <>
    <div>
    <h1>Hello Sir, <span style={cssStyle}>{greeting} </span> </h1>
    </div>
    </>
  
  );
}

export default App;

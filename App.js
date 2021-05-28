import logo from './logo.svg';
import react from 'react';
import './App.css';
import BtnFunc from './blog.js';
import {TopBar,Footer1} from './blog.js';

function App(){
 
  return(
    <div className="App">
    <h1>hello..react!!</h1>
    <BtnFunc/>
    <TopBar />
    <Footer1 />    
    
    
    </div>
    
  )
}
 export default App;

 

// function App() {
//   const name1 = 'Sri';

//   const myfun1 = (first1,last1)=>{
//        return `${first1} ${last1}`;
//   }
//   
//     const styles= {display:'flex' }
//   return (
//     <div>
//       <header className="hh">
//         <h1>{name1} {myfun1('Vishnu','Thati')}</h1>
//       </header>
//       <div style={styles}>
//       {shoplaneData.map((item)=>(
//            <div style={{width:'200px' , margin:'0 20px 0 0'}}>
//              <img src={item.preview}
//                width='200' />
//               <h3>{item.name}</h3>
//               <h5>{item.price}</h5>
//            </div>
//       ))}
//       </div>
//       <footer>&copy; copyright @2021</footer>
//     </div>
//   );
// }

//export default App;

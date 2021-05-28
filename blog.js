import React, { Component, useState } from 'react';
import styles from'./blog1.module.css';
import './blog.css';

 const data = [
        {
            name:'Virat Kohli',
            id:'1',
            retired: 'no',
            profile:"https://www.crictracker.com/wp-content/uploads/2021/03/Virat-Kohli-1-1.jpg",
            about:"Virat Kohli is an Indian cricketer and the current captain of the India national team. A right-handed top-order batsman, Kohli is regarded as one of the best contemporary batsmen in the world. "
        },
        {
            name:'Dhoni',
            id:'2',
            retired: 'yes',
            profile:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-187943,resizemode-1,msid-73295900/news/sports/ms-dhoni-dropped-from-bccis-central-contracts-list.jpg",
            about:"Mahendra Singh Dhoni, is a former Indian international cricketer who captained the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014."
        },
        {
            name:'Adam Gilchrist',
            id:'3',
            retired: 'yes',
            profile:'https://i.pinimg.com/236x/15/24/2c/15242c790b23691cf5eb49755c2b197b--cricket-sport-test-cricket.jpg',
            about:'Adam Craig Gilchrist AM is an Australian cricket commentator and former international cricketer and captain of the Australia national cricket team.'
        }
    ]

//   export  const PlacingImg = () => {
//         const [grid,setgrid] = useState('...')
//         return ( 
//             <div>
//                 <h2>{grid}</h2>
//                 <button onClick={()=> setgrid('vishnu11')}>click !!</button>
//             </div>
//          );
//     }
     
    
class BtnFunc extends Component {
    constructor(props) {
        super(props);
        this.state = {
             name: '..'
          }
    }
    render() { 
        return (<div>
            <h1>{this.state.name}</h1>
            <button onClick={()=>{
                if(this.state.name == "vishnu")
                this.setState({name:'..'})
                else
                this.setState({name:'vishnu'})
            }}>Name</button>
        </div>  );
    }
}
 
export default BtnFunc;




 export const TopBar = (props) => {
    return ( 
        <h2>Blog Sections!</h2>
     );
}



export const Footer1 = ()=>{
    
    const [grid0,setgrid1] = useState('');
    const [grid1,setgrid2] = useState('');
    const [grid2,setgrid3] = useState('');
    let a =[grid0,grid1,grid2];
    let b =[setgrid1,setgrid2,setgrid3]
   
    return ( 
        <div style= {{display:"flex",flexDirection:'column'}}>
        <h2>My Fav Players!</h2>
        <div >
        {/* <button id="1" onClick={()=> {
                        setgrid1('1')
                    }}>click !!</button>
        <button id="2" onClick={()=> {
                        setgrid2('2')
                    }}>click !!</button> */}
        
                    
            {data.map((item,id,data)=>{
               
                return (
                    <div className="cards">
                    <div className="text">
                        <div className={styles.imageSection}>
                    <img src={a[id]} alt="Players" width="200px"/>
                    <div>
                    <button id={id} className={styles.buttons} onClick={()=> {
                        if(a[id] === '')
                          b[id](data[id].profile)
                          else
                          b[id]('')
                    }}>View/Hide Image!</button></div>
                    </div>
                    <p className={styles.one}>Player name:<h3>{item.name}</h3></p>
                    
                    <p className= 'one'>Ranking:<h5>{item.id}</h5></p>
                    <p>retirement: <b>{item.retired}</b></p>
                    <p><h5>About:</h5>{item.about}</p>
                    
                    
                    </div>
                    </div>
                )
            })}
        </div>
        </div>
     );
}




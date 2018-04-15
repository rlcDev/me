import React, { Component } from 'react';
import AboutMeContent from './Resources/Content/content'
import Article from './Resources/Article/article'


class AboutMe extends Component {

render(){
    return(
        <div style={ArticlesContainer}>
            {
                AboutMeContent.map( (elt)=>{
                    return(Article(elt))
                })
            }
            <p style={moreStyle}>Want to know more, making a project ? Ask me </p>
        </div>      
    );
  }
}
export default AboutMe;

 const ArticlesContainer = {
     marginTop : '70px', // Header fixed
     marginLeft : '50%',
     width : '50%',
     marginBottom : '50px', // get some space
     transform : 'translate(-50%)'
 }

 const moreStyle ={
     textAlign : 'center'
 }
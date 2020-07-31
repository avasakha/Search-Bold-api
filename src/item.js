import React,{Component} from 'react';
class Item extends Component{
    
    render(){ 
        const{item,name}=this.props
      const string=item.volumeInfo.title.toLowerCase()
      const reactStringReplace = require('react-string-replace')
        return<div >
         {reactStringReplace(`${string}`,`${name}`,(match, i) => (
  <span key={i} style={{ fontWeight:"bold" }}>{match}</span>
))}
        </div>
    }
}
export{Item}
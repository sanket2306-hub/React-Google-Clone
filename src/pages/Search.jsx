import React,{useState} from 'react'
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";
function Search({hidebuttons}) {

  const[input,setInput] = useState("");
  const [{},dispatch] = useStateValue();
  const history=useHistory();
  const setsearch = (e) => {
    e.preventDefault();
    dispatch ({
      type:actionTypes.SET_SEARCH_TERM,
      term:input
    })
    history.push("/searchPage");  
    // alert(input)
  }
  return (
   <form className='search'>
      <div className='search__input'>
        <SearchIcon  className='searchicon'/>
        <input value={input} onChange={(e)=>setInput(e.target.value)}/>
        <MicIcon />
      </div>

      {
        !hidebuttons ? (<div className='search_button'>
              <Button type="submit" onClick={setsearch} variant='outlined'>Google search</Button>
              <Button  variant='outlined'>I am feeling lucky</Button>
          </div>) : (
              <div className='search_button' style={{display:'none'}}>
              <Button type="submit" onClick={setsearch} variant='outlined'>Google search</Button>
              
          </div>
          )
}
   </form>
  )
}

export default Search

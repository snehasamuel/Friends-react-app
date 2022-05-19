import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
   var [view,setView]=useState([])
   var [load,setLoad]=useState(true)
   axios.get("https://dummyapifriends.herokuapp.com/view").then((response)=>{
     console.log(response.data)
     setView(response.data)
     setLoad(false)
   })

  
   
  return (
    <div>
      <Header/>
      <br></br>
      <div className='container' >
        <div className='row'>
          <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
         
{setLoad ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> :  <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Friend's Name</th>
      <th scope="col">Nickname</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
  {view.map((value,key)=>{
 return <tr>
    <th scope="row">{value.name}</th>
    <td>{value.friendName}</td>
    <td>{value.friendNickName}</td>
    <td>{value.DescribeYourFriend}</td>
  </tr>
  


  })}
  </tbody>

</table>}
          </div>

        </div>

      </div>
    </div>
  )}


export default View
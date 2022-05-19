import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Add = () => {
  
  var [name,setName]=useState([])
  var [frndsname,setFrndsName]=useState([])
  var [nickname,setNickName]=useState([])
  var [desc,setDesc]=useState([])

  const addFriend=()=>{
    const data={"name":name,"friendName":frndsname,"friendNickName":nickname,"DescribeYourFriend":desc}
    axios.post("https://dummyapifriends.herokuapp.com/adddata").then((response)=>{
      console.log(response.data)
      if(response.data.status=="success")
      {
        alert("successfully Inserted")
      }
     else{
       alert("Insertion failed")
     }

    })

  }
  return (
    <div>
        <Header/>

        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(s)=>{setName(s.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Friend's Name</label>
                    <input onChange={(s)=>{setFrndsName(s.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Friend's Nickname</label>
                    <input onChange={(s)=>{setNickName(s.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Friend's Description</label>
                    <input onChange={(s)=>{setDesc(s.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={addFriend} className="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Add
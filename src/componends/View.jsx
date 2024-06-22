import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Feed from './Feed';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import AxiosService from '../utils/AxioxsSerivce';
import ApiRouter from '../utils/ApiRouter';
import { useEffect } from 'react';


function View() {
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [phone,setPhone] = useState("")
  let [company,setCompany] = useState("")
  let [address,setAddress] = useState("")
  let navigate = useNavigate("") 

  let {id} = useParams()

  let getData = async(id)=>{
try {
  let res = await AxiosService.get(`${ApiRouter.AXIOS_APP.path}/${id}`)
  if(res.status===200){
    setName(res.data.name)
    setEmail(res.data.email)
    setPhone(res.data.phone)
    setCompany(res.data.company)
    setAddress(res.data.address)
  }
} catch (error) {
  toast.error(error.response.message || "Internal Server Error")
}
  }

  useEffect(()=>{
    if(id)
      getData(id)
  },[])

  let handleSubmit = async()=>{
    try {
        let response = await AxiosService.put(`${ApiRouter.AXIOS_APP.path}/${id}`,{name,email,phone,company,address})
        if (response.status === 200){

          toast.success("Data Updated Successfully")
          navigate("/dashboard")
        }
    } catch (error) {
        console.error(error)
    }
}

  
  return <div className='displayGrid'>
    <div className='flex-container'>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="enter email"value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter Numer"value={phone} onChange={(e)=>setPhone(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" placeholder="Enter Numer"value={company} onChange={(e)=>setCompany(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Numer"value={address} onChange={(e)=>setAddress(e.target.value)} />
      </Form.Group>

      <Button variant="primary" onClick={handleSubmit}>
        Save and Submit
      </Button>
    </Form>

      </div>
      <div className='card-wrapper'>
        <Feed
        name={name}
        email={email}
        phone={phone}
        company={company}
        address={address}
        />

      </div>
    </div>
}

export default View
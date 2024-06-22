import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Feed from './Feed';
import AxiosService from '../utils/AxioxsSerivce';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ApiRouter from '../utils/ApiRouter';



function Create() {
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [phone,setPhone] = useState("")
  let [company,setCompany] = useState("")
  let [address,setAddress] = useState("")
  let navigate = useNavigate("") 

  let handleSubmit = async()=>{
    try {
        let response = await AxiosService.post(ApiRouter.AXIOS_APP.path,{name,email,phone,company,address})
        if (response.status === 201){

          toast.success("Data Saved Successfully")
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
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="enter email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter Numer" onChange={(e)=>setPhone(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" placeholder="Enter Numer" onChange={(e)=>setCompany(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Numer" onChange={(e)=>setAddress(e.target.value)} />
      </Form.Group>

      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>

      </div>
      <div className='card-front'>
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
    </div>
}

export default Create
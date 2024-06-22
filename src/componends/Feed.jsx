import React from 'react'
import Card from 'react-bootstrap/Card';

function Feed({name,email,phone,company,address}) {
 
  return <>
  <div className='feedCard'>
   <Card clssName='Card1'>
      <Card.Img variant="top" className='img' src="https://st2.depositphotos.com/1531183/5706/v/450/depositphotos_57064855-stock-illustration-unknown-person-silhouette-whith-red.jpg" />
      <Card.Body>
        <Card.Title className='home-tittle'>Name : {name}</Card.Title>
        <Card.Text>
         Email : {email}
        </Card.Text>
        <Card.Text>
         Phone : {phone}
        </Card.Text>
        <Card.Text>
         Company : {company}
        </Card.Text>
        <Card.Text>
         Address : {address}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  </>
}

export default Feed
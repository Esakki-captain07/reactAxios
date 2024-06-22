import React, { useEffect, useState } from 'react'
import Feed from './Feed'
import AxiosService from '../utils/AxioxsSerivce'
import ApiRouter from '../utils/ApiRouter'

function Home() {
  let [data,setData] = useState([])

  let getData = async ()=>{
    try {
      let res = await AxiosService.get(ApiRouter.AXIOS_APP.path)
if(res.status===200){
  setData(res.data)
}
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return<>
  <h1 className='home-tittle'>Employers</h1>
  <div className='home-wrapper'>
    {
      data.map((e,i)=>{
        return <div className='feed' key={i}>
          <Feed
          name={e.name}
          email={e.email}
          phone={e.phone}
          company={e.company}
          address={e.address} />
        </div>
      })
    }

  </div>
  
  </>
}

export default Home
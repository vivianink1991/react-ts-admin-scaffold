import React, { useEffect } from 'react'
import { getData } from '../services/api'
import { Button } from 'antd'

const Home: React.FC = () => {
  useEffect(() => {
    getData().then((res) => {
      console.log('res', res)
    })
  }, [])
  return (
    <>
      <div>home</div>
      <Button type="primary">click</Button>
    </>
  )
}

export default Home

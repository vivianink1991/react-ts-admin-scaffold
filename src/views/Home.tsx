import React, { useEffect } from 'react'
import { getData } from '../services/api'
import { Button } from 'antd'
import { useAppSelector } from 'store/hooks'
const Home: React.FC = () => {
  const userInfo = useAppSelector((state) => state.user)
  console.log('user', userInfo)
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

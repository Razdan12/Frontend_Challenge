import React from 'react'
import Layoutt from '../layout/Layout'
import { Avatar, Card } from 'antd';

const { Meta } = Card;
const Home: React.FC = () => {
  return (
    <>
    <Layoutt>
    <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
    />
  </Card>

    </Layoutt>

    </>
  )
}

export default Home
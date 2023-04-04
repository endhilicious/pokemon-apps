import type { NextPage } from 'next'
import { Header } from 'components/common/Header';
import Homepage from 'src/views/Homepage';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Homepage />
    </div>
  )
}

export default Home

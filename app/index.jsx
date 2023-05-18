import Welcome from '../components/welcome/Welcome'
import News from '../components/News/News'
import Drawer from '../components/Drawer/Drawer'

const Home = () => {
  return (
    <Drawer>
      <Welcome />
      <News />
    </Drawer>
  )
}

export default Home

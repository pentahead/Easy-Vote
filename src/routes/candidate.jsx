/* eslint-disable no-unused-vars */
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Button,
  Container,
  Carousel,
  Row,
  Col,
  ListGroup,
  Card,
  Accordion,
  DropdownButton,
  Navbar,
} from 'react-bootstrap'
import NavigationBar from '../components/Navbar'
import Footer from '../components/Footer'
import pic2 from '../assets/person_2.png'
import pic1 from '../assets/person_1.png'
import pic from '../assets/person.png'
import '../styles/candidate.css'
import { a } from '@react-spring/web'

export const Route = createFileRoute('/candidate')({
  component: Index,
})

const Candidates = () => {
  return (
    <div className="Candidates">
      <div className="container-candidates">
     
      <Card className='kiwkiw'>
        <Card.Img variant="top" src={pic} alt="Card image" />
        <Card.Body>
        <Card.Title className='card-title'>KI AGENG FARUQ </Card.Title>
        <div className='visi'>
          <table className="table-visi">
              <tr>
                  <th>
                      <div className="header-th">Visi</div>
                      <div className="content">Membangun komunitas yang inklusif, inovatif, dan berkelanjutan.</div>
                  </th>
              </tr>
              <tr>
                  <th>
                      <div className="header-th">Misi</div>
                      <div className="content">1. Mengembangkan program pendidikan dan pelatihan yang merata untuk semua kalangan.</div>
                      <div className="content">2. Meningkatkan penggunaan teknologi untuk efisiensi layanan masyarakat.</div>
                      <div className="content">3. Mendorong pelestarian lingkungan melalui kolaborasi dengan komunitas lokal</div>
                  </th>
              </tr>
           </table>
          </div>
        </Card.Body>
      </Card>
      <Card className='kiwkiw'>
        <Card.Img variant="top" src={pic1} alt="Card image" />
        <Card.Body>
        <Card.Title className='card-title'>MPU FAITH </Card.Title>
        <div className='visi'>
          <table className="table-visi">
              <tr>
                  <th>
                      <div className="header-th">Visi</div>
                      <div className="content">Menjadikan organisasi/lembaga sebagai pelopor perubahan yang progresif.</div>
                  </th>
              </tr>
              <tr>
                  <th>
                      <div className="header-th">Misi</div>
                      <div className="content">1. Meningkatkan transparansi dan akuntabilitas dalam pengelolaan sumber daya.</div>
                      <div className="content">2. Memperkuat kerjasama dengan stakeholder untuk mencapai tujuan bersama.</div>
                      <div className="content">3. Mewujudkan inovasi melalui penelitian dan pengembangan.</div>
                  </th>
              </tr>
           </table>
          </div>
        </Card.Body>
      </Card>
      <Card className='kiwkiw'>
        <Card.Img variant="top" src={pic2} alt="Card image" />
        <Card.Body>
        <Card.Title className='card-title'>RADEN MAS ZAINUN </Card.Title>
        <div className='visi'>
          <table className="table-visi">
              <tr>
                  <th>
                      <div className="header-th">Visi</div>
                      <div className="content">Menciptakan lingkungan yang harmonis, sejahtera, dan berdaya saing global.</div>
                  </th>
              </tr>
              <tr>
                  <th>
                      <div className="header-th">Misi</div>
                      <div className="content">1. Memperluas akses terhadap peluang ekonomi dan sosial.</div>
                      <div className="content">2. Mendorong kebijakan yang mendukung keberagaman dan toleransi.</div>
                      <div className="content">3. Mengembangkan infrastruktur yang mendukung daya saing regional dan global.</div>
                  </th>
              </tr>
           </table>
          </div>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}

function Index() {
  return (
    <>
      <NavigationBar />
      <Candidates />
      <Footer />
    </>
  )
}

export default Index;

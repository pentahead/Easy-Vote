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
        <Card.Title className='card-title'>RADEN MAS FARUQ </Card.Title>
        <div className='visi'>
          <table className="table-visi">
              <tr>
                  <th>
                      <div className="header-th">Visi</div>
                      <div className="content">1. Membangun negeri ramah</div>
                  </th>
              </tr>
              <tr>
                  <th>
                      <div className="header-th">Misi</div>
                      <div className="content">1. Membangun negeri ramah</div>
                  </th>
              </tr>
           </table>
          </div>
        </Card.Body>
      </Card>
      <Card className='kiwkiw'>
        <Card.Img variant="top" src={pic} alt="Card image" />
        <Card.Body>
        <Card.Title className='card-title'>RADEN MAS FARUQ </Card.Title>
        <div className='visi'>
          <table className="table-visi">
              <tr>
                  <th>
                      <div className="header-th">Visi</div>
                      <div className="content">1. Membangun negeri ramah</div>
                  </th>
              </tr>
              <tr>
                  <th>
                      <div className="header-th">Misi</div>
                      <div className="content">1. Membangun negeri ramah</div>
                  </th>
              </tr>
           </table>
          </div>
        </Card.Body>
      </Card>
      <Card className='kiwkiw'>
        <Card.Img variant="top" src={pic} alt="Card image" />
        <Card.Body>
        <Card.Title className='card-title'>RADEN MAS FARUQ </Card.Title>
        <div className='visi'>
          <table className="table-visi">
              <tr>
                  <th>
                      <div className="header-th">Visi</div>
                      <div className="content">1. Membangun negeri ramah</div>
                  </th>
              </tr>
              <tr>
                  <th>
                      <div className="header-th">Misi</div>
                      <div className="content">1. Membangun negeri ramah</div>
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

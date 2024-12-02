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

export const Route = createFileRoute('/candidate')({
  component: Index,
})

const Candidates = () => {
  return <div className="Candidates"></div>
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

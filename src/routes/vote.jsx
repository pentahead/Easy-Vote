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

export const Route = createFileRoute('/vote')({
  component: Index,
})

const Votes = () => {
  return <div className="Votes"></div>
}

function Index() {
  return (
    <>
      <NavigationBar />
      <Votes />
      <Footer />
    </>
  )
}

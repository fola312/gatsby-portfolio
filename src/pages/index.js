import React from "react"
import { Link } from "gatsby"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'tachyons';
import Layout from "../components/layout"
import Image from "../components/image"
import CardExample from "../components/card"
import Header from "../components/header";
import BodyCard from "../components/body";
import Tech from '../components/tech';


const IndexPage = () => (
  <Layout>
    <Header />
    <CardExample/>
    <Tech />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>      
    <BodyCard />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

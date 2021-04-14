import Link from 'next/link';
import Image from 'next/image'
import Head from "next/head";
import Layout from "../components/Layout";
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  console.log(allPostsData)
  return (
    <Layout home>
      <Head>
        <title>Fabio Biondi Home</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <h1>Home</h1>

      {
        allPostsData.map(({ id, date, title }) => {
          return <li key={id}>{title} - {date}</li>
        })
      }


      <hr/>
      <Link href="/posts/first-post">
        <button className="bg">Go First Post</button>
      </Link>

      <style jsx>{`
        .bg {
          background-color:  green;
        }  
      `}</style>
    </Layout>
  )
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

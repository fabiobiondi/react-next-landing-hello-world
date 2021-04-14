import Link from "next/link";
import Head from 'next/head'
import Layout from "../../components/Layout";

export default function FirstPost(props) {
  console.log(props)
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>

      {
        props.data.map(user => <li key={user.id}>{user.name}</li>)
      }
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}

export async function getServerSideProps() {
  const allPostsData = await fetch('https://jsonplaceholder.typicode.com/users')

  return {
    props: {
      data: await allPostsData.json()
    }
  }
}


/*
// STATIC SITE GEN
export async function getStaticProps() {
  const allPostsData = await fetch('https://jsonplaceholder.typicode.com/users')

  return {
    props: {
      data: await allPostsData.json()
    }
  }
}
*/

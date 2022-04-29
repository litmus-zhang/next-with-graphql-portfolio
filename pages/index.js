import Head from 'next/head'
import ProjectCard from '../components/project_Card'
import Section from '../components/section'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className='ml-12'>
      <h1 className='text-3xl font-bold text-left text-white  max-w-full pb-8'>I diagnose problems with  <span className='text-primary'> data, </span> 
and treat them with <span className='text-primary'> design and  code. </span>
</h1>
      <div>
        <Section title="My Work" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
        <ProjectCard/>
        <Section title="Clients" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
     </div>
    </div>
  )
}

import Head from 'next/head';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
    
  margin: auto;
  width: 30vw;
  height: 30vw;

  text-align: center;
`

const Home = () => (
  <Wrapper>
    <Head>
      <title>Sample NextJS App built with TypeScript</title>
    </Head>
    <h1>Hello World!</h1>
    <p>Pretty cool, huh?</p>
  </Wrapper>
);

export default Home;

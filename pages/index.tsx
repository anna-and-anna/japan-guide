import { Template, Nav, Main } from '../components';

export default function Home() {
  return (
    <Template>
      <Nav />
      <Main texts={TEXTS} />
    </Template>
  );
}

const TEXTS = [
  'Welcome!',
  'Here you will find some tips that I was able to summarize during my visits.',
  'Japan is a country with many different areas and climates, so there is a lot to experience on your vacation.',
  'I wish you much fun!',
];

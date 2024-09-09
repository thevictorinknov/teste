import alespLogo from '/alesp.svg';
import atlanticLogo from '/atlantic.jpg';
import camprevLogo from '/camprev.png';
import spprevLogo from '/spprev.png';

import Card from './components/Card';

export default function App() {
  const cards = [
    { title: 'Atlantic (Globais)', image: atlanticLogo, docsLocation: 'notFound' },
    { title: 'Alesp', image: alespLogo, docsLocation: '/docs/alesp/index.html' },
    { title: 'SPPREV', image: spprevLogo, docsLocation: '' },
    { title: 'CAMPREV', image: camprevLogo, docsLocation: '' }
  ];

  function redirectDocs (card) {
    console.log(card)
    window.location.href = card.docsLocation
  }

  return (
    <div className="h-screen flex items-center flex-col justify-center bg-gray-100">
      <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-slate-800 md:text-5xl">
        Documentação Técnica <br />
        Atlantic RH
      </h1>
      <div className="w-full max-w-4xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <Card key={index} onClick={() => redirectDocs(card)}>
              <div className="flex w-full items-center gap-2 flex-col">
                <img src={card.image} alt={card.title} style={{height: "60px", mixBlendMode: "multiply", }} draggable="false" srcSet="" />
                <h6 className="mb-4 text-center text-2xl font-extrabold leading-none tracking-tight text-slate-800 md:text-2xl">{card.title}</h6>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};


import { useEffect, useState } from 'react';
import '../styles/App.css';
import Footer from './Footer';
import Link from './link';
import Social from './Social';

function App() {
  const [visibility, setvisibility] = useState('none');
  const handleDisplay = ()=>{
    if(visibility==='none'){
      setvisibility('flex');
    }else{
      setvisibility('none')
    }
  }
  // eslint-disable-next-line no-lone-blocks
  {/* link props */}
  const data =[
    {
      ref:"https://twitter.com/mbaodoh",
      id:'btn__twitter',
      text:'Twitter',
      gloss:null
    },
    {
      ref:"https://training.zuri.team/",
      id:'btn__zuri',
      text:'Zuri Team',
      gloss:null
    },
    {
      ref:"http://books.zuri.team",
      id:'books',
      text:'Zuri Books',
      gloss:" Your one stop to design and coding books"
    },
    {
      ref:"https://books.zuri.team/python-for-beginners?ref_id=Chinedu Mbaodoh",
      id:'book__python',
      text:'Python Books',
      gloss:'Learn python fundamentals in the shortest possible time'
    },
    {
      ref:"https://background.zuri.team",
      id:'pitch',
      text:'Background Check for Coders',
      gloss:'Accurate screening and background checks tailored for your firm '
    },
    {
      ref:"https://books.zuri.team/design-rules",
      id:'book__design',
      text:'Design Books',
      gloss:'Get a free book on design'
    }
  ]


useEffect(() => {
   window.addEventListener('resize',()=>{
    setvisibility('none')
   })


}, [window])


  return (
    <div className="App">
     <header className='app__header'>
      {/*profile section */}
      <div className="profile" id="profile">
        <div className='profile__img-wrapper'>
           <img src='/images/chinedu.jpg' alt='' id='profile__img' className='profile__img'/>
        </div>
       <div id='twitter' className='twitter'>
        JUX D
       </div>
       <div id='slack' className='slack'>
        Chinedu Mbaodoh
       </div>
       <div className='share'><img id='share' src='/icons/_Avatarshare.svg' alt='' /></div>
      </div>
      <div className={`mobile__share `} style={{display:visibility}}><img id='share' src='/icons/_Avatarshare.svg' alt='' /> Share</div>
      <div className='horshare' onClick={handleDisplay}><img id='horishare' src='/icons/_Avatarmorhori.svg' alt='' /></div>
     </header>
     {/*links section */}
     <div className='link__wrapper'>
      {
        data.map((a,b)=>{
          return <Link key={b} data={a}/>
        })
      }
     {/*slack and git social icon buttons*/}
       <Social/>
     </div>
     {/* footer with zuri and ingress4goood logs */}
      <Footer/>
    </div>
  );
}

export default App;

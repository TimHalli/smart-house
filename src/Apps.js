import React from 'react';
import './App.css';
// import EditPost from './Components/EditPost.js';
import Post from './Components/Post.js';


function App() {

  const vip_Ad = 'rgb(190, 168, 137)'
  const standard = 'rgb(207, 188, 140)'

  const list = [
    {
      id: 1,
      manufacturer: 'Gibson',
      model: 'Blueberry Burst',
      description: 'Gibson Brands, the world’s most iconic guitar brand, has shaped the sounds of generations of musicians and music lovers across genres for more than 100 years.',
      pic: "https://www.kley-zemer.co.il/Media/Uploads/gibson_les_paul_standard_2019_Blueberry_Burst_שמעךק.jpg",
      status: vip_Ad,
      edit: Post()
    },
    {
      id: 2,
      manufacturer: 'Ibanez',
      model: 'Iron Label',
      description: 'Ibanez is a Japanese guitar brand owned by Hoshino Gakki. Based in Nagoya, Aichi, Japan, Hoshino Gakki were one of the first Japanese musical instrument companies to gain a significant foothold in import guitar sales in the United States and Europe, as well as the first brand of guitars to mass-produce the seven-string guitar and eight-string guitar.',
      pic: "https://www.kley-zemer.co.il/Media/Uploads/RGIX7FDLB_NLB1.png",
      status: standard,
      edit: Post()
    },
    {
      id: 3,
      manufacturer: 'Gretsch',
      model: 'Golddust',
      description: 'OVER THE SPAN OF FOUR GENERATIONS, THE GRETSCH COMPANY DEVELOPED WHAT CAME TO BE KNOWN AS “THAT GREAT GRETSCH SOUND.”',
      pic: "https://d3inagkmqs1m6q.cloudfront.net/2163/media-pics/ss1198-gretsch-g2420t-streamliner-hollowbody-guitar-w-bigsby-gold-dust-6.jpg",
      status: standard,
      edit: Post()
    }
  ];

  return (
   
    <div className="App" >
      
      {list.map((item) => {
      
        return (
        
          <Post
            name={item.manufacturer}
            model={item.model}
            status={item.status}
            image={item.pic}
            des={item.description}
            button={item.edit}
            id={item.id}
            id2={item.id + '0'}
            id3={item.id + '00'}
            id4={item.id + '000'}
            id5={item.id + '0000'}
            id6={item.id + '00000'}
            id7={item.id + '000000'}
            id8={item.id + '0000000'}
            id9={item.id + '00000000'}
            id10={item.id + '000000000'}
            id11={item.id + '0000000000'}

          />
        )
      })
      }
    </div>
  );
}
   
export default App;

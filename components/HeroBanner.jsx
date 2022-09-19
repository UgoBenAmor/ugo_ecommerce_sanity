
import Link from 'next/link';
import { urlFor } from '../Lib/client';
import Image from 'next/image'



const HeroBanner = ({heroBanner}) => {
  return (
  <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
      </div>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        
         <img src={urlFor(heroBanner.image)}
              alt="earring"  
              className='hero-banner-image'
              width={250}
              height={250}/>)
            

    <div>
      {/* <Link href={`/product/${heroBanner.product}`}>
        <button type="button">{heroBanner.buttonText}</button>
      </Link> */}
        <div className='desc'>
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
      </div>
    </div>
  </div>
  )
}

export default HeroBanner
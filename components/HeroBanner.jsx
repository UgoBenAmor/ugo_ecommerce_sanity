
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
        
        <div className='hero-banner-image'>
        <Image src={urlFor(heroBanner.image).url()}
              alt="earring"  
              width={350}
              layout="fixed"
              height={350}
              objectFit="cover"
              className='hero-banner-image'
              />

        </div>
        
            

    <div>
      <Link href={`/product/${heroBanner.product}`}>
        <button type="button">{heroBanner.buttonText}</button>
      </Link>
        <div className='desc'>
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
      </div>
    </div>
  </div>
  )
}

export default HeroBanner
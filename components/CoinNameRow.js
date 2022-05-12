import React from 'react'
import Image from 'next/image'
import converter from '../assets/converter.png'
import btc from '../assets/btc.png'
import eth from '../assets/eth.png'
import usdt from '../assets/usdt.png'
import usdc from '../assets/usdc.png'
import xrp from '../assets/xrp.png'
import cardano from '../assets/cardano.png'
import tera from '../assets/tera.png'
import solana from '../assets/solana.png'
import avalanche from '../assets/avalanche.png'
import bnb from '../assets/bnb.png'

const styles = {
  coinNameRow: `flex items-center`,
  buyButton: `bg-[#1A1F3A] text-[#6188FF] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-50`,
}



const CoinNameRow = ({name,icon,clicked}) => {

  const coinIcon = () => {
    switch (name) {
      case 'Bitcoin':
          return(
              <Image 
              src={btc}
              className='rounded-full'
              width={20}
              height={20}
              alt='icon'/>
          )
      case 'Ethereum':
          return(
              <Image 
              src={eth}
              className='rounded-full'
              width={20}
              height={20}
              alt='icon'/>
          )
     case 'Tether':
          return(
              <Image 
              src={usdt}
              className='rounded-full'
              width={20}
              height={20}
              alt='icon'/>
          )
    case 'BNB':
          return(
              <Image 
              src={bnb}
              className='rounded-full'
              width={20}
              height={20}
              alt='icon'/>
          )
    case 'USD Coin':
            return(
                <Image 
                src={usdc}
                className='rounded-full'
                width={20}
                height={20}
                alt='icon'/>
            )
    case 'XRP':
                return(
                    <Image 
                    src={xrp}
                    className='rounded-full'
                    width={20}
                    height={20}
                    alt='icon'/>
                )
    case 'Cardano':
                    return(
                        <Image 
                        src={cardano}
                        className='rounded-full'
                        width={20}
                        height={20}
                        alt='icon'/>
                    )
    case 'Solana':
                        return(
                            <Image 
                            src={solana}
                            className='rounded-full'
                            width={20}
                            height={20}
                            alt='icon'/>
                        )
    case 'Binance USD':
                            return(
                                <Image 
                                src={avalanche}
                                className='rounded-full'
                                width={20}
                                height={20}
                                alt='icon'/>
                            )
    case 'Dogecoin':
                                return(
                                    <Image 
                                    src={tera}
                                    className='rounded-full'
                                    width={20}
                                    height={20}
                                    alt='icon'/>
                                )
  
  
      default:
          <Image
            src={btc}
            className='rounded-full'
            width={20} 
            height={20}
            alt=''/>
          break;
  }
}

  return (
    <div className={styles.coinNameRow}>
        <div className='mr-3 flex' onClick={clicked}>
            <div className='mr-2'>{coinIcon()}</div>
            {name}
        </div>
         {name === 'Bitcoin' || name === 'Ethereum' || name === 'Tether' ? (
           <span className={styles.buyButton}>
              Buy
           </span>
         ) : (
           <></>
         )}
    </div>
  )
}
export default CoinNameRow
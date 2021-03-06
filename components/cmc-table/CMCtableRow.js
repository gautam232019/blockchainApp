import React from 'react'
import Image from 'next/image'
import More from '../../assets/svg/more'
import Star from '../../assets/svg/star'
import Rate from './Rate'
import {useRouter} from 'next/router'
import CoinNameRow from '../CoinNameRow'

const styles = {
    tableRow:`text-white border-b border-gray-800 text-[0.93rem] ml-10`,
}

const CMCtableRow = ({
    starNum,
    coinName,
    coinIcon,
    coinSymbol = '---',
    price = '---',
    hRate = '---',
    dRate = '---',
    showBuy,
    hRateIsIncrement,
    dRateIsIncrement,
    marketCapValue = '---',
    volumeCryptoValue = '---',
    volumeValue = '---',
    circulatingSupply = '---',
}) => {

    const graphImages = [
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg',
    ]

    const getRandomGraph = () => {
        const rndInt = Math.floor(Math.random()*10)+1
        return graphImages[rndInt]
    }

    const router = useRouter()

    const viewCoinDetails = () => {
        router.push(
            `/currencies/info?symbol=${coinSymbol}&coin=${coinName}&price=${price}`,
        )
    }

    const viewPrice = () => {
        router.push(
            `/currencies/price/?symbol=${coinSymbol}&coin=${coinName}&price=${price}`
        )
    }

    const formatNum = num => {
        // return Number(num.toFixed(2)).toLocaleString()
    }
  return (
    <tbody className={styles.tableRow}>
        <tr>
            <td>
                <Star/>
            </td>
            <td>{starNum}</td>
            {coinIcon && coinIcon ? (
                <td className='cursor-pointer' onClick={viewCoinDetails}>
                    <CoinNameRow
                    name={coinName}
                    icon={coinIcon}
                    />
                </td>
            ):(
                <></>
            )}
            <td className='cursor-pointer' onClick={viewPrice}>
                <p>${price}</p>
            </td>
            <td>
                <Rate
                 isIncrement={hRateIsIncrement}
                 rate={`${hRate} %`}
                />
            </td>
            <td>
                <Rate
                isIncrement={dRateIsIncrement}
                rate={`${dRate} %`}
                />
            </td>
            <td>
                <div>
                    <p>
                        {volumeValue}
                    </p>
                    <p className='text-gray-400'>
                        {volumeCryptoValue} {coinSymbol}
                    </p>
                </div>
            </td>
            <td>
                <div>
                    <p>
                        {circulatingSupply}
                    </p>
                </div>
            </td>
            <td>
                <Image src={getRandomGraph()} alt='graph' width={150} height={60}/>
            </td>
            <td>
                {marketCapValue}
            </td>
            <td>
                <More/>
            </td>
        </tr>
    </tbody>
  )
}

export default CMCtableRow
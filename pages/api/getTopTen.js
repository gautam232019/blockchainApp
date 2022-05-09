export default function handler(req,res) {
   const getData = async ()=>{
       const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=56f6a9ee-5a3d-4de1-871a-be6abe0b3f22`,
       {
           method: 'GET',
           headers:{
               Accept: '*/*'
           },
       },
       )

       const data = await response.json()
       console.log(data);
       res.status(200).json({data})
   }

   getData();
  
}
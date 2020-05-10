import axios from 'axios';
 const url = 'https://api.covid19india.org/data.json';

 export const fetchData = async (states) => {

     try {
         
            const { data: {statewise} } = await axios.get(url);

            
            var newData = statewise.map(({confirmed, deaths, recovered, state, lastupdatedtime},i) => ({
                confirmed: statewise[i].confirmed,
                deaths: statewise[i].deaths,
                recovered: statewise[i].recovered,
                state: statewise[i].state ,
                lastupdatedtime: statewise[i].lastupdatedtime,
            }));
                     
            
            let updateData = {};
            for(let i=0;i<newData.length;i++){
                if(newData[i]['state']===states)
                    Object.assign(updateData,newData[i]);
            }

            
            return updateData;
     } catch (error) {
         console.log(error);
     }
 }

 export const fetchState = async () => {
     try {
         const {data: {statewise}} =  await axios.get(url);
         
         return statewise.map((statewise) => statewise.state);
     } catch (error) {
         console.log(error);
         
     }
 }
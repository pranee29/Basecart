// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
// import  mobiles from "./JSON/mobile.json";
import { useState,useEffect } from 'react';
import axios from 'axios';


function ItemCard(){
    const [mobile,setMobile]=useState([]);
    
    useEffect(()=>{
        // mobile=JSON.stringify(mobiles);
        // setMobile(mobile);
        const mobiles= async()=>{
            let response= await axios.get(`http://localhost:3002/a/mobiles`);
            setMobile(response.data);
        }
        mobiles();
        
    },[])
    return(
        <div className=''>
            
            {/* <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="10"
                                image="iphone.jpg"
                                alt="green iguana"
                                maxHeight="80"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card> */}
            {mobile}
            <div className='flex gap-4 flex-col shadow-md w-80 '>
                <div> <img src='iphone.jpg'></img> </div>
                <div className='font-semibold text-center'> Iphone 15 </div>
                <div className='pl-4'>Price $2000 </div>
                <div className='pl-4'>4.5</div>
                <div className='flex justify-between items-center text-center bg-gray-200 p-3'>
                    <button className='pl-16'>Like</button>
                    <button className='pr-16'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
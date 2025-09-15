async function addToCart(prevState,queryData) {
    const itemID = queryData.get('itemID');
    if(itemID==="1"){
        return{
           success:true,
           cartsize:12, 
        }
    } 
    else{
        return{
            success:false,
            message:"The item is sold out",
        };
    }   
}

export default addToCart
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

function Header(){

    return(
        <div className="sticky top-0 w-full h-20 bg-gray-200 flex justify-between items-center">
            <div className=" ml-24 w-2/12  flex items-center justify-between">
                <div className="font-semibold">BASE CART</div>
                <div>Products </div>
                
            </div>
            <div>
            <div> 
                    <TextField
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>,
                          }}
                    />
                </div>
            </div>
            <div className="flex items-center w-1/4 justify-between mr-10">
                <div>Sell Products</div>
                <div>Liked</div>
                <div>Cart</div>
                <div>Account</div>
            </div>
        </div>
    )
}

export default Header;
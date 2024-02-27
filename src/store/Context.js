import React,{createContext,useState} from "react";



export const Context=createContext({
    menuItem:[],
    favItems:[],
    cartItems:[],
    addtoCart:function addtoCart(){},
    addtoFav:function addtoFav(){},
    removefromCart:function removefromCart(){},
    removeProductFromFavoriteList:function removeProductFromFavoriteList(){},
    Removefromfav:function Removefromfav(){},
    filteredMenuItems:function filteredMenuItems(){},
    handleSearchInputChange:function handleSearchInputChange(){},
});

function CreateContextProvider({children}){

    const [cartItems,setcartItems] = useState([]);
    const menuItem = [
        {
            id:"1",
            img:"../images/oil.svg",
            title:"Peeling Solution - Exfoliator",
            price:"$10.80",
            brandName:"The Ordinary",
            addtoCartOpt:"",
        },
        {
            id:"2",
            img:"../images/cream.svg",
            title:"Body butter - 100 gms",
            price:"$7.80",
            brandName:"The Body Shop",
            addtoCartOpt:"",
        },
        {
            id:"3",
            img:"../images/gel.svg",
            title:"Shower gel - 250ml",
            price:"$13.90",
            brandName:"The Body Shop",
            addtoCartOpt:"",
        },
        {
            id:"4",
            img:"../images/soap.svg",
            title:"Hand Soap- 250ml",
            price:"$24.90",
            brandName:"Bath & Body Works",
            addtoCartOpt:"",
        },
    ];
    const [favItems,setfav] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    


    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
      };


    const filteredMenuItems = menuItem.filter((menuItems) => menuItems.title.toLocaleLowerCase().includes(searchInput.toLowerCase())
    );
      
    const addtoCart = (item) => {
       return setcartItems([...cartItems, item]);
       
    };
       const addtoFav=(item)=>{
            return setfav([...favItems,item]);
       }
         const removeProductFromFavoriteList = (productId) =>{
            // console.log(productId);
            setfav((myFavoriteProducts) => {
                // console.log(myFavoriteProducts);
                return myFavoriteProducts.filter((myFavoriteProduct) => {
                    return myFavoriteProduct.id !== productId;
                })
            })
            
            // const updateditem = favItems.filter((_,i)=>i!==index);
            // setfav(updateditem);
         }

    const removefromCart = (index) => {
         const updateditem = cartItems.filter((_,i)=>i!==index);
         setcartItems(updateditem);
    };

    const value={
        cartItems:cartItems,
        favItems:favItems,
        addtoCart:addtoCart,
        removefromCart:removefromCart,
        addtoFav:addtoFav,
       
        removeProductFromFavoriteList:removeProductFromFavoriteList,
        filteredMenuItems:filteredMenuItems,
        handleSearchInputChange:handleSearchInputChange,
    };
    
    return <Context.Provider value={value}>{children}</Context.Provider>;
}



export default CreateContextProvider;
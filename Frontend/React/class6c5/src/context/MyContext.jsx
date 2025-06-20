import { useState, createContext } from 'react'
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import MyCart from '../pages/MyCart';
import About from '../pages/About';
import Contact from '../pages/Contact';
import { products } from '../utilis/Products';
import PageNotFound from '../pages/PageNotFound';
import Navbar from '../components/Navbar';
//step -: create Context
export const bitesContext = createContext();

function MyContext() {
    //step-2 write your all the functions, state, and varibles 
    const [trackBtn, setTrackBtn] = useState(true);
    const [cartItem, setCartItem] = useState([]);
    let [count, setcount] = useState(1);
    console.log(products, "17823457")


    function addTocard(data) {
        console.log("btn click hone ", data);
        const kyaMeCardmeHu = cartItem?.some((item) => {
            return item?.id === data?.id;
        })
        setCartItem((oldData) => {
            if (kyaMeCardmeHu) {
                alert("Me to pahle se hee cart par hu");
                return oldData;
            }
            return [...oldData, data];
        })
    }

    function removeFromCard(id) {
        const filterValaArray = cartItem?.filter((item) => {
            return item.id !== id;
        })
        setCartItem(filterValaArray);
    }


    function increment(data) {
        console.log("IIII");
        setcount(++data.quantity);
        // data.quantity++; Ui me render nahi karega change to hoga
    }

    function decrement(data) {
        console.log("dddd");
        setcount(() => {
            if (data.quantity === 1) {
                removeFromCard(data.id);
                return;
            }
            return data.quantity--;
        })

    }

    const user = {
        products,
        cartItem,
        setCartItem,
        count,
        setcount,
        addTocard,
        removeFromCard,
        trackBtn,
        setTrackBtn,
        decrement,
        increment,
      
    }

    //step -3 Provide your Context
    return (
        <div>
               <bitesContext.Provider value={user}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/mycart" element={<MyCart />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </bitesContext.Provider>
        </div>
    )
}

export default MyContext
"use client";

//import the Toaster component from react-hot-toast
import { Toaster } from "react-hot-toast";

//create a ToasterProvider component
const ToasterProvider = () => {
    //return the Toaster component with a toastOptions prop
    return (
        <Toaster 
            toastOptions={{
                //set the style of the toast
                style: {
                    background: '#333',
                    color: '#fff'
                }
            }}
        />
    )
}

//export the ToasterProvider component
export default ToasterProvider;
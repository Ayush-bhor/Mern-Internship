import { createContext , useContext } from "react";
let mycontext=createContext();
export default function Context(){
    let user="Rahul";
    return<mycontext.Provider value={user}>
        <fun1/>
    </mycontext.Provider>

}
function fun1(){
    return<fun1/>
}
function fun2(){
    let user=useContext(mycontext);
    return<h1>{user}</h1>
}
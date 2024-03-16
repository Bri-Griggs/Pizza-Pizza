const now = new Date();
const hours = now.getHours();


function Order(){
    if (hours >= 10 && hours < 22){
        return <div className="order">
            <p>We're open! From 10:00 AM to 10:00 PM. Come visit us or order online!</p>
            <a href="https://i.ytimg.com/vi/owZ0ULrv0Pk/maxresdefault.jpg"><button className="btn">Order Now!</button></a>
    </div>
}}



export default Order;

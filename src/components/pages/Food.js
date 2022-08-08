import React from "react";
import "../../App.css";
import "./Food.css";
import FoodCard from "./FoodCard"
import Footer from "../Footer";


function Food() {
    return (
        <div className='card'>
        <div className="top_title"><h1 class="font-weight-light">Food & Drink</h1></div>
            <div className="title"><h2 class="font-weight-light">Restaurants</h2></div>
         <div className="card_container">
            <div className="card_wrapper">
                 <ul className="card_items">
                 <div>
            <FoodCard
              src="images/AraratHotel2.jpg"
              title="Ararat Hotel Cafe Bistro "
              text1="130 Barkly St, Ararat"
              text2="03 5352 2477"
              url='https://www.ararathotel.com.au'
            />
            </div>
            <div>
            <FoodCard
              src="images/AraratRSL.jpg"
              title="Ararat RSL"
              text1="74-76 High St, Ararat"
              text2="03 5352 2794"
              url='https://www.araratrsl.com.au/'
            />
            </div>
            <div>
             <FoodCard
              src='images/BlueDuck.jpg'
              title="Blue Duck Hotel"
              text1='257 Barkly St, Ararat'
              text2="03 5352 1177"
              url='http://theblueduckhotelararat.com.au/ '
            />
            </div>
            <div>
             <FoodCard
              src='images/Chally.jpg'
              title="Chally’s Bar & Bistro"
              text1='Chalambar Golf Club, Golf Links Rd, Ararat'
              text2="03 5352 4297"
              url='https://www.challysbarandbistro.com.au/ '
            />
            </div>
            </ul>
            <ul className="card_items">
                 <div>
            <FoodCard
              src="images/Courthouse.jpg"
              title="Courthouse Bar & Grill"
              text1="84 Barkly St, Ararat"
              text2="03 5352 7371"
              url='https://courthousebarandgrill.com.au/ '
            />
            </div>
            <div>
            <FoodCard
              src="images/DesiSwag.jpg"
              title="Desi Swag"
              text1="202-204 Barkly St, Ararat"
              text2="03 5352 4259"
              url='https://desiswagvictoria.com/ '
            />
            </div>
            <div>
             <FoodCard
              src='images/KhoonThai.jpg'
              title="Khoon Thai Restaurant"
              text1='234-236 Barkly St, Ararat'
              text2="0423 401 929"
              url='https://www.khoonthaiararat.com.au/ '
            />
            </div>
            <div>
             <FoodCard
              src='images/Sicilians.jpg'
              title="Sicilians Bar & Restaurant"
              text1='102 Barkly St, Ararat'
              text2="03 5352 2627"
              url='https://sicilians.com.au/ '
            />
            </div>
            </ul>
            <ul className="card_items">
                 <div>
            <FoodCard
              src="images/TasteOfPeking.jpg"
              title="Taste of Peking"
              text1="157 Barkly St, Ararat"
              text2="03 5352 5886"
              url='www.facebook.com/Taste-of-Peking-Chinese-restaurant'
            />
            </div>
            <div>
            <FoodCard
              src="images/Barkly.jpg"
              title="The Barkly Bistro"
              text1="240 Barkly St, Ararat"
              text2="0400 210 893"
              url='https://www.facebook.com/thebarklybistrobaraccommodation/'
            />
            </div>
            </ul>




            <div>
                <div className="title"><h2 class="font-weight-light">Cafes & Bakeries</h2></div>
            </div>

            <ul className="card_items">
                 <div>
            <FoodCard
              src="images/debsdiner.jpg"
              title="Deb’s Diner"
              text1="124 Barkly Street, Ararat"
              text2="03 5352 7530"
              url='https://www.facebook.com/pages/category/Coffee-Shop/Debs-Diner-439555969440428/ '
            />
            </div>
            <div>
            <FoodCard
              src="images/fedandbets.jpg"
              title="Fred & Bet’s"
              text1="101 Barkly St, Ararat"
              text2="03 5352 1002"
              url='https://www.facebook.com/FredandBets/ '
            />
            </div>
            <div>
             <FoodCard
              src='images/foragers2.jpg'
              title="Foragers Café"
              text1='82 Vincent St, Ararat'
              text2="0490 340 214"
              url='https://www.facebook.com/foragerscafe'
            />
            </div>
            <div>
             <FoodCard
              src='images/gardenslakecafe.jpg'
              title="Gardens Lake Café"
              text1='Alexandra Gardens Park, Alexandra Ave, Ararat'
              text2="03 5352 5626"
              url='https://gardens-lake-cafe.business.site/?utm_source=gmb&utm_medium=referral'
            />
            </div>
            </ul>
            <ul className="card_items">
                 <div>
            <FoodCard
              src="images/bakeology.jpg"
              title="Home of Bakeology"
              text1=" 52 Barkly Street, Ararat"
              text2="03 5300 3127"
              url='https://www.facebook.com/homeofbakeology/?rf=188262067858020 '
            />
            </div>
            <div>
            <FoodCard
              src="images/sede.jpg"
              title="S.E.D.E Café"
              text1="96 Barkly St, Ararat"
              text2="03 5352 1205"
              url='https://www.facebook.com/sedecafe96/ '
            />
            </div>
            <div>
             <FoodCard
              src='images/vines.jpg'
              title="Vines Café & Bar"
              text1='74 Barkly St, Ararat'
              text2="03 5352 1744"
              url='https://www.facebook.com/pages/category/Cafe/Vines-Cafe-Bar-302535493178744/'
            />
            </div>
            <div>
             <FoodCard
              src='images/waacks.jpg'
              title="Waack’s Bakery"
              text1='172/168 Barkly St, Ararat'
              text2="03 5352 1618"
              url='https://waacksbakery.com.au/ '
            />
            </div>
            </ul>
            </div>
            </div>


            <Footer />
        </div>
    );
}

export default Food;
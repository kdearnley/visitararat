import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { Button } from "../Button";

export default function GreenHillLake() {
    return (
    
        <div className="bg_color">
    <div>
        <div>
            <div className="top_title"><h1 class="font-weight-light">Green Hill Lake</h1></div>
        </div>

        <div className="box">
            <div className="img"><img src="../../images/green-hill-lake2.jpeg" alt="Ararat Gallery TAMA" /></div>
            <div className="text">
                <p>
                Situated 2.5 kilometres east of Ararat on the Western Highway, Green Hill Lake is a popular 
                camping stop for travelers. With picturesque mountain ranges providing the perfect backdrop, 
                the lake is host to many recreational water sports throughout the year.
                </p>
                <br/>
                <p>
                Activities: Swimming, boating, fishing, kayaking and Canoeing, Water skiing, Wind surfing, 
                Bush Walking, Bird Watching, Knee boarding and Wake boarding
                </p>  
                <br/>
                <p>
                Facilities: There is drinking water available, fireplaces, barbeques, picnic tables, chairs 
                and even hot showers to keep you feeling refreshed during your stay. The lake precinct 
                features walking tracks, including an excellent pathway from Ararat and passive rest areas.
                </p>  
                <br/>
                <p>
                Fishing: The lake is well-stocked with trout for those looking to catch a feed of fish for 
                dinner, be it from the jetty, a boat or the shoreline.
                </p>
            </div>


            <div className="buttons">
                <div direction="horizontal" gap={2} className="justify-content-center">
                    <a href="https://greenhilllake.com.au/" className="btn-mobile" target='_blank'
                        rel="noreferrer">
                        <Button className="btns btn--primary"> Green Hill Lake </Button>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</div>

        );
}
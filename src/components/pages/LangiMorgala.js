import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { Button } from "../Button";

export default function LangiMorgala() {
    return (
    
        <div className="bg_color">
        <div>
            <div>
                <div className="top_title"><h1 class="font-weight-light">Langi Morgala</h1></div>
            </div>
    
            <div className="box">
                <div className="img"><img src={process.env.PUBLIC_URL + "/images/langimorgala3.jpg"} alt="Langi Morgala" /></div>
                <div className="text">
                    <p>
                    The large eclectic collection covers a wide variety of themes. Some of the individual 
                    collections are comprehensive and have been gathered with intent to demonstrate the history 
                    of a movement or an organisation over time. Over 60 cabinets within 5,000 square feet of display area. 20 mannequins showing period 
                    clothing and uniforms - even a straight-jacket. The museum artefact, photographic and document collection is estimated to contain 50,000 items. 
                    Some domestic items are on open display in six themed 'rooms'. Large pieces of machinery are 
                    displayed outside, undercover, along with the refurbished blacksmiths shop. The collection represents the nineteenth and early twentieth century history of the town and 
                    district. Some more contemporary items, such as those relating to local World Champion and 
                    Olympic Cyclist Shane Kelly OAM and other local identities are also in the collection.
                    </p>
                    <br />
                    <p>
                    The museum also houses the largest collection of Aboriginal artefacts in Victoria, (the Mooney 
                    and Best collections), items with provenance to the Ararat goldfields, objects from the large 
                    squatters estates in the district, items relating to farming, commerce, war, social, domestic 
                    and community life. The surviving collection of an earlier Ararat Borough Museum set up around 
                    1900 also form part of the collection.
                    </p>
                </div>
    
    
                <div className="buttons">
                    <div direction="horizontal" gap={2} className="justify-content-center">
                        <a href="https://sites.google.com/site/museumlangimorgala/" className="btn-mobile" target='_blank'
                            rel="noreferrer">
                            <Button className="btns btn--primary">Langi Morgala</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    
        <Footer />
    </div>
    
        )


}
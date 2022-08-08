import React from "react";
import "../../App.css";
import { Button } from "../Button";
import Footer from "../Footer";
import "./AraratGalleryTama.css";

export default function AraratGalleryTama() {
    return (

    <div className="bg_color">
    <div>
        <div>
            <div className="top_title"><h1 class="font-weight-light">Ararat Gallery TAMA</h1></div>
        </div>

        <div className="box">
            <div className="img"><img src={process.env.PUBLIC_URL + "/images/tama1.jpg"} alt="Ararat Gallery TAMA" /></div>
            <div className="text">
                <p>
                The Gallery has a unique place amongst Australia’s public galleries through its commitment 
                to supporting and promoting textile and fibre art - a curatorial and collection focus that 
                began in the early 1970s. Today the collection is arguably the most significant of its kind 
                in Australia. While the permanent collection is not always on exhibition, the Gallery maintains 
                its dedication to highlighting excellence, innovation and diversity in contemporary textile 
                and fibre art practice through an annual exhibition program featuring the work of visiting 
                artists and exhibitions that are touring from other public galleries. The gallery is fully 
                accessible from the Vincent Street entrance. Lift access between levels inside the facility 
                is available for gallery visitors. Accessible toilets including baby change facilities are also 
                available. Tours for schools and non-profit organisations can be accommodated subject to advance notice.
                </p>
            </div>


            <div className="buttons">
                <div direction="horizontal" gap={2} className="justify-content-center">
                    <a href="https://www.araratgallerytama.com.au/" className="btn-mobile" target='_blank'
                        rel="noreferrer">
                        <Button className="btns btn--primary"> Ararat Gallery TAMA </Button>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</div>
    );
}
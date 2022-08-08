import React from "react";
import "../../App.css";
import "./Jward.css";
import { Button } from "../Button";
import Footer from "../Footer";


function Jward() {
    return (
        <div className="bg_color">
            <div>
                <div>
                    <div className="top_title bg_color"><h1 class="font-weight-light">J Ward & Aradale</h1></div>
                </div>

                <div className="box">
                    <div className="img"><img src={process.env.PUBLIC_URL + "/images/aradale.jpeg" }alt="Aradale" /></div>
                    <div className="text">
                        <p>
                            Aradale Mental Hospital was an Australian psychiatric hospital.
                            Originally known as Ararat Lunatic Asylum, Aradale and its two
                            sister asylums at Kew and Beechworth were commissioned to accommodate
                            the growing number of 'lunatics' in the colony of Victoria.
                            Construction began in 1864, and the guardhouses are listed as being built in 1866.
                        </p>
                        <br/>
                        <p>
                            In December 1886 the old gaol at Ararat was proclaimed as
                            "J Ward" of the Ararat Asylum. It was to cater for those persons
                            who were detained in any jail, reformatory or industrial school
                            or other place of confinement who appeared to be insane. The ward
                            was not a separate institution in its own right and has continued
                            to function as a division of the Ararat Mental Hospital. "J Ward"
                            was always regarded as a temporary measure. J Ward was eventually
                            closed in 1991 and Aradale followed in 1998 and in 2001. Today you can
                            tour both of them or take a ghost tour if you dare.
                        </p>
                    </div>


                    <div className="buttons">
                        <div direction="horizontal" gap={2} className="justify-content-center">
                            <a href="https://www.jward.org.au/" className="btn-mobile" target='_blank'
                                rel="noreferrer">
                                <Button className="btns btn--primary"> J Ward Day Tour </Button>
                            </a>
                            <a href="https://lanternghosttours.rezdy.com/85289/jward-lunatic-asylum-ghost-tour-victoria" className="btn-mobile" target='_blank'
                                rel="noreferrer">
                                <Button className="btns btn--primary"> J Ward Ghost Tour </Button>
                            </a>
                            <a href="https://www.aradale.com.au/" className="btn-mobile" target='_blank'
                                rel="noreferrer">
                                <Button className="btns btn--primary"> Aradale Day Tour </Button>
                            </a>
                            <a href="https://www.eerietours.com.au/tours/aradale-ghost-tour/" className="btn-mobile" target='_blank'
                                rel="noreferrer">
                                <Button className="btns btn--primary"> Aradale Ghost Tour </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    );
}

export default Jward;
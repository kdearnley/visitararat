import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { Button } from "../Button";

export default function GumSan() {
    return (
    
        <div className="bg_color">
        <div>
            <div>
                <div className="top_title"><h1 class="font-weight-light">Gum San: Chinese Heritage Centre</h1></div>
            </div>
    
            <div className="box">
                <div className="img"><img src="../../images/gumsan3.jpg" alt="Gum San" /></div>
                <div className="text">
                    <p>
                    Gum San Chinese Heritage Centre tells the story of the Chinese miners and their arduous 
                    journey from Southern China to Australia where they dreamed of finding gold and discovered 
                    one of the world's richest shallow alluvial goldfields, the Canton Lead.
                    Relive their great trek on foot from Robe in South Australia to the goldfields upon which 
                    Ararat now stands and learn how life was for these resilient explorers in a strange land.
                    </p>
                    <br />
                    <p>
                    The dramatic two-storey building with its authentic Chinese tiled roof houses a fascinating 
                    selection of interactive displays and fun and interest for people of all ages. Dress in 
                    Chinese costume, fossick for gold, see the tea house or Fancy Goods Store that is a feast 
                    for your eyes. Learn about Chinese herbs and Chinese language. See the wonderful textiles, 
                    embroideries and relics of this rich culture. Discover the fun and delight of gold panning, 
                    try your hand at calligraphy, learn about the Chinese language and play traditional Chinese 
                    games.
                    </p>
                </div>
    
    
                <div className="buttons">
                    <div direction="horizontal" gap={2} className="justify-content-center">
                        <a href="https://www.gumsan.com.au/" className="btn-mobile" target='_blank'
                            rel="noreferrer">
                            <Button className="btns btn--primary">Gum San</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    
        <Footer />
    </div>
    
        );
}
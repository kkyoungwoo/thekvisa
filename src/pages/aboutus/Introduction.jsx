import React from 'react'
import SEO from "../../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import HeaderTopNews from '../../common/header/HeaderTopNews';
import FooterThree from '../../common/footer/FooterThree';
import Separator from "../../elements/separator/Separator";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import TimelineTwo from '../../elements/timeline/TimelineTwo';
import TabOne from '../../elements/tab/TabOne';
import AboutThree from '../../elements/about/AboutThree';
import PricingThree from '../../elements/pricing/PricingThree';
import BlogList from "../../components/blog/itemProp/BlogList";
import BlogClassicData from '../../data/blog/BlogList.json';

import Layout from "../../common/Layout";

var BlogListData = BlogClassicData.slice(0, 3);



const Introduction = () => {
    return (
        <>
            <SEO title="Business" />
            <Layout>
                <main className="page-wrapper">
                    {/* Start Slider Area  */}
                    <div className="slider-area slider-style-3 height-850">
                        <div className="container">
                            <div className="row row--30 align-items-center">
                                <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                                    <div className="inner text-left">
                                        <h1 className="title theme-gradient">Trending <br />Business</h1>
                                        <p className="description">We help our clients succeed by creating brand identities, digital experiences, and print materials.</p>
                                        <div className="button-group mt--30 mt_sm--20">
                                            <a className="btn-default btn-medium btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Purchase Now <i className="icon"><FiArrowRight /></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 order-lg-2 col-lg-5">
                                    <div className="thumbnail">
                                        <img src="./images/about/about-2.png" alt="Banner Images" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Slider Area  */}

                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-tab-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Companies About."
                                        title = "What About Our Companies."
                                        description = "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
                                    />
                                </div>
                            </div>
                            <TabOne />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    <Separator />
                    <div className="rwt-timeline-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Timeline"
                                            title = "Working Process."
                                            description = "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
                                        />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 mt--50">
                                    <TimelineTwo classVar="dark-line"  />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Separator />
                    
                    <AboutThree />

                    <FooterThree />
                </main>
            </Layout>
            
        </>
    )
}
export default Introduction;
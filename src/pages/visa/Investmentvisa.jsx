import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import PortfolioOne from "../../elements/portfolio/PortfolioOne";

const Investmentvisa = () => {
    return (
        <>
            <SEO title="Portfolio Three Column || Doob - React Business  Template" />
            <Layout>
                <div className="main-content">
                    <div className="rwt-portfolio-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Portfolio Three Column"
                                            title = "You can customize everything!"
                                            description = ""
                                        />
                                </div>
                            </div>
                            <PortfolioOne Column="col-lg-4 col-md-6 mt--30 portfolio"  />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Investmentvisa;
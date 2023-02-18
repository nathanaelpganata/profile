import SEO from "@/components/SEO";
import HeroSection from "@/components/hero.page";
import Layout from "@/layouts/Layout";
import React from "react";

const index = () => {
    return (
        <Layout>
            <SEO title="Home" description="This is the home page" />
            <div className="text-white font-primary">
                <section id="home" className="snap-center">
                <HeroSection/>
                </section>
            </div>
        </Layout>
    );
};

export default index;

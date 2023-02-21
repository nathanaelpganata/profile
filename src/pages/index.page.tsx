import SEO from "@/components/SEO";
import HeroSection from "@/components/hero.page";
import ProjectsSection from "@/components/projects.page";
import Layout from "@/layouts/Layout";
import React from "react";

const index = () => {
    return (
        <Layout>
            <SEO title="Home" description="This is the home page" />
            <div className="snap-y h-screen snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-yellow-300 scrollbar-thumb-yellow-600">
                <div className="text-white font-primary h-screen">
                    <section id="home" className="snap-center">
                        <HeroSection />
                    </section>
                    <section id="projects" className="snap-center h-screen">
                        <ProjectsSection />
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default index;

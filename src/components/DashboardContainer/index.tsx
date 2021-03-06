import React from "react";
import { OtherNavBar } from "components/NavBar";
import Footer from "components/Footer";

export class DashboardContainer extends React.Component {
    render() {
        return (
            <>
                <OtherNavBar />
                <div className="w-full mt-2 px-2 md:px-0">
                    <div className="max-w-6xl px-8 xl:px-5 mx-auto">
                        <section className="mt-1">
                            {this.props.children}
                        </section>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

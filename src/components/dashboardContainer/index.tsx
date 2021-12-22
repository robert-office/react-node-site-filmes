import React from "react";
import { MenuDashboard } from "components/MenuDashboard";
import { BodyDetalhes } from "components/bodyDetalhes";

export class DashboardContainer extends React.Component {
    render() {
        return (

            <section className="w-full px-8">
                <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <div className="w-full">


                        <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-auto overflow-hidden relative container py-5">
                            <div className="flex items-start justify-between">
                                <div className="h-auto hidden lg:block my-4 shadow-lg relative w-80">
                                    <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
                                        <MenuDashboard />
                                    </div>
                                </div>
                                <div className="flex flex-col w-full pl-0 md:py-4 md:space-y-4">

                                    <div className="overflow-auto h-auto pb-24 pt-2">
                                        <div className="flex flex-col flex-wrap sm:flex-row ">
                                            {this.props.children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        );
    }
}
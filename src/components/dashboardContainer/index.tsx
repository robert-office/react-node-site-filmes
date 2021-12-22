
import React from "react";

export const dashboardContainer = class Grid extends React.Component {
    render() {
        return (
            <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
                <div className="flex items-start justify-between">
                    <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
                        <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
                            
                        </div>
                    </div>
                    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                        {{/* DASHBOARD MAIN  */ }}
                        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                            <div className="flex flex-col flex-wrap sm:flex-row ">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
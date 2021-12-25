import React from "react";

export const BodyDetalhes = class Grid extends React.Component {
  render() {
    return (
      <section className="w-full text-gray-700 bg-white dark:bg-gray-800 rounded-t-lg px-2 md:px-0">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 md:flex-row max-w-6xl px-8 xl:px-5 mx-auto">
          <div className="w-full">
            <div className="relative block bg-bgColor dark:bg-gray-700 rounded-md">
              {this.props.children}
            </div>
          </div>
        </div>
      </section>
    );
  }
};
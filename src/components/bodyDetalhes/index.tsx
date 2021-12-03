import React from "react";

export const BodyDetalhes = class Grid extends React.Component {
  render() {
    return (
      <section className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="w-full">
            <div className="relative block bg-bgColor rounded-md">
              {this.props.children}
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export const Alert = () => {
  return (
    <>
      {/* Card Components with small banner on top left */}
      <div className="w-auto ml-24">
        <div className="w-2/3 bg-white h-auto tracking-wide mb-14 border border-black-800 mx-1 rounded-lg relative">
          <div className="small-banner w-1 h-20 bg-blue-600 absolute rounded-tl-md" />
          <h5 className="text-2xl font-semibold pl-6 pt-6 pr-6 pb-2">
            Provide useful services
          </h5>
          <p className="text-md font-regular p-6 pt-2 text-gray-500">
            Partners will be facilitated with our communication system available
            for
          </p>
        </div>
      </div>
    </>
  );
};

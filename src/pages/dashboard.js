function Dashboard() {
  return (
    <div className="h-screen w-screen p-0 m-0  justify-center items-center flex">
      <div className="w-1/6 bg-[#0052A8] justify-start items-startflex flex-col py-10 h-full ">
        <div className="text-white w-full">
          <h1 className="text-white text-3xl font-medium  px-5">
            Ticket Reservation
          </h1>
          <ul className="py-10 gap-10 s  font-medium">
            <li className="hover:bg-yellow-500 px-5 py-2 w-full duration-300">
              All Reservation
            </li>
            <li className="hover:bg-yellow-500 px-5 py-2 duration-300">
              Create Reservation
            </li>
          </ul>
        </div>
      </div>
      <div className="w-5/6 bg-white justify-center items-center flex flex-col py-10 h-full  "></div>
    </div>
  );
}

export default Dashboard;

function Dashboard() {
  return (
    <div className="h-screen w-screen p-0 m-0  justify-center items-center flex">
      <div className="w-1/6 bg-[#0052A8] justify-start items-start pl-5 flex flex-col py-10 h-full ">
        <div className="text-white">
          <h1 className="text-white text-3xl font-medium">
            Ticket Reservation
          </h1>
          <ul className="py-10 gap-10 space-y-5  font-medium">
            <li>All Reservation</li>
            <li>Create Reservation</li>
          </ul>
        </div>
      </div>
      <div className="w-5/6 bg-white justify-center items-center flex flex-col py-10 h-full  "></div>
    </div>
  );
}

export default Dashboard;

function Login() {
  return (
    <div className="h-screen w-screen p-0 m-0  justify-center items-center flex">
      <div className="w-4/5 bg-[#0052A8] justify-center items-center flex flex-col py-10 h-3/5  rounded-3xl">
        <h1 className="text-4xl  font-bold text-white">Office Login</h1>
        <div className="gap-10 flex py-10 w-3/4">
          <form onSubmit="#" className="text-white w-3/4">
            <div className="justify-start items-start flex flex-col w-full  bg-red-400">
              <label className=" justify-start items-start flex text-lg font-semibold w-full">
                Name
              </label>
              <input
                placeholder="name"
                className="p-3 rounded-2xl my-3 outline-none text-black"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

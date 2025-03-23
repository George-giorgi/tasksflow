const Form = ({ title }: { title: string }) => {
  return (
    <form className=" w-[50%] !mt-10">
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-blue-500 outline-none"
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-blue-500 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-blue-500 outline-none"
        />
        <input
          type="text"
          name="number"
          placeholder="Mobile Number"
          className="w-full bg-transparent border-b-2 border-white py-2 px-3 focus:border-blue-500 outline-none"
        />
        <button
          type="submit"
          className="w-full bg-white text-black py-2 px-4 hover:bg-gray-200 cursor-pointer !mt-4"
        >
          {title}
        </button>
      </div>
    </form>
  );
};

export default Form;

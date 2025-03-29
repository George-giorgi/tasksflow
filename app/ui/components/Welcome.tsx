const Welcome = () => {
  return (
    <div>
      <h1
        className={`pl-10 pr-10 text-center md:!mt-40 !mt-20 text-[var(--header-color)]`}
      >
        <p className=" font-semibold text-xl">Welcome to TaskFlow</p>
        <p className=" text-sm">Streamlining Admin and Employee Workflows</p>
      </h1>
    </div>
  );
};

export default Welcome;

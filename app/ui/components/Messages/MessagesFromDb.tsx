const MessagesFromDb = ({
  message,
  error,
}: {
  message: string;
  error: boolean;
}) => {
  return (
    <div className=" flex justify-center items-center h-12 text-sm w-[200px] text-center">
      <p
        className={
          !error ? "text-[var(--error-color)]" : "text-[var(--success-color)]"
        }
      >
        {message}
      </p>
    </div>
  );
};

export default MessagesFromDb;

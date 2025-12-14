export function WorkBackground() {
  return (
    <div className="sticky top-0 grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
      <div className="h-[30vh] bg-black lg:h-auto lg:rounded-tr-[40vh]"></div>
      <div className="h-[70vh] bg-black lg:h-auto relative z-0">
        <div className=" bg-white absolute inset-0 flex justify-center items-center z-10 rounded-bl-[40vh]"></div>
      </div>
    </div>
  );
}

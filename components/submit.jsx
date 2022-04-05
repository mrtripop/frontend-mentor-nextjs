import Image from "next/image";

const Submit = ({score}) => {
  return (
    <div className="flex justify-center">
      <div className="w-96 h-96 bg-gray-800 rounded-3xl p-8">
        <div className="flex h-28 items-center justify-center">
          <Image
            src={"/assets/images/illustration-thank-you.svg"}
            width={160}
            height={100}
          />
        </div>
        <div className="flex justify-center my-7">
          <div className="flex items-center justify-center h-8 w-52 rounded-full bg-gray-700 ">
            <h1 className="text-orange-400">You selected {score} out of 5</h1>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-white font-medium text-3xl ">Thank you!</h1>
          <p className="text-gray-400 md:text-sm font-sans pt-3 text-center">
            {
              "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Submit;

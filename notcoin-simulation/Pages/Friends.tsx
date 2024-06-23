import { useNavigate } from "react-router-dom";

const Friends: any = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="px-[20px] pt-[15px] pb-[30px] max-w-[640px] h-[1200px] m-auto bg-gradient-to-b from-blue-500 from-% via-slate-200 via-40%  to-slate-900 to-80% ">
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src="./back.svg" alt="setting" className="h-8" />
          </button>
          <h1 className="text-white font-medium text-[32px]">Notcoin</h1>
        </div>

        <div className="backdrop-blur-3xl bg-blue-700 w-[500px] h-[150px] px-10 rounded-2xl mt-[250px] m-auto">
          <div className="flex justify-around py-3">
            <p className="font-medium text-[32px] text-slate-50">
              My invite link :
            </p>
          </div>
          <div className="rounded-2xl  flex justify-around mt-3">
            <p className="font-medium text-slate-300">
              https://t.me/notcoin_mirror_bot?start=r_713050998
            </p>
          </div>
        </div>

        <div className="flex justify-around mt-[250px]">
        <button
          onClick={() => {
            location.assign("/");
          }}
          className=" text-slate-50 bg-blue-700 text-[32px] px-10 py-6 rounded-3xl font-semibold"
        >
          Let's get back mining
        </button>
        </div>
      </main>
    </>
  );
};
export default Friends;

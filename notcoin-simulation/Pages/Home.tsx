import { useCallback, useEffect, useMemo, useState } from "react";

const limit = 100;

const Home: any = () => {
  const save_Count: any = localStorage.getItem("Count");
  const set_Count = parseInt(save_Count) || 0;
  const save_Charge: any = localStorage.getItem("Charge");
  const set_Charge: number = parseInt(save_Charge) || 100;
  const [notcoin, setNotcoin] = useState({
    count: set_Count,
    charge: set_Charge,
  });

  const message: any = useMemo(() => {
    return notcoin.count < 10 ? (
      <div className="flex justify-around ">
        <p className="font-medium text-[32px] text-white ">Silver League</p>
      </div>
    ) : notcoin.count < 25 ? (
      <div className="flex justify-around ">
        <p className="font-medium text-[32px] text-white ">Gold League</p>
      </div>
    ) : notcoin.count < 50 ? (
      <div className="flex justify-around ">
        <p className="font-medium text-[32px] text-white ">Platinium League</p>
      </div>
    ) : notcoin.count < 100 ? (
      <div className="flex justify-around ">
        <p className="font-medium text-[32px] text-white ">Diamond League</p>
      </div>
    ) : (
      <div className="flex justify-around ">
        <p className="font-medium text-[32px] text-white ">Master League</p>
      </div>
    );
  }, [notcoin.count]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotcoin((prev: any) => {
        if (prev.charge < limit) {
          localStorage.setItem("Charge", JSON.stringify(notcoin.charge + 1));
          return { ...prev, charge: prev.charge + 1 };
        }
        return prev;
      });
    }, 1000);

    return () => {
      return clearTimeout(timeout);
    };
  }, [notcoin?.charge]);

  const onTap = useCallback(() => {
    if (notcoin.charge > 0) {
      setNotcoin((prev: any) => ({
        count: prev.count + 1,
        charge: prev.charge - 1,
      }));
      localStorage.setItem("Count", JSON.stringify(notcoin.count + 1));
      localStorage.setItem("Charge", JSON.stringify(notcoin.charge - 1));
    }
  }, [notcoin]);

  const progres_charge = useMemo(() => {
    return (
      <p className="text-white font-medium text-[36px]">
        {notcoin.charge}/{limit}
      </p>
    );
  }, [notcoin.charge]);

  return (
    <>
      <main className="px-[20px] pt-[15px] pb-[30px] max-w-[640px] h-[1200px] m-auto bg-gradient-to-b from-slate-900 from-35% via-slate-200 via-60%  to-blue-500">
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              location.assign("/friends");
            }}
          >
            <img src="./setting.svg" alt="setting" className="h-8" />
          </button>
          <h1 className="text-white font-medium text-[32px]">Notcoin</h1>
        </div>
        <div className="justify-center flex items-center mt-[100px] gap-5">
          
          <img src="/coin.png" className="w-[80px] h-[80px] mt-2 " alt="" />
          <p className=" text-white font-semibold text-[100px]">
            {notcoin.count}
          </p>
        </div>
        <p className="text-white">{message}</p>

        <div className="flex justify-around">
          <button
            onClick={onTap}
            className="rounded-full w-[520px] h-[520px] text-white mt-[180px] flex justify-around items-center transition duration-0 ease-in-out"
          >
            <img src="/coin.png" alt="" className="hover:h-[498px] hover:w-[498px] active:w-[506px] w-[500px] active:h-[506px] h-[500px] transition-all ease-in-out"/>
          </button>
        </div>

        {progres_charge}
      </main>
    </>
  );
};

export default Home;

import { CgCopyright } from "react-icons/cg";
function Footer() {
  return (
    <div className=" bg-stone-700 flex flex-col items-center justify-around py-10">
      <div className="flex flex-col items-center">
        <p className="text-stone-100 text-2xl">Subscribe to our emails</p>
        <h5 className="text-stone-100 text-xs py-5 p-3">
          Subscribe to our mailing list for insider news, product launches, and
          more!
        </h5>
      </div>
      <div className=" flex items-center py-5">
        <input
          type="text"
          className="w-full px-3 py-2 rounded-md border bg-inherit border-stone-300 focus:outline-none focus:border-stone-50 text-stone-50"
          placeholder="Email"
        />
      </div>
      <div className="pt-7 flex items-center text-stone-50 text-xs ">
        <span className="text-stone-50">
          <CgCopyright />
        </span>
        <h6>Andrianarivo Anthony</h6>
      </div>
    </div>
  );
}

export default Footer;

import { Jb } from "./Jb"

export const Logo = () => {
  return (
    <div className="bg-slate-500 w-full h-[70px] flex justify-center">
      <div className="bg-slate-500 w-[280px] h-[280px] rounded-full translate-y-[-140px] flex justify-center items-end">
        <Jb />
      </div>
    </div>
  )
}

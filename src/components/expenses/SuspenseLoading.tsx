import { Skeleton } from "@/components/ui/skeleton";

const SuspenseLoading = () => {
  return (
    <>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px] bg-slate-800" />
        <Skeleton className="h-4 w-[150px] bg-slate-800" />
      </div>
      <ul className="mt-3 mb-5">
        {[...Array(8)].map((i) => {
          return (
            <li
              className=" hover:border-gray-700 rounded-[20px] cursor-pointer mb-1 text-lg border  p-8 border-gray-800 bg-slate-900  "
              key={i}
            >
              <div className="flex flex-col space-y-4 gap-2">
                <Skeleton className=" w-[200px] rounded-xl bg-slate-800" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[200px] bg-slate-800" />
                  <Skeleton className="h-4 w-[150px] bg-slate-800" />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SuspenseLoading;

import DriveEtaIcon from '@mui/icons-material/DriveEta';

export const OpenGateButton = ({handleSubmit}) => {
  return (
    <button onClick={handleSubmit} className="group relative mt-3  w-full">
    <div
      className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#29ff65] via-[#20c757] to-[#1d8e47] opacity-30 blur-lg transition-all duration-500 group-hover:opacity-70 group-hover:blur-xl"
    ></div>

    <div
      className="relative rounded-lg border border-white/10 bg-gradient-to-b from-gray-900 via-gray-950 to-black px-8 py-4 shadow-xl"
    >
      <div
        className="absolute inset-x-0 top-px h-px bg-gradient-to-r from-transparent via-[#29ff65] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></div>
      <div
        className="absolute inset-x-0 bottom-px h-px bg-gradient-to-r from-transparent via-[#20c757] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></div>

      <div className="relative flex items-center justify-between gap-6 bg-">
        <div className="flex items-center gap-4">
          <div className="relative flex h-12 w-12 items-center justify-center">
            <div
              className="absolute inset-0 rounded-full border border-[#29ff65]/20 border-t-[#29ff65] transition-transform duration-1000 group-hover:rotate-180"
            ></div>
            <div className="absolute inset-[3px] rounded-full bg-gray-950"></div>
            <span className="relative text-sm font-bold text-[#29ff65]"> <DriveEtaIcon fontSize="medium" /></span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white">OPEN GATE</span>
              <div
                className="h-1.5 w-1.5 rounded-full bg-[#20c757] shadow-lg shadow-[#20c757]/50"
              ></div>
            </div>

            <div className="h-1.5 w-32 overflow-hidden rounded-full bg-gray-800">
              <div
                className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#29ff65] to-[#20c757] transition-all duration-300 group-hover:w-full"
              ></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div
            className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[#29ff65]/10"
          >
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 text-[#29ff65]"
            >
              <path
                d="M13 10V3L4 14h7v7l9-11h-7z"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
            <div
              className="absolute inset-0 rounded-lg bg-[#29ff65]/10 blur-sm transition-all duration-300 group-hover:blur-md"
            ></div>
          </div>

  {/*         <span className="text-sm font-semibold text-white">ACTIVATE</span> */}

          <div className="flex gap-1">
            <div
              className="h-2 w-2 rounded-full bg-[#20c757]/40 transition-all duration-300 group-hover:bg-[#20c757]"
            ></div>
            <div
              className="h-2 w-2 rounded-full bg-[#20c757]/40 transition-all duration-300 group-hover:bg-[#20c757] group-hover:delay-75"
            ></div>
            <div
              className="h-2 w-2 rounded-full bg-[#20c757]/40 transition-all duration-300 group-hover:bg-[#20c757] group-hover:delay-150"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </button>
  )
}

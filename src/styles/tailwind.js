/* @import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

  .inputSyle {
    @apply peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50;
  }

  .textStyle {
    @apply peer h-full min-h-[80px] w-full resize-none rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-400 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50;
  }

  .labelStyle {
    @apply before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-sky-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-sky-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-sky-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500;
  } */

export const inputSyle =
  "peer bg-transparent h-full w-full rounded-md px-3 py-2.5 text-gray-400 border border-ring-gray-500 ring-gray-400 focus:ring-sky-600 focus:outline-none placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-400 focus:text-white";

export const textStyle =
  "peer resize-none bg-transparent h-[100px] w-full rounded-md px-3 py-2.5 text-gray-400 border border-ring-gray-500 ring-gray-400 focus:ring-sky-600 focus:outline-none placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-400 focus:text-white";

export const labelStyle =
  "absolute cursor-text left-0 -top-3 text-[11px] text-gray-400 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-[11px] transition-all";
("absolute cursor-text left-0 -top-3 text-[11px] text-gray-400 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-[11px] transition-all");

export const button = "bg-sky-800 rounded-md px-3 pb-1";

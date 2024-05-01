import { IconBox } from "@/components/common";

interface Props{
  inputClassName?: string;
}

export function SearchBox({inputClassName=''}:Props) {
    //TODO should implenet Search Form
    return (
          <form name="search-form" action="#" method="post" className="flex items-center">
                  <input type="text" name="search_text" placeholder={`Search for items`}className={`text-xsmall text-gray-400 border-gray-300 w-full focus:outline-none  ${inputClassName}`} />
                <button type="submit"><IconBox icon={"icon-search"} size={22} /></button>
          </form>
     
      );
}


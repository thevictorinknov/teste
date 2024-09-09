import { useSearchParams } from "react-router-dom";
import { House, Menu } from "lucide-react"
import { useNavigate } from "react-router-dom";

export default function Documentation () {
    const [searchParams, ] = useSearchParams();
    const navigate = useNavigate();

    return (
        <div className="w-full h-svh flex flex-col items-center border">
            <header className="w-[98vw] h-16 flex items-center justify-between px-10 mb-4 border rounded-b-2xl">
                <Menu />
                <h1 className="mb-4 text-center text-3xl  mt-3 font-extrabold leading-none tracking-tight text-slate-800 md:text-3xl">
                    Acervo - {searchParams.get("title")}
                </h1>
                <House className="cursor-pointer" onClick={() => navigate("/")} />
            </header>
            <iframe style={{height: "calc(100vh - 4rem)", width: "98vw", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem"}} className="border rounded-sm"  id="frameDocumentacao" src={searchParams.get("ref")} frameborder="0"></iframe>
        </div>
      );  
      
}
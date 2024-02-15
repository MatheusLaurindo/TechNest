import { useNavigate } from "react-router";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div>
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl text-blue-600 lg:text-6xl">
              404
            </h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-zinc-200 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page{" "}
              Página não encontrada
            </h6>
            <a
              href=""
              onClick={() => navigate("/")}
              className="px-5 py-2 rounded-md mt-5 text-blue-100 bg-blue-600 hover:bg-blue-700"
            >
              Voltar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

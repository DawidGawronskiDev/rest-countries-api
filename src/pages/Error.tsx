import { useRouteError } from "react-router-dom";

interface Error {
  statusText: string;
  message: string;
}

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.log(error);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 max-w-md text-center">
        <h1 className="text-2xl font-bold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="opacity-50">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </main>
  );
}

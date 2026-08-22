// app/(blog)/page.tsx
export default function BlogHomePage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">
        Pagina Principală (Blog)
      </h1>
      <p className="text-lg text-gray-600">
        Aceasta este ruta principală (/), iar stilurile și tema de aici sunt
        izolate de Dashboard.
      </p>
    </div>
  );
}

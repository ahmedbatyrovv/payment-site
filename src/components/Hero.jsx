export default function Hero({ t }) {
  return (
    <div className="text-center pt-10 pb-8 px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
        Töleg Sahypasy
      </h1>
      <p className="text-lg text-green-700 dark:text-green-400 max-w-md mx-auto">
        {t.description || "Töleg görnüşini saýlaň we tölegiňizi geçiriň"}
      </p>
    </div>
  );
}
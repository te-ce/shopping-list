export const Header = () => {
  return (
    <header className="flex max-w-[66vw] flex-col items-center gap-3 text-center">
      <h1 className="font-medium">BlickList</h1>
      <span>
        Die smarte Einkaufsliste{' '}
        <span className="underline-offset-5 underline decoration-lime-300">
          ab 1 Mio. Kalorien Jahresumsatz
        </span>{' '}
        und dem Anspruch auf Exzellenz in Geschmack und Effizienz.
      </span>
    </header>
  );
};

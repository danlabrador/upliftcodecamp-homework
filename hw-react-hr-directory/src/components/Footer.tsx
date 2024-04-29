export function Footer() {
  return (
    <footer data-cy="footer" className="bg-uc-dark-800">
      <div className="flex justify-between mx-4 py-4 px-5 sm:flex-row p-2  text-gray-400">
        <p className="text-sm">
          Made with ❤️ in Uplift Code Camp. &copy; {new Date().getFullYear()} Dan Labrador
        </p>
      </div>
    </footer>
  );
}

const tabs: any = [
  { name: 'Allgemeine Einstellungen', href: '#', current: false },
  { name: 'SEPA-Überweigungsträger', href: '#', current: false },
  { name: 'Persönliche Daten', href: '#', current: true },
  { name: 'Passwort ändern', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className="border-b w-1/2 mx-auto border-gray-200 sm:pb-0">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Candidates
      </h3>
      <div className="mt-3 sm:mt-4">
        <div className="sm:hidden">
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="current-tab"
            name="current-tab"
            className="block w-96 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue={tabs.find((tab: any) => tab.current).name}
          >
            {tabs.map((tab: any) => (
              <option key={tab.name} className="">
                {tab.name}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8 justify-center ">
            {tabs.map((tab: any) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm',
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

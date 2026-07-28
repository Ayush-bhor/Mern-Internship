export default function Contact() {
    return (
        <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-4xl items-center px-4 py-10 sm:px-6 lg:px-8">
            <div className="w-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Contact
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                    A simple contact page.
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                    The styling is kept light and clear so the route feels consistent with the
                    rest of the app.
                </p>
            </div>
        </section>
    );
}

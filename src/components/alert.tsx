export default function Alert({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed inset-x-0 bottom-0 p-4">
            <div className="rounded-lg bg-indigo-600 px-4 py-3 text-white shadow-lg">
                <p className="text-center text-sm font-medium">
                    {children}
                </p>
            </div>
        </div>
    )
}
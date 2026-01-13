
export default function LoadingPage() {
    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="flex flex-col items-center">
                {/* Spinner */}
                <div className="w-12 h-12 border-4 border-gray-300 border-t-primary-500 rounded-full animate-spin"></div>

                {/* Loading text */}
                <p className="mt-4 text-gray-600 text-lg font-medium">
                    Loading, please wait...
                </p>
            </div>
        </section>
    );
}
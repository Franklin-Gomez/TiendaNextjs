import Sidebar from "../components/products/Sidebar";
import ToastNotification from "../components/ui/ToastNotification";

export default function RootLayout({ children  }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
        
            <div className=" container mx-auto md:flex gap-4">
                
                <Sidebar/>

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5 bg-gray-100">

                    {/* se muestra el page.tsx */}
                    { children }

                </main>

                {/* <OrderSummary/> */}

            </div>
    
        </>
    )
}
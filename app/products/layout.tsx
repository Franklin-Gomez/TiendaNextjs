import Sidebar from "../components/products/Sidebar";
import ToastNotification from "../components/ui/ToastNotification";

export default function RootLayout({ children  }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
        
            <div className="md:flex">
                
                <Sidebar/>

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">

                    {/* se muestra el page.tsx */}
                    { children }

                </main>

                {/* <OrderSummary/> */}

            </div>
    
        </>
    )
}
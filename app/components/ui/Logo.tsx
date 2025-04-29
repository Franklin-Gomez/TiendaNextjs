import Image from "next/image"

export default function Logo() {
    return (
        <div className="flex justify-center mt-5">
            
            <div className="relative w-full h-40 rounded-2xl">
                <Image
                    fill
                    alt="Logotipo Tienda"
                    src='/master-race.webp'
                />
            </div>
            
        </div>
    )
}

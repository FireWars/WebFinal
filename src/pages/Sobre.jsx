import Header from "@/Components/header";

export default function Sobre() {
    return (
        <>
            <Header />
            <div className=" flex flex-col items-center">
                <h1 className="text-4xl font-bold">Sobre SpotMusic</h1>
                <p className="text-2xl">Melhores musicas do Brasil e mundo</p>
            </div>
        </>
    )
}
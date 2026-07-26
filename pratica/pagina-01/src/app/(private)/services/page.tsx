import Services from "@/components/Services/Services"
import { Suspense } from "react"
import LoadingServices from "./LoadingServices"

function Page() {
    return (
        <div>
            Serviços

            <div>Le historias</div>
            <div>Rouba</div>
            <div>lEVANTA PESO</div>

            <Suspense fallback={<LoadingServices />}>
                <Services />
            </Suspense>
        </div>
    )
}

export default Page

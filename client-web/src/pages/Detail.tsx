import { GalleryCard } from "../components/Cards/GalleryCard"
import { VehicleInfo } from "../components/Description/VehicleInfo"
import { ReservationModal } from "../components/Modals/ReservationModal"

export const Detail = () => {
    return (
        <div className="max-w-7xl my-4 mx-auto">
            <div>
                <h1 className="text-4xl ml-3">Toyota Yaris</h1>
            </div>
            <GalleryCard />
                <div className="grid grid-cols-3 gap-x-2">
                <VehicleInfo />
                    <ReservationModal />

                </div>
        </div>
    )
}
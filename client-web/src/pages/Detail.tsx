import { IonIcon } from "@ionic/react"
import { GalleryCard } from "../components/Cards/GalleryCard"
import { VehicleInfo } from "../components/Description/VehicleInfo"
import { ReservationModal } from "../components/Modals/ReservationModal"
import { arrowRedoOutline } from "ionicons/icons"
import { ImageSlider } from "../components/Cards/ImageSlider"

export const Detail = () => {
    return (
        <div className="max-w-7xl my-4 mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl ml-3">Toyota Yaris</h1>
                <div className="md:flex hidden items-center mr-3 hover:bg-gray-200 rounded-lg px-2 cursor-pointer delay-75 transition">
                    <IonIcon 
                      icon={arrowRedoOutline}  
                    />
                    <h1 className="mx-1 underline underline-offset-2">Share</h1>
                </div>
            </div>
            {/* web */}
            <GalleryCard />
                {/* mobile */}
                <ImageSlider 
                    src="https://www.alyarentcar.com/images/mobil/avanza.png"
                    alt="doyok"
                />
                <div className="md:block gap-x-2 my-4 grid grid-row-3">
                <VehicleInfo />
                    <ReservationModal />
                </div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
              <div>hah</div>
        </div>
    )
}
import { IonIcon } from "@ionic/react"
import { carOutline, filterOutline } from "ionicons/icons"
import Bike from '../../assets/images/motor.png'

export const Categories = () => {
    return (
        <div className="border-b-2 shadow-sm border-gray-100 py-2 flex justify-center">
            <div className="ml-2 flex items-center text-center divide-gray-400 space-x-10">
                <button className="hover:text-orange-400 ">
                    <IonIcon  
                        icon={filterOutline}
                        className="text-3xl  border-gray-400 px-4" />
                        <h1 className="hover:text-orange-200 text-gray-400">All</h1>
                </button>
                    <button className="hover:text-orange-400">
                        <IonIcon 
                        icon={carOutline}
                        className="text-3xl  text-center" />
                        <h1 className="hover:text-orange-200 text-gray-400">Mobil</h1>
                    </button>
                        <button>
                            <img 
                                src={Bike}
                                className="w-9"
                                alt="" />
                            <h1 className="text-gray-400">Motor</h1>
                        </button>
            </div>
        </div>
    )
}
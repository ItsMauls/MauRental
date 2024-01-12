import { IonIcon } from "@ionic/react"
import { personRemoveOutline, peopleOutline, gitMergeOutline, trashBinOutline } from "ionicons/icons"

export const VehicleInfo = () => {
    return (
        <div className="bg-gray-200 md:float-start md:w-1/2 mx-auto my-4 rounded-lg md:ml-4">
            <div className="grid grid-cols-2 p-3 gap-4">
                <div className="flex items-center">
                    <IonIcon 
                        icon={peopleOutline}/>
                        <h2 className="ml-2">5 seats</h2>
                </div>
                    <div className="flex items-center">
                        <IonIcon 
                            icon={gitMergeOutline}/>
                            <h2 className="ml-2">Manual</h2>
                    </div>
                        <div className="flex items-center">
                            <IonIcon 
                                icon={personRemoveOutline}/>
                                <h2 className="ml-2">Tidak Include Supir</h2>
                        </div>
                            <div className="flex items-center">
                                <IonIcon 
                                    icon={trashBinOutline}/>
                                    <h2 className="ml-2">Tidak Include BBM</h2>
                            </div>                
            </div>
        </div>
    )
}
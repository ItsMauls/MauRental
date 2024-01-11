export const GalleryCard = () => {
    return (
        <div className="container my-4 w-full mx-auto p-4">
            <div className="grid grid-cols-3 gap-4 ">
                <div 
                    className="row-span-2 col-span-2">
                    <img 
                        src="https://asset.kompas.com/crops/d7kwOv3dbkOBZGqeBcwhJJWg72o=/88x144:1186x876/1200x800/data/photo/2021/11/16/619292f1d0773.jpeg"
                        alt=""  
                        className="rounded-lg"   
                        />
                </div>
                    <div>
                        <img 
                            src="https://asset.kompas.com/crops/d7kwOv3dbkOBZGqeBcwhJJWg72o=/88x144:1186x876/1200x800/data/photo/2021/11/16/619292f1d0773.jpeg"
                            className=""   
                            alt="" />
                    </div>
                        <div>
                            <img 
                            className=""   
                                src="https://asset.kompas.com/crops/d7kwOv3dbkOBZGqeBcwhJJWg72o=/88x144:1186x876/1200x800/data/photo/2021/11/16/619292f1d0773.jpeg"
                                alt="" />
                        </div>
            </div>
        </div>
    )
}
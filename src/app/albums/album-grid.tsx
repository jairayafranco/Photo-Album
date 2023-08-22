import CloudinaryImage from "../_components/cloudinary-image";
import ImageGrid from "../_components/image-grid";
import { SearchResult } from "../gallery/page";

export default function AlbumGrid(
    { images }: { images: SearchResult[] }
) {
    return (
        <ImageGrid
            images={images}
            getImage={(imageData) => {
                return (
                    <CloudinaryImage
                        key={imageData.public_id}
                        image_data={imageData}
                        width="400"
                        height="300"
                        sizes="100vw"
                        alt="Description of my image"
                    />
                )
            }}
        />
    );
}

import cloudinary from "cloudinary";
import CloudinaryImage from "../gallery/cloudinary-image";
import { SearchResult } from "../gallery/page";
import ForceRefresh from "../components/force-refresh";

export default async function FavoritePage() {
    const results = (await cloudinary.v2.search
        .expression('resource_type:image AND tags=favorite')
        .sort_by('created_at', 'desc')
        .with_field('tags')
        .max_results(30)
        .execute()) as { resources: SearchResult[] }

    return (
        <section>
            <ForceRefresh />

            <div className="flex flex-col gap-8 p-4">
                <div className="flex justify-between mt-4">
                    <h1 className="text-4xl font-bold text-white">Favorite Images</h1>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {results.resources.map((result) => (
                        <CloudinaryImage
                            key={result.public_id}
                            image_data={result}
                            width="400"
                            height="300"
                            sizes="100vw"
                            alt="Description of my image"
                            path="/favorites"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
